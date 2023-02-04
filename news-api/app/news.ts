import express from "express";
import mysqlDb from "../mysqlDb";
import {ApiNews, News} from "../types";
import {OkPacket} from "mysql2";
import {imagesUpload} from "../multer";

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    const connection = await mysqlDb.getConnection();
    const result = await connection.query('SELECT id, title, image, dateStart FROM news');
    const newsList = result[0] as News[];
    res.send(newsList);
});
newsRouter.get('/:id', async (req, res) => {
    const connection = mysqlDb.getConnection();
    const result = await connection.query(
        'SELECT * FROM news WHERE id = ?', [req.params.id]);
    const newsList = result[0] as News[];
    const news = newsList[0];
    if(!news) {
        return res.status(404).send({ERROR: 'News not found!'});
    }
    res.send(news);
});
newsRouter.post('/', imagesUpload.single('image') ,async (req, res) => {
    if(!req.body.title || !req.body.description){
        return res.status(404).send({ERROR: 'Title field is required!'});
    }
    const newsData: ApiNews = {
        title: req.body.title,
        description: req.body.description,
        image: req.file ? req.file.filename : null,
    }
    const connection = mysqlDb.getConnection();
    const result = await connection.query(
        'INSERT INTO news (title, description) VALUES (?, ?)',
        [newsData.title, newsData.description]
    );
    const info = result[0] as OkPacket;
    res.send({
        ...newsData,
        id: info.insertId,
    });
});
newsRouter.delete('/:id', async (req, res) => {
    await mysqlDb.getConnection().query(
        'DELETE FROM ?? WHERE id = ?',
        ['news', req.params.id]
    );
     res.send(`News post if = ${req.params.id}  was deleted!` );
});


export default newsRouter;