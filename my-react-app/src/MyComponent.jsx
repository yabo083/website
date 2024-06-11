import React,{useState} from 'react';

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updeteName = () => {
        setName('John Doe');
    }
    const incrementAge = () => {
        setAge(age+1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updeteName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Name</button>
            
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Set Name</button>
        </div>
  )
}

export default MyComponent