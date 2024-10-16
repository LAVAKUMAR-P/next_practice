import type {Metadata} from 'next'
import React from 'react'
interface data {
  params :{
   productID : string
  }
}

export const generateMetadata = ({params} : data): Metadata =>{
  return{
    title:`Product ${params.productID}`,
    description:`Product ${params.productID}`
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