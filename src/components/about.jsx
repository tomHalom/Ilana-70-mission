export const About = (props) => {
  return (
    <div id='about' className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6 section-title'>
            <div className='about-text'>
              <h2>הקלטה</h2>              
            </div>
            <p>
            <audio controls src="audio/clue1.m4a"></audio>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
