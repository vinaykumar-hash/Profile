import ContactPage from "@/components/ContactPage"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Project from "@/components/Project"
import Scroll from "@/components/Scroll"
import SecondPage from "@/components/SecondPage"
import Sparkle from "@/components/Sparkle"
import ToolsPage from "@/components/ToolsPage"
export default function ProfileLayout(){
    return(
        <div className="MainPage w-screen">
            <Navbar/>
            <Hero/>
            <SecondPage/>
            <ToolsPage/>
            <Project/>
            <ContactPage/>
            <Sparkle/>
            <Scroll/>
        </div>
    )
}