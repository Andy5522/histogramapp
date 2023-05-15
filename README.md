# React.js Histogram App

This is a React.js app that fetches data from a URL, analyzes word frequency, and displays a histogram using Chart.js.

## Prerequisites

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Installation

1. Install the dependencies:

- npm install

2. Create a new React app by running the following command:

- npx create-react-app histogram-app

3. Navigate to the project directory:

- cd histogram-app

4. install the necessary dependencies by running the following command:

- npm install react-chartjs-2 chart.js --save


4. Start the development server:

- npm start

    1. Open your web browser and visit http://localhost:3000 to access the app.

    2. On the initial page load, you will see a Submit button.

    3. Click on the Submit button to fetch the contents of https://www.terriblytinytales.com/test.txt.

    4. The app will parse the content and display a histogram of the 20 most occurring words on the frontend.

    5. To export the histogram data as a CSV file, click on the Export button.

5. Project Structure

The project structure is as follows:

. src/: Contains the source code files for the histogram-app .
  . components/: Contains reusable components used in the app.
     . Histogram.js: A custom component that uses Chart.js to display the histogram.
     . ExportButton.js: A component that handles the export functionality for downloading the histogram data as a CSV file.
  . pages/: Contains the main pages of the app.
    . Home.js: The main page that displays the Submit button and handles the fetching of data.
  . utils/: Contains utility functions used in the app.
    . wordFrequency.js: A utility function to calculate the frequency of words in the text data.
. App.js: The main component that defines the routing and renders the pages.
. index.js: The entry point of the app.

6. Libraries and Plugins Used:

This app utilizes the following libraries and plugins:

    1. React.js: A JavaScript library for building user interfaces.
    2. Chart.js: A popular charting library for creating interactive and customizable charts.
    3. react-chartjs-2: A React wrapper for Chart.js that provides a simple interface for integrating Chart.js with React components.


Troubleshooting :

 If you encounter any errors during the installation or running of the app, please ensure that you have the necessary prerequisites installed and configured correctly.

If you face issues related to dependencies or compatibility, please refer to the troubleshooting instructions provided in the answer or seek assistance from the project maintainers.

7. Netlify:
 I hosted this project on Netlify.