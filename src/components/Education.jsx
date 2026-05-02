import { useState } from 'react'

export default function Education() {
    const [school, setSchool] = useState('School of Example');
    const [title, setTitle] = useState('Bachelor of Arts');
    const [studiedFrom, setStudiedFrom] = useState('yyyy-mm-dd');
    const [studiedTo, setStudiedTo] = useState('yyyy-mm-dd');
    const [isEditing, setIsEditing] = useState(false);

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleStudiedFromChange(e) {
        setStudiedFrom(e.target.value);
    }

    function handleStudiedToChange(e) {
        setStudiedTo(e.target.value);
    }

    return (
        <div>
            <h2>Education</h2>
            <label htmlFor="school">
                School Name
            </label>
            {
                isEditing
                ? <input type="text" id="school" onChange={handleSchoolChange}/>
                : <p>{school}</p>
            }
        
            <label htmlFor="title">
                Title
            </label>
            {
                isEditing
                ? <input type="text" id="title" onChange={handleTitleChange}/>
                : <p>{title}</p>
            }
            
            <label htmlFor="studiesFrom">
                Date of Study
            </label>
            <div className="dates">
                {
                    isEditing
                    ? <p>'From' <input type="date" id="studiedFrom" onChange={handleStudiedFromChange}/> 'to' <input type="date" id="studiedTo" onChange={handleStudiedToChange}/></p>
                    : <p>From {studiedFrom} to {studiedTo}</p>
                }
                
            </div>

            {
                isEditing
                ? <button className="submit" onClick={() => setIsEditing(false)}>Submit</button>
                : <button onClick={() => setIsEditing(true)}>Edit</button>
            }
        </div>
    )
}