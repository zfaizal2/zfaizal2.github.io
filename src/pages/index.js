import React from "react"
import "semantic-ui-css/semantic.min.css";
import Img from "./zayyan.png"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faLinkedinIn,faGithub,faMediumM,faen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    Card,
    Grid,
    Input,
    Button,
    GridColumn,
    Modal,
    Header,
    Icon,
    GridRow
} from "semantic-ui-react";



export default () =>
    <Layout>
        <div class="ui stackable grid" style={{height:"100vh", fontFamily:"Poppins", lineHeight:"24px"}}>
            <div class="stackable centered column" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:"100%", margin:"0"}}>
                <Card  style={{flexDirection:"height", width:"75%", textAlign:"center", boxShadow:"0 0px 20px 0 #d4d4d5, 0 0 0 0px #d4d4d5",borderRadius:"0rem"}}>
                        <div class="ui stackable grid" style={{height:"100%",margin:"0",display:"inline"}}>
                            <div class="row" style={{maxWidth:"100",maxHeight:"25%",alignItems:"center",padding:"8px",justifyContent:'center'}}>
                                <div class="column" style={{padding:'8px',float:"left",width:"125px"}}>
                                    <img src={Img} style={{maxHeight:"100px"}}></img> 
                                </div>
                                <div class="column" style={{padding:'8px', whiteSpace:"nowrap",float:"left",flexDirection:"height", width:"50%", height:"100px"}}>
                                    <p style={{ textAlign:"center", fontSize:"64px"}}><strong>hi, i'm Zayyan.</strong></p>
                                </div>
                            </div>
                            <GridRow class = "two column row" style={{clear:"both",padding:'8px'}}>
                                <GridColumn style={{float:"left",width:"50%"}}>
                                    <div style={{padding:"8px", fontSize:"1.5rem",textAlign:'left', marginTop:"1%",}}> 
                                        <strong>education</strong>
                                    </div>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >systems engineering & design</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >minor in computer science</div>
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
                                            <div >product designer @ hack4impact</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >volunteer @ alpha phi omega</div>
                                    </GridRow>
                                    <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >software dev intern @ motorola solutions</div>
                                    </GridRow>
                                    {/* <GridRow style={{padding:"8px", fontSize:"1.5rem",textAlign:'left'}}>
                                            <div >side projects ---></div>
                                    </GridRow> */}
                                </GridColumn>
                            </GridRow>
                            <GridRow style={{margin:"2%", padding:"0rem", justifyContent:"center", alignItems:"center", clear:"both", height:"10%", display:"block"}}>
                                    <a style={{color:"black", margin:"16px", fontSize:"1.75em"}} target="_blank" href="https://twitter.com/brownmanwonders"><FontAwesomeIcon icon={faTwitter}/></a>
                                    <a style={{color:"black", margin:"16px", fontSize:"1.75em"}} target="_blank" href="https://linkedin.com/in/zayyanfaizal/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                    <a style={{color:"black", margin:"16px", fontSize:"1.75em"}}target="_blank" href="https://github.com/zfaizal2"><FontAwesomeIcon icon={faGithub}/></a> 
                                    <a style={{color:"black", margin:"16px", fontSize:"1.75em"}} target="_blank" href="https://medium.com/@zayyanfaizal"><FontAwesomeIcon icon={faMediumM}/></a>
                                    <a style={{color:"black", margin:"16px", fontSize:"1.75em"}} target="_blank" href="mailto:zfaizal2@illinois.edu"><FontAwesomeIcon icon={faEnvelope}/></a> 
                            </GridRow>
                        </div>
                </Card>
            </div>
        </div>
    </Layout>
 