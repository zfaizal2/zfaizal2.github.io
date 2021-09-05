import React from "react"
import "semantic-ui-css/semantic.min.css";
import Img from "./zayyan_faizal.jpg"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faLinkedinIn,faGithub,faMediumM} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet"
import "./index.modules.css"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    GridRow
} from "semantic-ui-react";



export default () => 

    <Layout style={{overflow:"scroll"}}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script data-goatcounter="https://zayyan.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zayyan Faizal</title>
          <link rel="canonical" href="https://zayyanfaizal.com/" />
        </Helmet>
        <div class="container-fluid">
            <div class="ui stackable grid" style={{height:"-webkit-fill-available", minHeight: "100%", fontFamily:"Times_New_Roman", lineHeight:"24px"}}>
                <div class="stackable centered column" style={{display: 'flex', justifyContent:'center', alignItems:'center', height:"100vh", marginTop:"auto", marginBottom:"auto"}}>
                    <div class="ui stackable grid" style={{height:"100%",display:"inline"}}>
                        <GridRow style={{alignItems:"center",padding:"8px",justifyContent:'center',marginLeft:"auto", marginRight:"auto"}}>
                                <img className="headshot" src={Img} ></img> 
                                <p className="name">zayyan faizal</p>
                        </GridRow>
                        <GridRow style={{clear:"both",padding:'8px', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
                            <div className="list">education</div>
                            <div className="hide">university of illinois at urbana champaign <br/> systems engineering & design <br/> minors in cs & economics <br/> class of 2022</div>
                            <div className="list">work</div>
                            <div className="hide"> 
                                <div class="subheader">currently</div>
                                <div class="item">co-founder @ illini blockchain </div> 
                                <div class="item">software dev @ hack4impact uiuc </div> 
                                <div class="subheader">previously</div>
                                <div class="item">pm intern @ microsoft</div>
                                <div class="item">swe intern @ motorola solutions</div>
                            </div>
                            <div className="list">projects</div>
                            <div className="hide"> 
                                
                                GLENWorld KSEP, a kindergarten readiness assessment <br/> 
                                abacus grades, a grade management software <br/> 
                                perform fitness, a fitness form corrector <br/>
                                
                            </div>
                            <div className="list">interests</div>
                            <div className="hide"> 
                                i'm currently exploring areas of crypto, education, 
                                personal development systems, and building great software
                            </div>
                        </GridRow>
                        <GridRow style={{textAlign:"center", display:"block", marginTop:'2rem'}}>
                                <a className="social-icon" rel="noreferrer" target="_blank" href="https://twitter.com/brownmanwonders"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a className="social-icon" rel="noreferrer" target="_blank" href="https://linkedin.com/in/zayyanfaizal/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                                <a className="social-icon" rel="noreferrer" target="_blank" href="https://github.com/zfaizal2"><FontAwesomeIcon icon={faGithub}/></a> 
                                <a className="social-icon" rel="noreferrer" target="_blank" href="https://medium.com/@zayyanfaizal"><FontAwesomeIcon icon={faMediumM}/></a>
                                <a className="social-icon" rel="noreferrer" target="_blank" href="mailto:zfaizal2@illinois.edu"><FontAwesomeIcon icon={faEnvelope}/></a> 
                        </GridRow>
                    </div>
                </div>
            </div>
        </div>
    </Layout> 