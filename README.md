> npm install react react-dom next 

> npm install redux react-redux  redux-thunk

*Next-redux-wrapper will enable us to create a store at every new request*

> npm install next-redux-wrapper

#### Next + Redux : 
To send the data down to the client, we need to:

* create a fresh, new Redux store instance on every request;
* optionally dispatch some actions;
* pull the state out of store;
* and then pass the state along to the client.

*Redux's only job on the server-side is to provide the initial state of our app.*
This might seem confusing but the important part is:
- Initialize and create a new redux store for new user request
- Send the redux state to the client
- The client then uses the received state to initialize the client-side redux store.

```javascript
import withRedux from "next-redux-wrapper";
//
//
//
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
```

The withRedux function accepts makeStore as first argument. The makeStore function will receive initial state and should return a new instance of Redux store each time when called, no memoization needed here, it is automatically done inside the wrapper.