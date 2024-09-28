'use client'
import Image from 'next/image';
import arrow_left from '../images/arrow-left-direction-icon.svg';
import { useRouter } from 'next/navigation';

export default function Page(){
    const navigation = useRouter();
    return <div className="hero">
        <div className="background"></div>
        <div className="arrow-back" onClick={() => navigation.back()}><Image alt="" src={arrow_left}></Image></div>
    </div>
}