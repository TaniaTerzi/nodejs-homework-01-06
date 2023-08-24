const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");
const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post(
  "/",
  validateBody(schemas.addSchema, (message = "missing fields")),
  ctrl.addContact
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema, (message = "missing fields")),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(
    schemas.updateFavoriteSchema,
    (message = "missing field favorite")
  ),
  ctrl.updateFavorite
);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
