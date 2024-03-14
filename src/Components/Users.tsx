import React from 'react'

type userProps = {
    name : string;
    age : number;
    isRegistered : boolean;
    language : string[];
}
const Users = ({name, age, isRegistered, language}:userProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{age} year old</p>
        {isRegistered? <p>Registered User</p> : <p>Not Registered User</p>}
        <p>Speaks : 
            {/* {language?.map((lang, index)=>{
                return <span key= {index}> {lang} </span>
            })} */}
            {language.length > 0 ? 
            ( <span>{language[0]}, {language[1]}</span>)
            : (<span>no language</span>)}
        </p>
    </div>
  )
}

export default Users