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
    cs, rs, qt, py, ts, tauri, fb, plain
  ];
  const [part, set_part] = useState(-1);
  const [text, set_text] = useState("");
  const [started, set_started] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      if (part == parts.length) {return}
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
    gsap.to(".falling_img", {
      scrollTrigger: {
        trigger: ".falling",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      duration: 10,
      y: "100svh",
      rotate: 720,
    });
    gsap.to(".line", {
      scrollTrigger: {
        trigger: ".falling",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      duration: 20,
      y: "-100svh",
    });
  }, []);
  return (
    <div className="h-full overflow-x-hidden overflow-y-hidden">
    <nav className="menu border-white border-b-2" style={{transform: started ? "translateY(0)" : "translateY(-100%)"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-4xl font-bold text-white shadow-white hover:text-neutral-700">
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
          <div className="arrow" style={{opacity: started ? 1 : 0}}>🡣</div>
        </section>
        <section className="falling">
          <>
            {images.map((image, i) => {
            return <Image src={image} key={i} alt="" loading="lazy" className={"falling_img location" + i}
              ></Image>
            })}
            {[...Array(7)].map((_, i) => {
              return <>
              <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) + -30 + "svh", left: (2 * (i * random) + 1) + "svw"
              }}></div>
                <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) + -30 + "svh", right: (2 * (i * random) + 5) + "svw"
              }}></div>
                <div key={i + "line"} className="line" style={{
                bottom: (-25 * i) + -30 + "svh", right: (2 * (i * random) + 5) + 40 + "svw"
              }}></div>
              </>
            })}
          </>
        </section>
        <section className="about_me">

        </section>
    </div>
  );
}
