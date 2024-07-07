<div className={`absolute ${displayScreen ? "hidden" : " "}     left-0 top-0 bg-[#00000088] flex justify-between p-10 items-center w-screen h-screen`}>
            <div onClick={()=>{
                setDisplayScreen(!displayScreen)
            }}  className={`absolute top-5 left-5  bg-white p-3 rounded-lg w-fit h-fit text-black`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            {/* /* // left arrow */ }
            <div
            onClick={()=>{
                setCurrentImageidx(Math.min(0,currentImageidx - 1));
            }} 
            className='bg-white p-3 rounded-lg w-fit h-fit text-black' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
            </div> 
            {/* /* image center */ }
             <div className='w-2/4 h-3/4 flex justify-center bg-red-400'>

                    <Image src={imgr} width={1080} height={1920} alt={"none na"}  ></Image>
            </div> 
            {/* /* right arrow */ }
             <div className='bg-white p-3 rounded-lg w-fit h-fit text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>  