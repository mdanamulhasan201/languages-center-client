import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
// import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../../providers/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const Myclass = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(` http://localhost:5000/classes/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyClasses(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <>
      <h3 className='text-center text-xl font-bold my-5'>My Classes</h3>
      {loading ? (
        <p className="text-center"><Loader></Loader></p>
      ) : (
        <div className="overflow-x-auto md:w-[900px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=' bg-base-200'>
                <th>#</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.length === 0 ? (
                <tr>
                  <td colSpan="4">No classes found for {user?.email}</td>
                </tr>
              ) : (
                myClasses.map((classItem, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{classItem.language}</td>
                    <td>$ {classItem.price}</td>
                    <td>Status{}</td>
                    <td>feedback{}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Myclass;
