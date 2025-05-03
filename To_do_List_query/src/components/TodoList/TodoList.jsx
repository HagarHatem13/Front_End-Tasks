
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./styles.css";

// Simple unique ID generator
const uniqueId = () => `todo-${Math.random().toString(36).slice(2, 9)}`;

export default function TodoList() {
  const todoRef = useRef(null);

  useEffect(() => {
    const $todoApp = $(todoRef.current);

    // Add todo
    $todoApp.on("click", "[data-action='add']", function () {
      const $input = $todoApp.find("[data-role='input']");
      const text = $input.val().trim();

      if (text) {
        const todoId = uniqueId();
        const $list = $todoApp.find("[data-role='list']");

        $list.append(`
          <li data-id="${todoId}">
            <span class="todo-text">${$("<div>").text(text).html()}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </li>
        `);

        $input.val("");
      }
    });

    // Delete todo
    $todoApp.on("click", ".delete-btn", function () {
      $(this).closest("li").remove();
    });

    // Edit todo
    $todoApp.on("click", ".edit-btn", function () {
      const $li = $(this).closest("li");
      const $text = $li.find(".todo-text");
      const currentText = $text.text();

      $text.html(`
        <input type="text" class="edit-input" value="${$("<div>").text(currentText).html()}">
        <button class="save-btn">Save</button>
      `);

      $li.find(".edit-btn, .delete-btn").hide();
    });

    // Save edited todo
    $todoApp.on("click", ".save-btn", function () {
      const $li = $(this).closest("li");
      const newText = $li.find(".edit-input").val().trim();

      if (newText) {
        $li.find(".todo-text").text(newText);
        $li.find(".edit-btn, .delete-btn").show();
      }
    });

    return () => {
      $todoApp.off();
    };
  }, []);

  return (
    <div ref={todoRef} className="todo-container">
      <h2>jQuery Todo List</h2>
      <div>
        <input type="text" data-role="input" placeholder="Enter a new todo" />
        <button data-action="add">Add Todo</button>
      </div>
      <ul className="todo-list" data-role="list"></ul>
    </div>
  );
}
