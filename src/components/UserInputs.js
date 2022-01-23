import Results from "./Results.js";
import { useEffect, useState } from 'react'
import axios from 'axios'


const UserInputs = () => {

    const [userChoice, setUserChoice] = useState("placeholder");
    const [jokes, setJokes] = useState([]);
    const [apiError, setApiError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [photos, setPhotos] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [userLimitChoice, setuserLimitChoice] = useState(10);
    const [usersDadJokes, setUsersDadJokes] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setuserLimitChoice(userLimitChoice - usersDadJokes.length);
        setSearchTerm(userChoice);
        setSubmit(true);
    }


    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }


    // const handleButtonClick = (e) => {
    //     setRandomButton(true);
    // }

    const apiKey = `34_FRr4gH3efbjKeNMjRmPjTM8phiy64ND24X1GElr8`

    useEffect(() => {
        axios({
            url: `https://api.unsplash.com/search/photos`,
            dataResponse: `json`,
            method: `GET`,
            params: {
                client_id: apiKey,
                query: searchTerm,
                per_page: 10,
            }
        }).then((response) => {
            setPhotos(response.data.results);
        }).catch((error) => {
            setApiError(error)
        })
    }, [searchTerm]);


    const randomNumber = Math.floor(Math.random() * 64);


    

    useEffect(() => {
        if(submit){
            axios({
                url: `https://icanhazdadjoke.com/search`,
                dataResponse: `json`,
                method: `GET`,
                headers: {
                    "Accept": "application/json"
                },
                params: {
                    limit: userLimitChoice,
                    page: randomNumber,
                    total_jokes: 100
                }
            }).then((response) => {
                setJokes(response.data.results)
            }).catch((error) => {
                setApiError(error)
            })
        }
    }, [submit])

    
    
    

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
            </div>
            <Results photos={photos} jokes={jokes} />
        </>
    )

}

export default UserInputs;