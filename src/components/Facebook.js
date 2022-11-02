import { useState } from 'react';
import berlinData from '../data/berlin.json';

 
function Facebook() {
  const [ids] = useState(berlinData);
 
  return (
    <div>
    
      {ids.map(id => {
        return (
            <div key={id._id} className="IdCard">
            <img src={id.img} alt="studentId" className="photoId"/>
            <div className="Info">
            <p>First Name: {id.firstName}</p>
            <p>Last Name: {id.lastName}</p>
            <p>Country: {id.country}</p>
            {id.isStudent ? <p>Student</p> : <p>Teacher</p>}
            </div>
            </div>
            );
            })}
    </div>
  );
}
 
export default Facebook;