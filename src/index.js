import './style.css';

import {initialLoad} from "./initial.js";
import {aboutLoad} from "./about.js";
import { menuLoad } from './menu.js';
import { homeLoad } from './home.js';


const aboutBtn = document.getElementById('about-tab');
const menuBtn = document.getElementById('menu-tab');
const homeBtn = document.getElementById('home-tab');
aboutBtn.addEventListener('click', aboutLoad);
menuBtn.addEventListener('click', menuLoad);
homeBtn.addEventListener('click', homeLoad);





