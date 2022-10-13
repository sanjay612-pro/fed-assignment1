import React from "react";
import Sidebar from "./Sidebar";
import "../myStyles.css";
import Footer from "./Footer";
const Main = () => {
    return (

    <div>
  <div className="article">
    <div className="sizing pd">
        <h1>Audio and Video in HTML5</h1>
        
        <p>Earlier, native web technologies such as HTML didn't allow embedding video and audio on the Web. Plugin-based technologies became popular for handling such content, but they had many problems, including not working well with HTML/CSS features, security and accessibility issues. Later, HTML5 specification introduced such </p>
       <div text-align="center" className="centers">
       
       </div>
       <p>Examples of Video</p>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/html-video-tag.PNG" className="centers" style={{width:500,height:500}}/>
        <br/>
       <p>output like</p>
       <img src="https://linuxhint.com/wp-content/uploads/2022/02/word-image-606.png" className="centers" style={{width:500,height:500}}/>
       <h3>Audio</h3>
       <p>As not all browsers support all audio formats</p>
       <h4>Example</h4>
       <img src="https://miro.medium.com/max/1400/1*OBUv0w58EwjMTIjQ97Zm4w.png" className="centers" style={{width:350,height:300}}/>   
       <h4>output like</h4>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aHTb-PZbMEPEokg5iORm7KLXBA43JhurCA&usqp=CAU" className="centers" style={{width:350,height:300}}/>
    </div>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;