
import { useState } from "react";

const UserInputs = () => {

    const [userChoice, setUserChoice] = useState("placeholder");
    const [getRandomJoke, setRandomJoke] = useState("");
    const [randomButton, setRandomButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    const handleButtonClick = (e) => {
        setRandomButton(true);

    }

    return (
        <>
            <div>
                <button>Need a Laugh?</button>
                <form
                    onSubmit={handleSubmit}
                >
                    <select
                        id="photoOrientation"
                        name="photoOrientation"
                        onChange={handleUserChoice}
                        value={userChoice}
                    >
                        <option value="placeholder" disabled>Choose Your Category</option>
                        <option value="dogs">Dogs</option>
                        <option value="cats">Cats</option>
                        <option value="bunnies">Bunnies</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>


        </>
    )

}

export default UserInputs;