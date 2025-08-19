import router from './router';
import { RouterProvider } from 'react-router';
import toast from 'react-hot-toast';
import { Suspense } from 'react';
import LoadingPage from './Components/Service/LoadingPage';


function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <RouterProvider router={router} />
    </Suspense>
 
  )
}

export default App
