import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items to display per page

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const handleMakeInstructor = user => {
        fetch(` http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} is an Instructor Now!`)
                }
            })
    }

    const handleMakeAdmin = user => {
        fetch(` http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} is an Admin Now!`)
                }
            })
    }

  // delete class
  const handleDelete = user => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(` http://localhost:5000/users/${user._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'user has been deleted.',
                            'success'
                        )
                    }
                })

        }
    })
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
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
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={user.photo} />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                <td>
                                    {
                                        user.role === 'admin' ? <button className='"btn rounded-md bg-green-400 md:btn-xs btn-md '> Admin</button> : <button onClick={() => handleMakeAdmin(user)} className='"btn rounded-md bg-green-200 md:btn-xs btn-md '>Make Admin</button>
                                    }
                                </td>
                                <td >

                                    {
                                        user.role === 'instructor' ? <button className='"btn rounded-md bg-rose-400 font-bold md:btn-xs btn-md '>Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className='"btn rounded-md bg-rose-200 md:btn-xs btn-md'>Make instructor</button>
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
                        className={`px-2 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
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
