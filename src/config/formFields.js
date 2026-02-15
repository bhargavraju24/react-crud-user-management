// This file contains all form field configurations
// If you want to add new fields in future,
// just add them here — no need to change form logic

const userFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true
  }
];

export default userFields;
