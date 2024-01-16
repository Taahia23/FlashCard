import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../images/hyLogo-removebg-preview.png'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const navItems = <>
        <li className="text-xl hover:text-white"><Link to={'/'}>Home</Link></li>
        <li className="text-xl hover:text-white "><HashLink to={'#flashCard'}>Flashcard</HashLink></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>Contact</Link></li>
        <li className="text-xl hover:text-white "><HashLink to={'#Faq'}>FAQ</HashLink></li>

        {
            user ? <></> : <></>
        }

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100  px-32 py-8">
            <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 ">
                            {navItems}
                        </ul>
                    </div>
                <div className="flex-1">

                    <img className="w-56 " src={logo} alt="" />
                </div>
                <div className="flex-none gap-2">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal   px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* <Link to={'/login'}><button className="btn "><span className="font-semibold">Login</span></button></Link> */}

                        {
                            user ? <div className='flex flex-row gap-10'>

                                {/* <img className="rounded" src={user?.photoURL} alt="" /> */}
                                <div className="avatar online">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <div className='py-3'><span>{user?.displayName}</span></div>
                                <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button> </div>
                                :
                                <> <button className="btn btn-primary rounded-3xl text-xl px-10"><Link to={'/login'}>Login</Link></button> </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;