import { useSelector } from "react-redux";
import EditRezervationCart from "./Cart/EditRezervationCart";
import Modal from "./Cart/Modal";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Section from "./Layout/Section";

function App() {
  const showEditCart = useSelector((state) => state.ui.editCartIsVisible);

  return (
    <>
      {showEditCart && (
        <Modal>
          <EditRezervationCart />
        </Modal>
      )}
      <Section />
      <Footer />
    </>
  );
}

export default App;
