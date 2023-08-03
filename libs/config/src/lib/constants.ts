export const BACKEND_PORT = process.env['BACKEND_PORT'] || 3333;
export const BASE_URL = '/api/v1';
export const DATABASE_URL = process.env['DATABASE_URL']

console.log({ BACKEND_PORT, BASE_URL, DATABASE_URL });
