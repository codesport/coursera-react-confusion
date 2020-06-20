This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Import Bootstrap CSS into the src/index.js file likeso: 

`import 'bootstrap/dist/css/bootstrap.css'`


## Pro Tip: [Renaming Local and Remote Branches](https://stackoverflow.com/a/30590238/946957)

```
# Rename the local branch to the new name (-m is for "move" which is how you rename in Git)
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

## React Advanced Tips 

When writing React code, use arrow functions everywhere. It will be a very rare case where you need to use the function keyword
https://stackoverflow.com/a/46854363/946957

https://reactjs.org/tutorial/tutorial.html#lifting-state-up

https://stackoverflow.com/questions/53165945/what-is-usestate-in-react

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


[reactjs how to call method inside map function](https://stackoverflow.com/a/49006363/946957)
```
r_test = (idx) => {
   return  <div className="input-field">   // return explicitly
      <label className="active">Titre</label>
    </div>
  }
```
Or

```
r_test = (idx) => (      //implicit return
    <div className="input-field">
      <label className="active">Titre</label>
    </div>
  )
```


[React: Calling a function inside a map function](https://stackoverflow.com/a/46854363/946957)

Creates a new function: `() => this.renderText(key)`

Calls an existing function: `{this.renderText(key)}`


[Calling functions inside a map() function in React render()](https://stackoverflow.com/a/46969315/946957)

If you use arrow function `() => {...}` instead of `function() {...}` you will have access to the `this` of React.Component. 

Read more about scope of `this` in javascript: http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/

Read about arrow functions and scope of this, refer in the "No Separate this" section of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


[Using javascript map with a function that has two arguments](https://stackoverflow.com/questions/12344087/using-javascript-map-with-a-function-that-has-two-arguments)

[]()

[]()

[]()

[]()

[]()

[]()