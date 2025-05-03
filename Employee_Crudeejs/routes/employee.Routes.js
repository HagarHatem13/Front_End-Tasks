const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee.Model.js");


const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  res.render("index", {
    title: "Employee Directory",
    employees
  });
}));


router.get("/new", (req, res) => {
  res.render("form", { title: "Add New Employee" });
});


router.post("/", asyncHandler(async (req, res) => {
  await Employee.create(req.body);
  res.redirect("/");
}));

router.get("/edit/:id", asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.render("edit", {
    title: `Edit Employee - ${employee.name}`,
    employee
  });
}));


router.post("/update/:id", asyncHandler(async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.redirect("/");
}));


router.delete("/delete/:id", asyncHandler(async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/");
}));

module.exports = router;
