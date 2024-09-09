import React from 'react';

const PersonList = ({ people, updatePerson, deletePerson }) => {

    const handleDelete = (id) => {
        deletePerson(id);
    };

    const handleEdit = (id) => {
        const newName = prompt("Enter new name:");
        const newAge = prompt("Enter new age:");
        const newGender = prompt("Enter new gender:");
        const updatedPerson = { name: newName, age: newAge, gender: newGender };
        updatePerson(id, updatedPerson);
    };

    console.log('people', people);

    return (
        <ul>
            {people.length > 0 && people.map(person => (
                <li key={person.id}>
                    {person.name} - {person.age} - {person.gender}
                    <button onClick={() => handleEdit(person.id)}>Edit</button>
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default PersonList;
