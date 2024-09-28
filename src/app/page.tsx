"use client"
import React, { RefObject, useEffect, useRef, useState } from "react";
import './page.css';
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
import qt from './images/qt.png';
import google_pdf from './images/screenshot.png';
import rds from './images/light.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import gmail from './images/gmail.png';
import menu from './images/four-squares-icon.svg';
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const parts = [
    "Hi",
    "I'm Ori Raisfeld",
    "I'm a fullstack developer",
    "extra"
  ];
  const [mobile_menu_visible, set_mobile_menu_visible] = useState(false);
  const [part, set_part] = useState(-1);
  const [text, set_text] = useState("");
  const navigation = useRouter();
  const [started, set_started] = useState(false);
  const projects_ref = useRef<HTMLDivElement>(null);
  const about_ref = useRef<HTMLDivElement>(null);
  const jobs_ref = useRef<HTMLDivElement>(null);
  const scroll_to = (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current){return}
    window.scrollTo({top: ref.current.offsetTop, behavior: "smooth"});
  }
  const start = false;
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
        start: "top 30%",
        end: "+=900svw",
        pin: true,
        scrub: 1,
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
          <div className="flex items-center options">
          <div onClick={() => scroll_to(projects_ref)} className="m-5 cursor-pointer hover:text-neutral-700">Projects</div>
          <div onClick={() => scroll_to(jobs_ref)} className="m-5 cursor-pointer hover:text-neutral-700">Jobs</div>
          <div onClick={() => scroll_to(about_ref)} className="m-5 cursor-pointer hover:text-neutral-700">About</div>
          <div onClick={() => {}} className="m-5 cursor-pointer hover:text-neutral-700">Resume</div>
          </div>
          <div className="flex items-center mobile-only" onClick={() => set_mobile_menu_visible(!mobile_menu_visible)}>
            <Image src={menu} alt="" className={"menu-button " + (mobile_menu_visible ? "active" : "")}></Image>
            </div>
        </div>
        <div className={"mobile-options " + (mobile_menu_visible ? "" : "not-active")}>
        <div onClick={() => {set_mobile_menu_visible(false);scroll_to(projects_ref)}} className="m-5 cursor-pointer font-bold text-5xl ">Projects</div>
          <div onClick={() => {set_mobile_menu_visible(false);scroll_to(jobs_ref)}} className="m-5 cursor-pointer font-bold text-5xl ">Jobs</div>
          <div onClick={() => {set_mobile_menu_visible(false);scroll_to(about_ref)}} className="m-5 cursor-pointer font-bold text-5xl ">About</div>
          <div onClick={() => {set_mobile_menu_visible(false)}} className="m-5 mb-20 cursor-pointer font-bold text-5xl">Resume</div>
        </div>
      </div>
    </nav>
        <section className="hero">
          <h1 className="main_text title">{text}</h1>
          <div className="background" style={{opacity: started ? 1 : 0}}></div>
          <div className="arrow" style={{opacity: started ? 1 : 0}}>🡣</div>
        </section>
        <section className="about_me m-1" ref={about_ref} style={{display: started ? "" : "none"}}>
          <h1 className="title text-center">About me</h1>
          <div className="flex about flex-row justify-center items-center m-2">
            <p className="me_text">
              I{"'"}m Ori Raisfeld, A fullstack developer, I started programming 3 years ago in 2021.
              <br /><br />
              I started with 0 knowlage, by simply writing {'"'}python{'"'} into youtube during school,
              while creating my first application, I learned how fun and difficult can creating apps.
              <br></br><br></br>
              I am currently studying at Chamama Highschool and trying to get a B.A in The open University.
            </p>
            <Image src={me} className="me" alt=""></Image>
          </div>
          <div className="flex flex-row justify-center items-center mt-10 mobile-change">
            <div className="flex flex-col h-32 m-5">
            <h3 className="text-center text-6xl mb-5">Languages:</h3>
            <ul className="flex justify-center flex-row mb-10">
              <Image src={py} alt="" className="logo"></Image>
              <Image src={rs} alt="" className="logo"></Image>
              <Image src={react} alt="" className="logo"></Image>
              <Image src={ts} alt="" className="logo"></Image>
            </ul>
            </div>
            <div className="flex flex-col h-32 m-5">
            <h3 className="text-center text-6xl mb-5">Tools:</h3>
            <ul className="flex justify-center flex-row">
              <Image src={tauri} alt="" className="logo"></Image>
              <Image src={expo} alt="" className="logo" style={{width: "4em"}}></Image>
              <Image src={fb} alt="" className="logo"></Image>
              <Image src={qt} alt="" className="logo"></Image>
            </ul>
            </div>
            </div>
        </section>
        <section className="projects" style={{display: started ? "" : "none"}}>
          <h1 className="title text-center">Projects:</h1>
            <div className="pop_up" ref={projects_ref}>
                <div className="line">
                  <Project onClick={() => navigation.push("/Ksed")} name="Ksed" height={17} width={17} image={ksed}></Project>
                  <Project name="HFCIG" height={12} width={17} image={hfcig}></Project>
                  <Project name="RDS" height={12} width={17} image={rds}></Project>
                </div>
                <div className="line">
                  <Project name="D vault" height={17} width={17} image={d_vault}></Project>
                  <Project name="Hibori" height={15} width={7} image={hibori}></Project>
                  <Project name="Google PDF" height={12} width={12} image={google_pdf}></Project>
                </div>
            </div>
        </section>
        <section className="jobs" ref={jobs_ref} style={{display: started ? "" : "none"}}>
          <h1 className="title">Jobs / Education:</h1>
          <div className="scroll">
            <div className="job">
              <div>
              <h2 className="job_title">Chamama Highschool</h2>
              <h3 className="achivement">2021 - Present</h3>
              <p className="job_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorem at quisquam reiciendis adipisci. Quia ullam excepturi laborum nostrum nam, aspernatur aliquam delectus in doloremque natus culpa unde a enim
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
              </p>
              </div>
              <Image className="job_logo" src={tegreai} alt=""></Image>
            </div>
          </div>
        </section>
        <section className="contact" style={{display: started ? "" : "none"}}>
          <h1 className="title">Contact Me!</h1>
          <ul className="flex justify-center flex-row">
            <Social name="GitHub" image={github} link="https://github.com/raisfeld-ori" account="raisfeld-ori"></Social>
            <Social name="Linkedin" image={linkedin} link="https://www.linkedin.com/in/ori-raisfeld-422392264/" account="ori-raisfeld-422392264"></Social>
            <Social name="Gmail" image={gmail} link="mailto:raisfeldori@gmail.com" account="raisfeldori@gmail.com"></Social>
          </ul>
        </section>
    </div>
  );
}

function Project(props: {name: string, image: StaticImageData, onClick: () => void, height: number, width: number}) {
  return <div className="project" onClick={props.onClick} style={{height: props.height + "em", width: props.width + "em"}} id={props.name}>
      <div className="project_image"><Image src={props.image} alt={props.name}></Image></div>
      <div className="project_text">{props.name}</div>
    </div>
}

function Social(props: {name: string, image: StaticImageData, link: string, account: string}) {
  return <div className="social">
    <Image src={props.image} onClick={() => window.open(props.link, "_blank")} alt="" className="social-logo"></Image>
    <div>
      <h5 className="social-title">{props.name}</h5>
      <h6 className="social-account">{props.account}</h6>
    </div>
  </div>
}