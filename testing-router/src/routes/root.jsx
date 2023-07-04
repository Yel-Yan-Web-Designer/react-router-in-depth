import { Outlet } from "react-router-dom"
const root = () => {
  return (
    <div className="root">
        This is root routes
        <div className="details">
            <Outlet/>
        </div>
    </div>
  )
}

export default root