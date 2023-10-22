import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import "./Login.css";

function Register() {

  const { useFirebase } = useContext(userContext)
  const { createWithEmail, user } = useFirebase;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.name)
    createWithEmail(data.name, data.email, data.password)
  };

  return (
    < section className='lg-c'>
      <div className='login_conter'>
        <h2 className='login_conter_h2'>Register</h2>
        <hr />

        <div className='login_coustomer'>



          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder='Name' />
            {errors.name && <span>This field is required</span>}

            <input {...register("email", { required: true })} placeholder='Email' />
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} placeholder='Password' />
            {errors.password && <span>This field is required</span>}


            <input type="submit" />
          </form>
          <Link to="/login"><p>If you have account go to login</p></Link>
          <span>-or-</span>
          <button className='login_facebook'>Continue with Facebook</button>
          <button className='login_google'>Continue with Google</button>

        </div>
      </div>
      {user.displayName}
    </section>
  )
}

export default Register