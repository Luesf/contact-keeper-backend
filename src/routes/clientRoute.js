import express from 'express';
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router.get("/contacts", clientController.getContacts);
router.post("/contacts", clientController.createContact);
router.put("/contacts/:id", clientController.editContact);
router.delete("/contacts/:id",clientController.deleteContact);
router.get("/contacts/search", clientController.searchContact);

export default router;