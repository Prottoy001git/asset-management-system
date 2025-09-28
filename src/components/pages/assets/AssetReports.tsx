const AssetReports = () => {
  // Static data
  const stats = {
    total: 120,
    inUse: 85,
    available: 25,
    maintenance: 10,
    value: "$350,000",
  };

  const assets = [
    { id: 1, name: "Dell Laptop", category: "IT Equipment", assignedTo: "John Doe", status: "In Use", purchaseDate: "2023-05-10", value: "$1,200" },
    { id: 2, name: "Toyota Corolla", category: "Vehicles", assignedTo: "Jane Smith", status: "In Use", purchaseDate: "2022-03-15", value: "$20,000" },
    { id: 3, name: "Office Chair", category: "Furniture", assignedTo: "-", status: "Available", purchaseDate: "2023-08-01", value: "$150" },
    { id: 4, name: "HP Printer", category: "IT Equipment", assignedTo: "-", status: "Maintenance", purchaseDate: "2021-11-20", value: "$500" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">📊 Asset Report</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Total Assets</h6>
              <h4>{stats.total}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">In Use</h6>
              <h4>{stats.inUse}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Available</h6>
              <h4>{stats.available}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Maintenance</h6>
              <h4>{stats.maintenance}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Total Value</h6>
              <h4>{stats.value}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Detailed Asset List</h5>
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Asset Name</th>
                <th>Category</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Purchase Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td>{asset.id}</td>
                  <td>{asset.name}</td>
                  <td>{asset.category}</td>
                  <td>{asset.assignedTo}</td>
                  <td>{asset.status}</td>
                  <td>{asset.purchaseDate}</td>
                  <td>{asset.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-primary">
          <i className="bi bi-printer me-1"></i> Print
        </button>
      </div>
    </div>
  );
};

export default AssetReports;