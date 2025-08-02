import { Link, useNavigate } from "react-router"

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const isLoggedIn = !!token
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        alert("logout berhasil")
        navigate("/login")
    }
    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="menu-button">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="#" className="logo">MegaMart</a>
            </div>
            <div className="navbar-center">
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search essentials, groceries and more..." />
                    <button className="filter-button">
                        <i className="fa-solid fa-list-ul"></i>
                    </button>
                </div>
            </div>
            <div className="navbar-right">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="nav-link">
                        <i className="fa-regular fa-user"></i>
                        <span>Logout</span>
                    </button>
                ) : (
                    <Link to="/login" className="nav-link">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign Up/Sign In</span>
                    </Link>
                )}

            </div>
        </header>
    )
}

export default Navbar