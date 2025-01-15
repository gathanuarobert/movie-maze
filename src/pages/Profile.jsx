import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext';
import { db } from '../Services/Firebase';
import { createImageUrl } from '../Services/movieServices'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {

    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favshows);
      });
    }


  }, [user?.email])

  const slide = (offset) => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + offset
  }

  const handleUnlike = async (movie) => {
    const userDoc = doc(db, 'users', user.email);

    await updateDoc(userDoc, {
      favshows: arrayRemove(movie)
    })
  }

  if (!user) {
    return (
      <>
        <p>fetching shows...</p>
      </>
    )
  }

  return <>
    <div>
      <div>
        <img
          className='bloc w-full h-[500px] object cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/KE-en-20250106-TRIFECTA-perspective_91c30a9b-ce9a-47c8-bf47-adec72162793_small.jpg'
          alt='//' />

        <div className='bg-black/60 fixed top-0 w-full h-[500px]' />
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold my-2'>Myyy Shows</h1>
          <p className='font-light text-gray-400 text-lg'>{user.email}</p>
        </div>
      </div>

      {/* movie row */}
      <h2 className='font-bold md:text-xl p-4 capitalize'>Favorite Shows</h2>

      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={() => slide(-500)} className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={40} />
        <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((movie) => (
            <div key={movie.id} className='relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[220px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
              <img className='w-full h-80 block object-cover object-top ' src={createImageUrl(movie.poster_path, "w500")} alt={movie.title} />
              <div className=''>
                <p className='text-gray-300 text-sm mt-2 truncate flex justify-center font-bold'>{movie.title}</p>
              </div>

              <p><AiOutlineClose size={30} onClick={() => handleUnlike(movie)} className='absolute top-2 right-2 text-white opacity-0 hover:opacity-70 transition-opacity duration-500' /></p>

            </div>
          ))}
        </div>
        <MdChevronRight onClick={() => slide(500)} className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={40} />
      </div>


    </div>
  </>
}

export default Profile