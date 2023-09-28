import React from 'react'
import ReactDOM from 'react-dom/client'
// Compoennets
import App from './App.jsx'

// CSS
import './index.css'

// Redux setup
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'

// Auth0
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Auth0Provider
      domain="dev-2l1egt3jdec4gmbn.us.auth0.com"
      clientId="xh1LK92WQUqKQWdOc4YhkGvu2opWCxoi"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <Provider store={store} >
        <App />
      </Provider>
    </Auth0Provider>,


  </React.StrictMode>,
)
