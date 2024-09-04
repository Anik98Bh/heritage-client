import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const PopularProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => {
                setProperties(data)
                setLoading(false)
            })
    }, []);

    console.log("prop", properties);

    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold font-montserrat">Popular Properties</h2>
                <p className="text-[#0059B1] underline font-bold">See all propeety</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    properties.map(property => <div className="bg-[#F9FAFB]">
                        <figure>
                            <img
                                src={property.image}
                                alt="" />
                        </figure>
                        <div className="mt-3 px-4 pb-2">
                            <div className="flex justify-between">
                                <p className="bg-[#C5E2FF] rounded px-1">Apartment </p>
                                <p className="font-medium">Ready to Move</p>
                            </div>
                            <hr className="border-2 my-2" />
                            <h2 className="font-bold font-montserrat text-xl">{property.property_name}</h2>
                            <p className="mt-2 flex items-center gap-1"><CiLocationOn className="text-2xl text-[#EE6611] " /> {property.location}</p>
                            <p className="font-bold font-montserrat text-xl mt-4">{property.amount}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProperties;
