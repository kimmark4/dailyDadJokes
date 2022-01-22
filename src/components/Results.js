
import { useEffect, useState } from 'react'
import axios from 'axios'


const Results = () => {

    const [photos, setPhotos] = useState([]);
    const [userInput, setUserInput] = useState("dogs");

    const apiKey = `34_FRr4gH3efbjKeNMjRmPjTM8phiy64ND24X1GElr8`

    useEffect(() => {
        axios({
            url: `https://api.unsplash.com/search/collections`,
            dataResponse: `json`,
            method: `GET`,
            params: {
                client_id: apiKey,
                query: userInput,
                page: 1,
                per_page: 10,
            }
        }).then((response)=> {
            console.log(response.data.results);
        })
    }, []);

    return(
        <>

        </>
    )
}

export default Results;