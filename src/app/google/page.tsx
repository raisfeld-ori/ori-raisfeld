'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';
import menu from '../images/screenshot.png';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
        <div className='content'>
            <h1 className='title text-center'>Google PDF</h1>
            <h2 className='text-center text-4xl mb-5'>A minor project made with a programmer from google.</h2>
            <p className='text-center'>
                I was part of the 2022 google mentoring program. for around a few months a developer at google assisted me and one other person
                in creating a project and displaying it in google. I learned how to work properly with other people and with proffesional tools.
            </p>
            <div className='images !justify-center'>
                <Image src={menu} className='image' alt=""></Image>
            </div>
        </div>
    </div>
}