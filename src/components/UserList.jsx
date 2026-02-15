// UserList component receives 3 props from App.jsx
// users → array of all users
// onEdit → function to handle edit action
// onDelete → function to handle delete action

function UserList({ users, onEdit, onDelete }) {

  return (
    <div className="list">
      <h3>User List</h3>

      {/* Loop through users array and display each user */}
      {users.map((user) => (

        // key is required in React when rendering lists
        <div key={user.id} className="card">

          {/* Display user full name */}
          <p>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </p>

          {/* Display user email */}
          <p>{user.email}</p>

          {/* Display user phone */}
          <p>{user.phone}</p>

          {/* 
            When Edit button is clicked:
            onEdit(user) is called.
            This function actually comes from App.jsx.
            It sets the selected user as editingUser.
          */}
          <button onClick={() => onEdit(user)}>
            Edit
          </button>

          {/*
            When Delete button is clicked:
            onDelete(user.id) is called.
            This function also comes from App.jsx.
            It deletes user from API and refreshes list.
          */}
          <button onClick={() => onDelete(user.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default UserList;
