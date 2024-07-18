import express, { Router } from 'express';
const router = Router();
const indexCtrl = require('../controllers/indexController');

router.get('/', indexCtrl.indexPage);
router.get('/login', indexCtrl.loginPage);
router.get('/create', indexCtrl.createPage);
router.get('/profile', indexCtrl.profilePage);
router.get('/auctions', indexCtrl.auctionsPage);
router.get('/register', indexCtrl.registerPage);
router.get('/moderator', indexCtrl.moderatorPage);

export default router;          