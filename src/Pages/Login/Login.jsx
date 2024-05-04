import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const {signIn} = useContext(AuthContext);
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = (result.user)
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })




    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-centerp-5 lg:w-1/2 mr-12 mx-auto lg:text-left">
                    <img className='w-full ' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}
                        className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>

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
                    <p className='text-orange-500 text-center pb-5'>New to car Doctor <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;