const app = require('./app.js');
const port = process.env || 8080

app.listen(port, () => {
    console.log(`listening on port ${8080}`)
})