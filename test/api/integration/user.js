const { request } = require('chai');
const app = require('../../../src/api/app');

describe('#API User', function() {
  describe('when create', function() {

    let appi;
    before(() => {
      appi = request(app);
    })

    it('should add new one with success', function(done) {
      const user = {
        name: 'Name test',
      };

      appi
        .post('/user')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.user).to.deep.include({
            name: user.name,
          });
          done();
        });
    });
  });
});
