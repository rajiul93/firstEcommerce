import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import Header from '../Header/Header';
import PersonalInformation from '../Personal_Information/PersonalInformation';
import "./Login.css";

function Login() {

  const { useFirebase } = useContext(userContext)
  const { logIn ,user} = useFirebase;

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => logIn(data.email, data.password);
  
  return (
    < section className='lg-c'>
      {user?.email? "":<Header />}
      {!user?.email ?    <div className='login_conter'>
        <h2 className='login_conter_h2'>Login</h2>
        <hr />
        <div className='loginToRegidter'>
          <p>Don't have an account</p>
          <Link to="/register"><button>Register</button></Link>
        </div>
        <div className='login_coustomer'>
          <h2>Customer Login</h2>
          <p>If you have an account, sign in with your email address.</p>


          <form onSubmit={handleSubmit(onSubmit)}>
            
            <input {...register("email", { required: true })} placeholder='Email' />
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} placeholder='Password' />
            {errors.password && <span>This field is required</span>}


            <input type="submit"  value='Login'/>
          </form>
          <span>-or-</span>
          <button className='login_facebook'>Continue with Facebook</button>
          <button className='login_google'>Continue with Google</button>


        </div>
      </div>: <PersonalInformation />
      }
  
    </section>
  )
}

export default Login