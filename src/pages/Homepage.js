import React from 'react'

function Homepage() {


    const data = [
        { id: 1, text: "Pricing" },
        { id: 2, text: "Solutions" },
        { id: 3, text: "Community" },
        { id: 4, text: "Resources" },
        { id: 5, text: "Contact" },
        { id: 6, text: "Drinkware" },
    ];

    return (
        <>
            <div className='flex flex-col w-[100%] p-10  '>
                <div className='flex flex-col gap-6 justify-center items-center my-32'>
                    <div className='text-6xl font-bold text-black'>Title</div>
                    <div className='text-2xl text-gray-400'>Subtitle</div>
                    <div className='flex flex-row space-x-6 '>
                        <div className='flex justify-center items-center rounded-xl bg-gray-400 w-[80px] h-[30px] text-black'>Button</div>
                        <div className='flex justify-center items-center rounded-xl bg-black w-[80px] h-[30px] text-white'>Button</div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 justify-center items-center my-10'>
                    <div className='flex w-[90%] m-10 h-[280px] bg-gray-300 items-center justify-center p-2'></div>
                </div>

                <div className='flex flex-col gap-6 justify-center items-center my-10'>
                    
                    <div className='flex w-[90%] m-10  p-2 flex-col'>
                        <div className='text-4xl font-bold'>Heading</div>
                        <div>Subheading</div>
                    </div> 

                    <div className='flex flex-wrap justify-between gap-10'>
                    {data.map((item) => (
                        <div className='border-4 p-10 space-x-10 w-[30%]'>
                            {item.text}
                        </div>
                    ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Homepage