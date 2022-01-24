
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const Results = ({ submit, userLimitChoice, searchTerm }) => {
  
  const [jokes, setJokes] = useState([]);
  // const [apiError, setApiError] = useState(false);
  const [photos, setPhotos] = useState([]);
  


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
    })
  }, [searchTerm]);



  const randomNumber = Math.floor(Math.random() * 64);

  useEffect(() => {
    if (submit) {
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
      })
    }
  }, [submit])


  return (
    <>
    <h1>helloooooo</h1>
      {
        photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          )
        })
      }
      {
        jokes.map((singularJoke) => {
          return (
            <div key={singularJoke.id}>
              <p>{singularJoke.joke}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default Results;