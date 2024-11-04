"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const navigate = useRouter()
  const navigaeTO = ()=>{
    navigate.push("/blog")
  }
  return (
    <div>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/news">News</Link>
      <button style={{border:"1px solid red"}} onClick={navigaeTO}>Blog</button>
    </div>
  );
}