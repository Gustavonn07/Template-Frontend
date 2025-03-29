import './i18n'
import "./style.css";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes}/>
      <Toaster 
        position='bottom-right'
        toastOptions={{
          duration: 2000
        }}
      />
    </AuthProvider>
  );
}

export default App;
