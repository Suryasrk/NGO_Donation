function Profile() {

  return (

    <div>

      <h2>
        My Profile
      </h2>

      <h4>
        Username:
        {
          localStorage.getItem(
            "username"
          )
        }
      </h4>

      <h4>
        Role:
        {
          localStorage.getItem(
            "role"
          )
        }
      </h4>

    </div>

  );

}

export default Profile;