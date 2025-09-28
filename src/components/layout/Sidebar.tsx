function Sidebar() {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <i className="mdi mdi-grid-large menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i className="menu-icon mdi mdi-floor-plan"></i>
                            <span className="menu-title">Assets</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Asset List</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Add New Asset</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Categories</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Asset Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                            <i className="menu-icon mdi mdi-card-text-outline"></i>
                            <span className="menu-title">Assignments</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="form-elements">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Assign Assets</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">My Assets</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Assignment History</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                            <i className="menu-icon mdi mdi-chart-line"></i>
                            <span className="menu-title">Requisitions</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">My Requisitions</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">Approvals</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                            <i className="menu-icon mdi mdi-table"></i>
                            <span className="menu-title">Maintenance</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Maintenance Logs</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Upcoming Schedules</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Maintenance Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                            <i className="menu-icon mdi mdi-layers-outline"></i>
                            <span className="menu-title">Users & Roles</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">User Management</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Departments</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Roles & Permissions</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <i className="menu-icon mdi mdi-account-circle-outline"></i>
                            <span className="menu-title">Audit Logs</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> System Activity </a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
