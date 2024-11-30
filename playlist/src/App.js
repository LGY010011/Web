import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import { useSelector } from "react-redux";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";

function App() {
  const dispatch=useDispatch();
  const { cartItems}=useSelector((store)=>store.cart);
  const { isOpen}=useSelector((store)=>store.modal);

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <CartContainer/>
        {isOpen && 
        <ModalPortal>
            <Modal>
              <h4>담아두신 모든 음반을 삭제할건가요?</h4>
            </Modal>
        </ModalPortal>
        }
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
