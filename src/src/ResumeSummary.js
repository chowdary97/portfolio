import React, { useState } from 'react'
import resumePDF from './assests/pdf/ThimmaChowdaryResume.pdf';

function ResumeSummary() {
    const [width, setWidth] = useState(window.innerWidth);

    function Education(){
        return(
            <div style={{width:width <= 720 ? '100%' : '50%',display:'flex',flexDirection:'column',textAlign: width <= 720 ? 'center' :'initial',paddingLeft: width <= 720 ? 0 : 60,marginTop:20}} >
                <div style={{fontSize:width <= 720 ? 20 : 30,fontFamily:'Quicksand-light',display:'flex'}}>My Education</div>
                <div style={{fontSize:16,fontFamily:'Quicksand-light',borderLeftWidth:2,borderLeftStyle:'solid',borderLeftColor:'rgb(245, 223, 78)',display:'flex',paddingLeft:10,marginTop:15,flexDirection:'column'}}>
                <div style={{fontSize:width <= 720 ? 16 : 20,display:'flex'}}>Master of Computer Applications</div>
                    <div style={{fontSize:width <= 720 ? 14 : 16,display:'flex',color:'rgb(121, 121, 121)',marginTop:5,textAlign:'start'}}>Jawaharlal Nehru Technological University, Anantapur 2017 /2020</div>
                    <div style={{fontSize:width <= 720 ? 14 : 16,color:'rgb(121, 121, 121)',marginTop:10,textAlign:'start'}}>Completed Master of computer applications in JNTUA college of Enigineering affilitated to JNTU of Anantapur from 2017 to 2020.</div>
                    <div style={{width:'100%',borderBottomWidth:1,borderBottomStyle:'solid',borderBottomColor:'rgb(230, 230, 230)',marginTop:10}} ></div>
                    <div style={{fontSize:width <= 720 ? 16 : 20,display:'flex',marginTop:20}}>Bachelor of Science</div>
                    <div style={{fontSize:width <= 720 ? 14 : 16,display:'flex',color:'rgb(121, 121, 121)',marginTop:5}}>Sri Krishnadevaraya University / 2014-2017</div>
                    <div style={{fontSize:width <= 720 ? 14 : 16,color:'rgb(121, 121, 121)',marginTop:10,textAlign:'start'}}>Completed in Bachelor of science in sv degree college affilitated to Sri Krishnadevaraya University from 2014 to 2017.</div>
                    <div style={{width:'100%',borderBottomWidth:1,borderBottomStyle:'solid',borderBottomColor:'rgb(230, 230, 230)',marginTop:10}} ></div>
                </div>
           </div>
        )
    }

    function Experience(){
        return(
            <div style={{width:width <= 720 ? '100%' : '50%',display:'flex',flexDirection:'column',textAlign: width <= 720 ? 'center' :'initial',justifyContent:'center',paddingLeft: width <= 720 ? 0 : 60,marginTop:20}} >
            <div style={{fontFamily:'Quicksand-light',fontSize:width <= 720 ? 20 : 30,display:'flex'}}>My Experience</div>
            <div style={{fontSize:16,fontFamily:'Quicksand-light',borderLeftWidth:2,borderLeftStyle:'solid',borderLeftColor:'rgb(245, 223, 78)',display:'flex',paddingLeft:10,marginTop:15,flexDirection:'column'}}>
                <div style={{fontSize:width <= 720 ? 16 : 20,display:'flex'}}>SalientMinds Pvt. Ltd.</div>
                <div style={{fontSize:width <= 720 ? 14 : 16,display:'flex',color:'rgb(121, 121, 121)',marginTop:5,textAlign:'start'}}>SalientMinds Pvt Ltd is an innovative startup based in Hyderabad, specializing in no-code application development. The platform empowers users to create and deploy applications effortlessly through simple input prompts, eliminating the need for traditional coding. By leveraging cutting-edge technologies such as Angular, React Native, and React, SalientMinds delivers robust, scalable, and efficient solutions tailored to meet diverse business needs. Whether you are a novice or a seasoned developer, this platform simplifies the development process, enabling you to focus on core business objectives while we handle the complexities of coding and deployment.</div>
                <div style={{display:'flex',flexDirection:'column',marginTop:10,textAlign:'start'}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Company Url </div>
                    <a href='https://xnode.ai/' style={{fontSize:width <= 720 ? 14 : 16}}  >https://xnode.ai/</a>
                </div>
                <div style={{width:'100%',borderBottomWidth:1,borderBottomStyle:'solid',borderBottomColor:'rgb(230, 230, 230)',marginTop:10}} ></div>

                <div style={{fontSize:width <= 720 ? 16 : 20,display:'flex',marginTop:20}}>OnRoad Inc.</div>
                <div style={{fontSize:width <= 720 ? 14 : 16,display:'flex',color:'rgb(121, 121, 121)',marginTop:5,textAlign:'start'}}>OnRoad Inc. is a startup company based in San Roman, California, that has developed a mobile app using React Native. The app is designed for cargo route optimization, allowing companies to deliver their products to end-users quickly and efficiently. With the app's advanced features, businesses can optimize their delivery routes, track cargo in real-time, and monitor driver performance. The use of React Native ensures that the app is fast, responsive, and works seamlessly across both iOS and Android platforms. OnRoad Inc.'s cargo route optimization app is a powerful tool for businesses looking to streamline their delivery operations, improve their customer service, and gain a competitive edge in the marketplace.</div>
                <div style={{display:'flex',flexDirection:'column',textAlign:'start',marginTop:10}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Company Url :</div>
                    <a href='https://www.onroad.app/' style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}}   >https://www.onroad.app/</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:10,textAlign:'start'}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Play Store Url :</div>
                    <a href='https://play.google.com/store/apps/details?id=app.onroad' style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}}  >https://play.google.com/store/apps/details?id=app.onroad</a>
                </div>
                <div style={{width:'100%',borderBottomWidth:1,borderBottomStyle:'solid',borderBottomColor:'rgb(230, 230, 230)',marginTop:10}} ></div>
                <div style={{fontSize:width <= 720 ? 16 : 20,display:'flex',marginTop:20}}>Jobxrobot Pvt. Ltd.</div>
                <div style={{fontSize:width <= 720 ? 14 : 16,display:'flex',color:'rgb(121, 121, 121)',marginTop:5,textAlign:'start'}}>Jobxrobot pvt. ltd. Company is a startup company based in India that provides on-demand home services to customers. The platform allows customers to book services such as plumbing, electrical work, cleaning, beauty, and wellness services, among others. Jobxrobot Company screens and trains its service professionals, ensuring that customers receive quality services. The company operates in several cities across India. Jobxrobot Company aims to simplify the process of finding reliable home services while providing opportunities for service professionals to grow their businesses.</div>
                <div style={{display:'flex',flexDirection:'column',marginTop:10,textAlign:'start'}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Company Url :</div>
                    <a href='https://jobxrobot.com/' style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}}  >https://jobxrobot.com/</a>
                </div>
                <div style={{fontSize:16,fontFamily:'Quicksand-light',marginTop:20,textAlign:'start'}} >Play Store Url's </div>

                <div style={{display:'flex',flexDirection:'column',marginTop:10,textAlign:'start'}}>
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >JXR :</div>
                    <a href='https://play.google.com/store/apps/details?id=com.jobxrobot' style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}}  >https://play.google.com/store/apps/details?id=com.jobxrobot</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15,textAlign:'start'}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Ala Market :</div>
                    <a href='https://play.google.com/store/apps/details?id=com.alamarket'style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}}  >https://play.google.com/store/apps/details?id=com.alamarket</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginTop:15,textAlign:'start'}} >
                    <div style={{fontSize:16,fontFamily:'Quicksand-light'}} >Alc Online Shopping :</div>
                    <a href='https://play.google.com/store/apps/details?id=com.alconlineshopping' style={{fontSize:width <= 720 ? 14 : 16,marginTop:5}} >https://play.google.com/store/apps/details?id=com.alconlineshopping</a>
                </div>
                <div style={{width:'100%',borderBottomWidth:1,borderBottomStyle:'solid',borderBottomColor:'rgb(230, 230, 230)',marginTop:10}} ></div>
            </div>
       </div>
        )
    }

    const handleDownload = () => {
        // Create a temporary anchor element

        const a = document.createElement('a');
        a.href = resumePDF; // Set the href to the path of the imported file
        a.download = 'Thimma Chowdary Resume.pdf'; // Specify the filename for the downloaded file
        
        // Programmatically trigger a click event to download the file
        document.body.appendChild(a);
        a.click();
        // Clean up
        document.body.removeChild(a);
      };

      const handleSendWhatsAppMessage = () => {
        const message = 'Hello, this is a WhatsApp message!'; // The message you want to send
    
        // Construct the WhatsApp message URL with only the message parameter
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
        // Open the WhatsApp message URL
        window.open(whatsappURL, '_blank');
      };

  return (
    <div style={{paddingLeft: width <= 720 ? 20 : 30,paddingRight:width <= 720 ? 20 : 90,paddingTop:20,paddingBottom:20}}>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:'30%',background:'rgb(245, 223, 78)',justifyContent:'center',marginTop:20,alignSelf:'center',paddingBottom:8,paddingTop:8,borderRadius:5,fontFamily:'Quicksand-light'}} >
                Resume
            </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Quicksand-light',marginTop:10,fontSize:20}} >
                 Summary Of My Resume
        </div>
    <div style={{display:'flex'}}>
        {width <= 720 ? <div style={{width:'100%'}} >
        <Education />
        <Experience />
        </div> : <div style={{width:'100%',display:'flex',}} >
        <Education /><Experience /></div> }
    </div>
    <div onClick={handleDownload}  style={{cursor: 'pointer',width:'100%',alignItems:'center',justifyContent:'center',display:'flex',marginTop:50,marginBottom:10}} >
            <div style={{width:width <= 720 ? '50%' : '20%',background:'black',color:'#fff',fontSize:18,fontFamily:'Quicksand-light',paddingTop:8,paddingBottom:8,borderRadius:5}} >
                Download Resume
            </div>
        </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:20}} >

    <div style={{borderBottom:2,borderBottomColor:'rgb(245, 223, 78)',borderBottomStyle: 'solid',width:'30%'}} ></div>
    </div>
</div>
  )
}

export default ResumeSummary