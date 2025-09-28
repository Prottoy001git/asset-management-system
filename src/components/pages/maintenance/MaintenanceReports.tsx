import React from "react";

const MaintenanceReports = () => {
  // Static summary metrics
  const summary = {
    total: 15,
    completed: 8,
    scheduled: 5,
    overdue: 2,
    assetsUnderMaintenance: 6,
  };

  // Static maintenance logs
  const logs = [
    {
      id: 1,
      asset_name: "Dell Laptop - SN12345",
      maintenance_date: "2023-08-10",
      performed_by: "Tech John",
      status: "Completed",
      remarks: "Replaced battery",
      next_due_date: "2024-08-10",
    },
    {
      id: 2,
      asset_name: "Toyota Corolla - Car001",
      maintenance_date: "2023-11-05",
      performed_by: "Garage Team",
      status: "Scheduled",
      remarks: "Oil change",
      next_due_date: "2024-05-05",
    },
    {
      id: 3,
      asset_name: "HP Printer - PR789",
      maintenance_date: "2023-10-01",
      performed_by: "Tech Mike",
      status: "Overdue",
      remarks: "Replaced ink cartridge",
      next_due_date: "2024-01-01",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">🛠 Maintenance Reports</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        {[
          { label: "Total Activities", value: summary.total, color: "primary" },
          { label: "Completed", value: summary.completed, color: "success" },
          { label: "Scheduled", value: summary.scheduled, color: "warning", textDark: true },
          { label: "Overdue", value: summary.overdue, color: "danger" },
          { label: "Assets Under Maintenance", value: summary.assetsUnderMaintenance, color: "info" },
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

      {/* Maintenance Logs Table */}
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title mb-3">Detailed Maintenance Logs</h5>
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Asset Name</th>
                <th>Maintenance Date</th>
                <th>Performed By</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Next Due Date</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.asset_name}</td>
                  <td>{log.maintenance_date}</td>
                  <td>{log.performed_by}</td>
                  <td>
                    <span
                      className={`badge ${
                        log.status === "Completed"
                          ? "bg-success"
                          : log.status === "Scheduled"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td>{log.remarks}</td>
                  <td>{log.next_due_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export / Print Buttons */}
      <div className="d-flex gap-2">
        <button className="btn btn-primary">
          <i className="bi bi-printer me-1"></i> Print
        </button>
      </div>
    </div>
  );
};

export default MaintenanceReports;