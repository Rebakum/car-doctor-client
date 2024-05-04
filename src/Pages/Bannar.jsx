import img_1 from '../assets/images/banner/1.jpg'
import img_2 from '../assets/images/banner/2.jpg'
import img_3 from '../assets/images/banner/3.jpg'
import img_4 from '../assets/images/banner/4.jpg'
import img_5 from '../assets/images/banner/5.jpg'
import img_6 from '../assets/images/banner/6.jpg'

const bannar = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img_1} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img_2} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img_3} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img_4} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img_5} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img_6} className="w-full" />
                <div className="absolute flex w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white ">
                    <div className='space-y-4 pl-10 w-1/2 pt-52'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className=' '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptatem ipsam quis voluptate nemo, eius velit deserunt nam sequi.
                        </p>
                        <div>
                            <button className="btn btn-primary mr-5">Descover more </button>
                            <button className="btn btn-secondary">Lested project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default bannar;