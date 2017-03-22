import express from 'express';
const router = express.Router();
import * as ApiController from '../controllers/api-controller';

router.get('/', function(req, res, next) {
    res.render('index', {title: 'I love my sweet N.'});
});

router.get('/article/:id', function(req, res, next) {
    res.render('index');
});

router.get('/contact', function(req, res, next) {
    res.render('index');
});

router.get('/api/get-articles', ApiController.getArticleList);
router.get('/api/get-articles-id', ApiController.getArticleId);

export default router;
