import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ greeting, name, onAddBtn, showAddTask }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Task Tracker</h1>

      {location.pathname === '/' && <Button
        color={showAddTask ? 'darkgrey' : 'steelblue'}
        text={showAddTask ? 'Close Form' : 'Add Task'}
        onClick={onAddBtn}
      />}
      <h2>{greeting} {name}</h2>
    </header>
  )
}

Header.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
}

export default Header
