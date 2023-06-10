import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
// import useAxiosSecure from '../../../../hook/useAxiosSecure';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

console.log(img_hosting_token)
const AddClass = () => {
    // const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    // console.log(data, imgURL)
                    const { language, description, price, seats } = data;
                    const newClass = { language, description, price:parseFloat(price), seats, image: imgURL }
                    console.log(data)
                }
            })
    }


    return (
        <div>

            <Helmet>
                <title>Language | Add Class </title>
            </Helmet>
            <h2 className='text-3xl text-center font-semibold'>Add a New Class</h2>



            <div className="w-full mx-auto px-10 ms-10 shadow-md mt-5 ">



                <form onSubmit={handleSubmit(onSubmit)} className="p-5 md:w-[992px] mx-auto">


                    <div className="flex gap-5">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Class name*</span>

                            </label>
                            <select defaultValue='Pick One' {...register("language", { required: true })} className="select select-bordered">
                                <option disabled>Select Language</option>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Italian</option>
                                <option>Chinese</option>
                                <option>Japanese</option>
                                <option>Russian</option>
                                <option>Arabic</option>
                                <option>Korean</option>

                            </select>

                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />
                        </div>
                    </div>


                    <div className="flex gap-5 mt-5">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Available seats*</span>
                            </label>
                            <input type="number" placeholder="Seats" {...register("seats", { required: true })} className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold"> Image*</span>

                            </label>
                            <input  {...register("image", { required: true })} type="file" className="file-input  file-input-bordered w-full max-w-xs" />

                        </div>
                    </div>


                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-bold">Class Details*</span>

                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-72" placeholder="Class details"></textarea>

                    </div>




                    <input className="btn btn-outline  mt-4 " type="submit" value="Add Class" />

                </form>
            </div>
        </div>
    );
};

export default AddClass;