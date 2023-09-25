const Modal = (props) => {
  return (
    <>
      <div className=" fixed left-0 top-0 flex justify-center items-center w-full h-full z-9">
        <dialog className=" overflow-hidden w-4/6 h-3/6 z-20 bg-slate-300" open>
         {props.children}
        </dialog>
        <div className=" z-10 bg-black w-full flex h-full bg-opacity-80 "></div>
      </div>
    </>
  );
};

export default Modal;
