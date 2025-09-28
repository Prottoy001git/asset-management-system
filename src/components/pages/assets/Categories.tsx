const Categories = () => {
  // Static sample data
  const categories = [
    { id: 1, name: "IT Equipment", description: "Laptops, desktops, printers, and other IT-related devices." },
    { id: 2, name: "Vehicles", description: "Company cars, trucks, and motorbikes." },
    { id: 3, name: "Furniture", description: "Office desks, chairs, cabinets, and related items." },
  ];

  return (
    <div className="container mt-4">
      {/* Header + Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Manage Categories</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-1"></i> Add New Category
        </button>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>{cat.description}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-success me-2">
                      <i className="bi bi-pencil-square"></i> Edit
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

export default Categories;