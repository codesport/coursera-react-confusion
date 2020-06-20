This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How-to Guide

In the project directory, you can run:

### Install Create-React-App


`npx create-react-app confusion`


> *npx:* a package runner tool that comes with npm 5.2+. The npm command is used for managing packages while the npx command actually executes those package
> ***-[Create React App Tutotial](https://reactjs.org/tutorial/tutorial.html)***

### Create a Remote Repo on GitHub via the Command Line

    curl -H "Authorization: token PLACE_TOKEN_HERE" https://api.github.com/user/repos -d '{"name":"coursera-react", "private":"true", "description":"React 101 Course", "homepage":"https://www.coursera.org/learn/front-end-react/supplement/lwfpx/exercise-instructions-getting-started-with-react"}'


### Connect Local Repo to the Remote 

```
git remote add upstream git@github.com:GITHUB_USER_NAME/PROJECT_NAME.git

git push -u upstream master #NB: for first commit -u is shorthand for '--set-upstream' and activates branch tracking
```

> NB: We are calling our remote, slave repo `upstream`. `Upstream` is named when the local repo is the master, source repo. Alternatively, we would name it 
> `origin` when the remote is the source repo. For example when we fork someone else's project with the intent of doing a pull request.

### [Optional: Install ReactStrap](https://www.npmjs.com/package/reactstrap)

```
npm add bootstrap
npm add reactstrap react react-dom
```

Import Bootstrap CSS into the src/index.js file likeso: 

`import 'bootstrap/dist/css/bootstrap.css'`