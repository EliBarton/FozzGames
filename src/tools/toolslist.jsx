import { NavLink } from "react-router-dom";


export const ToolsList = () => {


    return (
        <div className="container-fluid text-center">
            <p className="Welcome">
                Tools List
            </p>
            <NavLink className='nav-link' to='levelgenerator'>Godot Level Generator
            </NavLink>
            <NavLink className='nav-link' to='colorpalette'>Color Palette Generator
            </NavLink>
        </div>
    );
}