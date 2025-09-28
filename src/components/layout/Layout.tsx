import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className="container-scroller">
                {/* <!-- partial:partials/_navbar.html --> */}
                <Navbar />
                {/* <!-- partial --> */}
                <div className="container-fluid page-body-wrapper">
                    {/* <!-- partial:partials/_settings-panel.html --> */}
                    
                    
                    {/* <!-- partial --> */}
                    {/* <!-- partial:partials/_sidebar.html --> */}
                    <Sidebar />
                    {/* <!-- partial --> */}
                    <div className="main-panel">
                        <Outlet />
                        {/* <!-- content-wrapper ends --> */}
                        {/* <!-- partial:partials/_footer.html --> */}
                        <Footer />
                        {/* <!-- partial --> */}
                    </div>
                    {/* <!-- main-panel ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
        </>
    )
}

export default Layout
