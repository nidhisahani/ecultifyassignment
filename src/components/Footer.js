import React from 'react'

function Footer() {
    return (
        <div className="py-6">
            <div className=" flex justify-around flex-wrap py-3 ">
                <div className="flex flex-col mx-12">
                    <img
                        className="h-12 w-12"
                        src="https://cdn-icons-png.freepik.com/256/11548/11548077.png?ga=GA1.1.1703826910.1705501789&semt=ais_hybrid"
                        alt="logo1"
                    />
                    <div className="flex flex-row flex-wrap bg-gray-200">
                        <img
                            className="h-9 w-9"
                            src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296987.jpg?t=st=1723506898~exp=1723510498~hmac=f6e1e620d0712f7d42de13e39478c00451bcb51d09c9ac0954a9b59896bb9ec0&w=740"
                            alt="logo1"
                        />
                        <img
                            className="h-9 w-9"
                            src="https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg?t=st=1723506936~exp=1723510536~hmac=2b28082a1ef59d98977488e698033743689464f5d6dca499a39b3d5ad3efbdef&w=740"
                            alt="logo1"
                        />
                        <img
                            className="h-9 w-9"
                            src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296991.jpg?t=st=1723506972~exp=1723510572~hmac=31116f0fe425338794cf6441ad463552a83ce8c77832d9a601ebbb7e60392709&w=740"
                            alt="logo1"
                        />
                        <img
                            className="h-9 w-9"
                            src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151320975.jpg?t=st=1723507028~exp=1723510628~hmac=4b5396925a09cb184faa3484795c1c8016f9c07b75691bd5289281fb47f0e7d0&w=740"
                            alt="logo1"
                        />
                    </div>
                </div>
                <div className="flex flex-col mx-12">
                    <p className="flex font-bold text-xl">Use cases</p>
                    <div className='my-10 flex gap-4 flex-col'>
                        <p>UI Design</p>
                        <p>UX Design</p>
                        <p>Wireframing </p>
                        <p>Diagraming</p>
                        <p>Brainstroming</p>
                        <p>Online Whiteboard</p>
                        <p>Team collaboration</p>
                    </div>
                </div>

                <div className="flex flex-col mx-12">
                    <p className="flex font-bold text-xl">Explore</p>
                    <div className='my-10 flex gap-4 flex-col'>
                        <p>Design</p>
                        <p>Prototyping</p>
                        <p>Development features </p>
                        <p>Design systems</p>
                        <p>Collaboration features</p>
                        <p>Design process</p>
                        <p>Figjam</p>
                    </div>
                </div>

                <div className="flex flex-col mx-12">
                    <p className="flex font-bold text-xl">Resources</p>
                    <div className='my-10 flex gap-4 flex-col'>
                        <p>Blog</p>
                        <p>Best practices</p>
                        <p>Colors </p>
                        <p>Color wheel</p>
                        <p>Support</p>
                        <p>Developers</p>
                        <p>Resource library</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer