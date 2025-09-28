import React, { useState } from "react";

const MyRequisitions = () => {
  // Sample initial requisitions
  const [requisitions, setRequisitions] = useState([
    {
      id: 1,
      item: "MacBook Pro",
      category: "IT Equipment",
      requestDate: "2023-12-10",
      status: "Pending",
      remarks: "For new project work",
    },
    {
      id: 2,
      item: "Office Chair",
      category: "Furniture",
      requestDate: "2023-11-05",
      status: "Approved",
      remarks: "Ergonomic chair requested",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [remarks, setRemarks] = useState("");

  const assets = [
    { id: 1, name: "MacBook Pro", category: "IT Equipment" },
    { id: 2, name: "Office Chair", category: "Furniture" },
    { id: 3, name: "Toyota Corolla", category: "Vehicles" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAsset) return;

    const asset = assets.find((a) => a.id.toString() === selectedAsset);
    const newReq = {
      id: requisitions.length + 1,
      item: asset.name,
      category: asset.category,
      requestDate: new Date().toISOString().split("T")[0],
      status: "Pending",
      remarks: remarks,
    };

    setRequisitions([newReq, ...requisitions]);
    setSelectedAsset("");
    setRemarks("");
    setShowForm(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">📌 My Requisitions</h2>

      {/* Toggle Request Form */}
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(!showForm)}
      >
        <i className="bi bi-plus-circle me-1"></i> Request New Asset
      </button>

      {showForm && (
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Select Asset</label>
                <select
                  className="form-select"
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  required
                >
                  <option value="">-- Choose an Asset --</option>
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.id}>
                      {asset.name} ({asset.category})
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Remarks (Optional)</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Reason for request..."
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                <i className="bi bi-send me-1"></i> Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Requisitions Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          {requisitions.length === 0 ? (
            <p className="text-muted">You have not made any requisitions yet.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Request Date</th>
                  <th>Status</th>
                  <th>Remarks</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((req) => (
                  <tr key={req.id}>
                    <td>{req.id}</td>
                    <td>{req.item}</td>
                    <td>{req.category}</td>
                    <td>{req.requestDate}</td>
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
                    <td>{req.remarks}</td>
                    <td className="text-center">
                      {req.status === "Pending" ? (
                        <button className="btn btn-sm btn-danger">
                          <i className="bi bi-x-circle"></i> Cancel
                        </button>
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

export default MyRequisitions;