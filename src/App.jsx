import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import  getUsers  from "./services/api.js";
import  addUser  from "./services/api.js";
import  updateUser  from "./services/api.js";
import  deleteUser  from "./services/api.js";
import "./style.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await addUser(data);
    }
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container">
      

         {/* Header */}
      <header className="header">
        <h2>User Management System</h2>
      </header>

      <UserForm
        onSubmit={handleSubmit}
        editingUser={editingUser}
      />

      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDelete}
      />
       {/* Footer */}
      <footer className="footer">
        <p>© 2025 User Management App</p>
      </footer>
    </div>
  );
}

export default App;
