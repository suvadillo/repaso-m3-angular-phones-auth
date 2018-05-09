const express = require("express");
const _ = require("lodash");
const router = express.Router();
const Phone = require("../models/Phone");

const fields = Object.keys(_.omit(Phone.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  Phone.create(ph)
    .then(phone => res.json(phone))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Phone.findById(req.params.id)
    .then(phone => res.json(phone))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  Phone.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(phone => res.json(phone))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Phone.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;
