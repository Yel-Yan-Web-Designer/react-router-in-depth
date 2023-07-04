import './App.css';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Contact from './routes/contact'
import Footer from './routes/footer'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Root/>,
      errorElement : <ErrorPage/>,
      children : [
        {
          path : "/contact/:id",
          element : <Contact/>
        },
        {
          path : "/footer",
          element : <Footer/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
