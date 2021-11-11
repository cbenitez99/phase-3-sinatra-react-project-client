import React, {useState} from "react";

function ReviewForm({handlePost}){
    const [formData, setFormData] = useState({
        user_name: "",
        content: "",
        title: "",
        price: "",
        platform: ""
    });
    
    function handleSubmit(){
        
        fetch(`http://localhost:9292/reviews`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {handlePost(...data,[formData])})
    };

    function handleChange(event){
        console.log(event.target.value)
        if(event.target.value === ""){
            setFormData({title: "Unknown Game"})
        }
        setFormData({...formData, [event.target.id] : event.target.value});
    };  
    
    return (
        <form onSubmit={handleSubmit}>
            <input id="title" type="text" placeholder="Enter Game Title Here" onChange={handleChange} value={formData.title}/>
            <input id="platform" type="text" placeholder="Enter Platform Here" onChange={handleChange} value={formData.platform}/>
            <input id="price" type="number" step="0.1" min="0" placeholder="Enter Game Price Here" onChange={handleChange} value={formData.price}/>
            <input id="user_name" type="text" placeholder="Enter Your Name" onChange={handleChange} value={formData.user_name}/>
            <textarea id="content" type="text" placeholder="Write Review..." onChange={handleChange} value={formData.content}/>
            <button className="btn waves-effect waves-light" type="submit">Submit Review </button> 
        </form>
    )
};

export default ReviewForm;