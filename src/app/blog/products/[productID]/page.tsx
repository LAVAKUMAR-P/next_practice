import type {Metadata} from 'next'
import React from 'react'
interface data {
  params :{
   productID : string
  }
}

export const generateMetadata = async ({
  params,
}: data): Promise<Metadata> => {
  const { productID } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productID);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
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