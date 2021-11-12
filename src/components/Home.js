import React from "react";

function Home() {
    return (
        <div className="home-page">
            <div id="home-text">
                <h2 style={{color: "black"}}>WELCOME TO THE GAME REVIEWER 2.0</h2>
                <h3 style={{color: "black"}}>Click above to navigate!</h3>
                <img className="home-img" 
                src="https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                alt=""/>
            </div>
        </div>
    )
};

export default Home;