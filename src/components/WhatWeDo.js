import React from 'react';
import cmr from './Icons/cmr2.PNG';
import resident from './Icons/resident.PNG';
import reports from './Icons/reports.PNG';
import community from './Icons/community.PNG';
import communication from './Icons/communication.PNG';
import payment from './Icons/payment.PNG';
import maintainance from './Icons/maintainance.PNG';


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



                            <div style={{left: "42%"}} className='absolute -top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={cmr} alt="cmr" />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>



                            <div style={{left: "0%"}} className='absolute top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={ reports } alt="reports " />
                                </div>
                                <h3 className='font-semibold w-24'>Lead To Lease CMR</h3>
                            </div>



                            <div style={{right: "0%"}} className='absolute top-10 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={resident} alt="resident" />
                                </div>
                                <h3 className='font-semibold w-24 '>Resident And Tenant Portals</h3>
                            </div>



                            <div className='absolute -right-5 bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={community} alt="community" />
                                </div>
                                <h3 className='font-semibold w-24'>Community</h3>
                            </div>



                            <div style={{right: "30%"}} className='absolute -bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={communication} alt="communication" />
                                </div>
                                <h3 className='font-semibold w-24'>Communication</h3>
                            </div>



                            <div style={{right: "60%"}} className='absolute -bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={payment} alt="payment" />
                                </div>
                                <h3 className='font-semibold w-24'>Payments</h3>
                            </div>



                            <div className='absolute -left-5 bottom-16 flex justify-center items-center flex-col' >
                                <div className='shadow-my border w-16 rounded-xl  overflow-hidden '>
                                    <img src={maintainance} alt="maintainance" />
                                </div>
                                <h3 className='font-semibold w-24'>Maintenance</h3>
                            </div>



                            <div className='border relative border-border-400 h-72 m-16 rounded-full flex justify-center'>
                        
                                <div className=' relative border w-72 h-10 h-40 p-4 shadow-my rounded-lg mt-5'>
                                    <div style={{ right: "45%"}} className='absolute -top-2  w-0 h-0 border-b-white border-b-[15px] border-r-transparent border-r-[15px] border-l-transparent border-l-[15px] ' ></div>
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