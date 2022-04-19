import React from 'react';
import "./Products.css";
import picture1 from "../../../images/Vector.png";
import picture2 from "../../../images/Vector (1).png";
import picture3 from "../../../images/Vector (2).png";

const Products = () => {
    return (
        <div className="container-fluid py-5 text-start">
            <div className="container overflow-hidden ">
                <div className=''>
                    <h2 className=' text-center coreValues-title '>Our Valuable Products</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                    <div className="col">

                        <div className=' border  CoreValuesCard-height CoreValuesCard-padding '>
                            <img className="coreValues-image img-fluid py-2" src={picture1} alt="" width={"36"} />
                            <h2 className='coreValuesCard-title '>Products</h2>
                            <p className='coreValuesCard-description'>Most Valuable products</p>
                        </div>

                    </div>
                    <div className="col">

                        <div className=' border  CoreValuesCard-height CoreValuesCard-padding '>
                            <img className="coreValues-image img-fluid py-2" src={picture2} alt="" width={"36"} />
                            <h2 className='coreValuesCard-title '>Products</h2>
                            <p className='coreValuesCard-description'>Most Valuable products</p>
                        </div>

                    </div>
                    <div className="col">

                        <div className=' border  CoreValuesCard-height CoreValuesCard-padding '>
                            <img className="coreValues-image img-fluid py-2" src={picture3} alt="" width={"36"} />
                            <h2 className='coreValuesCard-title '>Products</h2>
                            <p className='coreValuesCard-description'>Most Valuable products</p>
                        </div>

                    </div>

                </div>
            </div >
        </div>
    );
};

export default Products;