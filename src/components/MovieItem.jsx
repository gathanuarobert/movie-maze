import React, { useState } from 'react'
import { createImageUrl } from '../Services/movieServices'
import {  FaHeart, FaRegHeart } from 'react-icons/fa'
import { arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { db } from '../Services/Firebase';
import { UserAuth } from '../context/AuthContext';

const MovieItem = ({ movie }) => {
    const [like, setLike] = useState(false)
    const {user} = UserAuth();
    const { title, poster_path } = movie
    const markFavShow = async () => {
        const userEmail = user?.email;

        if (userEmail) {
            const userDoc = doc(db, "users", userEmail);
            setLike(!like)
            await updateDoc(userDoc, {
                favshows: arrayUnion({...movie}),
            });
        }
        else {
            alert('Login to save a movie')
        }
    }

    return (
        <div className='relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[220px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
            <img className='w-full h-80 block object-cover object-top ' src={createImageUrl(poster_path, "w500")} alt={title} />
            <div className=''>
                <p className='text-gray-300 text-sm mt-2 truncate flex justify-center font-bold'>{movie.title}</p>
            </div>
            <div className='absolute top-0 left-0 w-full h-80 bg-black/80 opacity-0 hover:opacity-70 transition-opacity duration-500'>
            <p onClick={markFavShow} className='cursor-pointer'>
                {like ? (
                    <FaHeart
                     size={20} 
                     className='absolute top-2 left-2 text-gray-300' />
                    )
                 : (
                 <FaRegHeart 
                 size={20} 
                 className='absolute top-2 left-2 text-gray-300' />
                 )}
                </p>
            </div>
        </div>
    )
}

export default MovieItem