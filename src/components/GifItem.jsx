<<<<<<< HEAD

=======
import  PropTypes  from 'prop-types';
>>>>>>> 25c6748 (test 103)

export const GifItem = ({title, url,id}) => {
   console.log({title,url})
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        
        </div>
  )
}
<<<<<<< HEAD
=======

GifItem.propTypes = { 
title: PropTypes.string.isRequired,
url  : PropTypes.string.isRequired,
}
>>>>>>> 25c6748 (test 103)
