"use client"
import { appCtx } from '@/context/appContext'
import React, { useContext, useRef } from 'react'


export const A = () => {
const nameRef =   useRef()
const ctxData=useContext(appCtx)

    const handleClick=()=>{
        const name =nameRef.current.value
   
       ctxData.dispatch({
        type:"NAME_UPDATE",
        payload:name
       })
    }
  return (
    <div>
      <h1>A</h1>
        <h2>NAME:<input ref={nameRef}/></h2>
        <button onClick={handleClick}>SHARE NAME</button>
        </div>
  )
}
