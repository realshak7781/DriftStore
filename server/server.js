import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Function to authenticate the Sequelize connection using async/await
const authenticateDB = async () => {
    try {
      // Await the Sequelize authentication process
      // If successful, it confirms a connection to the PostgreSQL database
      await sequelize.authenticate();
      console.log('Connected to PostgreSQL');
    } catch (err) {
      // Catch any error that occurs during the connection attempt
      // Log the error to help with troubleshooting
      console.log('Error:', err);
    }
  };
  
  // Call the function to attempt to authenticate the database connection
  authenticateDB();
  
  // Define a sample GET route for the homepage
  // This will respond with a welcome message when accessed via the '/' route
  app.get('/', (req, res) => {
    // Send a basic text response to the client
    res.send('Welcome to the Anime T-shirt Shop API');
  });
  
  // Start the server and make it listen on the specified port (PORT)
  // Once the server starts, log a message to indicate it's running and accessible
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  