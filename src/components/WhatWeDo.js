import React from 'react';
import cmr from './Icons/cmr2.PNG';
import resident from './Icons/resident.PNG';
import reports from './Icons/reports.PNG';
import community from './Icons/community.PNG';
import communication from './Icons/communication.PNG';
import payment from './Icons/payment.PNG';
import maintainance from './Icons/maintainance.PNG';
import logo from './Icons/image-logo.png';


const WhatWeDo = () => {
    return (
        <div className=' mt-5'>
            {/* text field ------------------------- */}
            <div> 
                <h1 className='font-sans text-5xl font-semibold text-head-400'>What We Do</h1>
                <p className=' mt-8 font-sans font-normal text-text-400 '>Luctus laoreet primis tempor tristique elementum dignissim morbi suspendisse.</p>
            </div>


            {/* box div ---------------------------- */}
            <div className='mb-10 '>
                <div className='border mx-2 lg:mx-auto mt-10 border-border-400 mx-auto max-w-4xl rounded-full'>
                    <div className='shadow-my p-2 m rounded-full '>
                        <div className='border relative border-dashed border-dsBdr-400 m-14 rounded-full '>



                            <div  className='absolute left-[30%] sm:left-[42%] -top-10 sm:-top-10 flex justify-center items-center flex-col'>
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>



                            <div className='absolute -left-[55px] sm:left-[0%] top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={ reports } alt="reports " />
                                </div>
                                <h3 className='font-semibold w-24'>Reports</h3>
                            </div>



                            <div className='absolute -right-[55px] sm:right-[0%] top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={resident} alt="resident" />
                                </div>
                                <h3 className='font-semibold w-24 '>Resident And Tenant Portals</h3>
                            </div>



                            <div className='absolute -right-[55px] sm:-right-5 bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={community} alt="community" />
                                </div>
                                <h3 className='font-semibold w-24'>Community</h3>
                            </div>



                            <div className='absolute right-[30%] -bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={communication} alt="communication" />
                                </div>
                                <h3 className='font-semibold w-24'>Communication</h3>
                            </div>



                            <div className='absolute -left-[50px] bottom-[10px] sm:right-[45%] sm:-bottom-[40px] flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={payment} alt="payment" />
                                </div>
                                <h3 className='font-semibold w-24'>Payments</h3>
                            </div>



                            <div className='absolute -left-[55px] sm:-left-5 bottom-[120px] sm:bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={maintainance} alt="maintainance" />
                                </div>
                                <h3 className='font-semibold w-24'>Maintenance</h3>
                            </div>






                            <div className='border relative border-border-400 h-72 sm:m-16 m-6 rounded-full flex justify-center'>
                        
                                <div className='absolute bottom-[30px] justify-center items-center flex-col' >
                                    <div className=' w-36 overflow-hidden '>
                                        <img src={ logo } alt="maintainance" />
                                    </div>
                                </div>
                                
                                <div className=' text-sm sm:text-lg relative border w-44 sm:w-72 h-40 p-2 sm:p-4 shadow-my rounded-lg mt-10 md:mt-5'>
                                    <div className='absolute text-sm sm:text-lg right-[45%] md:-top-2 -top-[30px]  w-0 h-0 border-b-white border-b-[30px] md:border-b-[15px] border-r-transparent border-r-[15px] border-l-transparent border-l-[15px] ' ></div>
                                    Vitae tortor consequat lacinia nunc sodales potenti cras loi suspendisse tempor liberomu risus nibh eget platea justo
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;