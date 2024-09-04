import { BsArrowDownCircle } from "react-icons/bs";

const Stats = () => {
    return (
        <div className="mt-32 grid grid-cols-4 gap-10 px-10">
            <div className=" bg-[#FDF0E7] p-6">
                <h2 className="font-bold font-montserrat text-4xl text-[#D95D0F]">2k+</h2>
                <p className="mt-1">New Flat Listed</p>
                <div className="flex justify-between items-center mt-5">
                    <p className="underline text-[#EE6611]">View all</p>
                    <button><BsArrowDownCircle className="text-2xl text-[#EE6611]" />
                    </button>
                </div>
            </div>
            <div className=" bg-[#ECF5FF] p-6">
                <p className="mt-11">New Flat Listed</p>
                <div className="flex justify-between items-center mt-5">
                    <p className="underline text-[#0059B1]">View all</p>
                    <button><BsArrowDownCircle className="text-2xl text-[#0059B1]" />
                    </button>
                </div>
            </div>
            <div className=" bg-[#FDF0E7] p-6">
                <h2 className="font-bold font-montserrat text-4xl text-[#D95D0F]">2k+</h2>
                <p className="mt-1">New Flat Listed</p>
                <div className="flex justify-between items-center mt-5">
                    <p className="underline text-[#EE6611]">View all</p>
                    <button><BsArrowDownCircle className="text-2xl text-[#EE6611]" />
                    </button>
                </div>
            </div>
            <div className=" bg-[#ECF5FF] p-6">
                <h2 className="font-bold font-montserrat text-4xl text-[#0051A1]">2k+</h2>
                <p className="mt-1">New Flat Listed</p>
                <div className="flex justify-between items-center mt-5">
                    <p className="underline text-[#0059B1]">View all</p>
                    <button><BsArrowDownCircle className="text-2xl text-[#0059B1]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stats;