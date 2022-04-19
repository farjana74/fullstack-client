import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import ShowReview from './ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>


        </div>
    );
};

export default Home;
