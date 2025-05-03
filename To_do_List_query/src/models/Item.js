// src/models/Item.js
export class Item {
  constructor(id = Item.generateId(), name = "", description = "") {
    this.id = id;
    this.name = name.trim();
    this.description = description.trim();
    this.createdAt = new Date();
  }

  static generateId() {
    return `item-${Math.random().toString(36).substr(2, 9)}`;
  }

  update(newName, newDescription) {
    if (!newName || !newDescription) {
      throw new Error("Name and description are required.");
    }
    this.name = newName.trim();
    this.description = newDescription.trim();
  }

  getInfo() {
    return `${this.name}: ${this.description}`;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

