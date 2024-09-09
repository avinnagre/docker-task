import React, { useState } from 'react';

const PersonForm = ({ addPerson }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = { name, age, gender };
        addPerson(newPerson);
        setName('');
        setAge('');
        setGender('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Gender" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
            />
            <button type="submit">Add Person</button>
        </form>
    );
};

export default PersonForm;
