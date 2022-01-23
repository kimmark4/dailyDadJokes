
import { useEffect, useState } from 'react'
import axios from 'axios'


const Results = ({photos}) => {
    console.log(photos);
      return(  
        <>
      {     
        photos.map( (photo) => {
          return(
            <div key={photo.id}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          )
        })
      }
        </>  
    )
}

export default Results;