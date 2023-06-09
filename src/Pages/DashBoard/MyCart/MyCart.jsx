import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hook/useCart';
import { FaTrash } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items to display per page

    // Calculate the total price of all selected classes
    const total = cart.reduce((sum, classs) => classs.price + sum, 0);

    // Calculate the index of the last item in the current page
    const lastIndex = currentPage * itemsPerPage;

    // Calculate the index of the first item in the current page
    const firstIndex = lastIndex - itemsPerPage;

    // Get the current page of items
    const currentItems = cart.slice(firstIndex, lastIndex);

    // Change the current page
    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='mt-10'>
            <Helmet>
                <title>Language Center | Selected Classes</title>
            </Helmet>
            <div className='flex justify-evenly  font-bold text-xl mb-5'>
                <h3>All Selected Classes: {cart?.length}</h3>
                <h3>Total Price: ${total}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Instructor Name</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((clas, index) => (
                            <tr key={clas._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={clas.image} alt="Class" />
                                        </div>
                                    </div>
                                </td>
                                <td>{clas.instructor}</td>
                                <td>{clas.language}</td>
                                <td> ${clas.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-sm text-xl text-red-500"><FaTrash></FaTrash></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(cart.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 mx-1 rounded ${
                            currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
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

export default MyCart;
