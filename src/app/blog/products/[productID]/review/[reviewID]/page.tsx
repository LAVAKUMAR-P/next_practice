import React from 'react'
interface data {
    params : {
        productID : string,
        reviewID: string,
    }
}
function page({params}:data) {
  return (
    <div>product id {params.productID} and reviewId {params.reviewID}</div>
  )
}

export default page