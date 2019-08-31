const db = require('../db');

/* static diagram service class */
class DiagramService
{
	static async create(data)
	{
    const result = await db.query('INSERT INTO Diagram (id, json) VALUES (?, ?)', {
      replacements: [data.id, JSON.stringify(data.json)],
      type: db.QueryTypes.INSERT,
      raw: true
    });
    return result;
	}

	static async retrieve(id)
	{
    const result = await db.query('SELECT * FROM Diagram WHERE id=?', {
      replacements: [id],
      type: db.QueryTypes.SELECT,
      raw: true,
    });
    return result;
	}

}

module.exports = DiagramService;
