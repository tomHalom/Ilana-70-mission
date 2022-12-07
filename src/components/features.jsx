export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>הוראות</h2>
        </div>
        <div className='row'>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'} */}
            <div className='col-md-8 col-md-offset-2 intro-text'>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  לחץ להקלטה
                </a>{' '}
              </div>
        </div>
      </div>
    </div>
  )
}
