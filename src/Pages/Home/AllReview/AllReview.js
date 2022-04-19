import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const AllReview = () => {
    const ShowReview = () => {
        const [reviewList, setReviewList] = useState([])
        console.log(reviewList);


        const handleDeleteOrder = id => {
            const url = `http://localhost:5000/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remainingUsers = reviewList.filter(service => service._id !== id)
                        setReviewList(remainingUsers)



                    }
                })

        }
        useEffect(() => {
            fetch('http://localhost:5000/reviews')
                .then(res => res.json())
                .then(data => setReviewList(data))
        }, [])
        return (
            <div><h3>
                dshfbkshd
            </h3></div>
            // <div className="container ">
            //     <h1 className="text-primary  text-dark text-center">Manage Review </h1>
            //     <Table striped bordered hover className=" bg-light text-dark">
            //         <thead>
            //             <tr>
            //                 <th>#</th>
            //                 <th>User Name</th>
            //                 <th>User picture</th>
            //                 <th>Product Description</th>
            //                 <th>Product Price</th>
            //                 <th>Review time</th>
            //                 <th>Rating</th>
            //                 <th>phone</th>

            //                 <th>Action</th>
            //             </tr>
            //         </thead>
            //         {reviewList?.map((list, index) => (
            //             <tbody>
            //                 <tr>
            //                     <td>{index}</td>
            //                     <td>{list?.name}</td>
            //                     <td><img src={list?.image} alt="" /></td>
            //                     <td>{list?.description}</td>
            //                     <td>{list?.price}</td>
            //                     <td>{list?.rating}</td>
            //                     <td>{list?.time}</td>



            //                     <td> <button className="btn bg-info text-white p-2">Update</button>
            //                         {/* <button onClick={() => handleDeleteOrder(manage._id)} className="btn bg-danger p-2">Delete</button> */}
            //                     </td>
            //                 </tr>
            //             </tbody>
            //         ))}

            //     </Table>
            // </div>
        );
    };
}

export default AllReview;