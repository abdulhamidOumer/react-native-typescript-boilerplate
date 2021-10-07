## What is React Native Typescript Boilerplate ?

The documentation is prepared with the assumption that you have some prior knowledge of `react native`, `redux` and `redux saga`.

This boilerplate is a react-native template that is inspired by the original [React Boilerplate]() and [React CRA Boilerplate](). Both boilerplates come in handy when working on react web apps, because of their scalable structure, the ease of generating boilerplate codes for redux states and components, as well as handling the basic setup of what a scalable react app requires.

This boilerplate template was built bringing some of the features that those two boilerplates contain as well as adding a few features scripts that would come handy in react native development.

### Tech Stacks

The boilerplate mostly uses the tools and stacks used by the boilerplates linked above. Lets list out the tools that are used in this template down below:

#### Main Tools

- React Native
- Redux
- Redux Toolkit
- Redux Saga
- Reselect
- Typescript

#### Test

- Jest
- react-testing-library

### Code Base Structure

####`src/app`

The main directory for you to write your code in. This is where your reducers, sagas and components will mainly live in. The structure inside this folder can be customized according to your needs.

####`src/assets`

This directory is part of the boilerplate and is mainly used to store initial images that you wish to set as an App Icon or Splash screen icon. Setter scripts will be picking images from this directory.

####`internals/`

This is the directory where generators, setters and template codes exist. In general codes for `yarn set` and `yarn generate` are available here.
