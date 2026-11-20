
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Lock,
  Eye,
  EyeOff,
  Moon,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { setPhotoAccessPassword } from "../lib/photos";
import "./Password.css";

function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUnlock = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data, error: functionError } =
        await supabase.functions.invoke("unlock-surprise", {
          body: {
            action: "verify",
            password,
          },
        });

      if (functionError || !data?.success) {
        setError(
          data?.error ||
            "Oops! That's not our special word. Try again, love. 💙"
        );
        return;
      }

      setPhotoAccessPassword(password);
      sessionStorage.setItem("surpriseUnlocked", "true");

      navigate("/welcome");
    } catch (err) {
      console.error("Password verification failed:", err);
      setError("Unable to connect. Please try again, love. 💙");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="password-page">
      <div className="password-decoration moon-one">☾</div>
      <div className="password-decoration star-one">✦</div>
      <div className="password-decoration star-two">✧</div>
      <div className="password-decoration moon-two">♡</div>

      <motion.section
        className="password-card"
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="password-icon"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Moon size={35} fill="#8bbce0" color="#8bbce0" />
          <Sparkles className="password-sparkle" size={17} />
        </motion.div>

        <span className="password-label">
          A LITTLE SOMETHING FOR YOU
        </span>

        <h1>
          Hey, my favourite
          <span> person! 💙</span>
        </h1>

        <p className="password-description">
          Some little surprises are made just for you.
          Enter our special word to unlock yours.
        </p>

        <form onSubmit={handleUnlock}>
          <label htmlFor="special-password">
            Our special word
          </label>

          <div className="password-input-wrapper">
            <Lock size={19} className="input-lock" />

            <input
              id="special-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter the magic word..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              autoComplete="off"
            />

            <button
              type="button"
              className="password-eye"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Show or hide password"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {error && (
            <p className="password-error" role="alert">
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            className="unlock-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
          >
            {loading ? "Unlocking..." : "Unlock My Surprise"}
            <Heart size={18} fill="white" />
          </motion.button>
        </form>

        <div className="password-footer">
          <Heart size={14} fill="#8bbce0" />
          Made with endless love, just for you.
          <Heart size={14} fill="#8bbce0" />
        </div>
      </motion.section>
    </main>
  );
}

export default Password;
