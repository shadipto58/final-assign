import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AviableAppointmentCard from './AviableAppointmentCard/AviableAppointmentCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const AviableAppointment = ({ selected, setSelected }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/appointmentOption?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-20'>
            <div>
                <div className='text-center'>
                    <h2 className='text-secondary text-2xl'>Available Services on {format(selected, "PP")}</h2>
                    <h3 className='text-[#939393]'>Please select a service.</h3>
                </div>
                <div className='grid gap-10 lg:grid-cols-3 px-5 my-5'>
                    {appointmentOption.map(option => <AviableAppointmentCard
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AviableAppointmentCard>)}

                </div>
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    setSelected={setSelected}
                    selected={selected}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AviableAppointment;