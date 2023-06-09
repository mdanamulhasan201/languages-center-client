import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserShield } from 'react-icons/fa';

const ManageUser = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Number of items to display per page

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });


    const handleDelete = user => {

    }

    // Calculate the index of the last item in the current page
    const lastIndex = currentPage * itemsPerPage;

    // Calculate the index of the first item in the current page
    const firstIndex = lastIndex - itemsPerPage;

    // Get the current page of items
    const currentItems = users.slice(firstIndex, lastIndex);

    // Change the current page
    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className=' md:w-[900px] '>
            <Helmet>
                <title>Language Center | Manage User</title>
            </Helmet>

            <h3 className='text-xl font-bold my-5'>  Total User: {currentItems.length}</h3>

            <div className="overflow-x-auto shadow-md">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display the current page of users */}
                        {currentItems.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button className='"btn rounded-md bg-green-400 btn-xs '> Admin</button> : <button className='"btn rounded-md bg-green-200 btn-xs '>Make Admin</button>
                                    }
                                </td>
                                <td >

                                    {
                                        user.role === 'instructor' ? <button className='"btn rounded-md bg-rose-500 btn-xs '>Instructor</button> : <button className='"btn rounded-md bg-rose-200 btn-xs '>Make instructor</button>
                                    }

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm text-xl text-red-500"><FaTrash></FaTrash></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => changePage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ManageUser;
