import { useEffect, useState } from 'react'

import { Link, useNavigate } from "react-router-dom";



const UserInputs = ({ propTerm, propLimit, propSubmit }) => {

    const [userLimitChoice, setuserLimitChoice] = useState(10);
    const [userChoice, setUserChoice] = useState("placeholder");
    const [submit, setSubmit] = useState(false);
    const [usersDadJokes, setUsersDadJokes] = useState([]);
    const [jokeNumberOne, setJokeNumberOne] = useState("");
    const [jokeNumberTwo, setJokeNumberTwo] = useState("");
    const [jokeNumberThree, setJokeNumberThree] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        
        event.preventDefault();
        // setuserLimitChoice(userLimitChoice - usersDadJokes.length);
        // setSearchTerm(userChoice);
        // setSubmit(true);
        propTerm(userChoice);
        propLimit(userLimitChoice - usersDadJokes.length);
        propSubmit(true);
        if (propSubmit === true ) {
            const addDadJokes = [{jokeNumberOne}, {jokeNumberTwo}, {jokeNumberThree}]
        }
        navigate('/results');
        console.log( `a message`, jokeNumberOne, jokeNumberTwo, jokeNumberThree)

    }


    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);

    }

    const userButton = () => {
        console.log(userChoice);
        // setSearchTerm(propTerm);
        
        
    }
    // console.log(searchTerm);

    useEffect(() => {

        return () => {
            console.log("leaving the page");
            console.log(userChoice);
            handleSubmit();
            
        }
    }, [])

    console.log(propTerm);

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
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
                    <Link to='/results' onClick={ handleSubmit } >Submit</Link>

                </form>
                <button >userinputjs button</button>
            </div>
        </>
    )

}

export default UserInputs;