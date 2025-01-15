import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate();


  const handleLogout = async () => {
    try{
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="absolute w-full p-4 flex justify-between items-center z-50 bg-transparent">
        {/* Logo Section */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="uppercase text-red-600 font-bold cursor-pointer text-3xl sm:text-4xl lg:text-5xl">
            moviemaze
          </h1>
        </Link>

        {user?.email ? (
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <button className="capitalize pr-4 text-sm sm:text-base hover:underline">
                profile
              </button>
            </Link>

            <Link to="/signup">
              <button onClick={handleLogout} className="capitalize bg-red-600 px-4 py-1 rounded text-sm lg:px-6 lg:py-1 hover:bg-red-700 transition duration-300">
                log out
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="capitalize pr-4 text-sm sm:text-base hover:underline">
                login
              </button>
            </Link>

            <Link to="/signup">
              <button className="capitalize bg-red-600 px-4 py-2 rounded text-sm sm:text-base lg:px-6 lg:py-3 hover:bg-red-700 transition duration-300">
                sign up
              </button>
            </Link>
          </div>
        )}


      </div>



    </>

  )
}

export default Navbar