import React from "react";
import SectionHeading from "./section-heading";


const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Contact Me</SectionHeading>
            <h2 className="text-2xl font-bold text-center mb-6">联系我</h2>
            <p className="text-center mb-4">如果你有任何问题或想法，请随时联系我！</p>
            <div className="flex flex-col items-center">
                <a
                    href="mailto:your-email@example.com"
                    className="bg-blue-500 text-white px-4 py-2  h-[2rem] w-[8rem] rounded-md mb-4 hover:bg-blue-600 transition duration-200 text-center items-center justify-center"
                >
                    Email me
                </a>
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-200"
                >
                    访问我的 LinkedIn
                </a>
            </div>
        </section>
    )
};

export default Contact
