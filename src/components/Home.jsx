import { Link } from "react-router-dom";
export default function Home() {
   return  <div>
        <h1>This is Home Page</h1>
         <button style={{'backgroundColor':'red',marginRight:'10px;'}}> <Link to={'/about'}>About</Link></button>
         <button style={{'backgroundColor':'red'}}><Link to={'/contact'}>Contact</Link></button>
    </div>
}