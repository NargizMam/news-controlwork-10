import express from "express";
import {ApiComment, News} from "../types";
import mysqlDb from "../mysqlDb";
import {OkPacket} from "mysql2";

const commentsRouter = express.Router();

commentsRouter.get('/', async (req, res) => {
    const connection = await mysqlDb.getConnection();
    const result = await connection.query('SELECT * FROM comments');
    const commentsList = result[0] as Comment[];
    await res.send(commentsList);
    if(req.query.news_id){
        // const wantedComment = commentsList.filter(comment => comment === req.query.news_id);
        // res.send(wantedComment);
    }
    res.send(commentsList);
});

commentsRouter.get('/:id', async (req, res) => {
    const connection = await mysqlDb.getConnection();
    const result = await connection.query(`SELECT * FROM ?? WHERE id = ?`,
        ['comments', req.params.id]);
    const commentsList = result[0] as News[];
    const comment = commentsList[0];
    if(!comment) {
        return res.status(404).send({ERROR: 'News not found!'});
    }
    res.send(comment);
});

commentsRouter.post('/', async  (req, res) => {
    if (!req.body.news_id || !req.body.text ) {
        return res.status(400).send({error: 'Data not valid'});
    }
    const newComment: ApiComment  = {
        authors: req.body.authors,
        text: req.body.text,
        news_id: req.body.news_id
    }

    const connection = await mysqlDb.getConnection();
    const result = await connection.query(
        'INSERT INTO comments (authors, text, news_id) VALUES (?, ?, ?)',
        [newComment.authors, newComment.text, newComment.news_id]
    );
    const comment = result[0] as OkPacket;
   await res.send({
        ...newComment,
        id: comment.insertId
    });
});

commentsRouter.delete('/:id', async (req) => {
    await mysqlDb.getConnection().query(
        'DELETE FROM ?? WHERE id = ?',
        ['comments', req.params.id]
    );
});

export default commentsRouter;