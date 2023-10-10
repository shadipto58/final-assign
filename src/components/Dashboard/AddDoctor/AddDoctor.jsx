import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddDoctor = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['appointmentSpecility'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/appointmentSpecility');
            const data = res.json();
            return data;
        }
    })
    // console.log(specialties);
    // 6f58f526709e7190405ed3cd1db3f661
    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=6f58f526709e7190405ed3cd1db3f661';
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData?.data?.url
                    }

                    fetch('http://localhost:3000/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            reset();
                        })
                }
            })
    }


    return (
        <div>
            <h2 className='text-2xl mb-7'>Add a New Doctor</h2>
            <div className=''>
                <div className='w-[540px] p-12 rounded-2xl bg-white'>
                    <form onSubmit={handleSubmit(handleAddDoctor)} className='' >
                        <div className="form-control w-full ">
                            <label className="text-sm text-black font-semibold mb-2.5">Name</label>
                            <input {...register("name", { required: "Please enter your name" })} type="text" placeholder='Enter Your Name' className="input input-bordered w-full" />
                            {errors.name && <label className='text-red-500'>{errors.name?.message}</label>}
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Email</label>
                            <input {...register("email", { required: "Please enter your email" })} type="email" placeholder='Enter Your email' className="input input-bordered w-full" />
                            {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Specialty</label>
                            <select {...register('specialty')} className="select select-bordered ">
                                {
                                    specialties?.map(specialty =>
                                        <option key={specialty._id} value={specialty.name}>
                                            {specialty.name}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-control w-full mt-5">
                            <label className="text-sm text-black font-semibold mb-2.5">Photo</label>
                            <input type="file" {...register("image", { required: "Please enter your image" })} className="file-input file-input-bordered w-full" />
                            {errors.image && <label className='text-red-500'>{errors.image?.message}</label>}
                        </div>
                        <div className="form-control w-full mt-5">
                            <input type="submit" value='Add' className="input input-bordered w-full bg-accent text-white cursor-pointer" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;