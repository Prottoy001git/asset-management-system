import React from "react";

const Dashboard = () => {
  // Static summary data
  const summary = {
    totalAssets: 120,
    assignedAssets: 75,
    totalUsers: 25,
    totalDepartments: 5,
    pendingRequisitions: 8,
    completedMaintenance: 18,
  };

  // Static recent activity
  const recentRequisitions = [
    { id: 101, employee: "John Doe", item: "MacBook Pro", status: "Pending" },
    { id: 102, employee: "Jane Smith", item: "Office Chair", status: "Approved" },
    { id: 103, employee: "Michael Johnson", item: "Toyota Corolla", status: "Rejected" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">📊 Dashboard</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        {[
          { label: "Total Assets", value: summary.totalAssets, color: "info" },
          { label: "Assigned Assets", value: summary.assignedAssets, color: "success" },
          { label: "Total Users", value: summary.totalUsers, color: "info" },
          { label: "Departments", value: summary.totalDepartments, color: "warning" },
          { label: "Pending Requisitions", value: summary.pendingRequisitions, color: "danger" },
          { label: "Completed Maintenance", value: summary.completedMaintenance, color: "success" },
        ].map((card, idx) => (
          <div className="col-md-2 mb-3" key={idx}>
            <div className={`card text-center shadow-sm text-${card.textDark ? "dark" : "white"} bg-${card.color}`}>
              <div className="card-body">
                <h6 className="card-title">{card.label}</h6>
                <h4>{card.value}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Requisitions Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">📝 Recent Requisitions</h5>
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRequisitions.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.employee}</td>
                  <td>{req.item}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;