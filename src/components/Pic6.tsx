import mountain from "../assets/img/mountain.jpg";
import PropTypes from 'prop-types'

export const Pic6 = ({className = ''} ) => {
    return (
      <div className={`image-container ${className}`}>
          <img src={mountain} alt=''className='image'/>
      </div>
    )
  }
  Pic6.propTypes = {
    className: PropTypes.string
  };