const userService = require('../../../src/api/services/user');

describe('#Service User', function() {
  describe('when create', function() {
    it('should add new one with success', function() {
      const user = {
        name: 'Name test',
      }

      const userData = userService.create(user);

      userData.name.should.equal(user.name);
      expect(userData.id).to.be.not.undefined;
    });
  });
});
