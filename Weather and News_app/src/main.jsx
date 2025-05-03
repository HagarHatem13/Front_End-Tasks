import { createRoot } from "react-dom/client"; 
import App from "/src/App.jsx";
import './index.css';
import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css' //we import bootstarp.css
import '@popperjs/core/dist/umd/popper.min.js'//we import the poper
import 'bootstrap/dist/js/bootstrap.min.js'//we import bootstap.js

import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
//app beyt7at feen ? goa div el wa5ed id esmo root ay 7aga 3yza tazher fe index haro7 ab3teha ely app 3shan app hoa ely metrender goa  div 
//Anything you put in app hat3rd fe index  3shan app it is inside the index.html 
//browserrouter you till the main that app will make route .We did the browser router to apply the concept of routing 

<StrictMode>
<BrowserRouter>
<App/> 
</BrowserRouter>
</StrictMode>



);
