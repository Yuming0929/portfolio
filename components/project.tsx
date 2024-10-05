'use client'

import { projectsData } from "../lib/data";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion"

type ProjectProps = (typeof projectsData)[number]

const Project = ({
    title,
    description,
    tags,
    imageUrl,
    projectUrl,
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.5 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5,1])

    return <motion.div 
        onClick={() => window.open(projectUrl, '_blank', 'noopener,noreferrer')}
    ref={ref}
    style={{
        scale: scaleProgress,
        opacity: scrollYProgress
    }}
        className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
        >
        <section  

        className=" bg-gray-100 max-w-[42rem] border broder-black/5 rounded-lg overflow-hidden
        relative sm:h-[25rem] 
        sm:pr-8 group-even:pl-8
        hover:bg-gray-200 transition"
            >
            <div className="py-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
            max-w-[40%] 
            flex flex-col h-full
            group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <p className="mt-2 leading-relaxed text-gray-700"></p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
                    ))}
                </ul>
            </div>

            <Image src={imageUrl} alt="Project I worked On" quality={95}
                className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                
                group-even:-right-[initial] group-even:-left-40 
                group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 
                group-hover:scale-105 transition
                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"/>


        </section>

    </motion.div>

}

export default Project;