import React from 'react'
import Post from './Components/Post'
// import Button from './Components/Button'
// import UserDemo from './Components/userDemo'
// import DataFetch from './Components/DataFetch'
// import User from './Components/User'
// import Users from './Components/Users'

//object

// const user = {
//   name : "Kona",
//   age : 16,
//   language :["bangla", "english"],

// }
// const user1 = {
//   name : "Kona",
//   age : 16,
//   language :["bangla", "english"],

// }

//array of object 

// const userDemo = [
//   {
//     id : 1, 
//     name : "dalim",
//     age : 22,
//     language : ["bangal", "english"]
//   },
//   {
//     id : 2, 
//     name : "mehedi",
//     age : 24,
//     language : ["bangal", "english", "hindi"]
//   }
// ]

const App = () => {
  return (
    <div>
      {/* <User user={user}/>
      <User user={user1}/>
      <Users name="Kongkon" age={21} isRegistered={false} language={["bangla", "english"]}/> */}
      {/* <UserDemo userDemo={userDemo}/> */}
      {/* <DataFetch status="success"/> */}
      {/* <Button>click me</Button> */}
      <Post/>
    </div>
  )
}

export default App