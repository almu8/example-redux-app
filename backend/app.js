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

var countries = [
    {id:1, name: "Russia"},
    {id:2, name: "Belarus"},
    {id:3, name: "USA"}
];

var cities = [
    {id:1, name: "Moscow", countryId:1},
    {id:2, name: "Saint Petersburg", countryId:1},
    {id:3, name: "Kazan", countryId:1},
    {id:4, name: "Novosibirsk", countryId:1},
    {id:5, name: "Brest", countryId:2},
    {id:6, name: "Minsk", countryId:2},
    {id:7, name: "Los Angeles", countryId:3},
    {id:8, name: "Chicago", countryId:3},
    {id:9, name: "Washington", countryId:3}
];

app.post('/approve', function (req, res) {
    res.send("approved");
});

app.get('/workers', function (req, res) {
    var projId = +req.query.projId;
    res.send(workers.filter(w => w.projects.includes(projId)));
});

app.get('/cities', function (req, res) {
    var countryId = +req.query.countryId;
    res.send(cities.filter(c => c.countryId === countryId));
});

app.get('/worker', function (req, res) {
    var id = +req.query.id;
    var worker = cloneDeep(workers).find(w => w.id === id);

    if (worker) {
        var contact = contacts.find(c => c.id === worker.contactId);
        worker.contact = contact;
    }

    res.send(worker);
});

app.get('/contact', function (req, res) {
    var id = +req.query.id;

    res.send(contacts.find(c => c.id === id));
});

app.get('/projects', function (req, res) {
    res.send(projects);
});


app.get('/countries', function (req, res) {
    res.send(countries);
});

app.get('/project', function (req, res) {
    var id = +req.query.id;

    var p = cloneDeep(projects).find(p => p.id === id);

    let workerList = [];

    p.workers.forEach(workerId => {
        workerList.push(workers.find(w => w.id == workerId));
    });

    p.workers = workerList;

    res.send(p);
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});


function cloneDeep(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone));
}