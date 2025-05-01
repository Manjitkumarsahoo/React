import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import store from './redux/Store.js'  //store reference
import { Provider } from "react-redux"  //Provide component



createRoot(document.getElementById('root')).render(

    <Provider store={store}>        
        <App />
    </Provider>

)
