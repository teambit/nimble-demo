This project is a demo of how multiple teams can work together in Bit to combine their work into a single, cohesive application.

In this case, the application has a header, which consumes components from multiple other teams.

The components in this demo can also be viewed in the Bit cloud at https://bit.cloud/bit-nimble.

## Running the Demo

- Clone this repo
- Install Bit: `npm i -g @teambit/bvm`
- Install dependencies: `bit install`
- Run the demo: `bit run shop-web` will open the application in your browser. You can also run `bit start`, which will open the Bit dev server interface in your browser. From there you can see each individual component and play with them in isolation.

After setting up, you may want to run `bit ls` to see a listing of all the components in the repo. This will also show you the versions of each component, as each component is--in effect--a standalone NPM package, available to use in any application.

## Things to Note

### Project Structure

There are four main directories in this repo:

- ecommerce
- design
- support
- checkout

Each represents a Bit scope. The `ecommerce` scope holds the main application, and the other three are teams that contribute to it. Each of these directories could be their own repo, and each team could work on their components in isolation. We have only put them together for the sake of simplicity, so that you can clone a single a repo and run the demo.

### Project Features

The Nimble app is made with React, with MUI for styling. It contains two Bit applications, one built using Webpack and one built using Vite. Both use server-side rendering (SSR) to render the application on the server and send it to the client. The two applications are there simply to show that Bit components can be used in any application, regardless of the build tool or framework.

## Todo
- [ ] Expand the demo to include more components from different teams.
- [ ] Make the two applications more explicitely different.
- [ ] Add a CI/CD pipeline?