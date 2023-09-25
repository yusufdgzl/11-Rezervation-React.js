import { useDispatch, useSelector } from "react-redux";
import rezervationCartSlice from "../Store/rezervationCartSlice";

const Rezervations = () => {
  const item = useSelector((state) => state.rezervation.items);

  const dispatch = useDispatch()

  function handlerRemoveRezervation(e,id){
    e.preventDefault()
    dispatch(rezervationCartSlice.actions.removeRezervationToCart(id))
  }

  return (
    <>
      <div className=" bg-balloon bg-cover bg-blend-multiply bg-opacity-70 bg-black bg-fixed  h-screen w-full max-h-screen overflow-y-scroll ">
        {item.map((item) => (
          <div className="flex h-full w-full items-center  " key={item.id}>
            <div className="w-3/6 flex-col flex px-16 justify-around h-4/6 bg-white bg-opacity-60 font-semibold ">
              <h2 className="text-3xl font-bold text-orange-800">{item.title}</h2>
              <h2 className="text-2xl">Tur Fiyatı : ${item.price}</h2>
                <h2 className="text-2xl">Kişi Sayısı : {item.people}</h2>
              <h2 className="text-2xl">Tarih : {item.date}</h2>
              <h2 className="text-2xl">Toplam Fiyat : ${item.totalPrice}</h2>
              <button onClick={(e)=>handlerRemoveRezervation(e,item.id)} className=" mx-auto text-white bg-orange-900 transition-all hover:bg-orange-700 h-10 px-10 rounded-full ">Rezervasyonu İptal Et</button>
            </div>
            <img className=" w-3/6 h-4/6 " src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Rezervations;
