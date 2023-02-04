import express from 'express';
import cors from 'cors';
import mysqlDb from "./mysqlDb";
import newsRouter from "./app/news";
import commentsRouter from "./app/comments";

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/news', newsRouter);
app.use('/comments', commentsRouter);

const run =async () => {
    await mysqlDb.init();
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
};

run().catch(console.error);
