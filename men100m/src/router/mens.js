const express = require("express");

const router = new express.Router()

const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
    try {
      console.log(req.body);
      const createMen = new MensRanking(req.body);
      const addingRecord = await createMen.save();
      res.status(201).send(addingRecord);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  router.get("/mens", async (req, res) => {
    try {
      const getMens = await MensRanking.find();
      res.send(getMens);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
      const getMensOne = await MensRanking.findById(_id);
      res.send(getMensOne);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
      const getMensOne = await MensRanking.findByIdAndUpdate(_id, req.body);
      res.send(getMensOne);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
      const getMensOne = await MensRanking.findByIdAndDelete(_id);
      res.send(getMensOne);
    } catch (error) {
      res.status(404).send(error);
    }
  });

  module.exports = router