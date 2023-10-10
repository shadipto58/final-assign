import React from 'react';

const AviableAppointmentCard = ({ appointmentOption, setTreatment }) => {
    const { _id, name, slots } = appointmentOption;

    return (
        <div className={`card shadow-xl px-5 py-9`}>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another"}</p>
                <p className='text-accent'>{slots.length} {slots.length > 1 ? "Slots" : "Slot"} Avilable</p>

                <label
                    onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                    disabled={slots.length === 0}
                >Book Appointment</label>
            </div>
        </div>
    );
};

export default AviableAppointmentCard;