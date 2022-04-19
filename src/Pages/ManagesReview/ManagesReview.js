import React from 'react';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const ManagesReview = () => {
    const [reviewList, setReviewList] = useState([])
    // console.log(reviewList);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviewList(data))
    }, [])

    // review delete---

    const handleOrderId = (id) => {
        setReviewList(id);
        console.log(id);
    };
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
    return (
        <div className="container ">
            <h1 className="text-primary  text-dark text-center my-5">Manage Review </h1>
            <Table striped bordered hover className=" bg-light text-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User picture</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Review time</th>
                        <th>Rating</th>


                        <th className='w-25'>Action</th>
                    </tr>
                </thead>
                {reviewList?.map((list, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{list?.name}</td>
                            <td><img src={list?.image} alt="" style={{ width: 70 }} /></td>
                            <td>{list?.description}</td>
                            <td>{list?.price}</td>
                            <td>{list?.time}</td>
                            <td>{list?.rating}</td>




                            <td> <button className="btn bg-info text-white p-2">Update</button>| <button onClick={() => handleDeleteOrder(list.id)} className="btn bg-danger p-2">Delete</button>

                            </td>
                        </tr>
                    </tbody>
                ))}

            </Table>
        </div>
    );
};

export default ManagesReview;