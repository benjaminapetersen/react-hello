# react-hello

Kicking the tires of react.

Original [README.md](/docs/README.md) generated from `create-react-app` found [here](/docs/README.md).

## Summary

The gist of running this project can be found in the `package.json` scripts block:

```javascript
// note that yarn is the package manager, not npm.
// that said, `yarn start` and `npm start` probably will function the same way
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```

To kick things off do the following:

```bash
yarn start
```

After that, consult the original [README.md](/docs/README.md) for other information.



<!--
Organization
http://engineering.kapost.com/2016/01/organizing-large-react-applications/

FEATURE FIRST:
--------------------------
app/
  /config
  /main/             // or '/flux', this is the base, framework specific stuff
    - apiUtils.js
    - baseActions.js
    - baseStore.js
    - connectToStores.js
  /settings/
    - profile/
    - notifications/
    ...
  /authentication/
    - api/
    - components/
    - helpers/
    ...
  /comments/
    - actions/
    - api/
    - components/
    - reducers/
    - stores/
    ...
  ...

APP of APPS:
--------------------------
/src
  /config
  /main           // this is the base, framework specific stuff
    - main.js     // main entry point
  /shared
    /users
      - usersEntry.js
    /ui
      /dropdown
  /members
    - membersEntry.js
    /members
      - memberEntry.js
    /profile
      - profileEntry.js


Routes?
--------------------------
/src
  /main
    // hmm. prob just render out the routes? i dunno.
  /members
    - routes.js

CSS?
--------------------------
- split them out into a separate styles folder for sass?
- is not en-vogue in the react community... hmm
/src
  /styles
    /main
    /members
      /profie

OR
- inlined with webpack, including inlining into the html!
/src
  /comments/
    /styles/
      - individualComponentStylesheet.scss
    ...


TESTS
--------------------------
- prob just include them in the folder & use a regex to run .spec.js
/src
  /members
    - membershipEntry.js
    /specs
      - membershipContainer.spec.js

-->
