import React from "react";
import { updateUserProfile } from "../../service/user.services";
import { useNavigate } from "react-router-dom";

export default function UpdateBtn({ userId, profileData }) {
const navigate = useNavigate();
  const handleUpdate = async () => {
    try {
      const res = await updateUserProfile(userId, profileData);
      console.log("Update Response:", res);
      alert("Cập nhật thành công!");
      navigate("/home");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Cập nhật thất bại!");
    }
  };

  return (
    <button
      onClick={handleUpdate}
      className="px-4 py-2 bg-green-500 text-white rounded
                 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Update
    </button>
  );
}
