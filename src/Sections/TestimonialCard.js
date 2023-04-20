import React from 'react';
import Human from '../images/farzan.PNG';
function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
       <img src={Human} alt="delivery Icon"></img>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
 
export default TestimonialCard;
