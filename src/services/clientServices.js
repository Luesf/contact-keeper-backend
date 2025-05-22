import {query} from '../db.js';

export const getContacts = async() => {
    const {rows} = await query('SELECT * FROM contacts_tb');
    return rows;
};

export const createContact = async(contactData) => {
    const {name, role, email, location} = contactData;
    const {rows} = await query('INSERT INTO contacts_tb (name, role, email, location) VALUES ($1, $2, $3, $4) RETURNING *', [name, role, email, location]);
    return rows[0];
};

export const editContact = async(contactData, contactId) => {
    const {name, role, email, location} = contactData;
    const {rows} = await query('UPDATE contacts_tb SET name = $1 , role = $2, email = $3, location = $4 WHERE id = $5 RETURNING *', [name, role, email, location, contactId]);
    return rows[0];
};

export const deleteContact = async(contactId) => {
    const {rowCount} = await query('DELETE FROM contacts_tb WHERE id = $1', [contactId]);
    return rowCount > 0;
};

export const searchContact = async(searchText) => {
    const {rows} = await query('SELECT * FROM contacts_tb WHERE name ILIKE $1 OR role ILIKE $1 OR email ILIKE $1 OR location ILIKE $1', [`%${searchText}%`])
    return rows;
};
