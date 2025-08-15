# Dynamic Templating with Node.js

This project demonstrates dynamic templating using multiple template engines in Node.js with Express.js.

## Features
- **Express.js** web framework
- **Multiple template engines**:
  - PUG (formerly Jade)
  - EJS (Embedded JavaScript)
  - Handlebars
- **Static HTML** version
- **Responsive design** with CSS
- **Dynamic data rendering**

## Project Structure
```
dynamic-templating-nodejs/
├── main.js                 # Main server file
├── package.json           # Dependencies and scripts
├── routes/
│   └── home.js           # Route definitions
├── views/
│   ├── home.pug          # PUG template
│   ├── home.ejs          # EJS template
│   ├── home.handlebars   # Handlebars template
│   └── layouts/
│       └── main.handlebars # Handlebars layout
└── public/
    ├── home.html         # Static HTML file
    └── home.css          # Stylesheet
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

## Template Engines Explained

### PUG
- Indentation-based syntax
- Concise and clean
- No closing tags needed

### EJS
- Embedded JavaScript
- HTML-like syntax
- Uses `<%= %>` for output

### Handlebars
- Logic-less templates
- Uses `{{}}` for expressions
- Supports helpers and partials

## Technologies Used
- Node.js
- Express.js
- PUG
- EJS
- Handlebars
- CSS3
- Responsive Design
