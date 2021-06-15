import PropTypes from 'prop-types'


const Header = ({ greeting, name }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <h2>{greeting} {name}</h2>
    </header>
  )
}

Header.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
}

export default Header
