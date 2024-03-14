import React from 'react'

type userDemoProps = {
    userDemo: {
        id: number;
        name: string;
        age: number;
        language: string[];
    }[]
}
const UserDemo = ({userDemo}:userDemoProps) => {
    // console.log(userDemo)
  return (
    <div>
        <h2>User Demo</h2>
        {userDemo.map((user)=>{
            return <div key={user.id}>
                <p>{user.id}</p>
                <h1>{user.name}</h1>
                <p>{user.age}</p>
                <h3>{user.language}</h3>

            </div>
        })}
    </div>
  )
}

export default UserDemo