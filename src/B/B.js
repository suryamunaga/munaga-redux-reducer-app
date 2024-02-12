"use client"

import { appCtx } from '@/context/appContext'
import React, { useContext, useState } from 'react'

export const    B = () => {
  const ctxData=useContext(appCtx)
    const [loc,setLoc] =   useState("")
    const handleClick=()=>{
      ctxData.dispatch({
        type:"LOCATION_UPDATE",
        payload:loc
      })
   

    }
    
  return (
    <div>
      <h1>B</h1>
        <h1>LOCATION:<input onChange={(eve)=>setLoc(eve?.target?.value) }/></h1>
        <button onClick={handleClick}>SHARE LOCATION</button>
        </div>
  )
}
