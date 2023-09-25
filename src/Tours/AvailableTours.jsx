import ToursCard from "./ToursCard";
import data from "../data/data.json"

const AvailableTours = () => {
  return (
    <>
      <div className=" bg-balloon bg-black bg-blend-multiply bg-opacity-30 bg-fixed bg-cover flex h-auto">
        <div className="grid grid-cols-4 gap-6 px-20 py-20">
        {
          data.map((item)=>(
            <ToursCard key={item.id} {...item} />
          ))
        }
        </div>
      </div>
    </>
  );
};

export default AvailableTours;
