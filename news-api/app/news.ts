import express from "express";
import mysqlDb from "../mysqlDb";
import {ApiNews, News} from "../types";
import {OkPacket} from "mysql2";

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    const connection = await mysqlDb.getConnection();
    const result = await connection.query('SELECT id, title FROM news');
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
newsRouter.post('/', async (req, res) => {
    if(!req.body.title){
        return res.status(404).send({ERROR: 'Title field is required!'});
    }
    const newsData: ApiNews = {
        title: req.body.title,
        description: req.body.description
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


export default newsRouter;