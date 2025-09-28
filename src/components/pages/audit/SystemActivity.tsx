import React from "react";

const SystemActivity = () => {
  // Static sample audit logs
  const logs = [
    {
      log_id: 1,
      user_name: "John Doe",
      action: "Added new asset",
      table_name: "assets",
      record_id: 101,
      details: "Dell Laptop SN12345 added to IT Equipment",
      timestamp: "2023-09-01 10:15:00",
    },
    {
      log_id: 2,
      user_name: "Jane Smith",
      action: "Approved requisition",
      table_name: "asset_requests",
      record_id: 12,
      details: "MacBook Pro request approved",
      timestamp: "2023-09-02 14:22:00",
    },
    {
      log_id: 3,
      user_name: "Michael Johnson",
      action: "Deleted user",
      table_name: "users",
      record_id: 5,
      details: "Employee user deleted",
      timestamp: "2023-09-03 09:40:00",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">📋 Audit Logs Report</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          {logs.length === 0 ? (
            <p className="text-muted">No audit logs available.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Log ID</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Table Name</th>
                  <th>Record ID</th>
                  <th>Details</th>
                  <th>Logged at</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.log_id}>
                    <td>{log.log_id}</td>
                    <td>{log.user_name}</td>
                    <td>{log.action}</td>
                    <td>{log.table_name}</td>
                    <td>{log.record_id}</td>
                    <td>{log.details}</td>
                    <td>{log.timestamp}</td>
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

export default SystemActivity;