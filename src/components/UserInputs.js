import { useEffect, useState } from 'react'

import { Link, useNavigate } from "react-router-dom";



const UserInputs = ({ propTerm, propLimit, propSubmit }) => {

    const [userLimitChoice, setuserLimitChoice] = useState(10);
    const [userChoice, setUserChoice] = useState("placeholder");
    const [jokeNumberOne, setJokeNumberOne] = useState("");
    const [jokeNumberTwo, setJokeNumberTwo] = useState("");
    const [jokeNumberThree, setJokeNumberThree] = useState("");
   
    const navigate = useNavigate();
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const jokeData = [{joke: jokeNumberOne}, {joke: jokeNumberTwo}, {joke: jokeNumberThree}];
        const filteredJokeData = jokeData.filter( (banana) => {
            return banana.joke !== ""
        })
        propTerm(userChoice);
        propLimit(userLimitChoice - filteredJokeData.length);
        propSubmit(true);
        navigate('/results',
        { 
            state: filteredJokeData
        })
    }

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    
 
    return (
        <>
            <div>
                <form
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <select
                        id="category"
                        name="category"
                        onChange={handleUserChoice}
                        value={userChoice}
                    >
                        <option value="placeholder" disabled>Choose Your Category</option>
                        <option value="dogs">Dogs</option>
                        <option value="cats">Cats</option>
                        <option value="bunnies">Bunnies</option>
                    </select>
                    <div>
                        <input
                            type="text"
                            value={jokeNumberOne}
                            placeholder="Enter your dad joke"
                            onChange={e => setJokeNumberOne(e.target.value)}
                        />
                        <p>
                            <strong>{jokeNumberOne}</strong>
                        </p>
                        <input
                            type="text"
                            value={jokeNumberTwo}
                            placeholder="Enter your dad joke"
                            onChange={e => setJokeNumberTwo(e.target.value)}
                        />
                        <p>
                            <strong>{jokeNumberTwo}</strong>
                        </p>
                        <input
                            type="text"
                            value={jokeNumberThree}
                            placeholder="Enter your dad joke"
                            onChange={e => setJokeNumberThree(e.target.value)}
                        />
                        <p>
                            <strong>{jokeNumberThree}</strong>
                        </p>
                    </div>
                    <button type='submit'>Submit</button>

                </form>
                {/* <button >userinputjs button</button> */}
            </div>
        </>
    )

}

export default UserInputs;