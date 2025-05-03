import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { Send, Cancel, Save } from "@mui/icons-material";

const ContactForm = ({ contact, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name || "",
        email: contact.email || "",
        message: contact.message || "",
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 2 }}
    >
      <Typography variant="h6" gutterBottom>
        {contact ? "Edit Contact" : "Add New Contact"}
      </Typography>

      <TextField
        margin="normal"
        fullWidth
        required
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        margin="normal"
        fullWidth
        required
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        margin="normal"
        fullWidth
        required
        multiline
        rows={4}
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
      />

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          startIcon={contact ? <Save /> : <Send />}
        >
          {contact ? "Update" : "Submit"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel} startIcon={<Cancel />}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;

