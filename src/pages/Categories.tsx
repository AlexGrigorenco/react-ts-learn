



import ErrorMessage from "./../components/ErrorMessage";
import Loader from "./../components/Loader";
import { Product } from "./../components/product";
import { useProducts } from "./../hooks/products";
import { useParams } from "react-router-dom";



const Categories = () => {

  const {loading, error, products} = useProducts()

  const { category } = useParams()


  return ( 
    <>

    <div className="container mx-auto max-w-screen-2xl pt-5 flex justify-center flex-wrap gap-4">
      
      {loading && <Loader />}
      {error && <ErrorMessage error='Error Network' />}
     
     {!error && products.map(product => product.category === category ? < Product product={product} key={product.id} /> : '')}

    </div>

    </>

   );
}
 
export default Categories;