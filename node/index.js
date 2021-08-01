const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Willian')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {

    const db = mysql.createConnection(config)
    db.query('select * from people', (err, rows) => {
        if (err) throw err;

        var html = '<h1>Full Cycle Rocks!</h1>'
        html += '<ul>'
        rows.forEach(row => html += `<li>${row.name} (id ${row.id})</li>`)
        html += '</ul>'

        res.send(html)
    })
    db.end()
})

app.listen(port, () => 
{
    console.log('Rodando na porta: ' + port)
})
