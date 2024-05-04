import { useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices] = useState([]);
    useState(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        })
    }, [])
    return (
        <div>
            <div className="flex justify-center items-center flex-col my-20 space-y-5">
                <h3 className="text-3xl font-bold text-orange-500">Our Services</h3>
                <h2 className="text-5xl"> Our Services</h2>
                <p className="text-center w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt molestiae rerum, eum commodi dolorem facilis culpa esse consequuntur, quis mollitia dolorum atque! Porro maxime, numquam laboriosam nostrum repellat ab odit!</p>
            </div>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
           {
                services.map(service =><ServiceCard
                     key={service._id}
                      service={service}
                      ></ServiceCard>)
            }  
            </div>    


        </div>
    );
};

export default Services;