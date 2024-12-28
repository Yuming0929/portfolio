'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaGamepad } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { BsArrowRight, BsGithub, BsLinkedin, BsArrowDown  } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "../lib/hooks";
import toast, { Toaster } from 'react-hot-toast';

const Intro = () => {

    const { ref } = useSectionInView("Home", 0.5);

    // 定义一个状态来控制邮箱的显示
    const [showEmail, setShowEmail] = useState(false);
    const email = "yumingh0929@gmail.com"
    // 切换状态的函数
    const toggleEmail = () => {
        setShowEmail(!showEmail);
    };

    const onCopy = (val: string) => {
        navigator.clipboard.writeText(val)
        toast.success('Succesfully copied to your clipboard!')
    }
    return (
        <section id="home" ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <Toaster></Toaster>
            <div className='flex items-center justify-center flex-wrap'>
                <div className="relative">
                    <motion.div initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image src="https://res.cloudinary.com/dtazw9zpb/image/upload/v1727572561/Simon-min_ukvrlv.jpg"
                            alt="Yuming portrait" width="192" height="192" quality="95" priority={true}
                            className=" rounded-full border-[0.35rem] border-white" />

                    </motion.div>
                    <motion.span className="absolute bottom-1 right-1 text-4xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>


                </div>
                <motion.div className='flex flex-col '
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}>

                    <div className='font-semibold'>Yuming Huang</div>
                    <div className=' text-gray-500 text-sm'>MEng in AI@UCLA</div>
                    <div className=' text-gray-500 text-sm'>BS in CS@UW-Madison</div>
                </motion.div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Yuming. </span>
                I am broadly interested in <span className='font-bold'>full-stack software development</span>, modeling, 3D rendering and machine learning.


            </motion.h1>

            <motion.div className='flex flex-col items-center justify-center gap-3 text-lg font-medium sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2
                }}
            >
                {/* <div className=' bg-[#C5050C] rounded-full hover:scale-110 hover:bg-[#9B0000]]'>
                    <a href="mailto:yumingh0929@gmail.com" target="_blank"
                        className='group text-white px-7 py-3 flex items-center gap-2 
                    outline-none
                    '>
                        Contact me
                        <BsArrowRight className='group-hover:translate-x-1 transition' />
                    </a>
                </div> */}

                <div
                    className='bg-[#C5050C] rounded-xl  hover:bg-[#9B0000]'
                >
                    <div onClick={toggleEmail}
                        className='group text-white px-11 py-3 flex items-center gap-2 outline-none cursor-pointer ' 
                    >
                        <span>Contact me</span>
                        {/* <BsArrowRight className='group-hover:translate-x-1 transition' /> */}
                        <BsArrowRight className={`group-hover:translate-x-1  transition-transform duration-300 ${showEmail ? 'rotate-90' : ''}`} />
                    </div>
                    <div className={`  transform transition-all duration-300 ${showEmail ? 'h-20' : 'h-0'}`}>
                    {showEmail && (

                        <div
                            className='flex flex-col text-white text-sm mt-2  text-center mb-5 items-center  font-sans'
                        >
                            yumingh0929@gmail.com
                            <button className='border mt-2 rounded-xl py-1 px-2 ' onClick={() => onCopy(email)}>copy</button>
                        </div>


                    )}
                    </div>
                    {/* 条件渲染：显示或隐藏邮箱 */}
                    
                </div>

                <a className='group bg-white text-slate-900 px-7 py-3 flex items-center gap-2 rounded-full
                hover:scale-110 hover:bg-stone-50 cursor-pointer transition border border-black'
                    href='/Yuming24CV.pdf' download>Download CV<HiDownload className='group-hover:translate-y-1 transition' /></a>

                <a className='bg-white text-slate-900 text-[1.25rem] p-4 flex items-center gap-2 rounded-full 
                hover:scale-110 hover:bg-stone-50 cursor-pointer transition border border-black'
                    href='https://www.linkedin.com/in/yuming-huang-b80124221/' target="_blak"><BsLinkedin /></a>

                <a className='bg-white text-slate-900  text-[1.25rem] p-4 flex items-center gap-2 rounded-full 
                hover:scale-110 hover:bg-stone-50 cursor-pointer transition border border-black'
                    href='' target="_blank"><BsGithub /></a>
            </motion.div>

            <motion.div className='flex flex-col items-center justify-center gap-8 text-lg font-medium sm:flex-row mt-10'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2
                }}>

                <a className='flex flex-col items-center w-32
                    bg-white text-slate-900 text-[1rem] p-4   rounded-xl
                    hover:scale-105 hover:bg-stone-50 cursor-pointer transition border border-black'
                    href='' target="_blak">
                    <div className='text-[3rem]'>
                        <FaTools />
                    </div>
                    <div>
                        Tools
                    </div>
                    <div>
                        工具
                    </div>

                </a>

                <a className='flex flex-col items-center  w-32
                    bg-white text-slate-900 text-[1rem] p-4   rounded-xl
                    hover:scale-105 hover:bg-stone-50 cursor-pointer transition border border-black'
                    href='' target="_blak">
                    <div className='text-[3rem]'>
                        <FaGamepad />
                    </div>
                    <div>
                        Games
                    </div>
                    <div>
                        游戏
                    </div>

                </a>
            </motion.div>
        </section>
    )
};

export default Intro
