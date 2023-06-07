import Button from "./Button"

const Footer = (props) => {
    let footerDecorStyle = {
        width: '100%',
        height: '74px',
        backgroundImage: "url('FooterEllipse.png')",
        backgroundRepeat: 'repeat-x',
        filter: 'drop-shadow(0 -10px 5px rgba(0, 0, 0, 0.2))',
        
    }
    let footerStyle = {
        width: '100%',
        backgroundColor: '#FFF9ED',
        paddingTop: '20px',
        paddingBottom: '40px',
    }
    let centerText = {
        textAlign: 'center',
    }

    let centerFlexParent = {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginBottom: '10px',
    }
    
    let centerFlexChild = {
        margin: 'auto',
    }

    return (
        <div>
            <div style={footerDecorStyle}></div>
            <div style={footerStyle}>
                <h3 style={centerText}>Get updates from us!</h3>
                <div style = {centerFlexParent}>
                    <div style = {centerFlexChild}>
                        <Button text='Join our email newsletter' backgroundColor="white" textColor="#002809" borderColor='#FF4C4C'/>
                    </div>
                </div>
                <div style = {centerFlexParent}>
                    <div style = {centerFlexChild}>
                        <Button text='Follow us on Instagram' backgroundColor="white" textColor="#002809" borderColor='#FF4C4C'/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Footer;