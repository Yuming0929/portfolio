'use client';
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import {useSectionInView } from "../lib/hooks";

const About = () => {
    
   const {ref} = useSectionInView("About");

    return (
        <motion.section 
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay: 0.175}}
            id="about"
            >
            <SectionHeading>About Me</SectionHeading>
            <p>
            I'm currently pursuing master degree at University of California, Los Angeles, taking Master of Engineering in artificial intelligence. 
            I got my B.S. in <span className="font-medium">Computer Science</span> from University of Wisconsin–Madison. 
            My passion for full-stack software engineering drives me to create robust applications, where I can work on both the front-end and back-end.
            My core stack
                includes{" "}
                <span className="font-medium">
                    Java, Springboot, Javascript, React, MySQL, Redis, MongoDB.{" "}
                </span>
            I am also familiar with frameworks/libs like{" "}
                <span className="font-medium">
                    Next.js, Node.js, Three.js, TailwindCSS, Prisma, Pytorch. {" "}
                </span>
            I am pretty comfortable with DevOps role as well. I have experience in {" "}
            <span className="font-medium">
                AWS, Git, Jenkins, Docker, Kubernetes{" "}
            </span>
            </p>
            <br />
            <p className="mb-3">
            I am also an amateur 3D artist using <span className="font-bold">
                Blender{" "}
            </span> and a guitar<span>🎸</span> player (both acoustic and electric).
            I hava a dog🐶. His name is Taro, a cute Shiba Inu!
            </p>
            <div className="flex justify-center items-center pt-28">
            <Image src="https://res.cloudinary.com/dtazw9zpb/image/upload/v1727591477/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240928233106_bfgrpx.jpg" 
            alt="Taro" width="256" height="256" quality="95" priority={true}
                            className=" rounded-full border-[0.35rem] border-[#f8efef] hover:scale-150 transition" />
            </div>
            
        </motion.section>
    )
};

export default About
