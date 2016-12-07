import express, { Router } from 'express';
import path from 'path';

// eslint-disable-next-line new-cap
const router = Router();
export default router;

router.use(express.static(path.join(__dirname, '../../public')));

router.get('/', (req, res) => res.render('index'));
