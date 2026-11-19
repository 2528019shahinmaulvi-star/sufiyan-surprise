
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Gem } from "lucide-react";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="welcome-page">
      {/* Floating Decorations */}
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
        {/* Heading */}
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

        {/* Profile Photo */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="photo-glow"></div>

          <img
            src={`${import.meta.env.BASE_URL}images/sufiyan.jpg`}
            alt="Sufiyan"
            className="profile-photo"
          />

          {/* Diamond Decoration */}
          <div className="diamond-decoration">
            <Gem size={43} strokeWidth={1.7} />
            <Sparkles className="diamond-sparkle" size={17} />
          </div>
        </motion.div>

        {/* Best Man Badge */}
        <div className="best-man-badge">
          World's Best Man
          <span>🏅</span>
        </div>

        {/* Description */}
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

        {/* Start Button */}
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
