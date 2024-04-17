import picture from '../assets/img/_DSF8165.jpg';

export default function ContactMe(){
    return (
        <section id="contact">
            <div>
                <img src={picture} className='bg-cover bg-no-repeat' alt='pic' />
            </div>
        </section>
    )
}