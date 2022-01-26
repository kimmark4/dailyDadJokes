import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";



const Results = ({ submit, userLimitChoice, searchTerm }) => {

  const [randomJokes, setRandomJokes] = useState([]);
  const [photos, setPhotos] = useState([]);
  // const [userData, setUserData] = useState([]);
  const location = useLocation();
  const usersJokes = (location.state);
  const totalJokes = [...randomJokes, ...usersJokes]


  useEffect(() => {
    axios({
      url: `https://api.unsplash.com/search/photos`,
      dataResponse: `json`,
      method: `GET`,
      params: {
        client_id: `34_FRr4gH3efbjKeNMjRmPjTM8phiy64ND24X1GElr8`,
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
        setRandomJokes(response.data.results)
      })
    }
  }, [submit])


  // creating a new array with the data of the photos and the jokes combined into each objects
  const userData = photos.map((singularPhoto, index) => {
    return { ...singularPhoto, jokes: totalJokes[index] }
  })

  console.log(userData);



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
        <div className="slideshowSlider" style={{ transform: `translate3d(${- index * 100}%,0,0)` }}>
          {
            userData.map((singleSlide) => {
              return (
                <div className='slide' key={singleSlide.id}>
                  <img src={singleSlide.urls.small} alt={singleSlide.alt_description} />
                  <p>{singleSlide.jokes.joke}</p>
                </div>
              )
            })
          }
          <Link to='/' >Go back</Link>
        </div>
      </div>

    </>

  )
}

export default Results;