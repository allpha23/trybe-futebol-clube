// @ts-ignore
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { before } from 'mocha';
import * as sinon from 'sinon';

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

describe('/Login', () => {
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

  it('Sem o campo email', async () => {
    const response = await chai.request(app).post('/login').send({password: 'secret_admin'});
    expect(response.status).to.be.equal(400);
    expect(response.body).to.have.property('message');
  });

  it('Sem o campo password', async () => {
    const response = await chai.request(app).post('/login').send({email: 'admin@admin.com'});
    expect(response.status).to.be.equal(400);
    expect(response.body).to.have.property('message');
  });
});
