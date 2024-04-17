export default function AboutMe(){
    return (
        <section id='about' className='bg-black'>
            <div className='flex flex-row py-10 px-20'>
                <div className='flex flex-col w-2/4 justify-start py-16'>
                    <p className='text-6xl my-2 font-bold text-white font-montserrat'>ABOUT ME</p>
                    <p className='text-2xl my-2 text-white font-montserrat'>I am a</p>
                    <p  className='text-2xl my-2 tracking-wide text-white font-montserrat'>Photographer / Videographer</p>
                    <button className="my-2 font-semibold border-2 rounded-lg transition ease-in-out bg-white hover:bg-black hover:border-white hover:border-2 hover:text-white text-black px-5 py-3 w-36"><a href="https://drive.google.com/file/d/1DrSPwHAMwIhhx_jzWl2SQ1EIQvDjrI4m/view?usp=sharing" target="blank">Download CV</a></button>
                </div>
                <div className="flex flex-col w-2/4 items-end py-16 pr-10">
                    <div className="border-2 border-white text-white rounded-lg w-96 h-96 ">
                        CONTAINER
                        {/* <img src={profile} alt="display" className='rounded-xl'/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}