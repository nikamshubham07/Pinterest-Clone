import React, { useState } from 'react';
import logo from '../images/logo.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   
  const createUser = (e) =>{
    e.preventDefault();
  }
  
  return (
    <>
      <div className='bg-[#f4f4f4] flex flex-col items-center justify-center min-h-screen'>
        <form onSubmit={createUser} className='flex flex-col w-[90%] max-w-[400px] px-[50px] py-[30px] bg-[#fff] rounded-[10px]'>
          <img className='w-[45px] h-[45px] self-center mb-3' src={logo} alt="" />
          <h3 className='text-center text-2xl font-[500] mb-5'>Login up to see more</h3>
          
          
          <div className='inputBox2 mb-3'>
            <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email' className='w-full p-2 border rounded-[5px]'/>
          </div>
          
          <div className='inputBox2 mb-3'>
            <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder='Password' className='w-full p-2 border rounded-[5px]'/>
          </div>
          
          <p className='mt-2 text-[13px] text-red-500'>
            {error}
          </p>

          <p className='my-2 text-center'>
            Don't Have An Account 
            <Link className='text-blue-500' to='/signUp'> Sign Up</Link>
          </p>

          {/* Button fix: Ensuring it stays inside the form */}
          <button className='bg-[#e60023] text-[#fff] p-3 rounded-[30px] mt-3'>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
