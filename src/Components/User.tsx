import React from 'react'

type userProps = {
  user: {
    name: string;
    age: number;
    language: string[];
};
}
const User = ({user}:userProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>Speaks : 
        {user.language?.map((lang, index)=>{
          return <span key={index}> {lang} </span>
        })}
      </p>
    </div>
  )
}

export default User