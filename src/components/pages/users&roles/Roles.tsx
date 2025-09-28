import { useState } from "react";

const Roles = () => {
  // Sample static roles
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin"},
    { id: 2, name: "Manager"},
    { id: 3, name: "Employee"},
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">🛡 Roles Management</h2>

      {/* Add New Role Button */}
      <button className="btn btn-primary mb-3">
        <i className="bi bi-plus-circle me-1"></i> Add New Role
      </button>

      {/* Roles Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          {roles.length === 0 ? (
            <p className="text-muted">No roles found.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Role Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-warning me-1">
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(role.id)}
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

export default Roles;