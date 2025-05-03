import { List, Typography, Box, Stack } from "@mui/material";
import ContactItem from "./ContactItem";
import { PersonOff } from "@mui/icons-material";

const ContactList = ({ contacts, onEdit, onDelete, onSendEmail }) => {
  if (contacts.length === 0) {
    return (
      <Box
        sx={{
          mt: 4,
          p: 3,
          textAlign: "center",
          bgcolor: "background.default",
          borderRadius: 2,
          border: "1px dashed",
          borderColor: "divider",
        }}
      >
        <PersonOff color="disabled" fontSize="large" sx={{ mb: 1 }} />
        <Typography variant="body1" color="text.secondary">
          No contacts found. Add one to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: "100%", mt: 2 }}>
      <Stack spacing={1.5}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
            onSendEmail={onSendEmail}
          />
        ))}
      </Stack>
    </List>
  );
};

export default ContactList;
