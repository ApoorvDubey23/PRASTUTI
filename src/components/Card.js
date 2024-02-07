import { useState } from "react";
function Card({ id, image, info, price, name, removeTour }) {
    // we can also receive objects like this
    // it received removeTour as a prop from the tours.js
    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}....`;
    // the text description is to be shown permanently

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                        {/* here we have done show less or read more on the basis of current
                        state of readmore variable...and this activates on a click so we have set 
                        an onclick handler to it as well */}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                {/* removeTour function ki definition app.js me hai
                removeTour function me id pass kr rhe kyuki remove hone wale card ki id isi function me hai 
                we have passed the id of the card to the */}
                Not Interested
            </button>
        </div>

    );
}
export default Card;