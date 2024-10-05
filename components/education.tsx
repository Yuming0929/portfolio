'use client';

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ucla from "@/public/ucla.jpg"
import uwmadison from "@/public/uwmadison.png"
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";


const Education = () => {

    const { ref } = useSectionInView("Education");

    return (
        <motion.section id="education" ref={ref} className="scroll-mt-28 md:mb-40 mb-28"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{

            }}>
            <SectionHeading>Education</SectionHeading>
            <div className="flex">
                <Image src={uwmadison} className="h-20 w-20 md:ml-20" alt={"uwmadison"}></Image>
                <div className="block">
                    <div className="ml-8 text-xl font-semibold">University of Wisconsin-Madison</div>
                    {/* badge area */}
                    <div className="flex ml-8">
                        <div className="mx-1 px-3 py-2 md:text-sm text-xs font-medium text-white bg-[#C5050C] rounded-lg">2021 - 2024</div>
                        <div className="mx-1 px-3 py-2 text-xs md:text-sm font-medium text-white bg-[#C5050C] rounded-lg">B.S. in CS</div>
                        <div className="mx-1 px-3 py-2 text-xs md:text-sm font-medium text-white bg-[#C5050C] rounded-lg">GPA: 3.9/4</div>
                    </div>
                </div>
            </div>
            <div className="flex mt-16">
                <Image src={ucla} className="h-20 w-20 md:ml-20" alt={"ucla"}></Image>
                <div className="block">
                    <div className="ml-8 text-xl font-semibold">University of California, Los Angelos</div>
                    {/* badge area */}
                    <div className="flex ml-8">
                        <div className="mx-1 px-3 py-2 text-xs md:text-sm font-medium text-white bg-sky-600 rounded-lg">2024 - 2025(expected)</div>
                        <div className="mx-1 px-3 py-2 text-xs md:text-sm font-medium text-white bg-sky-600 rounded-lg">MEng in AI</div>
                    </div>

                </div>


            </div>
        </motion.section>
    )
};

export default Education
