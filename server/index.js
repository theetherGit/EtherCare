import http from 'http';
import express from 'express';
import { handler } from '../build/handler.js';

const app = express();
const server = http.createServer(app);

// SvelteKit handlers
app.use(handler);
const port = process.env.PORT || 3000;


server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});
