import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "../Icons/CreateIcon";
import BackIcon from "../Icons/BackIcon";
import uiSlice from "../Store/uiSlice";
import { useRef } from "react";
import rezervationCartSlice from "../Store/rezervationCartSlice";


const EditRezervationCart = () => {
  const item = useSelector((state) => state.editcart.items);
  const dispatch = useDispatch();

  function handlerCloseEditCart(e) {
    e.preventDefault();
    dispatch(uiSlice.actions.showEditCart());
  }

  const peopleRef = useRef()
  const dateRef = useRef()
 
  function handlerCreateRezervation(e, item) {
    e.preventDefault();
    dispatch(uiSlice.actions.showEditCart())
   dispatch(rezervationCartSlice.actions.addRezervationToCart({
    ...item, date: dateRef.current.value , people: peopleRef.current.value
   }))
  }

  return (
    <>
      {item.map((item) => (
        <div key={item.id} className="flex justify-between w-full h-full bg-gray-800 items-center  ">
          <img className="h-full  w-3/6" src={item.image} alt="" />

          <div className="  px-10 leading-[50px] text-2xl text-white">
            <h2>{item.title}</h2>
            <h2>${item.price}</h2>
            <form>
              <label htmlFor="people">Number of People : </label>
              <input
                ref={peopleRef}
                className="h-8 text-center text-black w-10 rounded-md"
                type="number"
                defaultValue="1"
              />
              <br />
              <label htmlFor="date">Tarih : </label>
              <input ref={dateRef} className="h-10 mb-10 text-black" type="date" />
              <button
                onClick={(e) => handlerCreateRezervation(e, item)}
                className="flex hover:bg-green-600 text-green-600 hover:text-white border  border-green-600 w-full rounded-3xl justify-center items-center spacehover:bg-green-600 "
              >
                <CreateIcon /> Rezervasyon Oluştur
              </button>
              <button
                onClick={handlerCloseEditCart}
                className="flex justify-center items-center mt-5  hover:text-white border-orange-600 border text-orange-600 w-full rounded-3xl hover:bg-orange-600 "
              >
                <BackIcon />
                Geri Dön
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default EditRezervationCart;
