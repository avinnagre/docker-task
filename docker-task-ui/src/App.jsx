import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        const response = await axios.get('/api/people');
        setPeople(response.data);
    };

    const addPerson = async (person) => {
        await axios.post('/api/people', person);
        fetchPeople();
    };

    const updatePerson = async (id, person) => {
        await axios.put(`/api/people/${id}`, person);
        fetchPeople();
    };

    const deletePerson = async (id) => {
        await axios.delete(`/api/people/${id}`);
        fetchPeople();
    };

    return (
        <div>
            <h1>People List</h1>
            <PersonForm addPerson={addPerson} />
            <PersonList people={people} updatePerson={updatePerson} deletePerson={deletePerson} />
        </div>
    );
}

export default App;
