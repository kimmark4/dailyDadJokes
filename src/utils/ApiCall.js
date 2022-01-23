import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Fragment } from 'react/cjs/react.production.min';



const ApiCall = () => {
// const [randoJk, setRandojk] = useState("");
const randomNumber = Math.floor(Math.random() * 100);

// / performing the network request
// const [apiData, setApiData] = useState('');
const [apiError, setApiError] = useState(false); 
const [jokes, setJokes] = useState([]);


useEffect( () => {
     
          return axios({
               url: `https://icanhazdadjoke.com/search`,
               dataResponse: `json`,
               method: `GET`,
               headers: {
               "Accept": "application/json"
               },
               params: {limit: 10,
                    page: randomNumber,
                    total_jokes: 100
               }
          }).then((response) => {
               // setApiData(response.data.results);
               const dataResults = (response.data.results);
               setJokes(dataResults);

          }).catch((apiError) => {
               setApiError(true)
          })
}, [])


return(
     // setDadJoke(response.data.joke)
     // console.log(dataResults)
     // <>
     //      {apiData.map((item, value) => {
     //           // return(
     //           // // <div>
     //           // // <p>{apiData}</p>
     //           // // </div>
     //           // )
     //      }  )} 
     // </>
     <>
     {     
          jokes.map( (joke) => {
          return(
               <div key={joke.id}>
               <p>{joke.joke}</p>
               </div>
          )
          })
          }
     </>

     )
}
export default ApiCall;