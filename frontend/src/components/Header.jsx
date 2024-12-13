import { useState } from "react"
import { useNavigate } from "react-router"

const Header = () => {

    const [isResponsive, setIsResponsive] = useState(false)

    const navigate = useNavigate()
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="flex w-full items-center">
                <label className="btn btn-circle swap swap-rotate sm:hidden" >
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={() => setIsResponsive(!isResponsive)} />

                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
                <h1 className='text-xl font-extrabold w-3/12 px-3'>TODOS</h1>
                <div className={isResponsive ? "absolute flex flex-col top-[68px] bg-white z-10 shadow-lg p-3 pb-0 w-full" : "w-full flex gap-3 max-sm:hidden"}>
                    {isResponsive && <input type="text" placeholder="Search..." className="input input-bordered w-full" />}
                    <button className="sm:btn text-left my-1 border-b-2 p-3" onClick={() => navigate('/')}>Home</button>
                    <button className="sm:btn text-left my-1 border-b-2 p-3" onClick={() => navigate('/add-todos')}>Add Todos</button>
                    <button className="sm:btn text-left my-1 border-b-2 p-3" onClick={() => navigate('/my-todos')}>My Todos</button>
                </div>
            </div>
            <div className="flex-none gap-2">
                <input type="text" placeholder="Search..." className="input input-bordered w-full max-sm:hidden" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header