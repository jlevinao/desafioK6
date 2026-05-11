import http from 'k6/http';
import { sleep } from 'k6';

const BASE_URL = 'https://quickpizza.grafana.com/api/pizza';
const token = 'b02f9301a6084b0c';

export const options = {
    vus: 20,
    duration: '30s',
};

export default function () {

    const response = http.post(
        BASE_URL,
        JSON.stringify({
            "maxAllowedRepositories": 1000,
            "mustBeVegetarian": false,
        }),
        {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    console.log(`VU ${__VU} – ITER ${__ITER} – STATUS ${response.status} – tiempo ${response.timings.duration} ms`);
    sleep(1);
}


