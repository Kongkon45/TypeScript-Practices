import React from 'react'

// string, number, boolean, null, void 
type userProps = {name:string; age:number; isRegistered:boolean}

const User = ({name, age, isRegistered}:userProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>kongkon@gmail.com</p>
        <p>{age} year old</p>
        {isRegistered? <p>Register user</p>:<p>not register user</p>}
    </div>
  )
}

export default User