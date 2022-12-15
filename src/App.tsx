import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from "./components/product";
import { useProducts } from "./hooks/products";
import CreateProduct from "./components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "./models";
import {ModalContext} from './context/ModalContext'


function App() {

  const {loading, error, products, addProduct} = useProducts()
  const {modal, close, open} = useContext(ModalContext)


  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }


  return (
    <>
    <div className="pt-10 pr-10 flex justify-end">
        <button onClick={open} className="bg-red-400 px-6 py-2 rounded hover:bg-red-600 text-white">
          Add product
        </button>
      </div>

    <div className="container mx-auto max-w-screen-2xl pt-5 flex justify-center flex-wrap gap-4">
      
      {loading && <Loader />}
      {error && <ErrorMessage error='Error Network' />}
     
     {!error && products.map(product => < Product product={product} key={product.id} />)}

     {modal && <Modal onClose={close} title='Create new product'>
     <CreateProduct onCreate={createHandler} />
     </Modal>}
      
    </div>
    </>
  )
 
}

export default App;