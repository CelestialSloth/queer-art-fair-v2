import Spacer from "../../components/Spacer";
import Strawberry from "../../components/Strawberry";
import pageStyles from "../../components/pages.module.css";
import Footer from "../../components/Footer";
import GalleryPics from "../../components/GalleryPics";

export default function Gallery() {
    return (
        <div className = {pageStyles.galleryBody}>
            <Strawberry heading = {"PHOTO GALLERY"} showLargeStrawberry = {"none"}/>
            <Spacer height = {2}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115740-min.JPG')"} imagePath2 = {"url('/photos/P3115759-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115806-min.JPG')"} imagePath2 = {"url('/photos/P3115854-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115914-min.JPG')"} imagePath2 = {"url('/photos/P3115925-min.JPG')"}/>
            <GalleryPics imagePath2 = {"url('/photos/P3115734-min.JPG')"} imagePath1 = {"url('/photos/P3115753-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115795-min.JPG')"} imagePath2 = {"url('/photos/P3115837-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115887-min.JPG')"} imagePath2 = {"url('/photos/P3115816-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115882-min.JPG')"} imagePath2 = {"url('/photos/P3115892-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115790-min.JPG')"} imagePath2 = {"url('/photos/P3115767-min.JPG')"}/>
            <GalleryPics imagePath1 = {"url('/photos/P3115745-min.JPG')"} imagePath2 = {"url('/photos/P3115786-min.JPG')"}/>
            <Footer />
        </div>
    );
}