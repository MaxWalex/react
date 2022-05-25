// import PropTypes from 'prop-types'

function Header({ text, colorText }) {

    const headerH2Styles = {
        color: colorText, 
        textAlign: 'center', 
        padding: '10px 0'
    }

  return (
    <header className="header">
        <div className="container">
            <h2 style={headerH2Styles}>{text}</h2>
        </div>
    </header>
  )
}

// Header.defaultProps = {
//     bgColor: 'rgba(0,0,0,0.4)',
// }

export default Header