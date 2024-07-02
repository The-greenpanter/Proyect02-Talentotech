import Lab from "../assets/img/Lab.jpg";
import PropTypes from 'prop-types'

export const Pic2 = ({className = ''} ) => {
    return (
     <>
     <div className={`image-container ${className}`}>
          <img src={Lab} alt=''className='image'/>
      </div>
      </>
    )
  }
  Pic2.propTypes = {
    className: PropTypes.string
  };