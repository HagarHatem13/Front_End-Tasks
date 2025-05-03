import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from "./services/contactService";
import { sendEmail } from "./services/emailService";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleSaveContact = async (contactData) => {
    try {
      if (editingContact) {
        await updateContact(editingContact.id, contactData);
        showMessage("Contact updated successfully!");
      } else {
        await addContact(contactData);
        showMessage("Contact added successfully!");
      }
      closeForm();
      loadContacts();
    } catch (err) {
      showMessage("Failed to save contact.", "error");
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      showMessage("Contact deleted.");
      loadContacts();
    } catch {
      showMessage("Failed to delete contact.", "error");
    }
  };

  const handleSendEmail = async (contact) => {
    try {
      await sendEmail({
        to_name: contact.name,
        to_email: contact.email,
        message: contact.message,
        from_name: "Your App Name",
      });
      showMessage("Email sent successfully!");
    } catch (error) {
      console.error("Email failed:", error);
      showMessage("Failed to send email.", "error");
    }
  };

  const closeForm = () => {
    setEditingContact(null);
    setShowForm(false);
  };

  const showMessage = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Manager 
        </Typography>

        <Button
          variant="contained"
          onClick={() => setShowForm(true)}
          sx={{ mb: 3 }}
        >
          {editingContact ? "Edit Contact" : "Add Contact"}
        </Button>

        <ContactList
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSendEmail={handleSendEmail}
        />

        
        <Dialog open={showForm} onClose={closeForm} fullWidth maxWidth="sm">
          <DialogTitle>
            {editingContact ? "Edit Contact" : "New Contact"}
          </DialogTitle>
          <DialogContent>
            <ContactForm
              contact={editingContact}
              onSubmit={handleSaveContact}
              onCancel={closeForm}
            />
          </DialogContent>
        </Dialog>

     
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert severity={snackbar.severity} variant="filled">
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default App;

