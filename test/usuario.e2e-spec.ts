import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Usuario (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    app.close();
  })

  it('/usuarios (POST)', () => {

    const payload = {
      nome: "Maria",
      email: "maria@email.com",
      senha: "123456"
    }

    return request(app.getHttpServer())
      .post('/usuarios')
      .send(payload)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(expect.objectContaining(payload))
      })
  });

  it('/usuarios (GET)', async () => {

    const payload = {
      nome: "Maria",
      email: "maria@email.com",
      senha: "123456"
    }

    await request(app.getHttpServer())
      .post('/usuarios')
      .send(payload)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(expect.objectContaining(payload))
      })

    return await request(app.getHttpServer())
      .get('/usuarios')
      .expect(200)
      .then((response) => {
        expect(response.body[0]).toEqual(expect.objectContaining({
          nome: expect.any(String),
          email: expect.any(String),
          senha: expect.any(String),
        }))
      })
  });
});
