import React from "react";
import { gaji, porto, perpustakaan } from '../assets/index';
import { FaGithub } from "react-icons/fa";
function Project() {

    const projects = [
        { name: 'Data Gaji', image: gaji, desc: 'Menghitung Data Gaji Karyawan Sederhana Menggunakan Framework Laravel', git: 'https://github.com/rizheez/data-gaji-laravel' },
        { name: 'Sistem Informasi Perpustakaan', image: perpustakaan, desc: 'Sistem Informasi Perpustakaan Menggunakan Framework Laravel', git: 'https://github.com/rizheez/perpu' },
        { name: 'My Portfolio', image: porto, desc: 'Portfolio Website Menggunakan Framework react', git: 'https://github.com/rizheez/portofolio' },
    ]

    return (

        <div className="container mx-auto px-5 py-14">
            <div className="bg-slate-200 opacity-80 rounded-lg shadow-lg" data-aos="fade-down" data-aos-delay="250">
                <h1 className="text-4xl font-bold mb-4 pt-10 px-5">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    { projects.map((project) => (
                        <div key={ project.name } className="bg-white border border-black mx-5 my-5 p-4 rounded-md transition ease-in-out delay-150 hover:scale-105 duration-200">
                            <div className="bg-white md:h-96 justify-center rounded-lg mb-4">
                                <img src={ project.image } alt="Sertifikat 1" className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{ project.name }</h3>
                            <p className="text-md mb-2">
                                { project.desc }
                            </p>

                            <a
                                href={ project.git }
                                className="text-blue-500 hover:text-blue-700 font-bold"
                            >
                                <FaGithub size={ 36 } />Github
                            </a>

                        </div>

                    )) }

                </div>
            </div>
        </div>

    )
}

export default Project;