import profile from '../assets/img/_DSF5913.jpg';

export default function Home(){
    return (
        <section className="bg-gradient-to-r from-[#3E4653] to-[#B8C3D4] bg-cover bg-no-repeat border-b-2 b" id="home">
            <div className='py-10 px-20'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-2/4 justify-center py-16'>
                    <p className='text-6xl my-2 tracking-wide text-white font-montserrat'>SHRUTI NATH</p>
                    <p className='text-2xl my-2 text-white font-montserrat'>I am a</p>
                    <p  className='text-2xl my-2 tracking-wide text-white font-montserrat'>Photographer / Videographer</p>
                    <button className="my-2 font-semibold rounded-lg transition ease-in-out bg-[#B8C3D4] hover:bg-slate-50 hover:-translate-y-1 hover:scale-110 text-black px-5 py-3 w-28"><a href="mailto:shrutinath2805@gmail.com">Hire Me</a></button>
                </div>
                <div className="flex flex-col w-2/4 items-end py-16 pr-10">
                    <div className="rounded-lg w-96 h-96 drop-shadow-xl">
                        <img src={profile} alt="display" className='rounded-xl'/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

// bg-gradient-to-r from-gray-950 to-gray-50 backdrop-blur-lg