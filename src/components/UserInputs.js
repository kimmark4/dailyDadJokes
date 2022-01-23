
import { useEffect, useState } from 'react'

import { Link } from "react-router-dom";


const UserInputs = () => {

    const [userLimitChoice, setuserLimitChoice] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [userChoice, setUserChoice] = useState("placeholder");
    const [submit, setSubmit] = useState(false);
    const [usersDadJokes, setUsersDadJokes] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setuserLimitChoice(userLimitChoice - usersDadJokes.length);
        setSearchTerm(userChoice);
        setSubmit(true);
      }
    
    
      const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
      }
    
    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                >
                    <select
                        id="category"
                        name="category"
                        onChange={handleUserChoice}
                        value={userChoice}
                    >
                        <option value="placeholder" disabled>Choose Your Category</option>
                        <option value="dogs">Dogs</option>
                        <option value="cats">Cats</option>
                        <option value="bunnies">Bunnies</option>
                    </select>
                    <Link to='/results' >
                        <button type="submit">Submit</button>
                    </Link>
                </form>
            </div>
        </>
    )

}

export default UserInputs;