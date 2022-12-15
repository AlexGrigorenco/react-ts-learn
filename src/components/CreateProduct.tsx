


import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";


const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://source.unsplash.com/1600x900/?gagets',
  category: 'electronic',
  rating: {
    rate: 41,
    count: 15,
  },
}


interface CreateProductProps {
  onCreate: (product: IProduct) => void
}




const CreateProduct = ({ onCreate }: CreateProductProps) => {

  const [val, setVal] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) =>{
    event.preventDefault()
    setError('')

    if(val.trim().length === 0){
      setError('Please enter valid title!')
      return
    }else{
      productData.title = val
    }

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
    
  }

  return ( 

    <form  onSubmit={submitHandler} className="flex flex-col gap-8">
      <div className="">
      <input
      type='text'
      className='border py-2 px-4 w-3/4'
      placeholder='Enter product title...'
      value={val}
      onChange = {changeHandler} 
      />
      {error && <p className="text-red-600 w-3/4 text-center">{error}</p>}
      </div>
      
      <div>
      
      <button type="submit" className="py-2 px-4 border bg-green-400 rounded hover:text-white">Create product</button>
      </div>
    </form>

   );
}
 
export default CreateProduct;