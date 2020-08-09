// to connect redux with react 
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { createStore } from 'redux';
import reducers from '../redux/reducers';

const store = createStore(reducers);

const AppComponent = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

AppComponent.getInitialProps = async (appContext) => {
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    };
    return { ...pageProps }
}

// returns a new instance of store everytime its called
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(AppComponent);