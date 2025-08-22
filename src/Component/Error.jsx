import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {

    let err =useRouteError()
    console.log(err ,'error');
  return (
<div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md max-w-lg mx-auto mt-6 space-y-2">
  <h1 className="font-bold text-lg">Error Details</h1>
  <p className="text-sm"><span className="font-semibold">Data:</span> {err.data}</p>
  <p className="text-sm"><span className="font-semibold">Message:</span> {err.error.message}</p>
  <p className="text-sm"><span className="font-semibold">Status:</span> {err.status}</p>
  <p className="text-sm"><span className="font-semibold">Status Text:</span> {err.statusText}</p>
</div>

  )
}

export default Error;