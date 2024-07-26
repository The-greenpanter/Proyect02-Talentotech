import Color from "../assets/img/color2.png";
import PropTypes from 'prop-types'

export const Pic3 = ({className = ''} ) => {
    return (
      <div className={`image-container ${className}`}>
          <img src={Color} alt=''className='image'/>
      </div>
    )
  }
  Pic3.propTypes = {
    className: PropTypes.string
  };