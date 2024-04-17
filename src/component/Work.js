import picture from '../assets/img/_DSF4119.jpg';

export default function Work(){
    return (
        <section id="work">
            <div>
                <img src={picture} className='bg-cover bg-no-repeat' alt='pic'/>
            </div>
        </section>
    )
}