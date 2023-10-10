import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/users');
            const data = await res.json();
            return data;
        }
    })
    //console.log(users);

    // MAKE ADMIN FUNTIONALITY
    const makeAdmin = (id) => {
        fetch(`http://localhost:3000/users/admin${id}`, {
            method: "PUT",

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin added');
                    refetch()
                }
            })
    }

    // REMOVE ADMIN FUNTIONALITY
    const removeAdmin = (id) => {
        //console.log(id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                role: ''
            })

        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin added');
                    refetch()
                }

            })
    }

    return (
        <div>
            <h2 className='text-2xl mb-7'>All Users : 06</h2>
            <div className=''>
                <div className="overflow-x-auto rounded-2xl">
                    <table className="table bg-white">
                        {/* head */}
                        <thead className="bg-[#E6E6E6]">
                            <tr>
                                <th></th>
                                <th className='text-sm text-black font-semibold'>NAME</th>
                                <th className='text-sm text-black font-semibold'>EMAIL</th>
                                <th className='text-sm text-black font-semibold'>TITLE</th>
                                <th className='text-sm text-black font-semibold'>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, i) =>
                                    <tr key={user._id}>
                                        <th className='text-lg text-[#898989]'>{i + 1}</th>
                                        <td className='text-lg text-[#898989] hover:underline underline-offset-4 decoration-2 cursor-pointer'>{user.name}</td>
                                        <td className='text-lg text-[#898989] hover:underline underline-offset-4 decoration-2 cursor-pointer'>{user.email}</td>
                                        <td>
                                            {
                                                user?.role !== 'admin' ? <button onClick={() => makeAdmin(user._id)} className="btn btn-active btn-neutral ">Make Admin</button> : "Admin"
                                            }
                                        </td>
                                        <td><button onClick={() => removeAdmin(user._id)} className="btn btn-active btn-neutral ">Remove</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllUsers;