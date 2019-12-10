const data = [];

const user = {
  create(user = {}) {
    const userData = {...user};
    userData.id = Math.random();

    data.push(userData);

    return userData;
  }
}

module.exports = user;
