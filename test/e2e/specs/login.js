describe('#E2E The Login Page', function() {
  beforeEach(function () {
    cy.fixture('login-data.json').as('login');
    cy.viewport('iphone-x');
  });

  it('successfully loads', function() {
    cy.visit('/');
  });

  it('typing username', function() {
    const { username } = this.login;
    cy
      .get('.form-login [name="username"]')
      .type(username);
  });

  it('typing password', function() {
    const { password } = this.login;
    cy
      .get('.form-login [name="password"]')
      .type(password);
  });

  it('can submit a valid form', function() {
    cy
      .get('.form-login')
      .submit();
  });

  it('can submit a valid form', function() {
    expect(cy.get('.logged-in-message')).to.exist;
  });
});
