# Objective

In this exercise we implement our components as [pure functional components](https://www.coursera.org/learn/front-end-react/supplement/wiObL/exercise-instructions-functional-components).


## How-to Guide

In the project directory, you can run:

### 1. Install Create-React-App

`npx create-react-app confusion`


> *npx:* a package runner tool that comes with npm 5.2+. The npm command is used for managing packages while the npx command actually executes those package
> ***— [Create React App Tutotial](https://reactjs.org/tutorial/tutorial.html)***

### 2. Create a Remote Repo on GitHub via the Command Line

    curl -H "Authorization: token PLACE_GITHUB_TOKEN_HERE" https://api.github.com/user/repos -d '{"name":"PROJECT_NAME", "private":"true", "description":"React 101 Course", "homepage":"https://codesport.io"}'


GitHub has a tutorial on creating a [personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)


### 3. Connect Local Repo to the Remote 

```
git remote add upstream git@github.com:GITHUB_USER_NAME/PROJECT_NAME.git

git push -u upstream master #NB: for first commit -u is shorthand for '--set-upstream' and activates branch tracking
```

> NB: We are calling our remote, slave repo `upstream`. `Upstream` is named when the local repo is the master, source repo. Alternatively, we would name the 
> remote repo `origin` when the remote is the master, source repo. For example, when we fork someone else's project with the intent of doing a pull request, 
> the remote repo would be the origin, source and master repo.

### 4. [Optional: Install ReactStrap](https://www.npmjs.com/package/reactstrap)

```
npm add bootstrap

npm add reactstrap react react-dom
```

Import Bootstrap CSS into the src/index.js file like so: 

`import 'bootstrap/dist/css/bootstrap.css'`


### 5. Optional: Install Font Awesome and Boostrap Social

```
npm add font-awesome@4.7.0

npm add bootstrap-social@5.1.1
```

Next, import the new CSS files into the src/index.js file like so: 

```
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
```

# Pro Tip: Renaming Local and Remote Branches

## [Rename a Local Branch which Hasn't Been Pushed to the Remote](https://stackoverflow.com/a/6591218/946957)

If you want to rename the current branch, you can do:

`git branch -m <newname>`

(-m is for "move" which is how you rename in Git)


## [Renaming Local and Remote Branches](https://stackoverflow.com/a/30590238/946957)

```
# Rename the local branch to the new name 
git branch -m <old_name> <new_name>

# Delete the old branch on remote - where <remote> is, for example, origin
git push <remote> --delete <old_name>

# Or shorter way to delete remote branch [:]
git push <remote> :<old_name>

# Push the new branch to remote
git push <remote> <new_name>

# Reset the upstream branch for the new_name local branch
git push <remote> -u <new_name>
```

# React Advanced Tips 

[Lifting Up State](https://reactjs.org/tutorial/tutorial.html#lifting-state-up)

[useState for Functional Components](https://stackoverflow.com/questions/53165945/what-is-usestate-in-react)

https://reactjs.org/docs/hooks-intro.html

https://reactjs.org/docs/hooks-state.html

https://www.debuggr.io/react-map-of-undefined/#wrapping-up

https://jsonplaceholder.typicode.com/todos/

```
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
```

https://jsonplaceholder.typicode.com/guide.html

## Functional Components


> JavaScript function that returns a React element, or a collection of React elements that define the view
> Receives a “props” object as a parameter
>
> -Jogesh K. Muppala 

The first letter of functional components is always capitalized. Also note that: 

```
const  DishDetail = (props) =>{

  ...

}
```

Is the same as:

```
function DishDetail(props) {

  ...

}
```

## [Returning Results from React Methods](https://stackoverflow.com/a/49006363/946957)

```
//function r_test(idx){...}
r_test = (idx) => { // When using brackets you must return explicitly
   return  (
    <div className="input-field">   
      <label className="active">Titre</label>
    </div>
   )
  }
```
Or

```
//function r_test(idx){...}
r_test = (idx) => (  // Just parentheses means an implicit return
    <div className="input-field">
      <label className="active">Titre</label>
    </div>
  )
```


## [Calling a Function Inside a Map Function](https://stackoverflow.com/a/46854363/946957)

When writing React code, use arrow functions everywhere. It will be a very rare case where you need to use the function keyword
https://stackoverflow.com/a/46854363/946957

Creates a new function: `() => this.renderText(key)`

Calls an existing function: `{this.renderText(key)}`


[Calling functions inside a map() function in React render()](https://stackoverflow.com/a/46969315/946957)

If you use arrow function `() => {...}` instead of `function() {...}` you will have access to the `this` of React.Component. 

Read more about scope of `this` in javascript: http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/

Read about arrow functions and scope of this, refer in the "No Separate this" section of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


[Using javascript map with a function that has two arguments](https://stackoverflow.com/questions/12344087/using-javascript-map-with-a-function-that-has-two-arguments)


## [React Component Types: Additional Resources](https://www.coursera.org/learn/front-end-react/supplement/5ccBp/react-component-types-additional-resources)

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

[Presentational and Container Components (Redux Perspective)](https://redux.js.org/basics/usage-with-react)

[React Component Patterns](https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82)

[Functional Stateless Components in React](https://javascriptplayground.com/functional-stateless-components-react/)

[]()