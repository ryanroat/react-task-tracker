import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ greeting, name }) => {

  const onClick = () => {
    console.log('passed up click');
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button text='Add' onClick={onClick}/>
      <h2>{greeting} {name}</h2>
    </header>
  )
}

Header.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
}

export default Header
