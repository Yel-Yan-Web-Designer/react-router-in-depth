import { Outlet, NavLink } from "react-router-dom"
const HelpLayout = () => {
  return (
    <div className="help">
        <h1>Website Help</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatum perferendis consectetur consequatur, ut impedit sit quo iusto quisquam delectus animi fuga deserunt facilis distinctio totam natus aliquam atque est!</p>

        <div className="help-links">
            <NavLink to="faq">View FAQ</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default HelpLayout