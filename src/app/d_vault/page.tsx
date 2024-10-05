'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';
import gameplay from '../images/light.png';
import menu from '../images/dark.png';
import shortcut from '../images/shortcut-icon.svg';
import Link from 'next/link';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
        <div className='content'>
            <h1 className='title text-center'>D vault</h1>
            <h2 className='text-center text-4xl mb-5'>a hidden vault for your data.</h2>
            <p className='text-center'>
                also known as RDsecurity, this was my first large project, after a few months of work I managed to create an app that can save and load data in JSON, String and database format, everything fully encrypted with AES cbc.
            </p>
            <div className='images'>
                <Image src={gameplay} className='image' alt=""></Image>
                <Image src={menu} className='image' alt=""></Image>
            </div>
            <Link href="https://rd-security.netlify.app/" className='open_project'>
            <Image src={shortcut} className='open_project_img' alt=""></Image>
            Download d_vault
            </Link>
        </div>
    </div>
}