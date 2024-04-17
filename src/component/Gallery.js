import picture from '../assets/img/_DSF5276.jpg';

export default function Gallery(){
    return (
        <section id="gallery">
            <div>
                <img src={picture} className='bg-cover bg-no-repeat' alt='pic' />
            </div>
        </section>
    )
}