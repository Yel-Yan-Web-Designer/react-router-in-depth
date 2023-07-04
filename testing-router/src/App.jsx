import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ErrorPage from "./errorPage";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/help/Faq";
import Contact from "./Pages/help/Contact";

// layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="help" element={<HelpLayout/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
