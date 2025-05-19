import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Projects from "./routes/projects";
import About from "./routes/about";
import Contact from "./routes/contact";
import Links from "./routes/links";

export const router = createBrowserRouter([
    { path: "/", element: <App/>},
    { path: "/projects", element: <Projects/>},
    { path: ":link", element: <Links/>},
    { path: "/about", element: <About/>},
    { path: "/contact", element: <Contact/>}
  ]);