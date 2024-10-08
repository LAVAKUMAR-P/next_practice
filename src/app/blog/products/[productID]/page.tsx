import { useParams } from 'next/navigation'
import React from 'react'
interface data {
  params :{
   productID : string
  }
}
function page({params}:data) {
  //  let {productID} = useParams()
  return (
    <>
    <div>product Datails</div>
    <div>{params.productID}</div>
    </>
  )
}

export default page