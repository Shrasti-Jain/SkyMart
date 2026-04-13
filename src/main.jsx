import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import {Provider} from 'react-redux'
import { store } from './app/store.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <AppRoutes />
     <ToastContainer
  position="bottom-right"
  autoClose={3000}
  hideProgressBar={true}
  toastStyle={{
    backgroundColor: "#111111",
    color: "#fff",
    borderRadius: "16px",
    border: "1px solid #333",
    padding: "12px"
  }}
  bodyStyle={{
    fontSize: "14px"
  }}
/>
   </Provider>
)
