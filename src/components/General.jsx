import { useState } from 'react'

export default function General() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phone, setPhone] = useState('+1 123-456-7890');
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    return (
        <div>
            <h2>General</h2>
            <label htmlFor="name">
                Name
            </label>
            {
                isEditing
                ? <input type="text" id="name" value={name} onChange={handleNameChange}/>
                : <p>{name}</p>
            }

            <label htmlFor="email">
                Email
            </label>
            {
                isEditing
                ? <input type="email" id="email" value={email} onChange={handleEmailChange}/>
                : <p>{email}</p>
            }
            
            <label htmlFor="phone">
                Phone Number
            </label>
            {
                isEditing
                ? <input type="tel" id="phone" value={phone} onChange={handlePhoneChange}/>
                : <p>{phone}</p>
            }

            {
                isEditing
                ? <button className="submit" onClick={() => setIsEditing(false)}>Submit</button>
                : <button onClick={() => setIsEditing(true)}>Edit</button>
            }
        </div>
    )
}