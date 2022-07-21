// @ts-ignore
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { before } from 'mocha';
import * as sinon from 'sinon';
import { app } from '../app';
import Matche from '../database/models/MatcheModel';

chai.use(chaiHttp);
const { expect } = chai;

const matcheMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São Paulo"
    },
    teamAway: {
      teamName: "Grêmio"
    }
  },
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "São Paulo"
    },
    teamAway: {
      teamName: "Internacional"
    }
  }
]

const createMock = {
  id: 41,
  homeTeam: 16,
  homeTeamGoals: 2,
  awayTeam: 9,
  awayTeamGoals: 0,
  inProgress: true
}

const createMatcheMock = {
  homeTeam: 16,
  awayTeam: 8,
  homeTeamGoals: 1,
  awayTeamGoals: 1,
}


describe('/Matche', () => {
  before(() => {
    sinon.stub(Matche, 'findAll')
      .resolves(matcheMock as any);
  });

  after(()=>{
    (Matche.findAll as sinon.SinonStub).restore();
  })

  it('Listar partidas', async () => {
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.eql(matcheMock);
  });
});

describe('/Matche', () => {
    before(() => {
      sinon.stub(Matche, 'create')
        .resolves(createMock as any);
    });
  
    after(()=>{
      (Matche.create as sinon.SinonStub).restore();
    })
  
    it('salvar partidas', async () => {
      const getToken = await chai.request(app).post('/login').send({email: 'admin@admin.com', password: 'secret_admin'});
      const response = await chai.request(app).post('/matches').set({"Authorization": getToken.body.token}).send(createMatcheMock);
      expect(response.status).to.be.equal(201);
      expect(response.body).to.have.eql(createMock);
    });
  });