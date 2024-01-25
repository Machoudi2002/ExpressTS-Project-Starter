import { Express, Request, Response } from 'express';
import userController from '../Controller/user.controller';


const routerSetup = (app: Express) =>
app

.get('/', async (req: Request, res: Response) => {
  res.send('Hello Express APIvantage!');
})
.use('/api/mongoose/users', userController)

export default routerSetup;