import express from 'express';
const app = express();
import dotenv from 'dotenv';
import appSetup from './Start/init';
import routerSetup from './Start/router';
import securitySetup from './Start/security';
dotenv.config();

void appSetup(app); // I put void because of ESLint
securitySetup(app, express);
routerSetup(app);