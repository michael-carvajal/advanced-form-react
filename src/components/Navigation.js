import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/sample-survey">Sample Survey</NavLink>
            <NavLink to="/sensory-pref">Sensory Preferences</NavLink>
            <NavLink to="/report/:reportId">Report</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
    )
}

export default Navigation
