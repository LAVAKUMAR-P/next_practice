"use client"


import { useState } from "react"

function page() {
    const [count, setCount] = useState(0);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>{setCount(count+1)}}>page {count}</div>
  )
}

export default page
