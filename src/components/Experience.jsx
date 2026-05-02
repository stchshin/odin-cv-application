import { useState } from 'react'

export default function Experience() {
    const [company, setCompany] = useState('Example Inc.');
    const [position, setPosition] = useState('Intern');
    const [responsibilities, setResponsibilities] = useState('Managed files and emails for the office.');
    const [workedFrom, setWorkedFrom] = useState('yyyy-mm-dd');
    const [workedTo, setWorkedTo] = useState('yyyy-mm-dd');
    const [isEditing, setIsEditing] = useState(false);

    function handleCompanyChange(e) {
        setCompany(e.target.value);
    }

    function handlePositionChange(e) {
        setPosition(e.target.value);
    }

    function handleResponsibilitiesChange(e) {
        setResponsibilities(e.target.value);
    }

    function handleWorkedFromChange(e) {
        setWorkedFrom(e.target.value);
    }

    function handleWorkedToChange(e) {
        setWorkedTo(e.target.value);
    }

    return (
        <div>
            <h2>Experience</h2>
            <label htmlFor="company">
                Company Name
            </label>
            {
                isEditing
                ? <input type="text" id="name" value={company} onChange={handleCompanyChange} />
                : <p>{company}</p>
            }

            <label htmlFor="position">
                Position
            </label>
            {
                isEditing
                ? <input type="text" id="position" value={position} onChange={handlePositionChange} />
                : <p>{position}</p>
            }
            
            <label htmlFor="responsibilities">
                Main Responsibilities
            </label>
            {
                isEditing
                ? <input type="text" id="responsibilities" value={responsibilities} onChange={handleResponsibilitiesChange} />
                : <p>{responsibilities}</p>
            }

            <label htmlFor="workedFrom">
                Date of Work
            </label>
            <div className="dates">
                {
                    isEditing
                    ? <div>From <input type="date" id="workedFrom" value={workedFrom} onChange={handleWorkedFromChange}/> to <input type="date" id="workedTo" value={workedTo} onChange={handleWorkedToChange}/></div>
                    : <div>From {workedFrom} to {workedTo}</div>
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