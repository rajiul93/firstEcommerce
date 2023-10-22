import { useState } from 'react';
import userData from "../../userData/userData.json";

function UselLogiHook() {
    const userAllData = userData;

    const [user, setUser] = useState({ userPhone: '', userPassword: "" });
    let { userPhone, userPassword } = user;

    const getInput = (e) => {
        if (e.target.name === "phone") {
            setUser({ userPhone: e.target.value, userPassword });
        }
        if (e.target.name === "password") {
            setUser({ userPhone, userPassword: e.target.value });
        }
    }


    // const [value, setValue] = useState(null);
    // const filter = userAllData.find(num => num.phone === parseInt(userPhone));

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(user);
    //     if (filter.phone === parseInt(userPhone) && filter.password === parseInt(userPassword)) {
    //         setValue(true);
    //     } else {
    //         setValue(false)
    //     };
    // }

    return {
        
       
        
    }
}

export default UselLogiHook;