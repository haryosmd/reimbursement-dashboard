import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reimbEdit, setEditReimb } from '../store/actions/remibAction';
import formatDate from '../helpers/formatDate';
import formatRp from '../helpers/formatRp';

const RowDataReimb = ({ reimb, index }) => {
  const { reimbursement } = useSelector((state) => state.reimbReducer);
  console.log(reimbursement);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = reimb.id;

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(
      setEditReimb({
        ...reimbursement,
        [name]: value,
      })
    );
  };

  const submitEditHandler = (event) => {
    event.preventDefault();

    dispatch(reimbEdit(id, reimbursement))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(inputs);
  };

  let time = new Date(reimb?.dateOfPurchase);

  const chipsStatus = (status) => {
    switch (status) {
      case 'On Progress':
        return 'bg-yellow-100 border-yellow-400 p-2 border-2 rounded-full';
      case 'Completed':
        return 'bg-green-100 border-green-400 p-2 border-2 rounded-full';
      case 'Rejected':
        return 'bg-red-100 border-red-500 p-2 border-2 rounded-full';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap font-semibold'>{index + 1}</td>
      {/* <td className='px-6 py-4 h-52 whitespace-nowrap'>
        <img src={reimb.receipt} alt='' height='200' width='130' />
      </td> */}
      <td className='px-6 py-4 whitespace-nowrap text-base text-gray-700 font-semibold'>
        {formatDate(time)}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-base text-gray-700 font-semibold'>
        {reimb.description}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-base text-gray-700 font-semibold'>
        {formatRp(reimb?.amount)}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-base text-gray-700 font-semibold'>
        <div className={chipsStatus(reimb.status)}>{reimb.status}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-base text-gray-700'>
        <div className='flex flex-row gap-3'>
          <button
            type='button'
            onClick={submitEditHandler}
            onChange={changeHandler}
            name='status'
            value='Completed'
            className='ml-auto uppercase px-4 py-1.5 rounded-xl font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200'
          >
            Accept
          </button>
          <button
            type='button'
            onClick={submitEditHandler}
            onChange={changeHandler}
            name='status'
            value='Rejected'
            className='ml-auto uppercase px-4 py-1.5 rounded-xl font-medium tracking-wide bg-red-600 hover:bg-red-500 hover:text-gray-600 text-gray-200 transition duration-200'
          >
            Reject
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowDataReimb;
