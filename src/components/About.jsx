import React from "react";
import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si"
import { React1, Javascript, FE, BE, AWS } from '../assets/index';

function About() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "React", icon: <FaReact /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "MySQL", icon: <SiMysql /> },
    ];

    const certificate = [
        { name: "Belajar Membuat Aplikasi Web Dengan React", image: React1, issued: "Dicoding Indonesia", date: "Aug 2022" },
        { name: "Belajar Dasar Pemograman Javascript", image: Javascript, issued: "Dicoding Indonesia", date: "Jul 2022" },
        { name: "Belajar Membuat Front-End Web untuk Pemula", image: FE, issued: "Dicoding Indonesia", date: "Jul 2022" },
        { name: "Belajar Membuat Back-End untuk Pemula", image: BE, issued: "Dicoding Indonesia", date: "Jul 2022" },
        { name: "Cloud Practitioner Essentials", image: AWS, issued: "Dicoding Indonesia", date: "Jul 2022" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="container mx-auto px-4 py-14">
                <div className="bg-slate-200 opacity-80 rounded-lg shadow-lg p-6 animate__fadeIn" data-aos="fade-down" data-aos-delay="250" >
                    <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
                    <i className="text-lg mb-6">
                        "Hello, I'm Muhammad Reza Saputra, a passionate web developer with a focus on Laravel. I've always been fascinated by the power of the internet and how it can be used to create amazing experiences for users all around the world. As a web developer, I'm committed to crafting beautiful and functional websites that are easy to use and provide real value to their users. I love the challenge of solving complex problems and creating innovative solutions. With my skills in Laravel, React, and other modern web development technologies, I'm always excited to take on new challenges and push the boundaries of what's possible in web development."
                    </i>
                    <h2 className="text-2xl font-bold mb-2 mt-5">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-2xl pt-5 ">
                        { skills.map((skill) => (
                            <div key={ skill.name } className="bg-white rounded-md p-2 md:w-42 md:flex border border-black hover:bg-blue-500 transition ease-in-out delay-100 hover:scale-110 hover:text-white  duration-300">
                                <div className="mr-2">{ skill.icon }</div>
                                <div className="truncate">{ skill.name }</div>
                            </div>
                        )) }
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-2">Certifications</h2>
                        <div className="flex flex-wrap gap-4 px-3 justify-center">
                            { certificate.map((cert) => (
                                <div key={ cert.name } className="bg-white rounded-lg shadow-lg p-4 w-96 transition ease-in-out delay-150 hover:scale-105 duration-200">
                                    <div className="h-52 rounded-t-lg mb-4 overflow-hidden">
                                        <img src={ cert.image } alt="Sertifikat" className="h-full w-full object-cover rounded-lg" />
                                    </div>
                                    <div className="text-lg font-bold mb-2" > { cert.name }</div>
                                    <div className="text-sm text-gray-500 mb-2">Issued by { cert.issued }</div>
                                    <div className="text-sm text-gray-500">{ cert.date }</div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;