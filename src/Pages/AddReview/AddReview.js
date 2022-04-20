import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddReview.css";
import { useState } from 'react';
import axios from 'axios';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // const formData = new FormData();
        // formData.append("name", data?.name);
        // formData.append("description", data?.description);
        // formData.append("price", data?.price);
        // formData.append("time", data?.time);
        // formData.append("rating", data?.rating);
        // formData.append("image", data?.image[0]);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succefully')
                    reset();
                }
            })

    }
    return (
        <div className="add-service py-3 container ">

            <form className='input-type border shadow  mx-auto p-5 ' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder=" User Name" />
                <input {...register("description")} placeholder="Product description" />
                <input {...register("price")} placeholder="Product price" />
                <input type="number"{...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating 1-5" />
                <input type="date" {...register("time")} placeholder="Review time" />
                <input {...register("image")} placeholder="Product image url" />




                <input id="submits-button" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;