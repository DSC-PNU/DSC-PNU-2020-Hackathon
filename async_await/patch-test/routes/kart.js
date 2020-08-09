const express = require('express');
const router = express.Router();
const KartPatch = require('../models/KartPatch');

/* GET home page. */
router.get('/', (req, res, next) => {
  KartPatch.find({}, {index:1, title:1}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/:index', (req, res, next) => {
    KartPatch.findOne({index : req.params.index}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
    });
})
module.exports = router;
