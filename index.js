const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet'); // Added security headers middleware
const cors = require('cors'); // Added CORS middleware
const compression = require('compression'); // Added compression middleware
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoute');
const newLeadRoutes = require('./src/routes/newLeadRoute');
const companyTypeRoutes = require('./src/routes/companyTypeRoute');
const positionRoutes = require('./src/routes/addPositionRoute'); 

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 2000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes),
    message: 'Too many requests from this IP. Please try again later',
});

// middleware
app.use(helmet()); // Use helmet for added security headers
app.use(cors()); // Enable CORS for cross-origin requests
app.use(compression()); // Use compression for response compression
app.use(morgan('dev'));
app.use(rateLimiter);
app.use(express.json());

// ezazrahul794
// rK8pmC56PVg4nUv3
// Connect to MongoDB
mongoose.connect('mongodb+srv://ezazrahul794:rK8pmC56PVg4nUv3@cluster0.lrzl9qy.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });




// User routes
app.use('/', userRoutes);
// Include routes for new leads
app.use('/', newLeadRoutes);
// auth
app.use('/', userRoutes);
//Company type add route
app.use('/', companyTypeRoutes);
//Company type add route
app.use('/', positionRoutes);





app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`);
});
