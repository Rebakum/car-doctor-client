import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content gap-16 lg:gap-5 flex-col lg:flex-row">
                   <div className='lg:w-1/2 relative'>
                   <img src={person} className='w-3/4  rounded-2xl shadow-2xl' />
                   <img src={parts} className='w-1/2 absolute top-1/2 right-5 border-8 rounded-xl border-white shadow-2xl' />

                   </div>
                    <div className='lg:w-1/2 space-y-5'>
                        <p className='text-3xl text-orange-500 font-bold'>About us</p>
                        <h1 className="text-5xl font-bold">We are quilified &of experience
                         in this fild!</h1>
                        <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;