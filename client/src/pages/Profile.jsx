import React, { useEffect } from 'react';
import icon from '../assets/icons8-user-96.png';
import { useDispatch, useSelector } from 'react-redux';
import { userDetail, userEdit, setEditUser } from '../store/actions/userAction';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, setLoading, setError } = useSelector(
    (state) => state.userReducer
  );
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = localStorage.getItem('id');
  useEffect(() => {
    dispatch(userDetail(id)).then(() => {
      console.log('Fetched');
    });
  }, [dispatch, id]);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(
      setEditUser({
        ...user,
        [name]: value,
      })
    );
  };

  const submitEditHandler = (event) => {
    event.preventDefault();

    dispatch(userEdit(id, user))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(inputs);
  };

  if (setLoading) {
    return <div>Loading...</div>;
  }

  if (setError) {
    return <div>{JSON.stringify(setError)}</div>;
  }
  return (
    <div>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-start justify-center rounded-lg bg-gray-900 max-w-1/3 max-h-0.5 py-60 px-10'>
          <img src={icon} alt='user' className='w-auto p-5' />
          <div className='flex flex-col items-start gap-y-2 rounded-md p-5 w-60'>
            <h3 className='text-slate-300 ml-4'>Name : {user.data?.name}</h3>
            <hr className='ml-4 w-40 border-slate-400 mb-2' />
            <h3 className='text-slate-300 ml-4'>Email : {user.data?.email}</h3>
            <hr className='ml-4 w-40 border-slate-400 mb-2' />
            <h3 className='text-slate-300 ml-4'>Role : {user.data?.role}</h3>
            <hr className='ml-4 w-40 border-slate-400 mb-2' />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center rounded-lg bg-gray-900 max-w-2/3 max-h-0.5 p-60 ml-10'>
          <form action='' onSubmit={submitEditHandler}>
            <div className='flex flex-col items-start gap-y-4 mb-6'>
              <label className='text-xl font-semibold text-gray-400'>
                Name
              </label>
              <input
                placeholder={user.data?.name}
                type='text'
                name='name'
                value={user.name || ''}
                onChange={changeHandler}
                className='border shadow-sm text-gray-500 rounded-md p-2 w-96'
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 mb-6'>
              <label className='text-xl font-semibold text-gray-400'>
                Email
              </label>
              <input
                placeholder={user.data?.email}
                type='email'
                name='email'
                value={user.email || ''}
                onChange={changeHandler}
                className='border shadow-sm text-gray-500 rounded-md p-2 w-96'
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 mb-6'>
              <label className='text-xl font-semibold text-gray-400'>
                Bank Account Number
              </label>
              <input
                placeholder={user.data?.bankAccNum}
                type='number'
                name='bankAccNum'
                value={user.bankAccNum || ''}
                onChange={changeHandler}
                className='border shadow-sm text-gray-500 rounded-md p-2 w-96'
              />
            </div>
            <button
              type='submit'
              className='ml-auto uppercase px-4 py-1.5 rounded-md font-medium tracking-wide bg-cyan-600 hover:bg-blue-400 focus:ring-blue-300 focus:ring-offset-blue-200 hover:text-black transition duration-200'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
