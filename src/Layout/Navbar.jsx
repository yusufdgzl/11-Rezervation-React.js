import { useSelector } from "react-redux";
import BalloonIcon from "../Icons/BalloonIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const numberOfRezervation = useSelector(
    (state) => state.rezervation.items.length
  );


  return (
    <>
      <div className="flex w-full justify-between items-center px-32 bg-gradient-to-t from-[#201000] to-[#ab5602]  bg-opacity-70 text-white h-20">
        <NavLink to="/">
          <div className="flex  justify-center items-center">
            <div className="animate-[bounce_3s_ease-in-out_infinite] ">
              <BalloonIcon />
            </div>
            <h1 className=" text-3xl">Balloon Tours</h1>
          </div>
        </NavLink>
        <div>
          <NavLink to="/rezervations">
            <button className="flex justify-between w-72 text-2xl bg-slate-700 py-2 px-7 rounded-full hover:bg-slate-900">
              My Rezervations{" "}
              <p className=" bg-orange-900 px-4 rounded-full">
                {numberOfRezervation}
              </p>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
