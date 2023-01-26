import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Router from "@/pages/Route";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
