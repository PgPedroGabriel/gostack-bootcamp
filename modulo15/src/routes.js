import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvaliableController from './app/controllers/AvaliableController';
import validationsUserStore from './app/validations/UserStore';
import validationsUserUpdate from './app/validations/UserUpdate';
import validationsAppointmentStore from './app/validations/AppointmentStore';
import validationsSessionStore from './app/validations/SessionStore';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validationsUserStore, UserController.store);
routes.post('/sessions', validationsSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', validationsUserUpdate, UserController.update);

routes.get('/provider', ProviderController.index);
routes.get('/provider/:providerId/available', AvaliableController.index);

routes.post(
  '/appointment',
  validationsAppointmentStore,
  AppointmentController.store
);
routes.get('/appointment', AppointmentController.index);
routes.delete('/appointment/:ids', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
