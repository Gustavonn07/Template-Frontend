import './i18n'
import "./style.css";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>
  );
}

export default App;
