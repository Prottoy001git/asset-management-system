const MaintenanceLogs = () => {
  const logs = [
    {
      id: 1,
      asset_name: "Dell Laptop - SN12345",
      maintenance_date: "2023-08-10",
      performed_by: "Tech John",
      status: "Completed",
      remarks: "Replaced battery",
    },
    {
      id: 2,
      asset_name: "Toyota Corolla - Car001",
      maintenance_date: "2023-11-05",
      performed_by: "Garage Team",
      status: "Scheduled",
      remarks: "Oil change",
    },
    {
      id: 3,
      asset_name: "HP Printer - PR789",
      maintenance_date: "2023-10-01",
      performed_by: "Tech Mike",
      status: "Completed",
      remarks: "Replaced ink cartridge",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">🛠 Maintenance Logs</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          {logs.length === 0 ? (
            <p className="text-muted">No maintenance records found.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Asset Name</th>
                  <th>Maintenance Date</th>
                  <th>Performed By</th>
                  <th>Status</th>
                  <th>Remarks</th>
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
                            : "bg-secondary"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                    <td>{log.remarks}</td>
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

export default MaintenanceLogs;