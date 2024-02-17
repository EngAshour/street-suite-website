import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <img src="profile_img.png" alt="profile" />
      <div className="profile-info">
        <div className="username">Moni Roy</div>
        <div className="level">Beginner</div>
      </div>
    </div>
  );
}
