import { AiFillDollarCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiHomeGearLine } from "react-icons/ri";

const Property = () => {
    return (
        <div className="mt-10">
            <div className="relative">
                <img className="w-full h-96 " src="https://img.freepik.com/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg" alt="" />
                <div className="absolute -bottom-20 right-56">
                    <div className="px-3 bg-[#FFFFFF] w-[800px] pb-6 rounded-md shadow-xl">
                        <div className="navbar bg-[#FFFFFF]">
                            <div className="navbar-start gap-5">
                                <a href="">Buy</a>
                                <a href="">Rent</a>
                                <a href="">PG</a>
                                <a href="">Plot</a>
                                <a href="">Commercial</a>
                            </div>
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <CiSearch className="text-2xl" />
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            <div className="grid grid-cols-3 gap-5 mt-5">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold flex items-center gap-1">
                                            <FaLocationDot className="text-[#EE6611] text-lg" />
                                            Your Location</span>
                                    </div>
                                    <select className="select rounded-none bg-[#ECF5FF]">
                                        <option> </option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold flex items-center gap-1">
                                            <RiHomeGearLine className="text-[#EE6611] text-lg" />
                                            Property Type</span>
                                    </div>
                                    <select className="select rounded-none bg-[#ECF5FF]">
                                        <option> </option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold flex items-center gap-1">
                                            <AiFillDollarCircle className="text-lg text-[#EE6611]" />
                                            Budget</span>
                                    </div>

                                    <input type="number" placeholder="" className="input rounded-none w-full bg-[#ECF5FF]" />
                                </label>
                            </div>
                            <button className="btn btn-primary text-[#FFFFFF] rounded-md w-full mt-5"><CiSearch className="text-2xl" /> Find Property</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;