"use client"
import React, { useEffect, useRef, useState } from "react";
import './page.css';
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import cs from './images/csharp.png';
import rs from './images/rust.png';
import qt from './images/Qt.png';
import py from './images/python.png';
import ts from './images/typescript.png';
import tauri from './images/tauri.png';
import fb from './images/firebase.png';
import plain from './images/plain.png';
import native from './images/react-native-logo.png';
import cpp from './images/cpp.png';
import c from './images/c.png';
import tf from './images/tf.png';
import unity from './images/unity.png';
import sql from './images/sql.png';
import expo from './images/expo.png';
import react from './images/React.png';
import me from './images/me.jpg';
import arrow from './images/arrow-down-svgrepo-com.svg';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const parts = [
    "Hi",
    "I'm Ori Raisfeld",
    "I'm a fullstack developer",
    "extra"
  ];
  let random = 1;
  const images = [
    cs, rs, qt, py, ts, tauri, fb, plain, native, cpp,
    c, tf, unity, sql, expo, react,
  ];
  const [part, set_part] = useState(-1);
  const [text, set_text] = useState("");
  const [started, set_started] = useState(false);
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
    random = Math.floor(Math.random() * images.length);
    let tl = gsap.timeline();
    tl.to(".falling_img", {
      scrollTrigger: {
        trigger: ".falling",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      duration: 100,
      y: "110svh",
      rotate: 720,
    });
  }, []);
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
        <section className="falling" style={{display: started ? "" : "none"}}>
          <>
            {images.map((image, i) => {
            return <Image src={image} key={i} alt="" loading="lazy" className={"falling_img location" + i}
              ></Image>
            })}
            {[...Array(4)].map((_, i) => {
              return <>
              <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) - 20 + 3 + "svh", left: (2 * (i * random) + 1) + "svw"
              }}></div>
                <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) - 20 + 5 + "svh", right: (2 * i + 5) + "svw"
              }}></div>
                <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) - 20 + 9 + "svh", right: (2 * (i * random) + 5) + 40 + "svw"
              }}></div>
              </>
            })}
          </>
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
            <h3 className="text-center text-6xl mb-5">Other Tools:</h3>
            <ul className="flex justify-center flex-row">
            <Image src={cs} alt="" className="logo"></Image>
              <Image src={unity} alt="" className="logo"></Image>
              <Image src={tf} alt="" className="logo"></Image>
              <Image src={qt} alt="" className="logo"></Image>
              <Image src={plain} alt="" className="logo"></Image>
            </ul>
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
              I am currently studying at Chamama Highschool and trying to get a B.C in The open University.
            </p>
            <Image src={me} className="me" alt=""></Image>
          </div>
        </section>
        <section className="projects">

        </section>
    </div>
  );
}
