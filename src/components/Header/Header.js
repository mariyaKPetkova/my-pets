import { Link } from 'react-router-dom'
const Header = ({ email }) => {
    const guest = (
    <div id="guest">
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/register">Register</Link>
    </div>)
    const user = (
    <div id="user">
        <span>Welcome, {email}</span>
        <a className="button" href="/my-pets">My Pets</a>
        <Link className="button" to="/create">Add Pet</Link>
        <Link className="button" to="#">Logout</Link>
    </div>)
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    {
                        email
                            ? user
                            : guest
                    }
                </section>
            </nav>
        </header>
    )
}
export default Header