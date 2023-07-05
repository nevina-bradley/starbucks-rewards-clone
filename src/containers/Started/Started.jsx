import React from 'react';
import StartedTitle from '../../components/Started/StartedTitle';
import StartedBody from '../../components/Started/StartedBody';

const Started = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className='mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] max-w-[1440px] min-[1520px]:px-0'>
                <div>
                    <StartedTitle />
                    <StartedBody />
                </div>
            </div>
        </div>
    )
}


export default Started;