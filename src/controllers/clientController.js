import * as clientService from '../services/clientServices.js';

export const getContacts = async (req, res) => {
    try {
        const contacts = await clientService.getContacts();
        res.status(200).json(contacts);
    } catch (err) {
        console.error("Error fetching contacts", err);
        res.status(500).json({message: "Internal Server Error"});
    };
};

export const createContact = async (req, res) => {
    try {
        const contactData = req.body;
        const newContact = await clientService.createContact(contactData);
        res.status(200).json(newContact);
    } catch (err) {
        console.error("Error adding contact", err);
        res.status(500).json({message: "Internal Server Error"});
    };
};

export const editContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contactData = req.body;
        const editedContact = await clientService.editContact(contactData, contactId);
        if (!editedContact) {
            return res.status(404).json({message: "Client not found."});
        }
        res.status(200).json(editedContact);
    } catch (err) {
        console.error("Error updating contact", err);
        res.status(500).json({message: "Internal Server Error"});
    };
};

export const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const deleted = await clientService.deleteContact(contactId);
        if (!deleted) {
            return res.status(404).json({message: "Contact not found."})
        }
        res.status(200).send();
    } catch (err) {
        console.error("Error deletig contact", err);
        res.status(500).json({message: "Internal Server Error"});
    };
};

export const searchContact = async (req, res) => {
    try {
        const searchText = req.query.q;
        const contacts = await clientService.searchContact(searchText);
        res.status(200).json(contacts);
    } catch (err) {
        console.error("Error searching for contact", err);
        res.status(500).json({message: "Internal Server Error"});
    };
};