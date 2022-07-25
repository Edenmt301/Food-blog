import express from "express";
const router = express.Router();

router.get('/', (req,res) => res.send('People Page') );
router.get('/search/:name', (req, res) => res.send(`People search Page with (${req.params.name})`) );


export default router;