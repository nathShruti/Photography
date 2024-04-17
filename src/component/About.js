// import { useRef } from 'react';
import picture from '../assets/img/_DSF4066.jpg'

export default function AboutMe(){
    return (
        <section id='about'>
            <div>
                <img src={picture} className='bg-cover bg-no-repeat' alt='pic'/>
            </div>
        </section>
    )
}