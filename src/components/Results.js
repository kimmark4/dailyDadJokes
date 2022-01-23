
import { useEffect, useState } from 'react'
import axios from 'axios'


const Results = ({ photos, jokes }) => {


  return (
    <>
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