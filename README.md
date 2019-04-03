# React boilerplate for ServiceNow apps

Simple and lightweight boilerplate to build React applications for ServiceNow. 

Based on [Create-React-App](https://github.com/facebook/create-react-app).

## How to set up your development environment

You need to complete 3 steps so you can start bulding a React applicaiton for ServiceNow:

1. Copy this repo to your local machine and run `npm install` to install all dependencies.
2. Update `package.json` (line #5) with your ServiceNow instance URL:
```json
    "proxy":"https://dev38444.service-now.com"
```
3. Update `.env` file with user credentials you want to use for communications wtih ServiceNow:
```bash
    REACT_APP_USER=servicenow.account
    REACT_APP_PASSWORD=12345
```

This completes development environment setup and you can run the application by `npm start`.

> User name and password required for development environment only. You don't need to provide credentials when deploying the app into ServiceNow.

## ServiceNow deployment
To deploy the application into ServiceNow you need to perform the following steps:
1. Build the application by executing `npm run build`.
2. Save JS and CSS files from Build folder as _Style Sheets_ in ServiceNow.
3. Save HTML file from Build folder as a UI page. Update references to JS/CSS correspondingly.

You can find more details in [this article](https://medium.com/@pishchulin/react-application-in-servicenow-8bdbb1e69c0c).


