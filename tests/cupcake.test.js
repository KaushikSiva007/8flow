const request = require('supertest');
const app = require('../src/index');
const { expect } = require('chai');

describe('Cupcake API', () => {
    let cupcakeId;

    it('should add a new cupcake', async () => {
        const response = await request(app)
            .post('/cupcake')
            .send({
                name: 'Vanilla',
                price: 4.7,
                description: 'Vanilla',
                ingredients: ['Vanilla', 'sugar', 'eggs']
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        cupcakeId = response.body.id;
    });


    it('should list all cupcakes', async () => {
        const response = await request(app).get('/cupcake');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.lengthOf.at.least(1);
    });


    it('should get a cupcake by ID', async () => {
        const response = await request(app).get(`/cupcake/${cupcakeId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', cupcakeId);
        expect(response.body).to.have.property('name', 'Vanilla');
    });

    it('should update an existing cupcake', async () => {
        const response = await request(app)
            .put(`/cupcake/${cupcakeId}`)
            .send({
                name: 'Vanilla upgraded',
                price: 9.0,
                description: 'Vanilla upgraded',
                ingredients: ['vanilla']
            });

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', cupcakeId);
        expect(response.body).to.have.property('name', 'Vanilla upgraded');
    });


    it('should delete a cupcake', async () => {
        const response = await request(app).delete(`/cupcake/${cupcakeId}`);
        expect(response.status).to.equal(204);

        const getResponse = await request(app).get(`/cupcake/${cupcakeId}`);
        expect(getResponse.status).to.equal(404);
    });
});
