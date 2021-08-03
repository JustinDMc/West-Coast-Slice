import React from 'react'
import About_Pizza_Oven from './About_Pizza_Oven.jpg';
// import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 555,
//     marginTop: '40px',
//     },
//     media: {
//       height: 120,
//     },
//   });

export default function About() {
    // const classes = useStyles(); 
    return (
        <div>
            <h1 style={{color: "white", textAlign: 'center'}}>About</h1>
            <div className="AboutParagraph">
                <p style={{fontWeight: "bold"}}>
                    Welcome to our humble pizzaria! We are a Ma and Pa restaurant, that fell in love with making pizza while visiting Southern Italy. Justin the master mind of the restaurant insuring good vibes, then we have Allen our master chef, who pours his sweat and tears into every pizza he makes insuring every man, women, and child is happy.  We pride ourselves on having fresh ingredients and a family feel while visiting our restaurant. All our pizzas are cooked in a wood-fire oven that burn at a whopping 1000 ºF constantly, meaning your pizzas are done in a Flash and hot A.F.! We also offer an open floor design for our restaurant with a patio and patio bar, rain or shine, it stays open for your enjoyment.
                </p>
                <br></br>
                <img src={About_Pizza_Oven} className="About_Pic"/>
                <br></br>
                <Link href='https://www.instagram.com'>
                <InstagramIcon/>
                </Link>
            </div>
        </div>
    )
}
