const chai = require('chai');
const chaiHttp = require('chai-http');
const createServer = require('../app');

chai.use(chaiHttp);
const { request, expect } = chai;

const server = createServer();
const app = server.listen(5000);

describe('GET /notifications', () => {
  it('should respond with all the aggregated notifications', async () => {
    const response = await request(app).get('/notifications');
    expect(response.status).equal(200);
    expect(response.type).equal('application/json');
    expect(response.body).to.instanceOf(Array);
  });
});
