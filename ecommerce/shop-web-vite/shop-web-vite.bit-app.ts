import { ReactSsr } from '@bitdev/react.app-types.react-ssr';

export default ReactSsr.from({
  /**
   * name of the app.
   */
  name: 'shop-web-vite',

  /**
   * name of the artifact, as persisted on the
   * bit component.
   */
  // artifactName: 'react-ssr-build',

  /**
   * webpack configuration transformers.
   */
  // transformers: [
  //   function (config, context) {
  //     config.addPlugin(
  //       new webpack.DefinePlugin({
  //         'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  //     }));

  //     return config;
  //   }
  // ],

  /**
   * default port range.
   */
  // defaultPort: [3000, 3200],

  /**
   * root the client side entry.
   */
  clientRoot: './shop-web-vite.app-root',

  /**
   * root for the server side entry.
   */
  // serverRoot: './server.app-root',
});
