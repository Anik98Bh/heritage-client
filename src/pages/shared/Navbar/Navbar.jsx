
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-[#ECF5FF]">
                <div className="navbar-start ml-10 font-montserrat gap-4">
                    <a href="">Homepage</a>
                    <a href="">Portfolio</a>
                    <a href="">About</a>
                </div>
                <div className="navbar-center">
                    <a className="">
                        <img className="w-12 h-12" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/heritage-building-1879820-1593514.png?f=webp&w=256" alt="" />
                    </a>
                </div>
                <div className="navbar-end mr-10 font-montserrat gap-4">
                  <a href="">Manage Rentals</a>
                  <a href="">Sign In</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;