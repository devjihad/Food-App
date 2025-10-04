// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../ContextApi/Context';
import appe from '../../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth/web-extension';
import { toast, ToastContainer } from 'react-toastify';


const Singin = () => {
 const Auth = getAuth(appe)
  const sign=(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    const password =e.target.password.value
    const email =e.target.email.value
    console.log(name,image,password,email)
    createUserWithEmailAndPassword(Auth, email, password)
    .then(result=>{
        const user =result.user
        toast('Accout create successfull')
        console.log(user)
        
    })
    .catch(err=>{
      console.log(err.message)
    })
   
  }
    return (
       < div className="flex items-center justify-center min-h-screen bg-white py-10">
  <div className="card w-full max-w-sm shadow-2xl bg-black  text-white">
    <div className="card-body">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
      <form onSubmit={sign}>
        {/* <!-- Name --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered border-0" required />
        </div>
        {/* <!-- Phote --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image </span>
          </label>
          <input type="text" name='image' placeholder="Enter your image URL" className="input input-bordered border-0" required />
        </div>

        {/* <!-- Email --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered border-0" required />
        </div>

        {/* <!-- Password --> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter password" className="input input-bordered border-0" required />
        </div>

      

        {/* <!-- Submit --> */}
        <div className="form-control mt-6 text-center">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>

      {/* <!-- Footer --> */}
      <p className="text-sm text-center mt-4">
        Have an account?
        <Link className='text-blue-600' to={'/login'}>Login</Link>
      </p>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>

    );
};

export default Singin;