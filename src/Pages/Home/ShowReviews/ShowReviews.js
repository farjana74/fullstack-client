import React from 'react';
import Rating from 'react-rating';
import "./ShowReviews.css";

const ShowReviews = ({ showData }) => {
    // var Rating = require('react-rating');
    const { name, price, rating, description, time, image } = showData;
    return (
        <div className="col">

            <div className='shadow  CoreValuesCard-height CoreValuesCard-padding '>
                <img className="coreValues-image img-fluid py-2 pb-3" src={image} alt="" width={"160"} />
                <h2 className='coreValuesCard-title'>{name}</h2>
                <p className='coreValuesCard-description '>{description}</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <p className='coreValuesCard-description'>{price}$</p>
                    </div>
                    <div>
                        <Rating className="star-rating text-danger"
                            // emptySymbol="fa fa-star-o "
                            fullSymbol="fa fa-star"
                            initialRating={rating}
                            readonly

                        />
                    </div>
                </div>

                <p className='coreValuesCard-description'>{time}</p>


            </div>

        </div>
    );
};

export default ShowReviews;