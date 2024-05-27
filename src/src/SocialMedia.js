import React, {useState} from 'react';
import QRCode from "react-qr-code";

import Github from './assests/socialmedia/github.png'
import Facebook from './assests/socialmedia/facebook.png'
import Instagram from './assests/socialmedia/instagram.png'
import LinkedIn from './assests/socialmedia/linkedin.png'
import Threads from './assests/socialmedia/threads.jpg'

function SocialMedia() {
    const [width, setWidth] = useState(window.innerWidth);
    const media = [
        {
            title: 'Github',
            img: Github,
            link: 'https://github.com/Thimma-chowdary'
        },
        {
            title: 'Facebook',
            img: Facebook,
            link: 'https://www.facebook.com/share/7J1zDZFX8dzFwnHC/?mibextid=qi2Omg'
        },
        {
            title: 'Instagram',
            img: Instagram,
            link: 'https://www.instagram.com/maddeveloperr'
        },
        {
            title: 'LinkedIn',
            img: LinkedIn,
            link: 'https://www.linkedin.com/in/thimma-chowdary-408a53103'
        },
        {
            title: 'Threads',
            img: Threads,
            link: 'https://www.threads.net/@maddeveloperr'
        },
    ]
  return (
<div style={{ marginTop: 20,paddingBottom:50 }}>
    <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', fontFamily: 'cursive', fontSize: width <= 720 ? 14 : 20 }}>
        Follow Me On Any Social Media
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <div style={{borderBottom:2,borderBottomColor:'rgb(245, 223, 78)',borderBottomStyle: 'solid',width:'30%',marginTop:10}} ></div>
            </div>
    <div style={{ display: 'flex', flexDirection: width <= 720 ? 'column' : 'row', justifyContent: 'space-around', flexWrap:width <= 720 ? 'wrap' : 'nowrap',alignItems:'center',paddingLeft:80,paddingRight:80 }}>
        {media.map((item, index) => {
            return (
                <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}} >
                    <div key={index} style={{ marginBottom: width <= 720 ? 10 : 0, marginTop:20 }}>
                        <div style={{height:'100%',width:'100%',padding:10}} >
                        <QRCode
                            size={256}
                            style={{  width: width <= 720 ? width * 50/100 : width * 10/100, height: width <= 720 ? width * 50 / 100 : width * 10 / 100,borderWidth:1,borderStyle:'solid',padding:10,borderRadius:5,borderColor:'rgb(230, 230, 230)' }}
                            value={item.link}
                            viewBox={`0 0 256 256`}
                        />
                        </div>
                    
                    </div>
                   <div style={{height:40,width:'100%'}} >
                     <img src={item.img} style={{height:'100%',width:'50%'}} />
                  </div>
               </div>
            );
        })}
    </div>
</div>

  )
}

export default SocialMedia