import React from "react"
import "semantic-ui-css/semantic.min.css";
import Img from "./zayyan_faizal.jpg"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faLinkedinIn,faGithub,faMediumM,faen } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    Card,
    GridColumn,
    GridRow
} from "semantic-ui-react";



export default () =>

    <Layout style={{overflow:"scroll"}}>
        <script data-goatcounter="https://zayyan.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zayyan Faizal</title>
          <link rel="canonical" href="https://zayyanfaizal.com/" />
        </Helmet>
        <div class="container-fluid">
            <div class="ui stackable grid" style={{height:"-webkit-fill-available", minHeight: "100%", fontFamily:"Times_New_Roman", lineHeight:"24px"}}>
                <div class="stackable centered column" style={{display: 'flex', justifyContent:'center', alignItems:'center', height:"100vh", marginTop:"auto", marginBottom:"auto"}}>
                    <div class="ui stackable grid" style={{height:"100%",display:"inline"}}>
                        <div class="row" style={{alignItems:"center",padding:"8px",justifyContent:'center',marginLeft:"auto", marginRight:"auto"}}>
                                <img src={Img} style={{maxWidth:"30%",borderRadius:"50%"}}></img> 
                                <p style={{textAlign:"center", fontSize:"8vw",fontStyle:'italic', textDecoration:'underline', padding:"3vw"}}>Zayyan Faizal</p>
                        </div>
                        <GridRow style={{clear:"both",padding:'8px', alignItems:'center', textAlign:'center'}}>
                            <div style={{width:'100%', textAlign:"center", fontSize:"8vw",fontStyle:'italic', textDecoration:'underline', padding:"3vw"}}>education</div>
                            <div style={{width:'100%', textAlign:"center", fontSize:"8vw",fontStyle:'italic', textDecoration:'underline', padding:"3vw"}}>work</div>
                            <div style={{width:'100%', textAlign:"center", fontSize:"8vw",fontStyle:'italic', textDecoration:'underline', padding:"3vw"}}>projects</div>
                            <div style={{width:'100%', textAlign:"center", fontSize:"8vw",fontStyle:'italic', textDecoration:'underline', padding:"3vw"}}>interests</div>
                        </GridRow>
                        <GridRow style={{justifyContent:"center", alignItems:"center", height:"20%", display:"block"}}>
                                <a style={{color:"black", margin:"12px", fontSize:"1.75em", paddingLeft:'50px'}} target="_blank" href="https://twitter.com/brownmanwonders"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="https://linkedin.com/in/zayyanfaizal/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                <a style={{color:"black", margin:"12px", fontSize:"1.75em"}}target="_blank" href="https://github.com/zfaizal2"><FontAwesomeIcon icon={faGithub}/></a> 
                                <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="https://medium.com/@zayyanfaizal"><FontAwesomeIcon icon={faMediumM}/></a>
                                <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="mailto:zfaizal2@illinois.edu"><FontAwesomeIcon icon={faEnvelope}/></a> 
                        </GridRow>
                    </div>
                </div>
            </div>
        </div>
    </Layout> 