import { useState } from "react";
import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";

function App() {

  const [userInput , setUserInput] = useState({
    initialInvestment : 10000 ,
    annualInvestment : 1200 ,
    expectedReturn : 6 ,
    duration : 10 ,
});

const inputIsValid = userInput.duration >= 1 ;

function handleChange(inputIdentifier , newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier] : +newValue // by adding + ==> it converts the string into a integer value
        };
    });
}

  return (
    <>
        <Header></Header>
        
        <UserInput 
        onChange={handleChange}
        userInput={userInput}
        ></UserInput>
        {!inputIsValid && ( <p className="center">Please enter a duration greater than zero ! </p> )}
        {inputIsValid && <Results input={userInput}></Results>}
    
    </>

  )
}

export default App
