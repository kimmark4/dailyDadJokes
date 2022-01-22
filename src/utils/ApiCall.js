import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';



const ApiCall = () => {
const [randoJk, setRandojk] = useState("");
const randomNumber = Math.floor(Math.random() * 100);
     
// / performing the network request
     const [apiData, setApiData] = useState("");


useEffect(() => {
     
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
          console.log(response.data.results);
               setApiData(response.data.results);

          })
}, [])


return(
     // setDadJoke(response.data.joke)
     <>
           {apiData.map((item, value) =>{
               return(
               <div>
               <p>{apiData}</p>
               </div>
               )
          }  )} 
     </>


     )
}
export default ApiCall;