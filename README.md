This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Get started](#updating-to-new-releases)
  - [Clone repository](#clone-repository)
  - [Install packages](#install-packages)
  - [Create config folder](#create-config-folder)
  - [Run app](#run-app)

## Get started

### Clone repository
  ```
  git clone git@github.com:josnunezg/reports.git
  ```

### Install packages

  ```
  npm install
  ```
### Create config folder

You must create a folder called `config` with a file inside called variables with extension .ts

```
reports/
  src/
    config/
      variables.ts
```

Within the file you must have the following data

```
export default {
  KEY: 'YOUR KEY',
  TOKEN: 'YOUR TOKEN',
}
```
### Run app

To start the application you just have to run the following command
```
npm start
```
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.