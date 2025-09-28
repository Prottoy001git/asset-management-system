import React, { useState } from "react";

const UserManagement = () => {
  // Sample static users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Employee" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", role: "Admin" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">👥 User Management</h2>

      {/* Add New User Button */}
      <button className="btn btn-primary mb-3">
        <i className="bi bi-plus-circle me-1"></i> Add New User
      </button>

      {/* Users Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          {users.length === 0 ? (
            <p className="text-muted">No users found.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-info me-1">
                        <i className="bi bi-eye"></i> Details
                      </button>
                      <button className="btn btn-sm btn-warning me-1">
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;