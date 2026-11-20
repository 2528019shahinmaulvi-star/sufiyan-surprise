
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Gem } from "lucide-react";
import { getPhotoUrl } from "../lib/photos";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadProfilePhoto = async () => {
      const url = await getPhotoUrl("sufiyan.jpg");

      if (!cancelled && url) {
        setProfileUrl(url);
      }
    };

    loadProfilePhoto();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="welcome-page">
      <div className="welcome-decoration star-one">✦</div>
      <div className="welcome-decoration star-two">✧</div>
      <div className="welcome-decoration star-three">✦</div>
      <div className="welcome-decoration star-four">♡</div>
      <div className="welcome-decoration star-five">✧</div>
      <div className="welcome-decoration star-six">✦</div>

      <motion.section
        className="welcome-card"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          className="welcome-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Happy Men's Day,
          <span> My man</span>
          <Sparkles className="heading-sparkle" size={22} />
        </motion.h1>

        <p className="welcome-subheading">
          To the man who makes my world beautiful
        </p>

        <motion.div
          className="profile-section"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="photo-glow"></div>

          {profileUrl && (
            <img
              src={profileUrl}
              alt="Sufiyan"
              className="profile-photo"
            />
          )}

          <div className="diamond-decoration">
            <Gem size={43} strokeWidth={1.7} />
            <Sparkles className="diamond-sparkle" size={17} />
          </div>
        </motion.div>

        <div className="best-man-badge">
          World's Best Man
          <span>🏅</span>
        </div>

        <motion.p
          className="welcome-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          You make ordinary days feel special and fill my life
          with happiness. Today is all about celebrating you.
          I've prepared a little surprise just for you!
          <span className="description-heart"> ♡</span>
        </motion.p>

        <motion.button
          className="welcome-start-button"
          onClick={() => navigate("/balloons")}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Start the Magic
          <Sparkles size={18} />
        </motion.button>

        <motion.p
          className="welcome-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          A little surprise, made with lots of love ♡
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Welcome;
