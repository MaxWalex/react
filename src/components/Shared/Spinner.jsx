import spinner from'../assets/Iphone-spinner-2.gif'

function Spinner() {
  return (
    <img src={spinner} alt="...Loading" style={{
        width: '100px',
        margin: 'auto',
        display: 'block'
    }} />
  )
}

export default Spinner