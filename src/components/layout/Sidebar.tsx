import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="mdi mdi-grid-large menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i className="menu-icon mdi mdi-coin"></i>
                            <span className="menu-title">Assets</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <Link className="nav-link" to="/manage-assets">Manage Assets</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/categories">Categories</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/asset-reports">Asset Reports</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#form-elements" aria-expanded="false" aria-controls="form-elements">
                            <i className="menu-icon mdi mdi-send"></i>
                            <span className="menu-title">Assignments</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="form-elements">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><Link className="nav-link" to="/assign-assets">Assign Assets</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/my-assets">My Assets</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" to="/assignment-history">Assignment History</Link></li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#charts" aria-expanded="false" aria-controls="charts">
                            <i className="menu-icon mdi mdi-clipboard-text"></i>
                            <span className="menu-title">Requisitions</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <Link className="nav-link" to="/my-requisitions">My Requisitions</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/approvals">Approvals</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#tables" aria-expanded="false" aria-controls="tables">
                            <i className="menu-icon mdi mdi-screwdriver"></i>
                            <span className="menu-title">Maintenance</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                {/* <li className="nav-item"> <Link className="nav-link" to="/maintenance-logs">Maintenance Logs</Link></li> */}
                                {/* <li className="nav-item"> <Link className="nav-link" to="pages/tables/basic-table.html">Upcoming Schedules</Link></li> */}
                                <li className="nav-item"> <Link className="nav-link" to="/maintenance-reports">Maintenance Reports</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#icons" aria-expanded="false" aria-controls="icons">
                            <i className="menu-icon mdi mdi-account-key"></i>
                            <span className="menu-title">Users & Roles</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <Link className="nav-link" to="/user-management">User Management</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/departments">Departments</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/roles">Roles & Permissions</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="collapse" to="#auth" aria-expanded="false" aria-controls="auth">
                            <i className="menu-icon mdi mdi-content-save-all"></i>
                            <span className="menu-title">Audit Logs</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <Link className="nav-link" to="/system-activity"> System Activity </Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
