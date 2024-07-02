import Flor from '../assets/img/orquidea.jpg'
import PropTypes from 'prop-types'

export const Pic = ( {className = ''} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={Flor} alt='' className='image'/>
    </div>
  )
}
Pic.propTypes = {
  className: PropTypes.string
};
