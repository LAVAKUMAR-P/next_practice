"use client"
export default function ErrorBoundary ({error,reset}:{error:Error,reset:()=> void}){
    return <><h1 onClick={reset}>{error.message}</h1></>
}