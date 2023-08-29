
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useOutletContext } from 'react-router-dom';
import {AiOutlineAppstoreAdd,AiOutlineHome,AiOutlineLogout } from 'react-icons/ai';
import { api } from '../utils';

export default function Headers() {
    const [user,setUser]= useState();

  return (
    <header className="sticky w-full top-0 left-0 py-4 bg-gray-400 bg-opacity-60 text-white transition duration-300 ease-in-out z-10">
    <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold ml-3">
            Culinary Nourish</Link>
        <nav className="space-x-4 flex flex-between mr-5">
            <NavLink
                to="/"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
                activeClassName="text-gray-300"
            >
                <AiOutlineHome size={32} />
            </NavLink>
            <NavLink
                to="/add"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
                activeClassName="text-gray-300"
            >
                <AiOutlineAppstoreAdd size={32} />
            </NavLink>
            {
                user ? (
                    <div>
                        <button className="hover:text-gray-300 transition duration-300 ease-in-out"  onClick={async()=> {
                        const response = await api.post("/auth/logout");
                        console.log(response.ok)
                        if(response.ok){
                            setUser();
                        }}}>
                        <AiOutlineLogout size={32} />
                    </button>
                        </div>
                        ) : (
                            <Link to="/login">
                                <AiOutlineLogout size={32} />
                            </Link>
                        )
            }
           
        </nav>
    </div>
</header>

  );
}
