A histogram is a chart that groups numeric data into bins, displaying the bins as segmented columns. They're used to depict the distribution of a dataset: how often values fall into ranges.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the required dependencies and devDependencies.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run serve`

This will start Express.js App in clustered mode to take advantage of multicore servers.

Now navigate to http://localhost:3000 and that will load the Static SPA React App which will make an Ajax API call to load the data.
Averege Unit Price is the default metric chosen to show the histogram.
You can select the metric from the left hand navigation pane.


### `npm test`

This will run unit tests using jest.

## Highlights - Tech Stack
 - Usage of React hooks *(Using the latest version of React JS)*
 - Uses D3 for building Histogram chart
 - Express app in clustered mode *(Considering future scalability)*
 - Redux Connect to avoid unnecessary renders
 - Material-UI
 - Jest


