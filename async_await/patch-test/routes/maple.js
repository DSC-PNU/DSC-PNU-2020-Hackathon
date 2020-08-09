const express = require('express');
const router = express.Router();
const MaplePatch = require('../models/MaplePatch');

/* GET home page. */
router.get('/', (req, res, next) => {
    MaplePatch.find({}, {index:1, title:1}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/:index', (req, res, next) => {
    MaplePatch.findOne({index : req.params.index}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
    });
})
module.exports = router;
