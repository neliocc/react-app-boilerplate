
## React App Boilerplate
This is boilerplate code for a React App that uses Redux. It contains some examples, instructions, and a recommended file structure. The last update was on February 23rd, 2020, so make sure you [Update to the Latest Release](https://facebook.github.io/create-react-app/docs/updating-to-new-releases) of the create react app before starting to work on your project.

## Folders Structure
- #### assets
  Will contain all the assets that will be used in the project (Stylesheets, Images, Fonts, etc).
    ##### fonts
        Will contain all the fonts that will be used in the project.
    ##### styles
        Will contain all the stylesheets used in the project, they will be imported in App.css using @import.
    ##### images
        Will contain all the images used in the project.  
- #### components
  Will contain all the simple components that will be used in the project. Each component will be in its own Folder.    Simple components are components that have only one functionality (Ex: A button, A form, A card, etc) and is used by containers or other components. If a Simple Component has sub-components they can live within the same folder of the component but each one will have its own folder. If any of the sub-components is or will be used by other components, then it will have to live in the components folder. In the components folder you will find to example components showcasing how two implement components with Redux.
- #### config
  Will contain all the configuration files used globally (Ex: Api Keys, Constants, etc).
- #### containers
  Will contain all the containers that will be used in the project. Each container will be in its own Folder.    Containers are components that have multiple functionalities and use multiple components (Ex: A login page with login, forgot password and signup, A list of users where you can view, add, edit or delete users) and is mostly used as screens/pages in the App. A container will use only components from the components folder. In the containers folder you will find an example container showcasing how to implement containers with Redux.
- #### redux
  Will contain all the boilerplate required to implement [Redux](https://github.com/reduxjs/react-redux) in the project.
  ##### [action_types](https://redux.js.org/basics/actions)
        Will contain all the action types used by the reducers and the actions.
  ##### [actions](https://redux.js.org/basics/actions)
        Will contain all the actions, you can have multiple actions per file, or one file per action.
  ##### [reducers](https://redux.js.org/basics/reducers)
        Will contain all the reducers used in the project, you can have multiple reducers in one file, or one file per reducer, but all the reducers must be exported in a single reducer as the rootReducer in the index.js file.
  ##### [store](https://redux.js.org/basics/store)
        Will contain the store.
- #### utils
  In this folder you will find all the functions, interfaces, classes, etc that will be used throughout the project (Ex: Api functions, Authentication functions, Account Interface, etc).


These are the folders by default, but you may create other folders if you consider it necessary.

## Folders Naming Convention
Each folder will have a short and descriptive name, folder names will be lowercase and should only contain letters, numbers and underscore or hyphens. The exception will be the folders for components or containers that will use [Upper Cammel Case](http://wiki.c2.com/?UpperCamelCase)

## Containers and Components Folders Naming Convention
Each folder containing a simple component or a container, will have a descriptive name which should match the name of the component, folder names will use [Upper Cammel Case](http://wiki.c2.com/?UpperCamelCase)

## Files Naming Convention
Each file will have a short descriptive name, should only contain letters, numbers and underscore or hyphens, and should be written in [Camel Case](https://en.wikipedia.org/wiki/Camel_case)

## Components Naming Convention
Each component will have a descriptive name, should only contain letters, numbers and underscore, and should be written in [Upper Cammel Case](http://wiki.c2.com/?UpperCamelCase) (Ex: Button, Alert, Menu, etc)

## Containers Naming Convention
Each container will have a descriptive name ending with the work Container, should only contain letters, numbers and underscore, and should be written in [Upper Cammel Case](http://wiki.c2.com/?UpperCamelCase) (Ex: UsersListContainer, LoginPageContainer, SettingsContainer, etc)

## Classes, Interfaces and Enums Naming Convention
Each class or interface will have a descriptive name, should only contain letters, numbers and underscore, and should be written in [Upper Cammel Case](http://wiki.c2.com/?UpperCamelCase) (Ex: Person, Options, Pet, etc)

## Variables and Functions Naming Convention
Each variable or function will have a short descriptive name, should only contain letters, numbers and underscore, and should be written in [Camel Case](https://en.wikipedia.org/wiki/Camel_case) (Ex: userName, validateCredentials, signIn, etc)

## CSS classes and ids Naming Convention
Each css class or id will have a short and descriptive name, should only contain letters, numbers and hyphen, and should be written in lowercase (Ex: #login-page, .red-bg, etc)

## Code documentation
We will use [JSDoc](http://usejsdoc.org/) for the documentation of the App, every file, function, class, interface, component, container, etc in the project must be properly documented.

## Installing the project
Once you clone the project, you can use yarn to install it by running:
### `yarn install`
alternatively you can use npm:
### `npm install`

## Starting a Development server
You can start a development server by running:
### `yarn start`
alternatively you can use npm:
### `npm start`
Once the development server is running you can access the app at [http://localhost:3000](http://localhost:3000) and the App will refresh automatically every time you make a change to the source code.


## Creating a production build
You can generate a production build by running:
### `yarn build`
alternatively you can use npm:
### `npm run build`
Once the build is generated you'll see the resulting files in the build folder and you can use those files to deploy the App in a production server.


  


