import React, { useState } from 'react'
import accountImage from '../src/assests/user.png';
import callImage from '../src/assests/call.png'
import thimmaImage from '../src/assests/thimma.jpg'

function AboutMe() {
    const [width, setWidth] = useState(window.innerWidth);

    function Info(){
        return(
            <div style={{width:width <= 720 ? '100%' : '60%',display:'flex',flexDirection:'column',textAlign: width <= 720 ? 'center' :'initial',justifyContent:'center',paddingLeft: width <= 720 ? 0 : 60,marginTop:20}} >
            <div style={{fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 16 : 30,display:'flex',justifyContent:width <= 720 ? 'center' : 'flex-start'}} >
                Hi I'm <div style={{borderBottom:2,borderBottomColor:'rgb(245, 223, 78)',borderBottomStyle: 'solid',}} >Thimma Chowdary</div>
            </div>
            <div style={{fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 12 : 20,marginTop:15,lineHeight:1.5}} >
            As a skilled React Native developer with having almost 4 years of experience, I possess expertise in developing cross-platform mobile applications that deliver seamless user experiences. Additionally, I have a strong command over writing APIs using Node.js and backend development using Firebase, allowing me to create robust and scalable server-side applications. With my technical proficiency and ability to work in a team environment, I am confident in my ability to contribute to your organization's success.
            </div>
           </div>
        )
    }
    function Image(){
        return(
            <div style={{width:width <= 720 ? '70%' :'40%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',marginTop:width <= 720 ?  50 : 20}} >
            <div style={{height:100,width:100,borderRadius:'50%',background:'white',padding:10,background:'rgb(245, 223, 78)',display:'flex',alignItems:'center',justifyContent:'center'}} >
                <div style={{fontFamily:'Quicksand-Light',fontSize:120,position:'absolute'}}  >3.8</div>
            </div>
            <div style={{fontSize:width <= 720 ? 20 : 30,fontFamily:'Quicksand-Light',marginTop:20}} >Years of experience</div>
         </div>
        )
    }

    function Details(){
        return(
            <div style={{display:'flex',justifyContent:'space-between',paddingLeft: width <= 720 ? 0 : 200,paddingRight: width <= 720 ? 0 : 200}} >
                <div style={{display:'block',flexDirection:width <= 720 ? 'column' : 'row',justifyContent:'space-between'}} >
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:50}} >
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,fontFamily:'Quicksand-light'}} >
                        Name
                    </div>
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,color:'#000',fontFamily:'Quicksand-light'}} >
                        Thimma Chowdary
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:30}} >
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,fontFamily:'Quicksand-light'}} >
                        Email
                    </div>
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,color:'#000',fontFamily:'Quicksand-light'}} >
                        thimmachowdary3@gmail.com
                    </div>
                </div>
                </div>
                <div style={{display:'block',flexDirection:width <= 720 ? 'column' : 'row',justifyContent:'space-between'}} >
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:50}} >
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,fontFamily:'Quicksand-light'}} >
                        Date of Birth
                    </div>
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,color:'#000',fontFamily:'Quicksand-light'}} >
                        05/08/1997
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:30}} >
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,fontFamily:'Quicksand-light'}} >
                        From
                    </div>
                    <div style={{color:'rgb(121, 121, 121',fontSize:width <= 720 ? 14 : 18,color:'#000',fontFamily:'Quicksand-light'}} >
                        Hyderabad, India
                    </div>
                </div>
                </div>
            </div>
        )
    }

  return (
    <div style={{paddingLeft: width <= 720 ? 20 : 30,paddingRight:width <= 720 ? 20 : 90,paddingTop:20,paddingBottom:20}}>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'30%',background:'rgb(245, 223, 78)',justifyContent:'center',marginTop:20,alignSelf:'center',paddingBottom:8,paddingTop:8,borderRadius:5,fontFamily:'Quicksand-light'}} >
                About Me
            </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Quicksand-light',marginTop:10,fontSize:20}} >
                 Know Me More
        </div>
    <div style={{display:'flex'}}>
        {width <= 720 ? <div style={{width:'100%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}} >
        <Info />
        <Image />
        </div> : <div style={{width:'100%',display:'flex',justifyContent:'space-around'}} >
        <Info /><Image /></div> }
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:20}} >
    <div style={{borderBottom:2,borderBottomColor:'rgb(245, 223, 78)',borderBottomStyle: 'solid',width:'30%'}} ></div>
    </div>
    <Details />
</div>
  )
}

export default AboutMe