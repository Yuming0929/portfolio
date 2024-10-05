'use client'
import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React, { useEffect, useRef } from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {


    const {ref} = useSectionInView("Projects", 0.5); 


    return (
        <>
            <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
                <SectionHeading>Projects</SectionHeading>
                <div>
                    {projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>

                    ))}
                </div>
            </section>
        </>

    )
};

export default Projects

