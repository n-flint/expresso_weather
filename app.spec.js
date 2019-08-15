var shell = require('shelljs');
var request = require("supertest");
var app = require('./app');

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  describe('Test the root path', () => {
    test('should return a 200', () => {
      return request(app).get("/").then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
  });

  describe('Test POST /api/v1/users path', () => {
    test('should return a 201 status', () => {
      return request(app).post("/api/v1/users").then(response => {
        expect(response.status).toBe(201)
      });
    });
    test('should return a users api key', () => {
      return request(app).post("/api/v1/users", ).then(response => {
          expect(Object.keys(response.body[0])).toContain('api_key')
      })
    });
  });
});