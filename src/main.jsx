import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Suspense } from 'react'
import LoadingPage from './Components/Service/LoadingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<LoadingPage/>}>
        <App />
    </Suspense>
)

