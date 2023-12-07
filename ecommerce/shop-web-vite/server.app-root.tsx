import ReactDOMServer from 'react-dom/server';
import createEmotionServer, {
  EmotionCriticalToChunks,
} from '@emotion/server/create-instance';
import { StaticRouter } from 'react-router-dom/server';
import { EmotionCache } from '@emotion/cache';
import { ShopWebVite } from './shop-web-vite';
import { createEmotionCache } from './emotion-cache';

const serverCache = createEmotionCache();

const ShopWebViteFullApp = () => {
  return (
    <StaticRouter location="/">
      <ShopWebVite />
    </StaticRouter>
  );
};

type NimbleServerParts = (cache: EmotionCache) => {
  ServerComponent: JSX.Element;
  extractCriticalToChunks: (html: string) => EmotionCriticalToChunks;
  constructStyleTagsFromChunks: (
    criticalData: EmotionCriticalToChunks
  ) => string;
};

const makeNimbleServer: NimbleServerParts = (cache: EmotionCache) => {
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const ServerComponent = <ShopWebViteFullApp />;

  return {
    ServerComponent,
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  };
};

// Makes the body of the page
export const render = async () => {
  const { ServerComponent } = makeNimbleServer(serverCache);

  return ReactDOMServer.renderToString(ServerComponent);
};

// Makes the CSS of the page
export const loadScripts = async () => {
  // Render the component to a string.
  const {
    ServerComponent,
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  } = makeNimbleServer(serverCache);
  const html = ReactDOMServer.renderToString(ServerComponent);

  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  return `${emotionCss}`;
};
