const request = require('supertest');

import { app } from '../app';

test('Fetches top artists', async () => {
    const charts = await request(app)
        .get('/api/v1/chart?limit=10&index=1')
        .send()
        
    expect(charts.status).toBe(200);
});

test('Fails to fetch top artists when the limit/index is not provided', async () => {
    const resp = await request(app)
        .get('/api/v1/chart?limit=20&index=')
        .send()

    expect(resp.status).toBe(400);
    expect(resp.text).toBe('Please set the limit and index!');
});

test('Returns the top chart when all params are provided', async () => {
    const chart = await request(app)
        .get('/api/v1/chart?limit=20&index=1')
        .send()
        
    expect(typeof chart.body.artists.data).toBe('object');
});

test('Returns a successful response when search query is provided', async () => {
    const search = await request(app)
    .get('/api/v1/search?artist=mecha')
    .send();

    expect(search.status).toBe(200);
});

test('Returns a succesful response even without a search querry being provided', async () => {
    try {
        await request(app)
        .get('/api/v1/search')
        .send()
    } catch (error) {
        expect(error.status).toBe(200);
    }
});

test('Artist Search fails when search query is not provided', async () => {
    try {
        await request(app)
        .get('/api/v1/search?artists=')
        .send()
    } catch (error) {
        expect(error.status).toBe(400);
        expect(error.text).toBe('Please provide a search query!');
    }
});

test('Fetching artist fails when id is not provided ', async () => {
    const response = await request(app)
        .get('/api/v1/artist?id=')
        .send()

    expect(response.status).toBe(400);
});

test("Fetches artist's top tracks when all params are provided", async () => {
    const response = await request(app)
        .get('/api/v1/artist/tracks?id=102&limit=5&index=1')
        .send()

    expect(response.status).toBe(200);
});

test("Fails to fetch artist's top tracks when id/limit/index is provided", async () => {
    const response = await request(app)
        .get('/api/v1/artist/tracks?id=102&limit=5&index=')
        .send()

    expect(response.status).toBe(400);
});

test("Fetches artist's albums when all params are provided", async () => {
    const response = await request(app)
        .get('/api/v1/artist/albums?id=102&limit=25&index=1')
        .send()

    expect(response.status).toBe(200);
});
