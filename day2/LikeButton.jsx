
import { useState } from "react";

export default function LikeButton() {
    let [isLIked, setIsLIked] = useState(false);
    let toggleLike = () => {
        
        setIsLIked( !isLIked);
       
    };
    let likeStyle={color:"red"};


    return (
        <div>
            <p onClick={toggleLike}>
                
                    {isLIked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ):(
                <i className="fa-regular fa-heart"></i>
    )}
            </p>
        </div>
    );

}
