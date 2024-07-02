import PropTypes from 'prop-types'
import Forma from "../assets/img/guitarra.jpg";
export const Pic4 = ({className = ''} ) => {
    return (
      <div className={`image-container ${className}`}>
          <img src={Forma} alt=''className='image'/>
      </div>
    )
  }
  Pic4.propTypes = {
    className: PropTypes.string
  };