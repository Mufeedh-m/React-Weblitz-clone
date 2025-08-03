import React from "react";

const Article = () => {
    return (
        <article className="container mx-auto p-6">
            <h2 className="text-2xl font-bold ">Latest News</h2>
            <div className="flex bg shadow-lg bg-white rounded-lg p-3">
                <img className="rounded-lg mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQHdivPprPj5-Nv0sIp_g7SybrE0gJUy9fA&s" alt="" />
            <div className="ml-4 mt-8">
                <h3 className="text-xl font-semibold">🚀 Vite is Revolutionizing Frontend</h3>
                <p className="mt-6 text-gray-600">Vite is a next-gen Frontend tool that delivers fast development</p>
            </div>
            </div>
        </article>

    )
}
export default Article;