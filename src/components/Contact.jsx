import { Link } from "react-router-dom";

export default function Contact() {
    return <div>
        <h1>This is Contact Page</h1>
        <button style={{'backgroundColor':'red'}}><Link to={'/'}>Home</Link></button>
        <button style={{'backgroundColor':'red'}}><Link to={'/about'}>About</Link></button>
    </div>
}