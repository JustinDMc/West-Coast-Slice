import React from 'react'
import About_Pizza_Oven from './About_Pizza_Oven.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link'

export default function About() {
    return (
        <div>
            <h1 style={{color: "white", textAlign: 'center'}}>About</h1>
            <div className="AboutParagraph">
                <p style={{fontWeight: "bold"}}>
                    Welcome to our humble pizzaria! We are a Ma and Pa restaurant, that fell in love with making pizza while visiting Southern Italy. Justin the master mind of the restaurant insuring good vibes, then we have Allen our master chef, who pours his sweat and tears into every pizza he makes insuring every man, women, and child is happy with our product.  We pride ourselves on having fresh ingredients and a family feel while visiting our restaurant. All our pizzas are cooked in a wood-fire oven that burn at a whopping 1000 ºF constantly, meaning your pizzas are done in a Flash and hot A.F.! We also offer an open floor design for our restaurant with a patio and patio bar, rain or shine, it stays open for your enjoyment.
                </p>
                <br></br>
                <img src={About_Pizza_Oven} className="About_Pic"/>
                <br></br>

                {/* icons and links */}
                <footer className="footer">


                    <span id="AboutSpan">West Coast Slice:</span>
                    <span id="SpanLink">
                        <Link href='https://www.instagram.com' target="_blank">
                        <InstagramIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com" target="_blank">
                        <LinkedInIcon/>
                        </Link>
                    </span>


                    <span id="AboutSpan">Justin McArthur:</span>
                    <span id="SpanLink">
                        <Link href="https://www.linkedin.com/in/daniel-mcarthur-7a928b133/" target="_blank">
                        <LinkedInIcon/>
                        </Link>
                        <Link href="https://github.com/JustinDMc" target="_blank">
                        <GitHubIcon/>
                        </Link>
                        <Link href="https://jdanielmcarthur.medium.com/" target="_blank" style={{fontWeight:"bold", fontSize: '25px', textDecoration: 'underline'}}>Blog</Link>
                    </span>


                    <span id="AboutSpan">Allen Palacios:</span>
                    <span id="SpanLink">
                        <Link href="https://www.linkedin.com/in/allen-palacios-73b677151/" target="_blank">
                        <LinkedInIcon/>
                        </Link>
                        <Link href="https://github.com/ajpalacios08" target="_blank">
                        <GitHubIcon/>
                        </Link>
                        <Link href="https://apalacios1994.medium.com/" target="_blank" style={{fontWeight:"bold", fontSize: '25px', textDecoration: 'underline'}}>Blog</Link>
                    </span>


                </footer>
            </div>
        </div>
    )
}
