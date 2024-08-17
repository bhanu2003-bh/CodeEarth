import { useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
const navigate = useNavigate();


useEffect(()=>{
  if(localStorage.cookies!=document.cookie) navigate('/login');

   


},[])

function Logout(){
   document.cookie = null;
    navigate('/login')
}



  return (
    <div className="profile-container">
      {/* Header section */}
      <div className="profile-header">
        <h2 className="profile-username">John Doe</h2>
        <h1 className="profile-rank">Rank: #420</h1>
        <button className="logout-button" onClick={Logout}>Logout</button>
      </div>

      {/* Stats Table with different background */}
      <div className="profile-stats">
        <table>
          <tbody>
            <tr>
              <td>Total Problems Solved</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Easy</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Hard</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Social Links */}
      <div className="profile-links">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://codeforces.com/profile/username" target="_blank" rel="noopener noreferrer">Codeforces</a>
        <a href="https://codechef.com/users/username" target="_blank" rel="noopener noreferrer">CodeChef</a>
      </div>
    </div>
  );
};

export default Profile;
