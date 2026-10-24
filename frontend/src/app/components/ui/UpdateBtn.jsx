import React, { use } from "react";
import { updateUserProfile } from "../../service/user.services";
import { useNavigate } from "react-router-dom";
import { uploadAvatar } from "../../service/avatar.services";

export default function UpdateBtn({ userId, profileData }) {
const navigate = useNavigate();
  const handleUpdate = async () => {
    if (profileData.avatarFile) {
      try {
        const res = await uploadAvatar(userId, profileData.avatarFile);
        console.log("Avatar Upload Response:", res);
        profileData.avatar = res; 

      } catch (err){
        console.error("Avatar upload failed:", err);
        alert(`Avatar upload failed: ${err.message || err}`);
        return ;
      }

    }
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
