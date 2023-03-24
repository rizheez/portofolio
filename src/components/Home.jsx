import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ava } from "../assets/index";
function Home() {
    return (
        <div
            className="flex items-center justify-center"
        >
            <div className=" text-white" data-aos="zoom-out" data-aos-delay="250">
                <div className="flex flex-col content-center items-center pt-40">
                    <img className="w-52" src={ ava } alt="avatar" />
                    <h1 className="text-4xl font-bold mb-4 text-center pt-5">Muhammad Reza Saputra</h1>
                    <p className="text-lg mb-4">I'm Laravel Developer</p>
                </div>
                <div className="flex justify-center pb-32">
                    <a
                        href="https://www.linkedin.com/in/muhammad-reza-saputra-b6a81726b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4"
                    >
                        <FaLinkedin size={ 32 } />
                    </a>
                    <a
                        href="https://www.facebook.com/zeinatsu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4"
                    >
                        <FaFacebook size={ 32 } />
                    </a>
                    <a
                        href="https://github.com/rizheez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4"
                    >
                        <FaGithub size={ 32 } />
                    </a>
                </div>
            </div >
        </div >
    );
}

export default Home;