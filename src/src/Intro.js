import React, { useState } from 'react'
import accountImage from '../src/assests/user.png';
import callImage from '../src/assests/call.png'
import thimmaImage from '../src/assests/thimma.jpg'

function Intro() {
    const [width, setWidth] = useState(window.innerWidth);

    function Info(){
        return(
            <div style={{width:width <= 720 ? '100%' : '60%',display:'flex',flexDirection:'column',textAlign: width <= 720 ? 'center' :'initial',justifyContent:'center',paddingLeft: width <= 720 ? 0 : 60,marginTop:20}} >
            <div style={{fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 16 : 30}} >
                Hi I'm Danda Thimma Chowdary
            </div>
            <div style={{fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 30 : 50,marginTop:15}} >
                React Native Developer
            </div>
            <div style={{fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 14 : 20,marginTop:15}} >
                Based in Hyderabad, India.
            </div>
           </div>
        )
    }
    function Image(){
        return(
            <div style={{width:width <= 720 ? '70%' :'40%',alignItems:'center',justifyContent:'center',display:'flex',marginTop:20}} >
            <div style={{height:width <= 720 ? 200 :330,width:width <= 720 ? 240 : 330,borderRadius:'50%',background:'white',padding:10}} >
            <img style={{height:'100%',width:'100%',borderRadius:'50%'}} src={thimmaImage} alt="My Image" />
            </div>
         </div>
        )
    }
    
  return (
    <div style={{background:'rgb(245, 223, 78)',paddingLeft: width <= 720 ? 20 : 90,paddingRight:width <= 720 ? 20 : 90,paddingTop:20,paddingBottom:20}}>
        <div  style={{display:'flex',justifyContent:'space-between'}} >
            <div style={{paddingTop:15,display:'flex',justifyContent:'space-between',width:'100%'}}>
                <div  style={{display:'flex',alignItems:'center'}} >
                <img style={{height:15,width:15}} src={accountImage} alt="My Image" />
                <div style={{marginLeft:10,fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 14 : 20}} >Thimma Chowdary</div>
                </div>
                <div  style={{display:'flex',alignItems:'center'}} >
                <img style={{height:15,width:15}} src={callImage} alt="My Image" />
                <div style={{marginLeft:10,fontFamily:'Quicksand-Light',fontSize:width <= 720 ? 14 :20}} >+91 9985959242</div>
                </div>
            </div>
        </div>
        <div style={{display:'flex'}}>
            {width <= 720 ? <div style={{width:'100%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}} >
            <Image />
            <Info />
            </div> : <div style={{width:'100%',display:'flex',justifyContent:'space-around'}} >
            <Info /><Image /></div> }
        </div>
    </div>
  )
}



export default Intro