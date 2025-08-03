import{
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope
}from "react-icons/fa"

const navLink=[
    {
        name:"Home",
        icon:<FaHome/>,
        href:"#",
    },
    {
        name:"About",
        icon:<FaInfoCircle/>,
        href:"#",
    },
    {
        name:"Service",
        icon:<FaServicestack/>,
        href:"#",
    },
    {
        name:"Contact",
        icon:<FaEnvelope/>,
        href:"#",
    },
]

function Navbar() {

    return (
        <>
            <nav className="bg-black text-white p-4">
                <div className="continer mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold"><i class="fa-light fa-laptop-mobile"></i>🚀Weblitz</h1>
                    <ul className="flex space-x-6">
                         {navLink.map((link,index) => (
                        <li key={index}>
                            <a href={link.href} className="flex items-center gap-1 hover:text-blue-400">
                            {link.icon} 
                            {link.name}</a>
                         </li>
                        ))}
                        
                    </ul>
                </div>
            </nav>
        </>


    );

}

export default Navbar; 