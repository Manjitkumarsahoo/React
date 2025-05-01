import { Outlet, NavLink } from "react-router-dom";
function About() {
    return (
        <>
            <main style={{display:"flex",minHeight:"93vh"}}>
                <aside style={{width:"20%",display:"flex",alignItems:"center", flexDirection:"column",borderRight:"1px solid black"}}>
                    <NavLink to="/about">Career</NavLink><br />
                    <NavLink to={"blogs"}>Blogs</NavLink><br />
                    <NavLink to={"sub"}>Subscription</NavLink>
                </aside>
                <section style={{flex:"1"}}>
                    {/* Outlate component is the place holder which decide where
                     to show the child routing inside a parent route */}
                    <Outlet />
                </section>
            </main>
        </>
    )
}
export default About;