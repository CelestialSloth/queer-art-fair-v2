const Logo = (props) => {
    let divStyle = {
        display: 'flex',
        width: '100%',
        marginBottom: '20px',
    }
    let imgStyle = {
        margin: 'auto',
        width: '240px',
    }
    return (
        <div style={divStyle}>
            <img style={imgStyle} src='./QAFLogoOrangePuffy.svg'></img>
        </div>
    )
}

export default Logo;