import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Router from "./pages/Route";

function App() {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
