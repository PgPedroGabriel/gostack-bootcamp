import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!checkUserProvider) {
      return res.status(401).json({
        error:
          'Usuário precisa ser um prestador de serviço para listar sua agenda',
      });
    }

    const { date = new Date() } = req.query;

    const initialDate = startOfDay(parseISO(date));
    const endDate = endOfDay(parseISO(date));

    const appointments = await Appointment.finAll({
      where: {
        date: {
          [Op.between]: [initialDate, endDate],
        },
        provider_id: req.userId,
        canceled_at: null,
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name']
        }
      ],
      order: ['date']
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
