import React from 'react';
import JoinButton from '../Header/JoinButton';

const NewSkyMiles = () => {
    return <div style={{ backgroundColor: '#d4e9e2', padding: 75 }}>
        <h2 className='pb-[1.6rem] text-[2rem] min-[375px]:text-[2.4rem] md:text-[2.8rem] md:pb[4.8rem] font-semibold'>Keep the Rewards Coming</h2>
        <p>The Rewards don't stop at your morning coffee. Join Starbucks<small>®</small><br></br>
        Rewards and unlock perks from our partners, all while earning more<br></br>
        Stars.</p>
        <br></br>

        <img src={process.env.PUBLIC_URL + "/delta-skymiles.png"} style={{width:200, height:75, marginLeft:525}}/>
        <br></br>
        <p>
            <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                <span>Link your Delta SkyMiles<small>®</small></span>          
            </a>
            and Starbucks<small>®</small> Rewards accounts to earn <br></br>
            1 mile per $1* spent at Starbucks and double Stars on Delta travel <br></br>
            days.
        </p>
        <br></br>
        <JoinButton innerText={"Join Starbucks® Rewards"} bgColor={"#008248"} borColor={"#008248"}/>
    </div>
}

export default NewSkyMiles;