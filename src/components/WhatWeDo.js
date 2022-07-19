import React from 'react';
import cmr from './Icons/cmr2.PNG'

const WhatWeDo = () => {
    return (
        <div className=' mt-5'>
            {/* text field ------------------------- */}
            <div> 
                <h1 className='font-sans text-5xl font-semibold text-head-400'>What We Do</h1>
                <p className=' mt-8 font-sans font-normal text-text-400 '>Luctus laoreet primis tempor tristique elementum dignissim morbi suspendisse.</p>
            </div>

            {/* box div ---------------------------- */}
            <div>
                <div className='border mt-10 border-border-400 mx-auto max-w-4xl rounded-full'>
                    <div className='shadow-my p-2 m-14 rounded-full '>
                        <div className='border relative border-dashed border-dsBdr-400  m-24 rounded-full '>

                            <div style={{left: "45%"}} className='absolute -top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>

                            <div style={{left: "0%"}} className='absolute top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>

                            <div style={{right: "0%"}} className='absolute top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24 '>Lead To Lease CMR</h3>
                            </div>

                            <div style={{right: "0%"}} className='absolute -bottom-0 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>


                            <div style={{right: "30%"}} className='absolute -bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>

                            <div style={{right: "60%"}} className='absolute -bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>

                            <div style={{left: "0%"}} className='absolute -bottom-0 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>

                            <div className='border border-border-400 h-72 m-16 rounded-full '>
                        
                                <h6>hi</h6>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;