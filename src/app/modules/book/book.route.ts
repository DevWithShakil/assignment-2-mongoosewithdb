import express from 'express';
import { getFeaturedBooks, getSciFiBooks, getUsers, updatePrice } from './book.controller';

const router = express.Router();

router.get('/', getUsers);
router.get('/Sci-Fi', getSciFiBooks);
router.get('/feature-books', getFeaturedBooks);
router.get('/update-price', updatePrice);

export default router;