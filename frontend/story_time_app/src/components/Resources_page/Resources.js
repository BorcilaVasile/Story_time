import React from 'react';
import './Resources.css';
import Luffy from '../../assets/luffy.jpg';


const textResources = [
    'dfha dadhfapd fn ddfaj fai dkajdfbu FileSystemHandl',
    'jlafd aduhOHW',
    'jfadf adfjaf Ubadhfa df adfoaud fah sdjkfaou udhfoa duhf auiefheo uhadfahd fioadyfauidlhfakjdbfladgufo audfgkahdfg adufgadsbfaduf adfhaildfuaghldkjf aduf adadlfadhf adfaldfaudfgaodfglajdfadgfuadfadfbgaldfjkaduldfgulagdfladguagdfaldfadfgadfadgfaldf  hdfhja '    
];
function Resources(){
    return (
        <div className='resources'>
            <div className='resources_search_bar'>
                <input type = "text" placeholder='Search resources' />
                <button>Search</button>
            </div>
            <div className='resources_container'>
                <div className='resource_wrapper'>
                    {textResources.map((text, index) => (
                        <div className='resource_post_card'>
                            <img src={Luffy} alt=''  className='post_card_image' />
                            <div className='text'>
                                <div className='resource_name'>
                                    Resource Name
                                </div>
                                <div className='resource_text' key={index}>
                                    {text}
                                </div>
                                <button>Learn more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources; 