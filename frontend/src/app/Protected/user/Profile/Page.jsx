import React, { useState, useEffect } from "react";
import BackBtn from "../../../components/ui/BackBtn";
import { useAuth } from "../../../hooks/useAuth";
import UpdateBtn from "../../../components/ui/UpdateBtn";

const userDetail = ["fullname", "email", "phone"];

export default function ProfilePage() {
  const { user } = useAuth();

  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setData({
        fullname: user.fullname || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile Page</h1>

      <ul>
        {userDetail.map((detail) => (
          <li key={detail}>
            <label>{detail}: </label>
            <input
              type="text"
              value={data[detail]}
              placeholder="Chưa cập nhật"
              onChange={(e) =>
                setData({
                  ...data,
                  [detail]: e.target.value,
                })
              }
            />
          </li>
        ))}
      </ul>

      <UpdateBtn userId={user.id} profileData={data} />
      <BackBtn />
    </div>
  );
}
