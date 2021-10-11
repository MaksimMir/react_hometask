const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_socialy_db'
});

app.post('/auth', (req, res) => {
    const { email, password } = req.body;
    new Promise((resolve, reject) => {
        connection.query(
            'SELECT email, password FROM users',
            (err, result) => {
                if (err) reject(err);           
                resolve(result);
            }
        )
    }).then(data => {
        const users = JSON.parse(JSON.stringify(data))
        
        if (email && password) {
            for(let i = 0; i < users.length; i++) {
                if (users[i].email == email && users[i].password == password) {
                    return res.send(true);
                }
            }
        }
        return res.send(false);
    });
});

app.get('/message', (req, res) => {
    new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM messages`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    }).then(data => {
        console.log(data)
        res.send(data);
    })
})

app.post('/message', (req, res) => {
    const { id, chats_id, text, author } = req.body;
    new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO messages VALUE(${id}, ${chats_id}, '${text}', '${author}')`,
            (err, result) => {
                if (err) reject(err);
                resolve(true)
            }
        )
    }).then(data => {
        return res.send(data);
    })
    return res.send(false);
})

app.get('/chats', (req, res) => {
    new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM chats`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    }).then(data => {
        return res.send(JSON.parse(JSON.stringify(data)));
    })
})

app.post('/chats', (req, res) => {
    const { id, name } = req.body;
    new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO chats VALUE(${id}, '${name}')`,
            (err, result) => {
                if (err) reject(err);
                resolve(true);
            }
        )
    }).then(data => res.send(data))
    return res.send(false);
})

app.delete('/chats/:id', (req, res) => {
    const chatId = req.params.id;
    new Promise((resolve, reject) => {
        connection.query(
            `DELETE FROM chats WHERE id=${chatId}`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    }).then(data => {
        return res.send(JSON.parse(JSON.stringify(data)));
    })
})

app.listen(3001, () => {
    console.log('port 3001')
})