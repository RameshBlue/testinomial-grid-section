import React from 'react'

function TestinomialCard({ name, title, description, avatar, color, isDark }) {
  return (
    <div className='testinomial-container' style={{
      backgroundColor: `${color}`
    }}>
      <div className='testinomial-header'>
        <img src={avatar} alt="" />
        <div className="testinomial-name-conatiner">
          <h4>{name}</h4>
          <h4>Verified graduate</h4>
        </div>
      </div>
      <h2 className={`testinomail-title ${isDark ? '' : 'light'}`}>
        {title}
      </h2>
      <p className="testinomail-description">
        {description}
      </p>
    </div>
  )
}

export default TestinomialCard