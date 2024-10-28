const user = {
  // 查询用户
  queryUsername(option) {
    return `SELECT * FROM user WHERE username = '${option.username}'`;
  },

  // 查询密码
  queryPassword(option) {
    return `SELECT * FROM user WHERE (username = '${option.username}') and (password ='${option.password}')`;
  },

  // 新增用户
  insertUser(option) {
    let username = option.username;
    let password = option.password || 123456;
    return `insert into user (username, password, nickName, avatarUrl, token) values ('${username}', '${password}', '默认昵称', '', '' )`;
  },
};

exports = module.exports = user;
