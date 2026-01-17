import { apiFetch } from "../lib/api/api";

export const checkProfileCompletion = (user_id) => {
    return apiFetch(`/user/check-profile/${user_id}`);
}

export const getUserById = (user_id) => {
    return apiFetch(`/user/profile/${user_id}`);
}

export const updateUserProfile = (user_id, profileData) => {
    return apiFetch(`/user/updateProfile/${user_id}`, {
        method: "PUT",
        body: JSON.stringify(profileData),
    });
}