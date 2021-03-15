const { request } = require('../../jest');

describe('Route: /test', () => {
    it('It should always response the GET method', async () => {
        const res = await request.get('/test');

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('ok!');
    });
});

describe('Route: /test/error', () => {
    it('It should always throw the GET method', async () => {
        const res = await request.get('/test/error');

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual('error test');
    });
});
