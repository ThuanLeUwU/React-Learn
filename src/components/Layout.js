import { Link, NavLink } from "react-router-dom";
function Layout(props){
    return(
        <nav>   
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/Contactus">Contactus</Link>
                </li>
                <li>
                   <Link to='/Profile/1/ThuanLM' activeStyle={{color:'red'}}>Profile</Link> 
                </li>
            </ul>
        </nav>
    );
}

export default Layout;