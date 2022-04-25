import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReimb } from '../store/actions/remibAction';

const Dashboard = () => {
  const { reimbursements, setLoading, setError } = useSelector(
    (state) => state.reimbReducer
  );
  console.log(
    '🚀 ~ file: Dashboard.jsx ~ line 10 ~ Dashboard ~ reimbursements',
    reimbursements
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
    <div className='flex flex-row items-center'>
      <Chart
        data={reimbursements?.data}
        title='Data Reimbursement Analytics'
        grid
        dataKey='amount'
      />
    </div>
  );
};

export default Dashboard;
