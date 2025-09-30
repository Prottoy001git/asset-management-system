import React, { useState } from 'react';

const mockRequests = [
  {
    id: 1,
    requester: 'Alice',
    asset: 'Asset-1001',
    provider: 'ABC Repairs Co.',
    issue: 'AC not cooling',
    priority: 'High',
    status: 'Pending',
    date: '2025-09-28',
  },
  {
    id: 2,
    requester: 'Bob',
    asset: 'Asset-1002',
    provider: 'XYZ Facility Services',
    issue: 'Elevator stuck on 2nd floor',
    priority: 'Medium',
    status: 'In Progress',
    date: '2025-09-29',
  },
  {
    id: 3,
    requester: 'Charlie',
    asset: 'Asset-1003',
    provider: 'Internal Maintenance Team',
    issue: 'Server overheating',
    priority: 'High',
    status: 'Resolved',
    date: '2025-09-27',
  },
];

const RequestHandling = () => {
  const [requests, setRequests] = useState(mockRequests);
  const [filter, setFilter] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  const filteredRequests = filter === 'All'
    ? requests
    : requests.filter((req) => req.status === filter);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Maintenance Requests</h2>

      <div className="mb-3">
        <label className="form-label me-2">Filter by status:</label>
        <select
          className="form-select w-auto d-inline-block"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      <table className="table table-bordered table-striped align-middle">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Requester</th>
            <th>Asset</th>
            <th>Provider</th>
            <th>Issue</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center">No requests found</td>
            </tr>
          ) : (
            filteredRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.requester}</td>
                <td>{req.asset}</td>
                <td>{req.provider}</td>
                <td>{req.issue}</td>
                <td>
                  <span
                    className={`badge bg-${
                      req.priority === 'High'
                        ? 'danger'
                        : req.priority === 'Medium'
                        ? 'warning'
                        : 'secondary'
                    }`}
                  >
                    {req.priority}
                  </span>
                </td>
                <td>{req.date}</td>
                <td>
                  <span
                    className={`badge bg-${
                      req.status === 'Pending'
                        ? 'secondary'
                        : req.status === 'In Progress'
                        ? 'info'
                        : 'success'
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={req.status}
                    onChange={(e) => handleStatusChange(req.id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestHandling;
