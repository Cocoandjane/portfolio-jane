const express = require('express')

const app = express()
app.use(express.static("public"))
let Database = require('./mockDatabase.js');
const database = new Database()

const bodyParser = require('body-parser')
app.use(express.json())
 app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let allProjects = database.getAllProjects();
    res.render("index", {allProjects})
})


//why sometimes not defined?
app.get('/project/:id', (req, res) => {
    const id = +req.params.id
    let project = database.getProject(id)
    database.getProject(id, (error, project)=> {
        if(error) {
            console.error(error)
            res.status(500). send({ error: "can not get project"})
            return
        }

        if(!project) {
            res.status(404).send({ error: `there is no project with id ${id}`})
            return
        }
        res.send(project)
    })
    res.render("project", {project})
})


module.exports = app;
