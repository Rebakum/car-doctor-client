import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })






    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-centerp-5 lg:w-1/2 mr-12 mx-auto lg:flex-row-reverse">
                    <img className='w-full ' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp}
                        className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="login" className="btn btn-primary" />
                        </div>
                    </form>
                    <p className=' text-center pb-5'>Already bHave an Account <Link to="/login" className='text-orange-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
