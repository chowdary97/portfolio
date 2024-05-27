import React, { useState } from 'react';

import reactNativeImage from '../src/assests/techs/react-native.png';
import nodeJs from '../src/assests/techs/nodejs.png';
import redux from '../src/assests/techs/redux.png';
import js from '../src/assests/techs/js.png';
import api from '../src/assests/techs/api.png';
import expressserver from '../src/assests/techs/express.png';
import firebase from '../src/assests/techs/firebase.png';
import github from '../src/assests/techs/github.png';
import angular from '../src/assests/techs/angular.png';

function TechIKnow() {
    const [width, setWidth] = useState(window.innerWidth);

    const techs = [
        {
            title : 'React Native',
            image : reactNativeImage,
            description : 'React Native allows developers to build mobile applications for both iOS and Android using the same codebase written in JavaScript and React. React Native provides a set of pre-built components that can be easily customized and combined to create complex mobile app user interfaces. It also provides performance optimization features that enable applications to run smoothly and efficiently on mobile devices. With React Native, developers can quickly create high-quality mobile apps that offer a native-like experience across multiple platforms.'
        },
        {
            title : 'Node Js',
            image : nodeJs,
            description : 'Node.js allows developers to build scalable, fast, and efficient network applications that can handle a large number of simultaneous connections. Node.js provides a set of built-in modules that simplify the development of web applications, including HTTP, HTTPS, File System, and more. It also allows developers to easily integrate with external libraries using the npm (Node Package Manager) repository. Node.js is widely used for building real-time web applications, REST APIs, and microservices. With its event-driven and non-blocking I/O model, Node.js provides high performance and scalability that makes it a popular choice for modern web development.'
        },
        {
            title : 'Redux',
            image : redux,
            description : 'Redux is an open-source JavaScript library used for managing the state of web applications. It provides a predictable and centralized state management solution for JavaScript apps. With Redux, developers can create an immutable and easily testable application state that can be easily accessed and modified by different parts of the application.'
        },
        {
            title : 'Java Script',
            image : js,
            description : 'JavaScript is a core language used to build mobile applications with React Native. React Native is built on top of JavaScript and uses the React framework to create user interfaces. JavaScript is used to write the logic for mobile applications, including event handling, data manipulation, and state management. React Native provides a set of pre-built components that developers can use to build complex user interfaces. These components are built using a combination of JavaScript and native code, making them fast and efficient.'
        },
        {
            title : "Api's",
            image : api,
            description : 'In the context of building web applications, APIs (Application Programming Interfaces) are used to allow different systems to communicate with each other. JavaScript and the Express server are popular tools used for building APIs, particularly in the Node.js ecosystem. APIs built with JavaScript and Express can be used to access and manipulate data stored on a server, allowing developers to build powerful web applications with real-time data. For example, an API can be used to retrieve data from a database and display it on a webpage, or to receive data from user input and store it in a database.'
        },
        {
            title : 'Express Server',
            image : expressserver,
            description : 'Express is a popular open-source web application framework for Node.js. It provides a set of robust features and tools for creating web servers and building web applications. Express allows developers to easily create and manage HTTP requests, handle routing and middleware, and implement various security features. With Express, developers can create server-side web applications using Node.js that can handle HTTP requests and responses efficiently. Express provides a simple and flexible API for handling HTTP requests, allowing developers to easily create and manage routes for different endpoints.'
        },
        {
            title : 'Firebase',
            image : firebase,
            description : 'Firebase is a Backend-as-a-Service (BaaS) platform provided by Google that enables developers to build web and mobile applications without the need to set up and manage server infrastructure. It provides a range of tools and services for building, testing, and deploying applications, including real-time database, cloud storage, authentication, hosting, and more.'
        },
        {
            title : 'GitHub',
            image : github,
            description : 'Git is a distributed version control system that is widely used by developers to manage and track changes to code and other files. It allows multiple developers to work on the same project simultaneously and makes it easy to track changes, collaborate, and maintain different versions of code.'
        },
        {
            title : 'Angular',
            image : angular,
            description : "Angular is a popular open-source web application framework maintained by Google and a community of developers. It's used for building dynamic, single-page web applications (SPAs) and large-scale enterprise applications. Angular provides a comprehensive solution that includes features such as data binding, dependency injection, routing, forms handling, and more. It follows the Model-View-Controller (MVC) architectural pattern, where components represent the building blocks of an Angular application. TypeScript, a superset of JavaScript, is the primary language used in Angular development, providing features like static typing and enhanced tooling. With its robust ecosystem, Angular enables developers to create scalable, maintainable, and high-performance web applications."
        },
    ];

    function AboutTech() {
    
    
        const containerStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-around',
            alignItems: 'flex-start'
        };
    
        const itemStyle = {
            width: window.innerWidth <= 720 ? '80%' : '30%',
            background: 'white',
            borderRadius: 5,
            elevation: 5,
            margin: '10px 0',
            overflow: 'hidden', // Add overflow to contain content
            display: 'flex',
            flexDirection: 'column', // Display children elements in column layout
            alignItems:'center',
            justifyContent: 'center'
        };
    
        const imageStyle = {
            height: 80,
            width: 80,
            marginTop: 20,
            justifyContent: 'center',
            alignItems:'center',
            display:'flex'
        };
    
        const titleStyle = {
            fontSize: 30,
            fontFamily: 'Quicksand-light',
            marginTop: 10
        };
    
        const descriptionStyle = {
            fontSize: 12,
            fontFamily: 'Quicksand-light',
            marginTop: 10,
            textAlign: 'initial',
            lineHeight: 1.5,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 30,
            color: 'rgb(121, 121, 121)'
        };
    
        return (
            <div style={containerStyle}>
                {techs.map((tech, index) => (
                    <div key={index} style={itemStyle}>
                        <img src={tech.image} style={imageStyle} />
                        <div style={titleStyle}>{tech.title}</div>
                        <div style={descriptionStyle}>{tech.description}</div>
                    </div>
                ))}
            </div>
        );
    }
    
    

function TechsIKnow(){
    return(
        <>
        <AboutTech /></>
    )
}

  return (
    <div style={{background:'rgb(221, 221, 221)',paddingLeft: width <= 720 ? 20 : 30,paddingRight:width <= 720 ? 20 : 90,paddingTop:20,paddingBottom:20}}>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
            <div style={{width:width <= 720 ? '50%' : '30%',background:'rgb(245, 223, 78)',justifyContent:'center',marginTop:20,alignSelf:'center',paddingBottom:8,paddingTop:8,borderRadius:5,fontFamily:'Quicksand-light'}} >
                What I Know
            </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Quicksand-light',marginTop:10,fontSize:20}} >
                 Technologies That I Know
        </div>
<TechsIKnow />
</div>
  )
}

export default TechIKnow