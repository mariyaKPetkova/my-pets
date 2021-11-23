import { Routes, Route, Link } from 'react-router-dom'

import PetList from '../PetList/PetList.js'

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="type">Types</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/type" element={<p>Some Types</p>} />
                </Routes>
            </section>

        </section>
    )
}
export default Dashboard