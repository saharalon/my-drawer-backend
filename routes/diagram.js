const express = require('express');
const router = express.Router();
const DiagramService = require('../services/service.diagram');

/* GET diagram listing. */
router.get('/', async function(req, res, next)
{
	res.status(400).json({error: "Missing Diagram ID"});
});

/* retrieves a diagram by id */
router.get('/:id', async (req, res, next) =>
{
  try
  {
    const diagram = await DiagramService.retrieve(req.params.id);
    if (diagram.length) {
      return res.json({ diagram });
    }
    else {
      res.status(404).json({message: 'Invalid ID'});
    }
  }
  catch(err)
  {
    // unexpected error
    return next(err);
  }
});

/* adds a new diagram */
router.post('/', async (req, res, next) =>
{
	const body = req.body;
	try
	{
		await DiagramService.create(body);
		return res.status(201).json({msg: 'Diagram Created'});
	}
	catch(err)
	{
		if (err.name === 'ValidationError')
		{
		  return res.status(400).json({ error: err.message });
		}

		// unexpected error
		return next(err);
	}
});

module.exports = router;
