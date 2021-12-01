import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext.js'

const Header = () => {
    const {user} = useContext(AuthContext)
    const guest = (
    <div id="guest">
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/register">Register</Link>
    </div>)
    const userD = (
    <div id="user">
        <span>Welcome, {user.email}</span>
        <a className="button" href="/my-pets">My Pets</a>
        <Link className="button" to="/create">Add Pet</Link>
        <Link className="button" to="/logout">Logout</Link>
    </div>)
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    {
                        user.email
                            ? userD
                            : guest
                    }
                </section>
            </nav>
        </header>
    )
}
export default Header