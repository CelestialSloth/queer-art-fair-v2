import Layout from "../components/Layout";
import Styles from "../components/Theme";
import Navigation from "../components/Navigation";
import Strawberry from "../components/Strawberry";
import ContentComponent from "../components/ContentComponent";
import Spacer from "../components/Spacer";
import pageStyles from '../components/pages.module.css';
import HeaderDecoration from "../components/HeaderDecoration";
import Logo from "../components/Logo";
import Subheader from "../components/Subheader";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <div style={Styles.body} className = {pageStyles.eventsBody}>
        <HeaderDecoration />
        <Logo />
        <Subheader />
        <Navigation />
        <Strawberry heading = {"PAST EVENTS"} showLargeStrawberry = {'none'}/>
        <Spacer height = {5}/>
        <ContentComponent 
            imageLeft = {true} 
            imagePath = {'/poster.svg'}
            buttonText1 = {'See Photos'}
            buttonText2 = {'See Past Vendors'}
            url2 = {'/june-17-vendors'}
            heading = {'Summer Queer Art Faire'}
            subheader = {"6.17.23 | 1-6pm | 1417 15th st San Francisco"}
            text1 = {'30+ vendors selling crafts and creations'}
            text2 = {'art prints, ceramics, crystals, tattoos, jewelry, a polaroid booth, and more!'}
        />
        <Spacer height = {5}/>
        <ContentComponent 
            imageLeft = {false} 
            imagePath = {'/QueerArtFaireSF.jpg'}
            buttonText1 = {'See Photos'}
            url1 = {"/march-11-gallery"}
            buttonText2 = {'See Past Vendors'}
            url2 = {'/march-11-vendors'}
            heading = {'Spring Queer Art Faire'}
            subheader = {'3.11.23 | 11-4pm | 1417 15th st San Francisco'}
            text1 = {'30+ vendors selling crafts and creations'}
            text2 = {'art prints, ceramics, crystals, tattoos, jewelry, a polaroid booth, and more!'}
        />
        <Footer />
    </div>
  );
}
