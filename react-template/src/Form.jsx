import { useRef, useState } from "react";

const Form = props => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        emailNotifications: ''
    })

    const handleGenericInput = keyName => e => {
        setUser(prev => ({ ...prev, [keyName]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        //validate();//
        // if (errors.length) {

        // } else {
             console.log(user);
        //     setStudent({
        //         name: '',
        //         email: '',
        //         hairColour: ''
        //     })
        // }
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <h4>New User Form</h4>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={user.name} onChange={handleGenericInput('name')} />
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" value={user.email} onChange={handleGenericInput('email')} />
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input id="phoneNumber" type="text" value={user.phoneNumber} onChange={handleGenericInput('phoneNumber')} />
            <select id="phoneType" value={user.phoneType} onChange={handleGenericInput('phoneType')} >
                <option value='blank'>Select a phoneType</option>
                <option value='home'>Home</option>
                <option value="work">Work</option>
                <option value="mobile">Mobile</option>
            </select>
            <p>Staff:</p>
            <label htmlFor="student">Student</label>
            <input id="student" type="radio" name="staff" value='student' onChange={handleGenericInput('staff')} />
            <label htmlFor="instructor">Instructor</label>
            <input id="instructor" type="radio" name="staff" value='instructor' onChange={handleGenericInput('staff')} />
            <br />
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" type="textarea" value={user.bio} onChange={handleGenericInput('bio')}></textarea>
            <br />
            <label htmlFor="emailNotifications">Email notifications?</label>
            <input id="emailNotifications" type="checkbox" onChange={handleGenericInput('emailNotifications')} />
            <br />
            <input type="submit" value="Create User"/>

        </form>
)

}

export default Form;