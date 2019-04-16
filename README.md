This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About this boiler plate

I used to always create the same files at each new app initialization. That's why I've decided to create this simple boiler plate for a react app that relies on :
* Create react app 
* Ant Design
* Firebase
* React Router

I've implemented the following mechanisms
* Simple routes management with React Router
* Basic templates for private pages (home page here) and public pages (signin page)
* Signin form that allows users to authenticate with a 
* Routes protection with an authorization mechanism that checks if user is authenticated
* Sign out function in the header of any private page template

In order to be used with a Firebase account, a .env file must be created at root. This file must contain the following variables :

REACT_APP_PROD_API_KEY="insert_your_key_here"
REACT_APP_PROD_AUTH_DOMAIN="domain_url"
REACT_APP_PROD_DATABASE_URL="db_url"
REACT_APP_PROD_PROJECT_ID="id_for_project"
REACT_APP_PROD_STORAGE_BUCKET="storage_bucket"
REACT_APP_PROD_MESSAGING_SENDER_ID=yourID

REACT_APP_DEV_API_KEY="insert_your_key_here"
REACT_APP_DEV_AUTH_DOMAIN="domain_url"
REACT_APP_DEV_DATABASE_URL="db_url"
REACT_APP_DEV_PROJECT_ID="id_for_project"
REACT_APP_DEV_STORAGE_BUCKET="storage_bucket"
REACT_APP_DEV_MESSAGING_SENDER_ID=yourID

We assume that you have distinct Firebase projects for development and production. The .env is ignored by git

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
