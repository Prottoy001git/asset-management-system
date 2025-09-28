import React, { useState } from "react";

const Departments = () => {
  // Sample static departments
  const [departments, setDepartments] = useState([
    { id: 1, name: "IT Department"},
    { id: 2, name: "HR Department"},
    { id: 3, name: "Finance Department"},
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      setDepartments(departments.filter((dept) => dept.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">🏢 Departments</h2>

      {/* Add New Department Button */}
      <button className="btn btn-primary mb-3">
        <i className="bi bi-plus-circle me-1"></i> Add New Department
      </button>

      {/* Departments Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          {departments.length === 0 ? (
            <p className="text-muted">No departments found.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Department Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.id}>
                    <td>{dept.id}</td>
                    <td>{dept.name}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-warning me-1">
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(dept.id)}
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

export default Departments;