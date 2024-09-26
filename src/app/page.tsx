"use client"
import React, { LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import './page.css';
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import rs from './images/rust.png';
import py from './images/python.png';
import ts from './images/typescript.png';
import tauri from './images/tauri.png';
import fb from './images/firebase.png';
import expo from './images/expo.png';
import react from './images/React.png';
import ksed from './images/example.png';
import me from './images/me.jpg';
import hibori from './images/Hibori.jpg';
import hfcig from './images/logo.png';
import d_vault from './images/ori.png';
import chamama from './images/chamama.png';
import openuni from './images/openuni.png';
import tegreai from './images/tegreai.jpeg';
import arrow from './images/arrow-down-svgrepo-com.svg';
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const parts = [
    "Hi",
    "I'm Ori Raisfeld",
    "I'm a fullstack developer",
    "extra"
  ];
  const [part, set_part] = useState(-1);
  const [text, set_text] = useState("");
  const [started, set_started] = useState(false);
  const projects_ref = useRef<HTMLDivElement>(null);
  const start = true;
  useEffect(() => {
    setTimeout(() => {
      if (start){set_started(true);}
      else if (part == parts.length) {return}
      else if (part == -1){
        set_part(1);
        set_text(parts[0]);
      }
      else if (part < parts.length - 1){
        for (let i = 0; i < parts[part].length; i++){
          setTimeout(() => {
            set_text(prev => prev.slice(0, prev.length - i));
          }, 50 * i);
        }
        for (let i = 0; i < parts[part].length; i++){
          setTimeout(() => {
            set_text(prev => prev + parts[part][i]);
            if (i == parts[part].length - 1){set_part(part + 1);}
          }, 50 * (i + parts[part].length) + 500);
        }
      } else{
        set_started(true);
      }
    }, 1500);
  }, [part]);
  useEffect(() => {
    if (!started){return}
    gsap.to(".pop_up", {
      scrollTrigger: {
        trigger: ".pop_up",
        start: "top center",
        end: "top center",
        onEnter: () => {
          projects_ref.current?.classList.add("focus");
        },
        onEnterBack: () => {
          projects_ref.current?.classList.remove("focus");
        }
      },
    });
    gsap.to(".pop_up", {
      scrollTrigger: {
        trigger: ".pop_up",
        start: "bottom center",
        end: "bottom center",
        onEnter: () => {
          projects_ref.current?.classList.remove("focus");
        },
        onEnterBack: () => {
          projects_ref.current?.classList.add("focus");
        }
      },
    });
    gsap.to(".scroll", {
      scrollTrigger: {
        trigger: ".scroll",
        start: "top 20%",
        end: "+=700svw",
        pin: true,
        scrub: 1,
        markers: true,
      },
      duration: 3,
      ease: "none",
      x: "-310svw",
      y: 0,
    })
  }, [started]);
  return (
    <div className="h-full overflow-x-hidden overflow-y-hidden">
    <nav className="menu border-white border-b-2" style={{transform: started ? "translateY(0)" : "translateY(-100%)"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-4xl text-nowrap font-bold text-white shadow-white hover:text-neutral-700">
              Ori Raisfeld
            </Link>
          </div>
          <div className="flex items-center">
          <Link href={""} className="m-5 hover:text-neutral-700">Projects</Link>
          <Link href={""} className="m-5 hover:text-neutral-700">Jobs</Link>
          <Link href={""} className="m-5 hover:text-neutral-700">Skills</Link>
          <Link href={""} className="m-5 hover:text-neutral-700">Resume</Link>
          </div>
        </div>
      </div>
    </nav>
        <section className="hero">
          <h1 className="main_text title">{text}</h1>
          <div className="background" style={{opacity: started ? 1 : 0}}></div>
          <div className="arrow" style={{opacity: started ? 1 : 0}}>🡣</div>
        </section>
        <section className="skills" style={{display: started ? "" : "none"}}>
            <h2 className="title text-center">My skills</h2>
            <div style={{marginTop: "100svh"}}>
            <h3 className="text-center text-6xl mb-5">Main Tools:</h3>
            <ul className="flex justify-center flex-row mb-10">
              <Image src={py} alt="" className="logo"></Image>
              <Image src={rs} alt="" className="logo"></Image>
              <Image src={expo} alt="" className="logo"></Image>
              <Image src={tauri} alt="" className="logo"></Image>
              <Image src={react} alt="" className="logo"></Image>
              <Image src={fb} alt="" className="logo"></Image>
              <Image src={ts} alt="" className="logo"></Image>
            </ul>
            </div>
        </section>
        <section className="about_me m-1" style={{display: started ? "" : "none"}}>
          <h1 className="title text-center">About me</h1>
          <div className="flex flex-row justify-center items-center m-2">
            <p className="me_text">
              I'm Ori Raisfeld, A fullstack developer, I started programming 3 years ago in 2021.
              <br /><br />
              I started with 0 knowlage, by simply writing "python" into youtube during school,
              while creating my first application, I learned how fun and difficult can creating apps.
              <br></br><br></br>
              I am currently studying at Chamama Highschool and trying to get a B.A in The open University.
            </p>
            <Image src={me} className="me" alt=""></Image>
          </div>
        </section>
        <section className="projects" style={{display: started ? "" : "none"}}>
            <div className="pop_up" ref={projects_ref}>
                <div className="line">
                  <Project name="Ksed" height={17} width={17} image={ksed}></Project>
                  <Project name="HFCIG" height={12} width={17} image={hfcig}></Project>
                </div>
                <div className="line">
                  <Project name="Hibori" height={15} width={7} image={hibori}></Project>
                  <Project name="D vault" height={17} width={17} image={d_vault}></Project>
                </div>
            </div>
        </section>
        <section className="jobs" style={{display: started ? "" : "none"}}>
          <h1 className="title">Jobs / Education:</h1>
          <div className="scroll">
            <div className="job">
              <div>
              <h2 className="job_title">Chamama Highschool</h2>
              <h3 className="achivement">2021 - Present</h3>
              <p className="job_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorem at quisquam reiciendis adipisci. Quia ullam excepturi laborum nostrum nam, aspernatur aliquam delectus in doloremque natus culpa unde a enim.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repudiandae nostrum dolorem, asperiores voluptate veritatis debitis. Dicta odio impedit tenetur possimus vero ex commodi in deleniti, rerum provident, ut aliquam?
              </p>
              </div>
              <Image className="job_logo" src={chamama} alt=""></Image>
            </div>
            <div className="job">
              <div>
              <h2 className="job_title">The Open University</h2>
              <h3 className="achivement">2022 - Present</h3>
              <p className="job_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorem at quisquam reiciendis adipisci. Quia ullam excepturi laborum nostrum nam, aspernatur aliquam delectus in doloremque natus culpa unde a enim.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repudiandae nostrum dolorem, asperiores voluptate veritatis debitis. Dicta odio impedit tenetur possimus vero ex commodi in deleniti, rerum provident, ut aliquam?
              </p>
              </div>
              <Image className="job_logo" src={openuni} alt=""></Image>
            </div>
            <div className="job">
              <div>
              <h2 className="job_title">TeGriAi</h2>
              <h3 className="achivement">2024 - Present</h3>
              <p className="job_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorem at quisquam reiciendis adipisci. Quia ullam excepturi laborum nostrum nam, aspernatur aliquam delectus in doloremque natus culpa unde a enim.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repudiandae nostrum dolorem, asperiores voluptate veritatis debitis. Dicta odio impedit tenetur possimus vero ex commodi in deleniti, rerum provident, ut aliquam?
              </p>
              </div>
              <Image className="job_logo" src={tegreai} alt=""></Image>
            </div>
          </div>
        </section>
    </div>
  );
}

function Project(props: {name: string, image: StaticImageData, height: number, width: number}) {
  return <div className="project" style={{height: props.height + "em", width: props.width + "em"}} id={props.name}>
      <div className="project_image"><Image src={props.image} alt={props.name}></Image></div>
      <div className="project_text">{props.name}</div>
    </div>
}