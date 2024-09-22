"use client"
import React, { useEffect, useRef, useState } from "react";
import './page.css';
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  let parts = [
    "Hi",
    "I'm Ori Raisfeld",
    "I'm a fullstack developer",
    "extra"
  ];
  const life_parts = [
    {Date: "2007", Text: "I was born"},
  ]
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
    gsap.to(".circle", {
      scrollTrigger: {
        trigger: ".timeline_start",
        start: "top center",
        end: "center center",
        scrub: true,
      },
      ease: "none",
      duration: 1,
      y: "53svh",
      onComplete: () => {
        
      },
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
        <section className="hero timeline_start" style={{display: started ? "" : "none"}}>
          <h1 className="font-bold title">About me</h1>
          <div className="circle" id="circle"></div>
          <div className="line"></div>
        </section>
    </div>
  );
}
