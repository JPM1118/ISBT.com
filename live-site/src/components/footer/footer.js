import React from 'react';
import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      {/* <hr /> */}
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.icons}>
          <a href="https://www.instagram.com/interiorsourcesbtodd/">
            <svg className={footerStyles.igram} width="35px" height="35px" viewBox='0 0 65 70' >
              {/* <path fill="none" d="M-1-1h582v402H-1z" /> */}
              <g>
                <circle fill="#ffffff" r="4.4" cy="30" cx="28.1" />
                <path fill="#ffffff" d="M33.6 19.2h-11c-1.6 0-3 .5-3.9 1.4-.9.9-1.4 2.3-1.4 3.9v11c0 1.6.5 3 1.5 4 1 .9 2.3 1.4 3.9 1.4h10.9c1.6 0 3-.5 3.9-1.4 1-.9 1.5-2.3 1.5-3.9v-11c0-1.6-.5-2.9-1.4-3.9-1-1-2.3-1.5-4-1.5zm-5.5 17.6c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8s6.9 3 6.9 6.8-3.1 6.8-6.9 6.8zm7.1-12.3c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z" />
                <path fill="#ffffff" d="M28.3 5.2c-13.6 0-24.6 11-24.6 24.6 0 13.6 11 24.6 24.6 24.6 13.6 0 24.6-11 24.6-24.6.1-13.6-11-24.6-24.6-24.6zm13.1 30.4c0 2.3-.8 4.3-2.2 5.7-1.4 1.4-3.4 2.1-5.6 2.1H22.7c-2.2 0-4.2-.7-5.6-2.1-1.5-1.4-2.2-3.4-2.2-5.7v-11c0-4.6 3.1-7.8 7.8-7.8h11c2.3 0 4.2.8 5.6 2.2 1.4 1.4 2.1 3.3 2.1 5.6v11z" />
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/barbara-todd-96471225/">
            <svg className={footerStyles.linkedin} width="35" height="35" viewBox='0 0 65 70' xmlns="http://www.w3.org/2000/svg">

              {/* <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="35" width="35" y="-1" x="-1" />
              </g> */}
              <g>
                <title>Layer 1</title>
                <path fill="#ffffff" id="svg_2" d="m28.347,5.155c-13.6,0 -24.625,11.025 -24.625,24.625c0,13.602 11.025,24.625 24.625,24.625c13.598,0 24.623,-11.023 24.623,-24.625c0,-13.599 -11.026,-24.625 -24.623,-24.625zm13.715,36.586c0,1.096 -0.91,1.982 -2.031,1.982l-23.418,0c-1.123,0 -2.031,-0.887 -2.031,-1.982l0,-23.689c0,-1.094 0.908,-1.982 2.031,-1.982l23.417,0c1.121,0 2.031,0.889 2.031,1.982l0,23.689l0.001,0z" />
                <path fill="#ffffff" id="svg_3" d="m33.099,26.441c-2.201,0 -3.188,1.209 -3.74,2.061l0,0.041l-0.027,0c0.01,-0.012 0.02,-0.027 0.027,-0.041l0,-1.768l-4.15,0c0.055,1.17 0,12.484 0,12.484l4.15,0l0,-6.973c0,-0.375 0.027,-0.744 0.137,-1.012c0.301,-0.744 0.984,-1.52 2.129,-1.52c1.504,0 2.104,1.146 2.104,2.824l0,6.68l4.15,0l0,-7.157c-0.001,-3.836 -2.05,-5.619 -4.78,-5.619z" />
                <path fill="#ffffff" id="svg_4" d="m20.864,20.712c-1.419,0 -2.349,0.934 -2.349,2.159c0,1.197 0.9,2.158 2.294,2.158l0.027,0c1.447,0 2.348,-0.961 2.348,-2.158c-0.027,-1.225 -0.9,-2.159 -2.32,-2.159z" />
                <rect fill="#ffffff" id="svg_5" y="26.734" x="18.762" width="4.151" height="12.484" />
              </g>
            </svg>
          </a>
        </div>
        <div className={footerStyles.email}>
          Barbara@interiorsourcesbtodd.com
        </div>
        <div className={footerStyles.territories}>
          IL, WI
        </div>
      </div>
    </footer>
  )
}

export default Footer;