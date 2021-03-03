const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express(),
      bodyParser = require("body-parser");
      port = 3800;

const tasks = [
  {
    id: 1,
    task: 'task1',
    assignee: 'assignee1000',
    status: 'completed'
  },
  {
    id: 2,
    task: 'task2',
    assignee: 'assignee1001',
    status: 'completed'
  },
  {
    id: 3,
    task: 'task3',
    assignee: 'assignee1002',
    status: 'completed'
  },
  {
    id: 4,
    task: 'task4',
    assignee: 'assignee1000',
    status: 'completed'
  }
  
];

const users = (
    {
      id: 1,
      user: 'kaushik',
      age: 20
  
    },
    {
      id: 2,
      user: 'rutvik',
      age: 30
    },
    {
      id: 3,
      user: 'keyur',
      age: 25
    },
    {
      id: 4,
      user: 'krishna',
      age: 24
    },
    {
        id: 5,
        user: 'krunal',
        age: 20
    
      },
      {
        id: 6,
        user: 'krinal',
        age: 30
      },
      {
        id: 7,
        user: 'krisha',
        age: 25
      },
      {
        id: 8,
        user: 'kaushal',
        age: 24
      }
    
);

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  console.log('api/todos called!')
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.get('/api/todo/:id',(req,res)=>{
    return res.send(tasks[req.params.id -1])  
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

app.get('/users',(req,res)=>{
    res.json(users);
});


app.use(cors())

