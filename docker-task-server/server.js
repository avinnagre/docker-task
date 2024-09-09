const express = require('express');
const personRoutes = require('./src/routes/personRoutes');
const app = express(); // Import the app configuration from app.js

const PORT = process.env.PORT || 5000;

// Example endpoint
// Sample data
const people = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Doe', age: 25, gender: 'Female' }
  ];
  
// Endpoint to get people
// app.get('/api/people', (req, res) => {
// try {
//     res.json(people);
// } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Errorrr');
// }
// });

app.use(express.json());
app.use('/api/people', personRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});