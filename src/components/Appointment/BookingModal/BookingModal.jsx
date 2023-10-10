import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contex/AuthProvider';

const BookingModal = ({ selected, treatment, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selected, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(slot, name, email, phone);
        const booking = {
            appoientmentDate: date,
            treatment: name,
            patient: patientName,
            email,
            phone,
            slot
        }
        //console.log(booking);
        fetch('http://localhost:3000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed!');
                    refetch()
                }
                else {

                    toast.error(data.message);
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </div>

                    <form onSubmit={handleBooking} className='mt-5'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full mt-4">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full mt-4" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-4" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full mt-4" />
                        <input type="submit" className='btn btn-accent text-white w-full mt-4' value='SUBMIT' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;