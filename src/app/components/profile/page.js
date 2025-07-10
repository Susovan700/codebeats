import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-menu">
      <div className="card">
        <div className="infos">
          <div className="image"></div>
          <div className="info">
            <div>
              <p className="name">John Doe</p>
            </div>
            <div className="stats">
              <p className="flex flex-col">
                Articles
                <span className="state-value">34</span>
              </p>
              <p className="flex">
                Favorites
                <span className="state-value">45</span>
              </p>
            </div>
            <button className="request" type="button">
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
