const AssignAssets = () => {
  // Sample static data for dropdowns
  const assets = [
    { id: 1, name: "Dell Laptop - SN12345" },
    { id: 2, name: "Toyota Corolla - Car001" },
    { id: 3, name: "HP Printer - PR789" },
  ];

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">📝 Assign Asset</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form>
            {/* Select Asset */}
            <div className="mb-3">
              <label className="form-label">Select Asset</label>
              <select className="form-select">
                <option value="">-- Choose Asset --</option>
                {assets.map((asset) => (
                  <option key={asset.id} value={asset.id}>
                    {asset.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Select User */}
            <div className="mb-3">
              <label className="form-label">Assign To (User)</label>
              <select className="form-select">
                <option value="">-- Choose User --</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Assignment Date */}
            <div className="mb-3">
              <label className="form-label">Assignment Date</label>
              <input type="date" className="form-control" />
            </div>

            {/* Return Date (Optional) */}
            <div className="mb-3">
              <label className="form-label">Expected Return Date</label>
              <input type="date" className="form-control" />
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Notes</label>
              <textarea className="form-control" rows="3" placeholder="Any additional notes..."></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-circle me-1"></i> Assign Asset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignAssets;