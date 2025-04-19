import { Outlet  } from "react-router-dom"
import MainMenu from "../components/MainMenu"
import Footer from "../components/Footer"

export default function WrapperRoute () {
    return (
        <main>
            <MainMenu />
            <Outlet/>
            <Footer /> 
        </main>
    )
}