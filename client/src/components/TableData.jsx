import React, { useState, useEffect } from 'react';
import RowDataReimb from './RowDataReimb';
// import { NavLink } from "react-router-dom";
import FormAddReimb from './FormAddReimb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReimb } from '../store/actions/remibAction';

const TableData = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const { reimbursements, setLoading, setError } = useSelector(
    (state) => state.reimbReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReimb()).then(() => {
      console.log('Swal ALert');
    });
  }, [dispatch]);

  if (setLoading) {
    return <div>Loading...</div>;
  }

  if (setError) {
    return <div>{JSON.stringify(setError)}</div>;
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-end space-y-4'>
        <div>
          <button
            onClick={() => setShowModalAdd(true)}
            // to="/add-movie"
            // fetchmoviehandler={fetchMovieHandler}
            className='flex ml-auto uppercase px-4 py-1.5 rounded-xl font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200 gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            <span className='text-md font-semibold'>Add Reimbursement</span>
          </button>
        </div>
        {showModalAdd ? (
          <div className='  bg-black bg-opacity-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <FormAddReimb setShowModalAdd={setShowModalAdd} />
          </div>
        ) : null}
        <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
          <table className='min-w-fit'>
            <thead className='bg-cyan-600'>
              <tr>
                <th className='px-6 py-3 text-sm font-bold text-gray-700 uppercase text-center'>
                  No.
                </th>
                <th className='px-6 py-3 text-center text-sm font-bold text-gray-700 uppercase'>
                  Date of Purchase
                </th>
                <th className='px-6 py-3 text-center text-sm font-bold text-gray-700 uppercase'>
                  Description
                </th>
                <th className='px-6 py-3 text-center text-sm font-bold text-gray-700 uppercase'>
                  Amount
                </th>
                <th className='px-6 py-3 text-center text-sm font-bold text-gray-700 uppercase'>
                  Status
                </th>
                <th className='px-6 py-3 text-center text-sm font-bold text-gray-700 uppercase'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-gray-400 divide-y divide-gray-200'>
              {reimbursements.data?.map((reimb, i) => (
                <RowDataReimb key={reimb.id} reimb={reimb} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableData;
