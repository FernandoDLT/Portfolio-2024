const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static(__dirname));

// Endpoint to handle form submission
app.post('/sendEmail', (req, res) => {
    const { email, subject, message } = req.body;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'ferchodlt1971@hotmail.com', // Your Hotmail address
            pass: 'tiger1971' // Your Hotmail password or app-specific password
        }
    });

    // Setup email data
    const mailOptions = {
        from: 'ferchodlt1971@hotmail.com', // Sender address
        to: 'ferchodlt1971@hotmail.com', // Your email address (recipient)
        subject: subject,
        text: `Sender's Email: ${email}\n\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(404).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Message sent!');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Serve index.html on root request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Replace 'index.html' with the name of your HTML file
});

document.querySelector('.reset').addEventListener('click', reset);

    if (yards === - 0) {
        resultElement.textContent = 'Please enter yardage.'
    }
function reset() {
    window.location.reload()
}