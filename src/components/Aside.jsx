import React from "react";
import {
    FaBook,
    FaReact,
    FaRocket

} from "react-icons/fa"

const links = [
    {
        name: "Vite Documentation",
        icon: <FaBook />
    },
    {
        name: "React Guide",
        icon: <FaReact />
    },
    {
        name: "Frontend Trends",
        icon: < FaRocket />
    },
]

const Aside = () => {
    return (
        <aside className="container bg-gray-400 rounded shadow-lg p-6 w-60">
            <h2 className="text-2xl font-bold">📌 Related Links</h2>
            <ul className="space-y-2 mt-2">
                {links.map((link) => (
                    <li>
                        <a href={link.href}
                        className=" flex items-center text-blue-500 gap-1 hover:underline" >
                                {link.icon}
                                {link.name}
                            </a>
                    </li>



                ))}

            </ul>
        </aside>
    )
}
export default Aside;
