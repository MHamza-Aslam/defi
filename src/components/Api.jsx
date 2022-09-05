 import {GiHamburgerMenu} from "react-icons/gi";
 import {TbArrowsCross} from "react-icons/tb";
 import heroVid from "../assets/video.mp4";
 import { SiHiveBlockchain} from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import {SiStrapi} from "react-icons/si";
import {SiFsecure} from "react-icons/si";
import Pic1 from "../assets/terminal.png"
 const Data={
    navbar:{
        logo:"DEFI",
        list:["Platform","Developer","Community","About"],
        icon:<GiHamburgerMenu size={30}/>,
        icon2:<TbArrowsCross size={30}/>,
    },
Hero:[
    {
      vide01:heroVid,
      head1:"Decentralized",
      para1:"Guaranteed liquidity trading for millions of users and top Ethereum applications.",
      para2:"Total Volume Secured: $42,104,783,662.47"
},
],
About:[{
    head2:"A Growing Protocol Ecosystem",
    para3:"The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.",
    icon3:<SiHiveBlockchain size={40}/>,
    icon4:<VscServerProcess size={40}/>,
    icon5:<SiStrapi size={40}/>,
    icon6:<SiFsecure size={40}/>,
    head3:"Reliable, tamper-proof network",
    para3:"Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.",
},],
Developers:[{
    heading1:"Superpowers for DEFI developers.",
    src:Pic1,
    
},],
Subscribe:[{
    head10:"Join our DeFi Community",
    para10:"Yes, I agree to receive email communications from DeFi.",
},],
 }

 export default Data;