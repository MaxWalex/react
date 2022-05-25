import PropTypes from 'prop-types'

function Button({children, version, type, isDisibled}) {
  return (
    <button type={type} disabled={isDisibled} className={`btn btn_${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisibled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisibled: PropTypes.bool
}

export default Button