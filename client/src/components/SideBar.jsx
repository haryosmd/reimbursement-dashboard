import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserIsLogin } from '../store/actions/userAction';
import { userDetail } from '../store/actions/userAction';
import iconUser from '../assets/icons8-user-96.png';

const SideBar = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);

  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  useEffect(() => {
    dispatch(userDetail(id)).then(() => {
      console.log('fetched');
    });
  }, [dispatch, id]);

  const navigate = useNavigate();

  // ! Logout Handler
  const logOutHandler = (event) => {
    event.preventDefault();
    localStorage.clear();
    dispatch(setUserIsLogin(false));
    navigate('/login');
  };

  const { isLogin } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (localStorage.access_token) {
      dispatch(setUserIsLogin(true));
    } else {
      dispatch(setUserIsLogin(false));
    }
  }, [dispatch, isLogin]);

  return (
    <div className='flex flex-col gap-y-4 rounded-2xl items-start py-8 m-4 w-48 bg-gray-900'>
      <img src={iconUser} alt='user' className='w-18 h-18 self-center' />
      <div className='flex flex-col items-start gap-y-2 rounded-md '>
        <h3 className='text-slate-300 ml-4'>{user.data?.role}</h3>
        <hr className='ml-4 w-40 border-slate-400 mb-2' />
        <h3 className='text-slate-300 ml-4 '>{user.data?.email}</h3>
        <hr className='ml-4 w-40 border-slate-400 mb-2' />
      </div>
      <ul className='mt-2 ml-4 mr-6 space-y-6'>
        <li>
          <Link
            to='/'
            className='flex ml-auto uppercase  px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200 gap-2'
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
                d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
              />
            </svg>
            <span className='text-md font-semibold'>ALL DATA</span>
          </Link>
        </li>
        <li>
          <Link
            to='/dashboard'
            className='flex ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200 gap-2'
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
                d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
              />
            </svg>
            <span className='text-md font-semibold'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to='/profile'
            className='flex ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200 gap-2'
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
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
              />
            </svg>
            <span className='text-md font-semibold'>PROFILE</span>
          </Link>
        </li>

        <li>
          <Link
            to='/login'
            onClick={logOutHandler}
            className='flex ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200 gap-2'
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
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
              />
            </svg>
            <span className='text-md font-semibold'>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
