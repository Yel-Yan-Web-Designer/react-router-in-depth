import { useRouteError } from "react-router-dom";

const errorPage = () => {

    const errs = useRouteError();

    console.log(errs.statusText, errs.error.message)
  return (
    <div>
        <h1>Sorry, unexcepted error has occured!</h1>
        <p>
            {errs.statusText}
            {errs.error.message}
        </p>
    </div>
  )
}

export default errorPage