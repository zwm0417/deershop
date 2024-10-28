var express = require("express");
var router = express.Router();

var connection = require("../db/sql");
var user = require("../db/userSql");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res, next) {
  const params = req.body ?? {};
  console.log("user params: ", params);

  const sql1 = user.queryUsername(params);

  connection.query(sql1, function (error, results) {
    // 账号存在则验证密码登录
    if (results && results.length > 0) {
      console.log("账号存在");
      connection.query(user.queryPassword(params), function (err, rsl) {
        if (rsl && rsl.length > 0) {
          res.send({
            code: 200,
            data: {
              message: "登录成功",
              success: true,
              data: rsl[0],
              token: "nsadniuasbfdasbfnuhasdsa",
            },
          });
        } else {
          res.status(500).send({
            code: 0,
            message: "账号或密码错误",
          });
        }
      });
    } else {
      // 账号不存在则注册
      console.log("账号不存在");
      connection.query(user.insertUser(params), function (err, rsl) {
        if (err) {
          console.error("Database query error: ", err);
          return res.status(500).send({
            code: 0,
            message: "服务器内部错误。新增失败",
          });
        }
        connection.query(sql1, function (e, r) {
          res.send({
            code: 200,
            data: {
              message: "注册并登录成功",
              success: true,
              data: r[0],
              token: "nsadniuasbfdasbfnuhasdsa",
            },
          });
        });
      });
    }
  });
});

module.exports = router;
