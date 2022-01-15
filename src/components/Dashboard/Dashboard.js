import { Routes, Route, Link } from 'react-router-dom'

import PetList from '../PetList/PetList.js'
import Search from '../Search/Search.js'

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="search">Search</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </section>

        </section>
    )
}
export default Dashboard