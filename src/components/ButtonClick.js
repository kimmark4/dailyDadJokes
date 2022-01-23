//ButtonClick.js

// const [jokeButton]
const customJokes =() =>{

}

// const customSubmit = ()=> {
// //     if 
// // }
const ButtonClick = () => {


return (
    <div className="buttonTextContainer">
        <form className="buttonWrapper">

        <label htmlFor="customJoke1">
            Enter your dad joke:
        </label>
        <input type ="text" id="customJoke1" name="customJoke1"/>
        <button type="submit" id="jokeButton1" name="jokeButton1">Add Your Dad Joke</button>
        <label htmlFor="customJoke2">
            Enter your dad joke:
        </label>
        <input type ="text" id="customJoke2" name="customJoke2"/>
        <button  type="submit" id="jokeButton2" name="jokeButton2">Add Your Dad Joke</button>
        <label htmlFor="customJoke3">
            Enter your dad joke:
        </label>
        <input type ="text" id="customJoke3" name="customJoke3"/>
        <button  type="submit" id="jokeButton3" name="jokeButton3">Add Your Dad Joke</button>
        </form>
    </div>
)

}

export default ButtonClick;