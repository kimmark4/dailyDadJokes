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
    const [jokeNumberOne, setJokeNumberOne] = useState( '' );
    const [jokeNumberTwo, setJokeNumberTwo] = useState( '' );
    const [jokeNumberThree, setJokeNumberThree] = useState( '' );


    const handleSubmit = (e) => {
        e.preventDefault();
        setuserLimitChoice(userLimitChoice - usersDadJokes.length);
        setSearchTerm(userChoice);
        setSubmit(true);
        if (submit === true ) {
            const addDadJokes = [{jokeNumberOne}, {jokeNumberTwo}, {jokeNumberThree}]
        }

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
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
            <Results photos={photos} jokes={jokes} />
        </>
    )

}

export default UserInputs;