import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./routes/projects";
import About from "./routes/about";
import Contact from "./routes/contact";

export const router = createBrowserRouter([
    { path: "/", element: <App/>},
    { path: "/projects", element: <Projects/>},
    { path: "/about", element: <About/>},
    { path: "/contact", element: <Contact/>}
  ]);