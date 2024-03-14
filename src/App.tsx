import React from 'react'
import User from './Components/User'
import Users from './Components/Users'

const user = {
  name : "Kona",
  age : 16,
  language :["bangla", "english"],

}
const user1 = {
  name : "Kona",
  age : 16,
  language :["bangla", "english"],

}

const App = () => {
  return (
    <div>
      <User user={user}/>
      <User user={user1}/>
      <Users name="Kongkon" age={21} isRegistered={false} language={["bangla", "english"]}/>
    </div>
  )
}

export default App