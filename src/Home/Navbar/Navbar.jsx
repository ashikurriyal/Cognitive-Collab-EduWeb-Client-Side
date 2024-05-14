import { Link } from "react-router-dom";
import logo from '../../assets/images/CognitiveCollabLogo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li className="font-semibold text-xl"><Link to="/">Home</Link></li>
        <li className="font-semibold text-xl"><Link to="/assignments">Assignments</Link></li>

        {
            user &&
            <>
                <li className="font-semibold text-xl"><Link to="/createassignments">Create Assignments</Link></li>
            </>
        }
        {
            user &&
            <>
                <li className="font-semibold text-xl"><Link to="/pendingassignments">Pending Assignments</Link></li>
            </>
        }

        
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
            <div className="navbar-end gap-4">
                {/* <button className="font-semibold text-xl btn btn-outline border-2 border-fuchsia-800 hover:text-white hover:bg-gradient-to-r from-fuchsia-800  to-pink-600 hover:"><Link to="/login">Login</Link></button> */}

                {
                    user ? <>
                        {
                            user?.photoURL ?
                                <div className="tooltip tooltip-bottom avatar " data-tip={user.displayName}>
                                    <div className="lg:w-12 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                        <img src={user.photoURL} />
                                    </div>
                                </div> :

                                <div className="tooltip tooltip-bottom avatar dropdown dropdown-end" data-tip={user?.displayName}>
                                    <div tabIndex={0} role="button" className="lg:w-12 rounded-full ring ring-offset-base-100 ring-pink-600">
                                        <img src="https://i.ibb.co/rb1pJ40/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52">
                                        <li className=""><a className="font-semibold text-sm">Attempted Assignments</a></li>
                                        <li><a onClick={handleLogOut} className="font-semibold text-sm">Sign Out</a></li>
                                    </ul>
                                </div>
                        }


                        {/* <a onClick={handleLogOut} className="font-semibold text-xl btn btn-outline border-2 border-pink-600 hover:text-white hover:bg-gradient-to-r from-fuchsia-800  to-pink-600">Sign Out</a> */}
                    </>
                        : <Link to="/login"><button className="font-semibold text-xl btn btn-outline border-2 border-pink-600 hover:text-white hover:bg-gradient-to-r from-fuchsia-800  to-pink-600">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;