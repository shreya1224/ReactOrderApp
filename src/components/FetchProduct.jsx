import axios from 'axios'
import React, { useState } from 'react'

export default function FetchProduct() {
    const [products,setProducts]=useState([])
    const [tableHeader,setTableHeader]=useState(false)
    const API='http://localhost:8003/ams/'
    const getProducts=async() =>{
    const response=await axios.get(API+"allproducts")
    console.log(response.data)
    setProducts(response.data)

}
  return (
    <div>

        <button className="btn btn-success" onClick={getProducts}> Get Products</button>
        {
            products?(<table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>{return(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.pname}</td>
                        <td>{product.price}</td>
                      </tr>);
                      })
                }
             
              
            </tbody>
          </table>):null
        }
    </div>
  )
}
