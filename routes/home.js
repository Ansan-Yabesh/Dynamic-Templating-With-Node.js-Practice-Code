const express = require('express');
const router = express.Router();

// Sample data for templates
const templateData = {
    title: 'Dynamic Templating Demo',
    heading: 'Welcome to Dynamic Templating',
    description: 'This page demonstrates different template engines in Node.js',
    features: [
        'Express.js Framework',
        'Pug Template Engine',
        'EJS Template Engine',
        'Handlebars Template Engine',
        'Dynamic Content Rendering'
    ],
    user: {
        name: 'Yabesh',
        email: 'yabesh@example.com',
        role: 'Developer'
    },
    showFeatures: true,
    currentYear: new Date().getFullYear()
};

// HTML route
router.get('/', (req, res) => {
    res.sendFile('home.html', { root: './public' });
});

// PUG route
router.get('/pug', (req, res) => {
    res.render('home.pug', templateData);
});

// EJS route
router.get('/ejs', (req, res) => {
    res.render('home.ejs', templateData);
});

// Handlebars route
router.get('/handlebars', (req, res) => {
    res.render('home.handlebars', templateData);
});

// API route for dynamic data
router.get('/api/data', (req, res) => {
    res.json(templateData);
});

module.exports = router;
