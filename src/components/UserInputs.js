import Results from "./Results.js";
import { useEffect, useState } from 'react'
import axios from 'axios'


const UserInputs = () => {

    const [userChoice, setUserChoice] = useState("placeholder");
<<<<<<< HEAD
    const [getRandomJoke, setRandomJoke] = useState("");
    const [randomButton, setRandomButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
=======
    const [searchTerm , setSearchTerm] =useState('');
    const [photos, setPhotos] = useState([]);
>>>>>>> 3534c354d5828a5da3eb1b77e6e6c065941184f2

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(userChoice);

    }

<<<<<<< HEAD
    const handleButtonClick = (e) => {
        setRandomButton(true);

    }

=======
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
        }).then((response)=> {
            console.log(response.data.results);
            setPhotos(response.data.results)
        })
    }, [searchTerm]);
   
>>>>>>> 3534c354d5828a5da3eb1b77e6e6c065941184f2
    return (
        <>
            <div>
                <button>Need a Laugh?</button>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        <Results photos={photos}/>
         </>
    )

}

export default UserInputs;