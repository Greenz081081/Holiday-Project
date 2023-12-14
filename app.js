// To use a module inside a project we have to require it
const express = require('express');
const bodyParser = require('body-parser')
// Create a constant app and set it to express(). 
// This is an instance of the Express module which is used to call its methods.
const app = express();
const router = express.Router();


router.use((req, res, next) => {
        console.log('Time:', Date.now());
        next();
    });
    
    // Here, we use the express’s get method to create a home page. 
    // We usually represent the home page as “/” since it is a root URL.
    router.get('/', (req, res) => {
        res.send("Sarah Birch")
    })

    router.get('/home', (req, res) => {
        res.send("ok");
    });

    router.get('/profile', (req, res) => {
        res.send('Hello World, This is profile router')
    });

    router.get('/login', (req, res) => {
        res.send('Hello World, This is login router')
    });

    router.get('/logout', (req, res) => {
        res.send('Hello World, This is logout router')
    });

app.use(bodyParser.json())
app.use('/', router);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});