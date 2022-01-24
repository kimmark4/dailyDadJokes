
import { useEffect, useState } from 'react'

import { Link } from "react-router-dom";


const UserInputs = ({ propTerm, propLimit, propSubmit }) => {

    const [userLimitChoice, setuserLimitChoice] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [userChoice, setUserChoice] = useState("placeholder");
    const [submit, setSubmit] = useState(false);
    const [usersDadJokes, setUsersDadJokes] = useState(["asdf"]);


    const handleSubmit = (event) => {
        event.preventDefault();
        // setuserLimitChoice(userLimitChoice - usersDadJokes.length);
        // setSearchTerm(userChoice);
        // setSubmit(true);
        propTerm(userChoice);
        propLimit(userLimitChoice - usersDadJokes.length);
        propSubmit(true)
    }


    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    } 

    }

    const userButton = () => {
        console.log(userChoice);
    }


    useEffect(() => {

        return () => {
            console.log("leaving the page");
            handleSubmit();
            
        }
    }, [])



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
                    <Link to='/results' >Submit</Link>

                    <label htmlFor="customJoke1">
                            Enter your dad joke:
                    </label>
                    <input type ="text" id="customJoke1" name="customJoke1"/>
                    <button type="submit" id="jokeButton1" name="jokeButton1"></button>
                    <label htmlFor="customJoke2">
                    Enter your dad joke:
                    </label>
                    <input type ="text" id="customJoke2" name="customJoke2"/>
                    <button  type="submit" id="jokeButton2" name="jokeButton2"></button>
                    <label htmlFor="customJoke3">
                        Enter your dad joke:
                    </label>
                    <input type ="text" id="customJoke3" name="customJoke3"/>
                    <button  type="submit" id="jokeButton3" name="jokeButton3"></button>
                    <button type="submit">Submit</button>

                </form>
                <button onClick={userButton}>userinputjs button</button>
            </div>
        </>
    )



export default UserInputs;