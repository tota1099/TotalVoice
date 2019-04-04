import dotenv from 'dotenv';

dotenv.config();

export const API_URL = process.env.API_URL || 'https://api.totalvoice.com.br';
export const API_TOKEN = process.env.API_TOKEN || '';
export default {};
