import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<UserContextProvider>
<App />
</UserContextProvider>
   

)
