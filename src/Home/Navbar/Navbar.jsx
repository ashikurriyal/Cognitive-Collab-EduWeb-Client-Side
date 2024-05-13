import { Link } from "react-router-dom";
import logo from '../../assets/images/CognitiveCollabLogo.png'


const Navbar = () => {

    const navItems = <>
        <li className="font-semibold text-xl"><Link to="/">Home</Link></li>
        <li className="font-semibold text-xl"><Link to="/assignments">Assignments</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-22 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <ul className="p-2">
                            {navItems}
                        </ul>

                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-10" src={logo} alt="" />
                    <p className="font-bold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800  to-pink-600">Cognitive Collab</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="font-semibold text-xl btn btn-outline border-2 border-fuchsia-800 hover:text-white hover:bg-gradient-to-r from-fuchsia-800  to-pink-600 hover:">Login</button>
            </div>
        </div>
    );
};

export default Navbar;