var express = require('express'),
    cors = require('cors');

var app = express();

app.use(cors());

/*
id: number;
  email: string;
  phone: number;
  workerId: number;
 */

var contacts = [
    {id:1, email: "vasia@vasiliev.com", phone: 7788, workerId: 1},
    {id:2, email: "petia@petrov.com", phone: 1231, workerId: 2},
    {id:3, email: "ivan@ivanov.com", phone: 3213, workerId: 3},
    {id:4, email: "igor@ignatov.com", phone: 4323, workerId: 4},
    {id:5, email: "dima@dmitriev.com", phone: 5476, workerId: 5}
];

var workers = [
    {id:1, name: "Vasia Vasiliev", contactId: 1, projects: [1]},
    {id:2, name: "Petia Petrov", contactId: 2, projects: [1]},
    {id:3, name: "Ivan Ivanov", contactId: 3, projects: [2]},
    {id:4, name: "Igor Ignatov", contactId: 4, projects: [2]},
    {id:5, name: "Dima Dmitriev", contactId: 5, projects: [2]}
];

var projects = [
    {
        id:1,
        name: "project1",
        description: "description for project1",
        workers: [1,2]
    },
    {
        id:2,
        name: "project2",
        description: "description for project2",
        workers: [3,4,5]
    }
];

app.post('/approve', function (req, res) {
    console.log("approved!!!");
    res.send("approved");
});

app.get('/workers', function (req, res) {
    res.send(workers);
});

app.get('/contact', function (req, res) {
    var id = +req.query.id;

    res.send(contacts.find(c => c.id === id));
});

app.get('/projects', function (req, res) {
    var ps = cloneDeep(projects);
    ps.forEach(project => {
        let workerList = [];

        project.workers.forEach(workerId => {
            workerList.push(workers.find(worker => worker.id == workerId));
        });

        project.workers = workerList;
    });

    res.send(ps);
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});


function cloneDeep(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone));
}