import express from "express";
const router = express.Router();


router.get('/', (req, res) => res.send('Foods Page') );
router.get('/search/:name', (req, res) => res.send(`Food search Page with (${req.params.name})`) );

export default router;