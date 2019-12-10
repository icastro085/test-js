const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.should()
chai.use(sinonChai);
chai.use(chaiHttp);

global.expect = expect;
