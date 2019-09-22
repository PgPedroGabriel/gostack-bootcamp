class AvaliableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'invalidDate' });
    }

    return res.json();
  }
}

export default new AvaliableController();
