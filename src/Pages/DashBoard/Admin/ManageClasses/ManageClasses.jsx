import React, { useState } from 'react';
import UseClasses from '../../../../hook/UseClasses';
import './ManageClasses.css';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [classes] = UseClasses();

  const [disabled, setDisabled] = useState(false)
  const [axiosSecure, refetch] = useAxiosSecure()

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Number of items to display per page
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleDeny = (classs) => {
    axiosSecure.patch(`/classes/${classs._id}`)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to deny this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, deny it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deny!',
          'Your file has been deny.',
          'success'
        )
        // console.log(res)
        // setDisabled(true)
        refetch()
      }

    })

  };

  const handleConfirm = (classss) => {
    axiosSecure.patch(`/classess/${classss._id}`)
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        // console.log(res)
        // setDisabled(true)
        refetch()
      }

    })

  };







  // Calculate the index of the last item in the current page
  const lastIndex = (currentPage + 1) * itemsPerPage;

  // Calculate the index of the first item in the current page
  const firstIndex = currentPage * itemsPerPage;

  // Get the current page of items
  const currentItems = classes.slice(firstIndex, lastIndex);


  // Change the current page
  const changePage = (page) => {
    setCurrentPage(page - 1);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`page-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h3 className="text-center my-8 text-2xl font-bold">
        Manage <span className="text-[#55d6af]">Classes</span>
      </h3>
      <div className="overflow-x-auto shadow-md">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>#</th>
              <th>Images</th>
              <th>Class Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((classs, index) => (
              <tr key={classs._id}>
                <th>{firstIndex + index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classs.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classs.language}</td>
                <td>{classs.displayName}</td>
                <td>{classs.email}</td>
                <td>{classs.seats}</td>
                <td>${classs.price}</td>
                <td>
                  <button onClick={() => handleConfirm(classs)} className='"btn rounded-md bg-green-400 md:btn-xs btn-md '>Approve</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(classs)} // Pass 'classs' as an argument
                    disabled={disabled}
                    className='btn rounded-md bg-rose-400 font-bold md:btn-xs btn-md '
                  >
                    Deny
                  </button>
                </td>
                <td>
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_6" className="btn  rounded-md md:btn-xs">Feedback</label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg mb-5">Write your feedback</h3>
                      <textarea className="textarea textarea-accent" placeholder="feedback"></textarea>
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-error md:btn-xs">Close!</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(classes.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`px-2 py-1 mx-1 rounded ${currentPage === index ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* Theme toggle */}
      <div className="flex justify-center mt-4">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Table' : 'Switch to Dark Table'}
        </button>
      </div>
    </div>
  );
};

export default ManageClasses;
