import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AviableAppointment from './AviableAppointment/AviableAppointment';

const Appointment = () => {

    const [selected, setSelected] = useState(new Date());

    return (
        <div className=''>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBanner>
            <AviableAppointment
                selected={selected}
                setSelected={setSelected}
            ></AviableAppointment>
        </div>
    );
};

export default Appointment;