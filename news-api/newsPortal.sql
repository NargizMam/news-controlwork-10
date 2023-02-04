CREATE DATABASE IF NOT EXISTS newsPortal;

USE newsPortal;

CREATE TABLE news (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR(255) NOT NULL ,
    description TEXT NULL ,
    image VARCHAR(255) NULL ,
    dateStart  DATETIME  DEFAULT (NOW())
);

CREATE TABLE comments (
    id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY ,
    news_id INT NOT NULL ,
    authors  VARCHAR(30)  NULL ,
    text VARCHAR(255)NOT NULL ,

    CONSTRAINT newsPortal_news_id_fk
        FOREIGN KEY (news_id) REFERENCES news (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO news(title, description, image, dateStart)
        VALUES ('Сегодня в Бишкеке. Погода, мероприятия, даты',
        'В Бишкеке 4 февраля в первой половине дня возможен дождь. Температура воздуха ожидается +8 градусов. День увеличился до 10 часов 3 минут',
                null,
                DEFAULT ),
            ('У кого намечается той',
             'Жаныл Алыбаева Родилась 4 февраля 1980 года. Заместитель министра социального развития КР',
             NULL, DEFAULT),
             ('Международный день человеческого братства',
             '21 декабря 2020 года Генеральная Ассамблея ООН приняла резолюцию'
             'согласно которой учреждена новая памятная дата — Международный'
             'день человеческого братства (International Day of Human Fraternity',
             'https://24.kg/thumbnails/3aeb3/65e27/103785_w_h500_1548839140_r.jpg',
             DEFAULT);

SELECT * FROM news;

INSERT INTO comments(news_id, authors, text)
        VALUES(1, 'Андрей',
               'Не бывает плохой погоды'),
            (2, NULL, 'УДАЛЕНО МОДЕРАТОРОМ');

SELECT * FROM comments;
ALTER TABLE news MODIFY COLUMN dateStart DATETIME DEFAULT CURRENT_TIMESTAMP;







