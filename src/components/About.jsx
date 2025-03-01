import { Link } from "react-router-dom";
export default function About() {
    return <div>
        <h1>This is About Page</h1>
        <button style={{'backgroundColor':'red'}}><Link to={'/'}>Home</Link></button>
        <button style={{'backgroundColor':'red'}}><Link to={'/contact'}>Contact</Link></button>
    </div>
}