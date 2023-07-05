import React from 'react';
import WindowLogo from '../../Assets/Icons/WindowLogo';

const Restrictions = () => {
    return <div>
        <p className='text-[1.3rem] md:text-[1.4rem] pb-[3.2rem]'>At participating stores. Restrictions apply.<br></br>
        * Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.<br></br>
        Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit&nbsp;
            <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                <span>deltastarbucks.com/terms</span>
                <WindowLogo />           
            </a>.
        </p>
    </div>
};

export default Restrictions;