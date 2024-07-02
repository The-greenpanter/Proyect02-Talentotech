import Botton from "../assets/img/botton.jpg";
import PropTypes from 'prop-types'

export const Pic5 = ({className = ''} ) => {
    return (
      <div className={`image-container ${className}`}>
          <img src={Botton} alt=''className='image'/>
      </div>
    )
  }
  Pic5.propTypes = {
    className: PropTypes.string
  };