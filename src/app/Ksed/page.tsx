'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';
import ksed from '../images/example.png';
import menu from '../images/menu.png';
import shortcut from '../images/shortcut-icon.svg';
import Link from 'next/link';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
        <div className='content'>
            <h1 className='title text-center'>KSED</h1>
            <h2 className='text-center text-4xl mb-5'>Your hidden desktop</h2>
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae, quaerat accusantium cupiditate distinctio voluptas alias deleniti assumenda! Explicabo debitis veniam ad sunt ducimus reiciendis? Recusandae veritatis repellendus similique? Esse!
            </p>
            <div className='images'>
                <Image src={ksed} className='image' alt=""></Image>
                <Image src={menu} className='image' alt=""></Image>
            </div>
            <Link href="https://github.com/raisfeld-ori/Ksed" className='open_project'>
            <Image src={shortcut} className='open_project_img' alt=""></Image>
            View the code
            </Link>
        </div>
    </div>
}