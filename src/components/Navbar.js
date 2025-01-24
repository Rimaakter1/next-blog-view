import Link from "next/link";

export const NavBar = async () => {
    return (
        <nav className="navbar w-10/12 mx-auto text-white p-4 shadow-lg">
            <div className="navbar-start">
                <Link href="/" className="text-2xl font-bold hover:text-gray-200">
                    Blog<span className="text-blue-400">View</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4">
                    <li>
                        <Link href="/" className="hover:bg-blue-800 px-4 py-2 rounded-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="hover:bg-blue-800 px-4 py-2 rounded-lg">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">

                <div>
                    <Link
                        href='/api/auth/login'
                        className="btn bg-blue-600 btn-sm text-white px-6 rounded-full shadow-md hover:bg-blue-700"
                    >
                        Login
                    </Link>
                    <Link
                        href='/api/auth/register'
                        className="btn bg-blue-600 btn-sm text-white px-6 rounded-full shadow-md hover:bg-blue-700"
                    >
                        Resgister
                    </Link>
                </div>


            </div>

            <div className="dropdown navbar-end lg:hidden">
                <label tabIndex={0} className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-700 rounded-box w-52 text-white"
                >
                    <li>
                        <Link href="/" className="hover:bg-blue-800 px-4 py-2 rounded-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="hover:bg-blue-800 px-4 py-2 rounded-lg">
                            Profile
                        </Link>
                    </li>
                    <li>

                        <div>
                            <Link href="/api/auth/login" className="btn btn-success btn-sm text-white px-6 rounded-full w-full">
                                Login
                            </Link>
                            <Link href="/api/auth/register" className="btn btn-success btn-sm text-white px-6 rounded-full w-full">
                                Resgister
                            </Link>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    );
}
