import { useRouter } from "next/router";
import React, {useState} from 'react';
import style from "./navigation.module.css";
import headerStyle from "./headerDecoration.module.css";

const HeaderDecoration = (props) => {

    const router = useRouter();
    const currentRoute = router.pathname;

    const [showNav, setShowNav] = useState(false);


    return (
        <div>
            <div className ={headerStyle.headerFill}>
                <div className = {style.mobileContainer} style = {{display: showNav ? "flex" : "none"}}> 
                    <a  href = "/" className = {currentRoute === '/' ? style.active : style.nonActive}>
                        ABOUT
                    </a>
                    <img className = {style.image} src = '/heart.png'/>
                    <a  href = "/events" className = {currentRoute === '/events' ? style.active : style.nonActive}>
                        EVENTS
                    </a>
                    <img className = {style.image} src = '/heart.png'/>
                    <a  className = {style.nonActive} href = "https://www.gofundme.com/f/queer-art-faire">
                        DONATE
                    </a>
                </div>
                <button className = {style.button} onClick = {() => setShowNav(!showNav)}></button>
            </div>
            <div className = {headerStyle.header}></div>
        </div>
    )
}

export default HeaderDecoration;