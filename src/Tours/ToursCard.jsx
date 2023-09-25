import { useDispatch } from "react-redux";
import ArrowIcon from "../Icons/ArrowIcon";
import uiSlice from "../Store/uiSlice";
import editCartSlice from "../Store/editCartSlice";

const ToursCard = props => {

  const dispatch = useDispatch()

  function handlerShowEdit(e,props){
    e.preventDefault()
    dispatch(uiSlice.actions.showEditCart())
    dispatch(editCartSlice.actions.addItemToEditCart(props))
  }
  return (
    <>
      <div className="flex  p-4 rounded-xl bg-slate-100 shadow-xl">
        <form className=" text-center overflow-hidden ">
          <div className=" bg-black overflow-hidden">
            <img
              className=" hover:scale-125 duration-500 "
              src={props.image}
            />
          </div>

          <div className=" p-6 text-xl font-serif">
            <h2>{props.title}</h2>
            <h2 className=" text-yellow-600 leading-10">${props.price}</h2>
            <div>
              <button onClick={(e)=>handlerShowEdit(e,props)} className="flex font-semibold justify-around w-full text-pink-700 px-6 py-2 rounded-md border border-pink-700 hover:bg-pink-700 hover:text-white ">
                Detaylar & Rezervasyon
                <ArrowIcon />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ToursCard;
