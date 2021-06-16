import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ greeting, name, onAddBtn, showAddTask }) => {

  return (
    <header className='header'>
      <h1>Task Tracker</h1>

      <Button
        color={showAddTask ? 'darkgrey' : 'steelblue'}
        text={showAddTask ? 'Close Form' : 'Add Task'}
        onClick={onAddBtn}
      />
      <h2>{greeting} {name}</h2>
    </header>
  )
}

Header.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
}

export default Header
