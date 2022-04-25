import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row items-end justify-between'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-semibold leading-loose text-white'>
          Reimbursement Dashboard
        </h1>
      </div>
      {/* <div className='flex flex-row gap-4 py-4'>
        <Link
          to='/add-reimbursement'
          type='button'
          className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide bg-cyan-600 hover:bg-orange-600 hover:text-black transition duration-200'
        >
          ADD REIMBURSEMENT
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
