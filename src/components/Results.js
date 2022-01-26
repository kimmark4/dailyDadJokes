import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Link, useLocation } from "react-router-dom";



const Results = ({ submit, userLimitChoice, searchTerm }) => {

  const [randomJokes, setRandomJokes] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const usersJokes = (location.state);
  const totalJokes = [...randomJokes, ...usersJokes]



  // calling unsplash API data to get 10 photos. 
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


  // create an icanhazdadjokes API call to get 10 jokes
  // randomNumber variable will allow us to get 10 random jokes from the icanhazdadjokes API
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
  // create this array within a useEffect so that it will render after all the jokes are loaded
  useEffect(()=> {
    const newArray = photos.map((singularPhoto, index) => {
      return { ...singularPhoto, jokes: totalJokes[index] }
    })
    setUserData(newArray)
  },[randomJokes])
  

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