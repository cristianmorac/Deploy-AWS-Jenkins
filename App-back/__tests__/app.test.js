const request = require('supertest');
const app = require('../app');

const pool = require('../db');
const bcrypt = require('bcrypt');

// Mocks
jest.mock('../db');
jest.mock('bcrypt');

describe('Pruebas de autenticación', () => {
  it('Debe cargar la página de login', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Iniciar sesión');
  });

  it('Debe rechazar login incorrecto', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'fake@example.com', password: 'badpass' });

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Usuario no encontrado');
  });

  it('Debe rechazar login con contraseña incorrecta', async () => {
    pool.query.mockResolvedValue({
      rows: [{ email: 'user@example.com', password: 'hashed' }]
    });
    bcrypt.compare.mockResolvedValue(false); // fuerza contraseña incorrecta

    const res = await request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'wrongpass' });

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Contraseña incorrecta');
  });
});
