import axios from 'axios';
import { useEffect, useState } from 'react';



const ApiCall = () => {

// / performing the network request
     const [apiData, setApiData] = useState("");


useEffect(() => {
     
          axios({
               url: `https://icanhazdadjoke.com/`,
               dataResponse: `json`,
               method: `GET`,
               headers: {
               "Accept": "application/json"
          }
          }).then((response) => {
          console.log(response.data);
               setApiData(response.data.joke);
          })
}, [])


return(
     <p>{apiData}</p>
)

}

export default ApiCall;