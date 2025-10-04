import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appe from '../../../Firebase/Firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const Auth =getAuth(appe)
  const [value, setvalue] =useState(null)
  console.log(value)
    const log =(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        signInWithEmailAndPassword(Auth, email, password)
        .then(result=>{
          const user= result.user
          setvalue(user)
          toast('Login Successfull')
        })
        .catch(err=>{
          console.log(err.message)
        })
    }
    return (
       < div className="flex items-center justify-center min-h-screen bg-white">
         <div className="card w-full max-w-sm shadow-2xl bg-black  text-white">
           <div className="card-body">
             <h2 className="text-center text-2xl font-bold">Login Now</h2>
             <form onSubmit={log}>
             
               {/* <!-- Email --> */}
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input name='email' type="email" placeholder="Enter your email" className="input input-bordered border-0" required />
               </div>
       
               {/* <!-- Password --> */}
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input name='password' type="password" placeholder="Enter password" className="input input-bordered border-0" required />
               </div>
       
             
               {/* <!-- Submit --> */}
               <div className="form-control mt-6 text-center">
                 <button className="btn btn-primary">Login</button>
               </div>
             </form>
       
             {/* <!-- Footer --> */}
             <p className="text-sm text-center mt-4">
            Login Done ?
               <Link className='text-blue-600' to={'/'}>Go to Home</Link>
             </p>
           </div>
         </div>
         {/* {
          value && <h1>{value.email}</h1>
         } */}
         <ToastContainer></ToastContainer>
       </div>
    );
};

export default Login;