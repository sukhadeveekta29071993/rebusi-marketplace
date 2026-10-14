import { useAppSelector } from "../../store/hooks";

const Profile = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <section className="section">
      <div className="container">
        <h1>Profile</h1>

        {isAuthenticated && user ? (
          <>
            <p>
              Welcome, <strong>{user.name}</strong>
            </p>

            {user.email && <p className="mb-0">{user.email}</p>}
          </>
        ) : (
          <p className="mb-0">Please login to view your profile.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
