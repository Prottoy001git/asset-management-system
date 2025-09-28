const MyAssets = () => {
  // Static data (assets assigned to current user)
  const myAssets = [
    {
      id: 1,
      name: "Dell Laptop - SN12345",
      category: "IT Equipment",
      assignmentDate: "2023-07-15",
      returnDate: "2024-07-15",
      status: "In Use",
    },
    {
      id: 2,
      name: "HP Printer - PR789",
      category: "IT Equipment",
      assignmentDate: "2023-11-01",
      returnDate: "2024-02-01",
      status: "In Use",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">💼 My Assets</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          {myAssets.length === 0 ? (
            <p className="text-muted">No assets assigned to you.</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Asset Name</th>
                  <th>Category</th>
                  <th>Assignment Date</th>
                  <th>Return Date</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td>{asset.id}</td>
                    <td>{asset.name}</td>
                    <td>{asset.category}</td>
                    <td>{asset.assignmentDate}</td>
                    <td>{asset.returnDate}</td>
                    <td>{asset.status}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-warning">
                        <i className="bi bi-arrow-return-left"></i> Request Return
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

export default MyAssets;