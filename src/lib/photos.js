
import { supabase } from "./supabase";

let accessPassword = "";

export const setPhotoAccessPassword = (password) => {
  accessPassword = password;
};

export const clearPhotoAccessPassword = () => {
  accessPassword = "";
};

export const getPhotoUrl = async (fileName) => {
  if (!accessPassword) {
    console.error("Photo access is locked.");
    return null;
  }

  const { data, error } = await supabase.functions.invoke(
    "unlock-surprise",
    {
      body: {
        action: "photo",
        password: accessPassword,
        fileName,
      },
    }
  );

  if (error || !data?.success || !data?.signedUrl) {
    console.error(
      "Unable to load photo:",
      error?.message || data?.error || "Unknown error"
    );
    return null;
  }

  return data.signedUrl;
};
