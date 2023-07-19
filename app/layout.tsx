import Footer from "../components/Footer";
import HeaderDecoration from "../components/HeaderDecoration";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Subheader from "../components/Subheader";
import "../components/styles.css";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body style={{backgroundColor: 'red'}}>
          <HeaderDecoration/>
          <Subheader/>
          <Logo/>
          <Navigation/>
          {children}
          <Footer/>
        </body>
      </html>
    )
  }