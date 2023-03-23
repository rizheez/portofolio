import React from "react";

function Project() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="container mx-auto px-4 py-32 pt-52">
                <div className="bg-slate-200 opacity-80 rounded-lg shadow-lg" data-aos="fade-down" data-aos-delay="250">
                    <h1 className="text-4xl font-bold mb-4 pt-10 px-5">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-black mx-5 my-5 p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Project 1</h3>
                            <p className="text-md mb-2">
                                A beautiful website created using React and TailwindCSS.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 font-bold"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="border border-black mx-5 my-5 p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Project 2</h3>
                            <p className="text-md mb-2">
                                A stunning website created using React and TailwindCSS.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 font-bold"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="border border-black mx-5 my-5 p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Project 3</h3>
                            <p className="text-md mb-2">
                                An amazing website created using React and TailwindCSS.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 font-bold"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="border border-black mx-5 my-5 p-4 rounded-md">
                            <h3 className="text-lg font-boldmb-2">Project 4</h3>
                            <p className="text-md mb-2">
                                A fantastic website created using React and TailwindCSS.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 font-bold"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;