import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';





const Login = () => {



    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    // email sign in

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    // google sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            console.log('User signed in with Google');
            navigate(from, { replace: true })
        }).catch(error => {
            console.log('Error signing in with Google:', error);
        });
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  lg:w-[1000px]">
                        <div className='card-body'>

                            <h1 className='text-center text-5xl font-bold text-[#026eb7]'>Sign In</h1>


                            <form onSubmit={handleLogin} className="" >
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered rounded-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-none" required />
                                    <label className="label">
                                        <p> Don't Have an Account? <Link to="/register" className='link text-[#026eb7]  text-lg'>Register</Link></p>

                                    </label>
                                </div>
                                <p className='text-red-400 '>{error}</p>
                                <div className="form-control mt-6 ml-1">
                                    <button className=" btn rounded-none  border-[#026eb7] hover:bg-[#026eb7] hover:text-white">Sign In</button>
                                </div>

                            </form>
                        </div>
                        <div className="form-control  ">
                            <div className="divider">OR</div>

                            <div className='card-body'>

                                <div onClick={handleGoogleSignIn}
                                    className='btn rounded-none  border-[#026eb7] hover:bg-[#026eb7] hover:text-white text-xl font-semibold  '>
                                    <div className='mx-auto flex justify-center items-center gap-2'>
                                        <p><FcGoogle size={32} /></p>
                                        <p>Google</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;