// @ts-ignore
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { before } from 'mocha';
import * as sinon from 'sinon';
import { IUser } from '../protocols/LoginProtocol';

import { app } from '../app';
import Users from '../database/models/UserModel';
chai.use(chaiHttp);
const { expect } = chai;

const userMock = [{
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  username: 'Admin',
  role: 'admin',
}]
const loginMock = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

describe('Login Route', () => {
  before(() => {
    sinon.stub(Users, 'findAll')
      .resolves([userMock[0]] as Users[]);
  });

  after(()=>{
    (Users.findAll as sinon.SinonStub).restore();
  })

  it('Login bem sucedido', async () => {
    const response = await chai.request(app).post('/login').send(loginMock);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
  });
});
