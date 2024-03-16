import './style.css';
import {initialLoad} from "./initial.js";
import {aboutLoad} from "./about.js";
import { menuLoad } from './menu.js';


const aboutBtn = document.getElementById('about-tab');
const menuBtn = document.getElementById('menu-tab');
aboutBtn.addEventListener('click', aboutLoad);
menuBtn.addEventListener('click', menuLoad)





