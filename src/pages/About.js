import React from "react";

function About() {
    return (
        <div className="flex justify-center bg-slate-300 my-6">
            <div className="flex flex-wrap w-[100%] min-h-[600px] mx-auto bg-white justify-center gap-10 rounded-xl items-center ">
                <div className="flex flex-row w-[90%] justify-center flex-wrap gap-14 overflow-hidden">
                    <div className="border-2 w-[45%] max-h-[460px] bg-gray-300">
                        <img
                            className="w-full "
                            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Sunset in the mountains"
                        />
                    </div>
                    <div className="border-2 w-[45%] max-h-[460px] bg-gray-300">
                        <img
                            className="w-full"
                            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Sunset in the mountains"
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-600 flex  z-60 mx-24 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex  py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col ">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                UI UX
                                <span className="text-5xl sm:text-7xl">Designer</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur dolorem deleniti officiis accusamus veritatis.
                                Ratione accusantium, laboriosam, labore harum iusto in sequi
                                maiores accusamus perspiciatis, consectetur commodi
                                reprehenderit necessitatibus nulla.
                            </p>
                            <div className="flex mt-8">
                                <a
                                    href="##"
                                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 ">
                            <img
                                src="https://images.pexels.com/photos/1181487/pexels-photo-1181487.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="max-w-xs md:max-w-sm m-auto my-12"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-600 flex  z-60 mx-24 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex  py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col ">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                <span className="text-5xl sm:text-7xl">Features</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                temporibus alias fuga odio quas soluta atque, minus libero
                                adipisci animi, harum, nulla molestias iste quo exercitationem
                                consequatur! Voluptatem, eius ex!
                            </p>
                            <div className="flex mt-8">
                                <a
                                    href="##"
                                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 ">
                            <img
                                src="https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="max-w-xs md:max-w-sm m-auto my-12"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-600 flex z-60 mx-24 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex  py-16">
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 ">
                            <img
                                src="https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="max-w-xs md:max-w-sm m-auto my-12"
                                alt=""
                            />
                        </div>

                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col ">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Design
                                <span className="text-5xl sm:text-7xl">System</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores atque voluptatum nulla commodi laboriosam a possimus
                                quod unde, tempore quidem sequi. Aliquid laborum explicabo sit,
                                soluta ad veniam laudantium ab.
                            </p>
                            <div className="flex mt-8">
                                <a
                                    href="##"
                                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-10 flex-wrap overflow-hidden justify-center py-7 ">
                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Sunset in the mountains"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Designer</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Digital</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Developer</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-10 flex-wrap overflow-hidden justify-center py-7 ">
                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Sunset in the mountains"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Designer</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/669609/pexels-photo-669609.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Digital</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-400">
                        <img
                            className="w-full aspect-[4/3]"
                            src="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Developer</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
