import React from 'react'
type dataProps = {
    status : "success" | "loading" | "error"
}
const DataFetch = ({status}:dataProps) => {
    if(status ==="loading"){
        return <h1>Data is loading...</h1>
    }
    else if(status === "error"){
        return <h3>Data could not fetch</h3>
    }
  return (
    <div>
        
        
        <p>Data is successfully loaded</p>
    </div>
  )
}

export default DataFetch