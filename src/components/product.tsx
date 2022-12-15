import React, { useState } from 'react'

import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}


export function Product ({product}: ProductProps) {

  const [details, setDetails] = useState(false)

  const bttnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  const bttnClasses = ['rounded py-2 px-4 border duration-700', bttnBgClassName]


  return (

    <div style={{background: '#F2F2F2'}} className='rounded flex flex-col justify-between items-center gap-4 border px-4 py-2 max-w-xs'>

    <img src={product.image} alt={product.title} className='w-1/4' />

    <p>{product.title}</p>

    <p className='font-bold'>{product.price} $</p>

    
    <button 
    onClick={() => setDetails(prev => !prev)}
    className={bttnClasses.join(' ')} >
      {details ? 'Hide Details' : 'Show Details'}
      </button>

    

    {details && <div>
    <p>{product.description}</p>

    <p className='px-2 py-2 mt-2' style={{background: '#E6E6E6', borderRadius: '6px'}}>Rate: <span style={{ fontWeight: 'bold' }} >{product.rating.rate}</span></p>

    <div className='border mt-2 rounded p-2 text-xs' style={{background: '#F2F2F2'}}>
      <p>category: <span className='pl-2' style={{color: 'grey'}}>{product.category}</span></p>
      <p>quantity in stock: <span className='pl-2' style={{color: 'grey'}}>{product.rating.count}</span></p>
    </div>

    </div>}

    </div>

  )

}