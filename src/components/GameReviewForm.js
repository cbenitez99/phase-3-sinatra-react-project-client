import React, {useState} from "react";

function GameReviewForm({handlePost}){
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        platform: "",
        // user_name: "",
        // content: ""
    });

    function handleSubmit(){
        const URL = `http://localhost:9292/games/review`
        const options = {
          method: "POST",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(formData)
        }
        fetch(URL, options)
        .then(res => res.json())
        .then(data => handlePost(...data,[formData]))
    };

    function handleChange(event){
        // event.target.preventDefault()
        setFormData({...formData, [event.target.id] : event.target.value});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="title" type="text" placeholder="Enter Game Title Here" onChange={handleChange} value={FormData.title}/>
            <input id="platform" type="text" placeholder="Enter Platform Here" onChange={handleChange} value={FormData.platform}/>
            <input id="price" type="number" min="0" placeholder="Enter Game Price Here" onChange={handleChange} value={FormData.price}/>
            <input id="user_name" type="text" placeholder="Enter Your Name" onChange={handleChange} value={FormData.user_name}/>
            <input id="content" type="text" placeholder="Write Review..." onChange={handleChange} value={FormData.content}/>
            <button id="button" type="submit">Add Review</button>
        </form>
    )
};

export default GameReviewForm;