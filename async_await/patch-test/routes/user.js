const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET users listing. */
router.post("/", function(req, res, next) {
  const { name, id, email, password } = req.body;
  let newUser = new User({ name, id, email, password });
  newUser
    .save()
    .then(userInfo => {
      console.log(userInfo);
      console.log("새로운 유저가 회원가입 했습니다.");
      res.status(200).json({ message: "새로운 유저가 회원가입 했습니다." });
    })
    .catch(err => {
      console.log(err);
      console.log("회원가입이 실패했습니다.");
      res.status(403).json({ message: "회원가입에 실패했습니다." });
    });
});

router.post("/login", (req, res, next) => {
  const { id, password } = req.body;
  User.findOne({ id }, function(err, result) {
    if (err) {
      console.log(err);
      res
        .status(401)
        .json({ message: "아이디 또는 비밀번호가 옳지 않습니다." });
    } else {
      if (result.password === password) {
        console.log(`${result.id}유저가 로그인 했습니다.`);
        res.json(result);
      } else {
        console.log(`아이디-${id} 또는 비밀번호-${password}가 옳지않습니다.`);
        res
          .status(401)
          .json({ message: "아이디 또는 비밀번호가 옳지 않습니다." });
      }
    }
  });
});
module.exports = router;
