const { json } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

app.get('/courses', (req, res) => {
    const params = req.query
    console.log(params)
    res.json(['Course 1', 'Course 2', 'Course 3'])
})

app.post('/courses', (req, res) => {
    const body = req.body
    console.log(body)
    res.json(['Course 1', 'Course 2', 'Course 3', 'Course 4'])
})

app.put('/courses/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    res.json(['Course 6', 'Course 2', 'Course 3', 'Course 4'])
})

app.patch('/courses/:id', (req, res) => {
    res.json(['Course 6', 'Course 7', 'Course 3', 'Course 4'])
})

app.delete('/courses/:id', (req, res) => {
    res.json(['Course 6', 'Course 7', 'Course 4'])
})

app.listen(3000, () => { console.log('Server is running!') })
