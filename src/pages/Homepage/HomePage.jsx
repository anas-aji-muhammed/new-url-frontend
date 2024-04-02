
function handleOnclick(){
    console.log("clicked");
}

function HomePage(){
    return (
        <div className="navContainer">
            <input type="text" className="inputField" name="input url"/>
            <button className="shortenURLButton" onClick={handleOnclick}> Shorten URL </button>

        </div>
    );
}

export default HomePage;