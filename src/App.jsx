import "./App.css";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import App1 from "./components/App1";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div>
          <Link to="app1">App1</Link>
        </div>
        <div>
          <Routes>
            <Route index element={<App1 />} />
            <Route path="app1" element={<App1 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
