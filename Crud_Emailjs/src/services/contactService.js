
class ContactService {
  constructor() {
    this.contacts = new Map([
      [1, { id: 1, name: "John Wick", email: "wick@example.com", message: "Hello there!" }],
      [2, { id: 2, name: "Tom Hardy", email: "tom@example.com", message: "How are you?" }],
    ]);
    this.nextId = 3;
  }

  getAllContacts() {
    return Promise.resolve([...this.contacts.values()]);
  }

  addContact({ name, email, message }) {
    if (!name || !email || !message) {
      return Promise.reject(new Error("All fields (name, email, message) are required."));
    }

    const newContact = {
      id: this.nextId++,
      name,
      email,
      message,
    };

    this.contacts.set(newContact.id, newContact);
    return Promise.resolve(newContact);
  }

  updateContact(id, updatedData) {
    if (!this.contacts.has(id)) {
      return Promise.reject(new Error(`Contact with ID ${id} not found.`));
    }

    const existing = this.contacts.get(id);
    const updatedContact = { ...existing, ...updatedData, id };
    this.contacts.set(id, updatedContact);
    return Promise.resolve(updatedContact);
  }

  deleteContact(id) {
    if (!this.contacts.has(id)) {
      return Promise.reject(new Error(`Contact with ID ${id} does not exist.`));
    }

    this.contacts.delete(id);
    return Promise.resolve({ success: true });
  }
}

export const contactService = new ContactService();
