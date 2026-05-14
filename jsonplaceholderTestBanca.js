import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,             // usuarios virtuales
  duration: '30s',      // duración test
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% bajo 500ms
    http_req_failed: ['rate<0.01'],   // menos de 1% errores
  },
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function () {

  // 🔹 1. GET POSTS
  const getRes = http.get(`${BASE_URL}/posts`);

  check(getRes, {
    'GET status 200': (r) => r.status === 200,
    'GET tiene contenido': (r) => r.body.length > 0,
  });

  // 🔹 2. POST (crear recurso)
  const payload = JSON.stringify({
    title: 'k6 performance test',
    body: 'este es un test',
    userId: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const postRes = http.post(`${BASE_URL}/posts`, payload, params);

  check(postRes, {
    'POST status 201': (r) => r.status === 201,
    'POST crea id': (r) => JSON.parse(r.body).id !== null,
  });

  // 🔹 log útil
  console.log(
    `VU ${__VU} ITER ${__ITER} GET ${getRes.status} POST ${postRes.status} tiempo GET ${getRes.timings.duration} ms`
  );

  sleep(1);
}
``