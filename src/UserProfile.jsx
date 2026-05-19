import { useState } from "react";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "Aden Osman",
    email: "aden@example.com",
    address: {
      street: "123 Main Street",
      city: "Seattle",
      country: "USA",
    },
  });

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function updateAddress() {
    setUserProfile({
      ...userProfile,
      address: {
        ...userProfile.address,
        street: street,
        city: city,
        country: country,
      },
    });
  }

  return (
    <div className="profile-card">
      <h1>User Profile</h1>

      <div className="form-section">
        <input
          type="text"
          placeholder="Enter street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button onClick={updateAddress}>Update Address</button>
      </div>

      <div className="info-section">
        <h2>Current Profile</h2>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Street:</strong> {userProfile.address.street}</p>
        <p><strong>City:</strong> {userProfile.address.city}</p>
        <p><strong>Country:</strong> {userProfile.address.country}</p>
      </div>
    </div>
  );
}
