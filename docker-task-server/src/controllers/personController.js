const personModel = require('../models/personModel');

async function getPeople(req, res) {
    try {
        const people = await personModel.getAllPeople();
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch people" });
    }
}

async function createPerson(req, res) {
    try {
        const result = await personModel.addPerson(req.body);
        res.status(201).json({ message: "Person added", result });
    } catch (error) {
        res.status(500).json({ error: "Failed to add person" });
    }
}

async function editPerson(req, res) {
    try {
        const result = await personModel.updatePerson(req.params.id, req.body);
        res.status(200).json({ message: "Person updated", result });
    } catch (error) {
        res.status(500).json({ error: "Failed to update person" });
    }
}

async function deletePerson(req, res) {
    try {
        const result = await personModel.deletePerson(req.params.id);
        res.status(200).json({ message: "Person deleted", result });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete person" });
    }
}

module.exports = { getPeople, createPerson, editPerson, deletePerson };
