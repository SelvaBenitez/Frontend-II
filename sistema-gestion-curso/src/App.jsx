import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Approutes";
//import { supabase } from './config/supabase'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;