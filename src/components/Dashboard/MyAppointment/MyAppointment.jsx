import React, { useContext } from 'react';
import { AuthContext } from '../../../contex/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);
    //console.log(user.email);
    const url = `http://localhost:3000/booking?email=${user.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    //console.log(bookings);


    return (
        <div>
            <div className='flex justify-between items-center mb-7'>
                <h2 className='text-2xl'>My appiontment</h2>
                <button className="btn btn-outline">MAY 10, 2022</button>
            </div>
            <div className="overflow-x-auto rounded-2xl">
                <table className="table bg-white">
                    {/* head */}
                    <thead className="bg-[#E6E6E6]">
                        <tr>
                            <th></th>
                            <th className='text-sm text-black font-semibold'>NAME</th>
                            <th className='text-sm text-black font-semibold'>SERVICE</th>
                            <th className='text-sm text-black font-semibold'>DATE</th>
                            <th className='text-sm text-black font-semibold'>TIME</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appoientmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyAppointment;