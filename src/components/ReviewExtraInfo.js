// import React, {useState, useEffect} from 'react'
// import { useParams } from "react-router-dom"
// export default function ReviewExtraInfo({reviews}) {
    
//     const [review, setreview] = useState({})
//     const { id } = useParams()
//     useEffect(() => {
//       if(!!reviews){
//         let currentreview = reviews.find(reviewData => reviewData.id === Number(id))
//         setreview({...currentreview})
//       } 
//     }, [setreview, id, reviews])

//     return (
//         <div>
//             {!!reviews.id ? 
//             <div>
//             {reviews.title} - {reviews.artist.name} - {reviews.artist.hometown}
//             <br></br>
//             <p>Likes: {reviews.likes}</p>
//             </div>
//             : 
//             <div>
//                 Loading
//             </div>
//         }
//         </div>
//     )
// }