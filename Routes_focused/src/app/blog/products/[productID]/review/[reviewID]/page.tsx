import React from 'react'
type productData = string|number
interface data {
    params : {
        productID : productData,
        reviewID: string,
    }
}

function page({params}:data) {
  if(params.productID == 1){
   throw new Error("Failed to fetch")
  }
  return (
    <div>product id {params.productID} and reviewId {params.reviewID}</div>
  )
}

export default page