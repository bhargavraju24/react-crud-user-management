import  {useState, useEffect } from "react";
import userFields from "../config/formFields.js";



function UserForm({ onSubmit, editingUser }) {

  // This state stores all form input values
  const [formData, setFormData] = useState({});

  // This runs when editingUser changes
  // If editing → fill form with existing data
  // If not editing → clear form
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);   // Load selected user data
    } else {
      setFormData({});            // Reset form
    }
  }, [editingUser]);

  // This runs whenever user types in input
  const handleChange = (e) => {
    setFormData({
      ...formData,               // keep existing values
      [e.target.name]: e.target.value  // update changed field
    });
  };

  // This runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // ✅ 1. Required field validation
    for (let field of userFields) {
      if (field.required && !formData[field.name]) {
        alert(`${field.label} is required`);
        return;  // Stop submission if empty
      }
    }

    // ✅ 2. Email validation (only if email exists)
    if (formData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        alert("Invalid email format");
        return;
      }
    }

    // ✅ 3. Phone validation (10 digits)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    // If everything is valid → send data to parent (App.jsx)
    onSubmit(formData);

    // Clear form after submission
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>{editingUser ? "Update User" : "Add User"}</h3>

      {/* Loop through config fields and create inputs dynamically */}
      {userFields.map((field) => (
        <div key={field.name} className="input-group">
          <label>{field.label}</label>

          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit">
        {editingUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;
