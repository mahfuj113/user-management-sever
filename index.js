const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000

//middleware
app.use(cors())
app.use(express.json())

const users = [
    {id: 1 ,name:'Sabnoor', email: 'sabnoor@gmail.com'},
    {id: 2 ,name:'Alia', email: 'alia@gmail.com'},
    {id: 3 ,name:'Sai Pollobi', email: 'saipollobi@gmail.com'},
    {id: 4 ,name:'Salman', email: 'salman@gmail.com'},
]
app.get('/',(req,res) => {
    res.send('My users management server')
})
app.get('/users',(req,res) => {
    console.log(req,res);
    res.send(users)
})
//post method
app.post('/users',(req,res) => {
    console.log('post data hitting');
    console.log(req.body);
    const newUser = req.body
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,() => {
    console.log(`i get response in port",${port}`)
})