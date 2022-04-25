import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReimb, fetchReimb } from '../store/actions/remibAction';

const FormAddReimb = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();
  // const { reimbursement } = useSelector((state) => state.reimbReducer);
  const [inputs, setInputs] = useState({});

  // useEffect(() => {
  //   dispatch(fetchgenres());
  // }, [dispatch]);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitAddHandler = (event) => {
    event.preventDefault();

    dispatch(createReimb())
      .then(() => {
        setShowModalAdd(false);
        dispatch(fetchReimb());
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(inputs);
  };

  return (
    <div>
      <form
        action='/single'
        onSubmit={submitAddHandler}
        className='border shadow-lg p-64 max-w-3xl max-h-0 flex flex-col items-center justify-center bg-gray-100 rounded-3xl gap-y-4'
        encType='multipart/form-data'
      >
        <div className='flex flex-row items-center justify-center mb-5 w-96'>
          <h1 className='text-cyan-600 text-3xl font-bold'>
            Add Reimbursement
          </h1>
        </div>
        <div className='flex flex-row mb-4'>
          <div className='flex flex-col px-4 gap-y-2'>
            <div className='flex flex-row items-start space-x-4 space-y-4'>
              <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col'>
                  <input
                    placeholder='Date of Purchase'
                    type='date'
                    name='dateOfPurchase'
                    value={inputs.dateOfPurchase || ''}
                    onChange={changeHandler}
                    className='border shadow-sm text-gray-500 rounded-xl p-2 w-96'
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    placeholder='Amount in IDR'
                    type='number'
                    name='amount'
                    value={inputs.amount || ''}
                    onChange={changeHandler}
                    className='border shadow-sm text-gray-500 rounded-xl p-2 w-96'
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    placeholder='Receipt'
                    type='file'
                    name='receipt'
                    value={inputs.receipt || ''}
                    onChange={changeHandler}
                    className='border shadow-sm text-gray-500 rounded-xl p-2 w-96'
                  />
                </div>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col'>
                    <textarea
                      name='description'
                      placeholder='Description'
                      value={inputs.description || ''}
                      onChange={changeHandler}
                      cols='45'
                      rows='3'
                      className='rounded-xl shadow-sm border text-gray-500 p-2'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-start space-x-4'></div>
        <div className='flex flex-row my-1 gap-10'>
          <button
            type='submit'
            className='ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200'
          >
            Submit
          </button>
          <button
            type='submit'
            onClick={() => setShowModalAdd(false)}
            className='ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-red-600 hover:bg-red-500 focus:ring-red-300 focus:ring-offset-red-200 hover:text-black transition duration-200'
          >
            Cancel
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default FormAddReimb;
