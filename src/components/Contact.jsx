import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
function Contact() {
    return (
        <div className="container mx-auto px-4 py-32 flex flex-col items-center ">
            <div className="bg-slate-200 opacity-80 rounded-lg shadow-lg p-6" data-aos="fade-down" data-aos-delay="250">
                <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 pt-5">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Email</h2>
                        <p className="text-lg">Send me an email at:</p>
                        <p className="">rezamuhammad980@gmail.com</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Social Media</h2>
                        <div className=" rounded-lg flex flex-nowrap mb-4">
                            <a
                                href="https://www.linkedin.com/in/muhammad-reza-saputra-b6a81726b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4 transition ease-in-out delay-150 hover:scale-125 duration-100"
                            >
                                <FaLinkedin size={ 32 } />
                            </a>
                            <a
                                href="https://www.facebook.com/zeinatsu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4 transition ease-in-out delay-150 hover:scale-125 duration-100"
                            >
                                <FaFacebook size={ 32 } />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;