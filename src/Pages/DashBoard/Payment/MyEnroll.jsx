import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 14; // Number of items to display per page

    const [myPayment, setMyPayment] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(` http://localhost:5000/payment/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const filteredPayments = data.filter(payment => payment.status === 'success');
                setMyPayment(filteredPayments);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching payment data:', error);
                setLoading(false);
            });
    }, [user]);

    // Calculate the index of the last item in the current page
    const lastIndex = currentPage * itemsPerPage;

    // Calculate the index of the first item in the current page
    const firstIndex = lastIndex - itemsPerPage;

    // Get the current page of items
    const currentItems = myPayment.slice(firstIndex, lastIndex);

    // Change the current page
    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <h3 className='text-center text-2xl font-bold my-5'>My <span className='text-[#55d6af]'>Enrolled</span></h3>
            {loading ? (
                <p className="text-center"><Loader></Loader></p>
            ) : (
                <div className="overflow-x-auto md:w-[900px] ">
                    <table className="table shadow-md">
                        {/* head */}
                        <thead>
                            <tr className=' bg-base-200'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Language Name</th>
                                <th>Quantity</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {myPayment.length === 0 ? (
                                <tr>
                                    <td colSpan="7">No successful Enrolled found</td>
                                </tr>
                            ) : (
                                currentItems.map((paymentItem, index) => (
                                    <tr key={index}>
                                        <td>{firstIndex + index + 1}</td>
                                        <td>{paymentItem.user}</td>
                                        <ul className='my-5'>
                                            {paymentItem.itemNames.map((itemName, itemIndex) => (
                                                <li key={itemIndex}>{itemName}</li>
                                            ))}
                                        </ul>
                                        <td>{paymentItem.quantity}</td>
                                        <td>
                                            <button className='btn btn-xs btn-success'>Enrolled</button>
                                        </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(myPayment.length / itemsPerPage) }, (_, index) => (
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
            )}
        </>
    );
};

export default PaymentHistory;
