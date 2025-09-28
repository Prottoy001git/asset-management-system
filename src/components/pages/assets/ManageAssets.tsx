const ManageAssets = () => {
  // Static sample data
  const assets = [
    { id: 1, name: "Dell Laptop", category: "IT Equipment", status: "Active"},
    { id: 2, name: "Toyota Hilux", category: "Vehicle", status: "Maintenance"},
    { id: 3, name: "Office Chair", category: "Furniture", status: "Active"},
  ];

  return (
    <div className="container mt-4">
      {/* Header + Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Manage Assets</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-1"></i> Add New Asset
        </button>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td>{asset.id}</td>
                  <td>{asset.name}</td>
                  <td>{asset.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        asset.status === "Active" ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {asset.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-success me-2">
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button className="btn btn-sm btn-warning me-2">
                      <i className="bi bi-info-circle"></i> Details
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="bi bi-trash"></i> Delete
                    </button>
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

export default ManageAssets;