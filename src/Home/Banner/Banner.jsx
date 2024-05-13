import img from '../../assets/images/Banner1.jpg'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center'>
            <div className='w-1/2 flex flex-col gap-12'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-black text-6xl font-bold'>Cognitive <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800  to-pink-600'>Collab</span></h1>
                    <p className='text-black text-3xl font-medium w-3/4'>Collective Intelligence, Individual Brilliance, and Connecting Minds for Collective Success..</p>
                </div>
                <div>
                    <button className="font-bold w-1/3  text-black bg-gradient-to-r from-fuchsia-800  to-pink-600 text-transparent text-xl btn btn-outline border-2 border-fuchsia-800 hover:text-white hover: hover:">Join us by Sign Up</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='h-[550px] w-[900px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;