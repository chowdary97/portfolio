import React, { useState } from 'react'
import resumePDF from './assests/pdf/ThimmaChowdaryResume.pdf';
import Movies1 from './assests/project/movies1.jpeg'
import Movies2 from './assests/project/movies2.jpeg'
import Movies3 from './assests/project/movies3.jpeg'
import Movies4 from './assests/project/movies4.jpeg'
import Movies5 from './assests/project/movies5.jpeg'
import Movies6 from './assests/project/movies6.jpeg'
// import Movies7 from './assests/project/movies7.jpeg'
import Movies8 from './assests/project/movies8.jpeg'
import Movies9 from './assests/project/movies9.jpeg'

import Jxr1 from './assests/project/jxr1.webp'
import Jxr2 from './assests/project/jxr2.webp'
import Jxr3 from './assests/project/jxr3.webp'
import Jxr4 from './assests/project/jxr4.webp'
import Jxr5 from './assests/project/jxr5.webp'

import Ala1 from './assests/project/ala1.webp'
import Ala2 from './assests/project/ala2.webp'
import Ala3 from './assests/project/ala3.webp'
import Ala4 from './assests/project/ala4.webp'
import Ala5 from './assests/project/ala5.webp'

import Onroad1 from './assests/project/onroad1.webp'
import Onroad2 from './assests/project/onroad2.webp'
import Onroad3 from './assests/project/onroad3.webp'
import Onroad4 from './assests/project/onroad4.webp'

function PortfolioImages() {
    const [width, setWidth] = useState(window.innerWidth);

    const portfolios = [
        {
            title: 'Movies',
            images: [Movies1,Movies2,Movies3,Movies4,Movies5,Movies6,Movies8,Movies9]
        },
        {
            title: 'JXR',
            images: [Jxr1,Jxr2,Jxr3,Jxr4,Jxr5]
        },
        {
            title: 'ALA',
            images: [Ala1,Ala2,Ala3,Ala4,Ala5]
        },
        {
            title: 'OnRoad',
            images: [Onroad1,Onroad2,Onroad3,Onroad4]
        }
    ]

    function Images(){
        return(
            <div style={{paddingLeft: width <= 720 ? 0 : 80}} >
                {portfolios.map((project,i)=>{
                    return(
                        <div style={{overflow:'hidden'}} >
                            <div style={{fontSize:width <= 720 ? 18 : 22,textAlign:'start',marginTop:i > 0 ? 40 : 0}} >{project.title}</div>
                        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', maxWidth: '100%',overflowY:'hidden' }}>
                            {project.images.map((img, index) => {
                                return (
                                    <div key={index} style={{ flexShrink: 0, width:width <= 720 ? 150 : 180, background: 'white', borderRadius: 5, marginTop: 20, padding: 2, marginLeft: 20,marginRight: project.images.length -1 == index ? 20 : 0 }}>
                                        <img src={img} style={{ height: '100%', width: '100%', borderRadius: 5 }} alt={`Image ${index}`} />
                                    </div>
                                );
                            })}
                        </div>
                        </div>
                    )
                })}
            </div>
        )
    }


  return (
    <div style={{paddingLeft: width <= 720 ? 20 : 30,paddingRight:width <= 720 ? 20 : 90,paddingTop:20,paddingBottom:20,background:'rgb(242, 242, 242)'}}>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'30%',background:'rgb(245, 223, 78)',justifyContent:'center',marginTop:20,alignSelf:'center',paddingBottom:8,paddingTop:8,borderRadius:5,fontFamily:'Quicksand-light'}} >
                Portfolio
            </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Quicksand-light',marginTop:10,fontSize:width <= 720 ? 16 : 20}} >
                 Some Of My Recent Projects
        </div>
        <div style={{width:'100%',marginTop:20}} >
            <Images />
            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <div style={{borderBottom:2,borderBottomColor:'rgb(245, 223, 78)',borderBottomStyle: 'solid',width:'30%',marginTop:30}} ></div>
            </div>
        </div>

</div>
  )
}

export default PortfolioImages