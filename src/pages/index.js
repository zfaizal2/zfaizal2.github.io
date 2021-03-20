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
        <div class="ui stackable grid" style={{height:"-webkit-fill-available", minHeight: "100%", fontFamily:"Poppins", lineHeight:"24px", }}>
            <div class="stackable centered column" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:"100vh", marginTop:"auto", marginBottom:"auto"}}>
                <Card  style={{flexDirection:"height", width:"75%", textAlign:"center", boxShadow:"0 0px 20px 0 #d4d4d5, 0 0 0 0px #d4d4d5",borderRadius:"0rem",overflow:"visible"}}>
                        <div class="ui stackable grid" style={{height:"100%",margin:"0",display:"inline"}}>
                            <div class="row" style={{maxWidth:"100",maxHeight:"25%",alignItems:"center",padding:"8px",justifyContent:'center',marginLeft:"auto", marginRight:"auto"}}>
                                <div class="column" style={{padding:'8px',float:"left",width:"125px"}}>
                                    <img src={Img} style={{maxHeight:"100px",borderRadius:"50%"}}></img> 
                                </div>
                                <div class="column" style={{padding:"4px", flexDirection:"height", height:"100px", maxWidth:"100%", width:"30%", marginTop:"2%", textAlign:"center"}}>
                                    <p style={{ textAlign:"center", fontSize:"3rem"}}><strong>hi, i'm Zayyan.</strong></p>
                                </div>
                            </div>
                            <GridRow class = "two column row" style={{clear:"both",padding:'8px'}}>
                                <GridColumn style={{float:"left",width:"50%", marginTop:"2"}}>
                                    <div style={{padding:"8px", fontSize:"1.5rem",textAlign:'left', marginTop:"1%",}}> 
                                        <strong>education</strong>
                                    </div>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >systems engineering & design</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >minors in computer science & economics</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >university of illinois at urbana champaign</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >class of 2022</div>
                                    </GridRow>
                                </GridColumn>
                                <GridColumn style={{float:"left",width:"50%"}}>
                                    <div style={{padding:"8px", fontSize:"1.5rem",textAlign:'left',marginTop:"1%"}}> 
                                        <strong>currently</strong> 
                                    </div>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <a >swe intern @ motorola solutions 2020-2021</a>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <a href="https://uiuc.hack4impact.org/">product research lead @ hack4impact</a>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <a href="https://www.microsoft.com/">incoming pm intern @ microsoft</a>
                                    </GridRow>
                                     <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <a href="https://www.notion.so/ryoske/my-work-146c19ab2aa8475980f8db68ea750f64">side projects ---></a>
                                    </GridRow> 
                                </GridColumn>
                            </GridRow>
                            <GridRow style={{margin:"2%", marginRight:"2%", padding:"0rem", justifyContent:"center", alignItems:"center", clear:"both", height:"10%", display:"block"}}>
                                    <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="https://twitter.com/brownmanwonders"><FontAwesomeIcon icon={faTwitter}/></a>
                                    <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="https://linkedin.com/in/zayyanfaizal/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                    <a style={{color:"black", margin:"12px", fontSize:"1.75em"}}target="_blank" href="https://github.com/zfaizal2"><FontAwesomeIcon icon={faGithub}/></a> 
                                    <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="https://medium.com/@zayyanfaizal"><FontAwesomeIcon icon={faMediumM}/></a>
                                    <a style={{color:"black", margin:"12px", fontSize:"1.75em"}} target="_blank" href="mailto:zfaizal2@illinois.edu"><FontAwesomeIcon icon={faEnvelope}/></a> 
                            </GridRow>
                        </div>
                </Card>
            </div>
        </div>
        </div>
    </Layout>