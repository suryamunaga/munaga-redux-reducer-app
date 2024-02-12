"use client"
import { appCtx } from '@/context/appContext'
import React, { useContext } from 'react'


 export const C = () => {
  const ctxData=useContext(appCtx)
  return (
    <div>
      <h1>C  </h1>
        <h2>NAME: {ctxData.state.name}</h2>
    <h2>LOCATION:{ctxData.state.loc}</h2>
    
    
    </div>

  )
}


