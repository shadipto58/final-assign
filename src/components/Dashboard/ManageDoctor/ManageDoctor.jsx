import React from 'react';
import logo from '../../../assets/images/people1.png'
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';


const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/doctors');
            const data = res.json();
            return data;
        }
    })
    //console.log(doctors);

    const deleteDoctor = (doctor) => {
        fetch(`http://localhost:3000/doctors/${doctor?._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${doctor.name} delete successfull`);
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-7'>Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto rounded-2xl">
                <table className="table bg-white">
                    {/* head */}
                    <thead className="bg-[#E6E6E6]">
                        <tr>
                            <th></th>
                            <th className='text-sm text-black font-semibold'>AVATAR</th>
                            <th className='text-sm text-black font-semibold'>NAME</th>
                            <th className='text-sm text-black font-semibold'>SPECIALITY</th>
                            <th className='text-sm text-black font-semibold'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th className='text-lg text-[#898989]'>{i + 1}</th>
                                    <td><div className='w-[40px] h-[40px] rounded-full bg-[#E11244]'><img className='w-[40px] h-[40px] rounded-full' src={doctor.image} alt="" /></div></td>
                                    <td className='text-lg text-[#898989] font-semibold'>{doctor.name}</td>
                                    <td className='text-lg text-[#898989] font-semibold'>{doctor.specialty}</td>
                                    <td><button onClick={() => deleteDoctor(doctor)} className='btn bg-[#E11244] text-white'>Delete</button></td>
                                </tr>
                            )
                        }
                        {/* <tr>
                            <th className='text-lg text-[#898989]'>1</th>
                            <td><div className='w-[40px] h-[40px] rounded-full bg-[#E11244]'><img src={logo} alt="" /></div></td>
                            <td className='text-lg text-[#898989] font-semibold'>Jacob Jones</td>
                            <td className='text-lg text-[#898989] font-semibold'>Teeth Cleaning</td>
                            <td><button className='btn bg-[#E11244] text-white'>Delete</button></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;