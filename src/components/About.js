import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className="about">
      <h3>Version 1.1.0</h3>
      <h4>by <a href="https://ryanroat.net/" target="_blank" rel="noreferrer noopener" >Ryan Roat</a></h4>
      <Link to="/">Go back.</Link>
    </div>
  )
}
