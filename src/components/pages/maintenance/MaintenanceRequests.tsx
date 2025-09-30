import React, { useState } from 'react';

const assetProviderMap = {
  'Asset-1001': 'ABC Repairs Co.',
  'Asset-1002': 'XYZ Facility Services',
  'Asset-1003': 'Internal Maintenance Team',
  'Asset-1004': 'QuickFix Maintenance',
};

const MaintenanceRequests = () => {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [provider, setProvider] = useState('');

  const handleAssetChange = (e) => {
    const asset = e.target.value;
    setSelectedAsset(asset);
    setProvider(assetProviderMap[asset] || '');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Maintenance Request Form</h4>
        </div>
        <div className="card-body">
          <form>
            {/* Requester Name */}
            <div className="mb-3">
              <label htmlFor="requesterName" className="form-label">Name</label>
              <input type="text" className="form-control" id="requesterName" placeholder="Enter your name" />
            </div>

            {/* Asset Selection */}
            <div className="mb-3">
              <label htmlFor="assetId" className="form-label">Asset</label>
              <select className="form-select" id="assetId" value={selectedAsset} onChange={handleAssetChange}>
                <option value="">Select an asset</option>
                <option value="Asset-1001">Asset-1001 - Air Conditioner</option>
                <option value="Asset-1002">Asset-1002 - Elevator</option>
                <option value="Asset-1003">Asset-1003 - Server Rack</option>
                <option value="Asset-1004">Asset-1004 - Office Printer</option>
              </select>
            </div>

            {/* Auto-filled Provider */}
            <div className="mb-3">
              <label htmlFor="provider" className="form-label">Maintenance Provider</label>
              <input
                type="text"
                className="form-control"
                id="provider"
                value={provider}
                readOnly
                placeholder="Select an asset to see provider"
              />
            </div>

            {/* Issue Description */}
            <div className="mb-3">
              <label htmlFor="issueDescription" className="form-label">Issue Description</label>
              <textarea className="form-control" id="issueDescription" rows="4" placeholder="Describe the issue"></textarea>
            </div>

            {/* Priority */}
            <div className="mb-3">
              <label htmlFor="priority" className="form-label">Priority</label>
              <select className="form-select" id="priority">
                <option value="Low">Low</option>
                <option value="Medium" selected>Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Date */}
            <div className="mb-3">
              <label htmlFor="requestDate" className="form-label">Date</label>
              <input type="date" className="form-control" id="requestDate" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceRequests;
