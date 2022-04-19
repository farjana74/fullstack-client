import React from 'react';
import "./ShowReview.css";
import { useEffect, useState } from 'react';
import pic1 from "../../../images/Vector.png";
import pic2 from "../../../images/Vector (2).png";
import pic3 from "../../../images/Vector (1).png";
import ShowReviews from '../ShowReviews/ShowReviews';
// https://i.ibb.co/0VxXdLm/cover-2.png,
// https://i.ibb.co/M5FtNyp/cover-1.png,

// https://i.ibb.co/3rww1mm/cover.png,

const ShowReview = () => {
    const [showReview, setShowReview] = useState([])
    console.log(showReview);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setShowReview(data))
    }, [])
    return (
        <div className="container-fluid py-5 text-start">
            <div className="container overflow-hidden ">
                <div className=''>
                    <h2 className=' text-center coreValues-title '>Customert Review</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">

                    {
                        showReview.map(showData => <ShowReviews

                            showData={showData}
                        // key={corValue.id}
                        >

                        </ShowReviews>)
                    }


                </div>
            </div>
        </div>
    );
};

export default ShowReview;