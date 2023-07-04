import { Link } from "react-router-dom"
const errorPage = () => {
  return (
    <div className="error">
        <h1>Sorry, unexcepted error has occured!</h1>

        Go to home Page <Link to="/">Home</Link>
    </div>
  )
}

export default errorPage