import { useState } from 'react';
import berlinData from '../data/berlin.json';

 
function IdCard() {
  const [ids, setIds] = useState(berlinData);
 
  return (
    <div>
      <h2>IdCard List</h2>
      {ids.map(id => {
        return (
            <div key={id._id} className="IdCard">
            <img src={id.img} alt="studentId" />
            <p>First Name: {id.firstName}</p>
            <p>Last Name: {id.lastName}</p>
            <p>Country: {id.country}</p>
            {id.isStudent && <p>Student: Yes</p>}
            {!id.isStudent && <p>Student: No</p>}
            </div>
            );
            })}
    </div>
  );
}
 
export default IdCard;