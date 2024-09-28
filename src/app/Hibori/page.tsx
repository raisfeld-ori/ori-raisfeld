'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';
import gameplay from '../images/about_me_account.jpg';
import menu from '../images/Hibori.jpg';
import icon from '../images/icon.png';
import shortcut from '../images/shortcut-icon.svg';
import Link from 'next/link';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
        <div className='content'>
            <h1 className='title text-center'>Hibori</h1>
            <h2 className='text-center text-4xl mb-5'>Connects communities</h2>
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae, quaerat accusantium cupiditate distinctio voluptas alias deleniti assumenda! Explicabo debitis veniam ad sunt ducimus reiciendis? Recusandae veritatis repellendus similique? Esse!
            </p>
            <div className='images'>
                <Image src={gameplay} className='image max-w-36' alt=""></Image>
                <Image src={menu} className='image max-w-36' alt=""></Image>
                <Image src={icon} className='image max-w-64' alt=""></Image>
            </div>
            <Link href="https://hiboridownloadplese.vercel.app/" className='open_project'>
            <Image src={shortcut} className='open_project_img' alt=""></Image>
            Download Hibori
            </Link>
        </div>
    </div>
}