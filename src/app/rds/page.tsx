'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';
import gameplay from '../images/joe.png';
import menu from '../images/ori.png';
import shortcut from '../images/shortcut-icon.svg';
import Link from 'next/link';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
        <div className='content'>
            <h1 className='title text-center'>RDS</h1>
            <h2 className='text-center text-4xl mb-5'>A continuation of D vault (aka Raisfeld encrypter).</h2>
            <p className='text-center'>
                after the success of D vault I decided to evolve the project into something different.
                Someone asked me to create a file saving system in D vault, so I created a 2nd version with file encryption instead.
            </p>
            <div className='images'>
                <Image src={gameplay} className='image' alt=""></Image>
                <Image src={menu} className='image' alt=""></Image>
            </div>
            <Link href="https://raisfeld.netlify.app/" className='open_project'>
            <Image src={shortcut} className='open_project_img' alt=""></Image>
            Download RDS
            </Link>
        </div>
    </div>
}