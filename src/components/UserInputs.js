import Results from "./Results.js";
import { useEffect, useState } from 'react'
import axios from 'axios'


const UserInputs = () => {

    const [userChoice, setUserChoice] = useState("placeholder");
    const [searchTerm , setSearchTerm] =useState('');
    const [photos, setPhotos] = useState([]);

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(userChoice);

    }

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