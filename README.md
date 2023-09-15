# Movie Discovery App
A dynamic movie discovery web application that allows users to explore and view movie details using the TMDB API.

# Getting Started with Create React App
This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm (Node Package Manager) installed
- TMDB API key (see [API Integration](#api-integration) for details on obtaining an API key)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jummie-jk/The-Movie-Box.git
   ```
2. Change to the project directory:
   ```bash
   cd movie-discovery-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
## Configuration
1. Create a `.env` file in the root directory of the project:
   ```bash
   touch .env
   ```
2. Add your TMDB API key to the `.env` file:
   ```plaintext
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```
## Usage
To run the project locally, use the following command:
```bash
npm start

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
