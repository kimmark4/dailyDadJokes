import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Link, useLocation } from "react-router-dom";



const Results = ({ submit, userLimitChoice, searchTerm }) => {
  
  const [jokes, setJokes] = useState([]);
  const [photos, setPhotos] = useState([]);
  const location = useLocation()

const displayJoke = (location.state);


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
    // setDisplayJoke(location.state);

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


  const delay = 30000;


    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  
    return () => {
      resetTimeout();
    };
  }, [index]);



  return (
    <>
    <div className="slideshow">
      <div className="slideshowSlider" style={{transform: `translate3d(${- index * 100}%,0,0)`}}>
        {
          photos.map((photo) => {
            return(
              <div  className='slide' key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </div>
            ) 
          })
        }
        {
        jokes.map((singularJoke) => {
          return (
            <div className="slide" key={singularJoke.id}>
              <p>{singularJoke.joke}</p>
            </div>
          )
        })
      }
      {
      displayJoke.map((userDisplay, index) => {
        return(
          <div className="slide" key={index}>
            <p>{userDisplay.joke}</p>
          </div>
        )
      })
      } 
      </div>
    </div>
      
  </> 

  )
} 

export default Results;