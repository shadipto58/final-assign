import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data?.isAdmin)
                    // setIsAdminLoading(false)
                })
        }
    }, [email])

    // console.log(isAdmin);

    return [isAdmin, isAdminLoading]
};

export default useAdmin;