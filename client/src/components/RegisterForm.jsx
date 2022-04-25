import React, { useState } from 'react';
import { userRegister } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitRegistHandler = (event) => {
    event.preventDefault();
    dispatch(userRegister(inputs))
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(inputs);
  };

  return (
    <div className='relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-800'>
      <div className='relative sm:max-w-sm w-full'>
        <div className='card bg-cyan-900 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6'></div>
        <div className='card bg-cyan-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6'></div>
        <div className='relative w-full rounded-3xl px-6 py-4 bg-cyan-600 shadow-md'>
          <label className='block mt-3 text-3xl font-bold text-gray-800 text-center'>
            Sign Up
          </label>
          <form className='mt-10' onSubmit={submitRegistHandler}>
            <div className='flex flex-col mt-4'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <input
                  type='text'
                  name='name'
                  value={inputs.name}
                  onChange={changeHandler}
                  className=' rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Name'
                />
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='email'
                  name='email'
                  value={inputs.email}
                  onChange={changeHandler}
                  className=' rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                  </svg>
                </span>
                <input
                  type='password'
                  name='password'
                  value={inputs.password}
                  onChange={changeHandler}
                  className=' rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <select
                  name='role'
                  onChange={changeHandler}
                  className=' rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                >
                  <option selected disabled>
                    --select--
                  </option>
                  <option value='Admin'>Admin</option>
                  <option value='Employee'>Employee</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col mb-6 mt-4'>
              <div className='flex relative '>
                <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                </span>
                <input
                  type='text'
                  name='bankAccNum'
                  value={inputs.bankAccNum}
                  onChange={changeHandler}
                  className=' rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Bank Account Number'
                />
              </div>
            </div>
            <div className='mt-7 flex'>
              <div className='w-full text-center'>
                <p className='mb-0 font-normal text-gray-800'>
                  Have an account?
                  <Link
                    to='/login'
                    className='hover:text-black cursor-pointer text-gray-800 font-semibold'
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
            <div className='flex w-full mt-6'>
              <button
                type='submit'
                className='py-2 px-4  bg-cyan-800 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
