import { RouterProvider } from "react-router-dom";
import router from "./app/router";

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}


export default App;
