import React, {useState, useEffect} from "react"

function GameReviewForm(){
    const [formData, setFormData] = useState({
        title: "",
        platform: "",
        price: 0,
        user_name: "",
        content: ""
    })

    function handleChange(event){
        setFormData({...formData, [event.target.id] : event.target.value});
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id="title" type="text" placeholder="Enter Game Title Here" onChange={handleChange} value={FormData.title}/>
            <input id="platform" type="text" placeholder="Enter Platform Here" onChange={handleChange} value={FormData.platform}/>
            <input id="price" type="number" min="0" placeholder="Enter Game Price Here" onChange={handleChange} value={FormData.price}/>
            <input id="username" type="text" placeholder="Enter Your Name" onChange={handleChange} value={FormData.user_name}/>
            <input id="content" type="text" placeholder="Write Review..." onChange={handleChange} value={FormData.content}/>
            <button id="button" type="submit">Add Review</button>
        </form>
    )
}

export default GameReviewForm;