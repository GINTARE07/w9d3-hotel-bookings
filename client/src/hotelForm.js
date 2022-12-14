import {useState} from "react";

import {postGuest} from "./GuestsService";

const HotelForm = ({addGuest}) =>{
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        formData["name"] = e.target.name.value;
        formData["email"] = e.target.email.value;
        formData["checked"] = e.target.checked.value;

        postGuest(formData).then((data) => {
            addGuest(data);
        });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Name:</label>
            <input  onChange={onChange} type="text" id="name" name="name" required/>

            <label htmlFor="email">Email:</label>
            <input  onChange={onChange} type="text" id="email" name="email" required/>

            <label htmlFor="checked">Check In</label>
            <input onChange={onChange} type="checkbox" id="checked" name="checked"/>

            <input type="submit" value="Save" id="save"/>

        </form>
        
    )
}
export default HotelForm;