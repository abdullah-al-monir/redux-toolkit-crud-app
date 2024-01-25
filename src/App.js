import { RouterProvider } from "react-router-dom";
import "./App.css";
import Route from "./routes/Route";


function App() {
  return <RouterProvider router={Route} />;
}

export default App;
