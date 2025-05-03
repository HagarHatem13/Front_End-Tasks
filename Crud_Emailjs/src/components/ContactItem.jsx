import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Delete, Edit, Email } from "@mui/icons-material";

const ContactItem = ({ contact, onEdit, onDelete, onSendEmail }) => {
  return (
    <ListItem
      divider
      sx={{
        px: 2,
        py: 1.5,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        mb: 1,
      }}
    >
      <ListItemText
        primary={
          <Typography variant="subtitle1" fontWeight={600}>
            {contact.name}
          </Typography>
        }
        secondary={
          <Box>
            <Typography variant="body2" color="text.secondary">
              {contact.email}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {contact.message}
            </Typography>
          </Box>
        }
      />
      <ListItemSecondaryAction>
        <Stack direction="row" spacing={1}>
          <IconButton
            edge="end"
            color="primary"
            aria-label={`send email to ${contact.name}`}
            onClick={() => onSendEmail(contact)}
          >
            <Email />
          </IconButton>
          <IconButton
            edge="end"
            color="secondary"
            aria-label={`edit ${contact.name}`}
            onClick={() => onEdit(contact)}
          >
            <Edit />
          </IconButton>
          <IconButton
            edge="end"
            color="error"
            aria-label={`delete ${contact.name}`}
            onClick={() => onDelete(contact.id)}
          >
            <Delete />
          </IconButton>
        </Stack>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactItem;

