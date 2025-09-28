import { useState } from "react";

const Approvals = () => {
  // Sample requisitions from multiple employees
  const [requisitions, setRequisitions] = useState([
    {
      id: 1,
      employee: "John Doe",
      item: "MacBook Pro",
      category: "IT Equipment",
      requestDate: "2023-12-10",
      status: "Pending",
      remarks: "For new project work",
    },
    {
      id: 2,
      employee: "Jane Smith",
      item: "Office Chair",
      category: "Furniture",
      requestDate: "2023-11-05",
      status: "Approved",
      remarks: "Ergonomic chair requested",
    },
    {
      id: 3,
      employee: "Michael Johnson",
      item: "Toyota Corolla",
      category: "Vehicles",
      requestDate: "2023-09-15",
      status: "Pending",
      remarks: "Project field work",
    },
  ]);

  // Handle approve/reject
  const handleDecision = (id, decision) => {
    setRequisitions(
      requisitions.map((req) =>
        req.id === id ? { ...req, status: decision } : req
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">✅ Requisition Approvals</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          {requisitions.length === 0 ? (
            <p className="text-muted">No requisitions found.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Request Date</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((req) => (
                  <tr key={req.id}>
                    <td>{req.id}</td>
                    <td>{req.employee}</td>
                    <td>{req.item}</td>
                    <td>{req.category}</td>
                    <td>{req.requestDate}</td>
                    <td>{req.remarks}</td>
                    <td>
                      <span
                        className={`badge ${
                          req.status === "Approved"
                            ? "bg-success"
                            : req.status === "Rejected"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="text-center">
                      {req.status === "Pending" ? (
                        <>
                          <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => handleDecision(req.id, "Approved")}
                          >
                            <i className="bi bi-check-circle me-1"></i> Approve
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDecision(req.id, "Rejected")}
                          >
                            <i className="bi bi-x-circle me-1"></i> Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-muted">N/A</span>
                      )}
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

export default Approvals;