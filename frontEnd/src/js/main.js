import '../style/style.css'
import Chart from "chart.js/auto" 
import {Topnavbar , aside} from './components/partOf/nav.js' 
import {Mainbox} from './components/partOf/box.js' 
import { box } from './components/store.js' 
import {MainChart} from './components/partOf/MainChart.js'

window.addEventListener ("load", ()=>{ 

const asid =document.querySelector(".asid");
const main =document.querySelector(".group") ; 
const asidediv = document.createElement("div") ;
const navdiv = document.createElement("div") ;
const navb= document.querySelector(".navbar") ; 

asidediv.innerHTML = aside(); 
navb.innerHTML = Topnavbar(); 
asid?.appendChild(asidediv);
Mainbox(main , box ) ;
 
}) 
MainChart()
