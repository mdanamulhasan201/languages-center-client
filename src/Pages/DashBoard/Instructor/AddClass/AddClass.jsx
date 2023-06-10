import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
console.log(img_hosting_token)

const AddClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { language, description, price, seats } = data;
                    const { displayName, email, photoURL } = user; // Assuming the user object contains the user's name

                    const newClass = {
                        language,
                        description,
                        price: parseFloat(price),
                        displayName,
                        email,
                        photoURL,
                        seats,
                        image: imgURL,
                        status: 'pending'
                    };

                    axiosSecure.post('/classes', newClass)
                        .then(response => {
                            console.log('after posting new classes', response.data);
                            if (response.data.insertedId) {
                                reset()
                                toast.success('Class Added Successfully')

                            }
                        });
                }
            });
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
                                <option disabled>Pick One</option>
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
                            {errors.price?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Price is required
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="flex gap-5 mt-5">

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Available seats*</span>
                            </label>
                            <input type="number" placeholder="Seats" {...register("seats", { required: true })} className="input input-bordered w-full " />
                            {errors.seats?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Seat is required
                                </p>
                            )}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold"> Image*</span>

                            </label>
                            <input  {...register("image", { required: true })} type="file" className="file-input  file-input-bordered w-full max-w-xs" />
                            {errors.image?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    inset a photo
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text font-bold">Class Details*</span>

                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-72" placeholder="Class details"></textarea>
                        {errors.description?.type === 'required' && (
                            <p className='text-red-600 mt-2' role='alert'>
                                Description is required
                            </p>
                        )}
                    </div>




                    <input className="btn btn-outline  mt-4 " type="submit" value="Add Class" />

                </form>
            </div>
        </div>
    );
};

export default AddClass;