import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px]"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1530335875407-47f48e04b0aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxpdmluZyUyMHJvb20lMjB3aXRoJTIwd29tZW58ZW58MHx8MHx8fDA%3D)",
                }}>
                <div className="hero-overlay bg-opacity-85"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="text-[#FFFFFF] ">
                        <h1 className="mb-5 text-6xl font-bold font-montserrat">Your Portal to India's <br /> Exquisite Real Estate</h1>
                        <p className="mb-8">
                            Seamlessly connecting you to the heartbeat of India's prime properties.
                        </p>
                        <button className="btn btn-primary text-[#FFFFFF] rounded-none"><CiSearch className="text-2xl" /> Find Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;