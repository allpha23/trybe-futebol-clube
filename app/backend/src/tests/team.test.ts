// @ts-ignore
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { before } from 'mocha';
import * as sinon from 'sinon';
import { app } from '../app';
import Teams from '../database/models/TeamModel';

chai.use(chaiHttp);
const { expect } = chai;

const teamMock = [
  { 
    id: 1,
    teamName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    teamName: 'Bahia',
  },
  {
    id: 3,
    teamName: 'Botafogo',
  },
  {
    id: 4,
    teamName: 'Corinthians',
  }
] 


describe('/Teams', () => {
  before(() => {
    sinon.stub(Teams, 'findAll')
      .resolves(teamMock as Teams[]);
  });

  after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Listar times', async () => {
    const response = await chai.request(app).get('/teams');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('teams');
  });
});

describe('/Teams:id', () => {
  before(() => {
    sinon.stub(Teams, 'findByPk')
      .resolves(teamMock[0] as Teams);
  });
  
  after(()=>{
    (Teams.findByPk as sinon.SinonStub).restore();
  })
  
  it('Pega time por id', async () => {
    const response = await chai.request(app).get('/teams/:id');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('team');
  });
});
