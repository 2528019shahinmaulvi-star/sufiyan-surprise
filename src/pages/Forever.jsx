
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import { getPhotoUrl } from "../lib/photos";
import "./Forever.css";

function Forever() {
  const navigate = useNavigate();
  const [backgroundUrl, setBackgroundUrl] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadBackground = async () => {
      const url = await getPhotoUrl("forever-bg.png");

      if (!cancelled && url) {
        setBackgroundUrl(url);
      }
    };

    loadBackground();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main
      className="forever-page"
      style={{
        "--forever-background": backgroundUrl
          ? `url("${backgroundUrl}")`
          : "none"
      }}
    >
      <div className="forever-heart heart-one">♡</div>
      <div className="forever-heart heart-two">♡</div>
      <div className="forever-heart heart-three">✧</div>
      <div className="forever-heart heart-four">♡</div>
      <div className="forever-heart heart-five">✧</div>

      <motion.section
        className="forever-container"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="forever-icon"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart size={42} fill="#8bbce0" color="#8bbce0" />
        </motion.div>

        <span className="forever-label">
          MY FAVOURITE CHAPTER IS YOU
        </span>

        <h1>
          You & Me,
          <span> Always.</span>
        </h1>

        <div className="forever-divider">
          <span></span>
          <Heart size={17} fill="#8bbce0" color="#8bbce0" />
          <span></span>
        </div>

        <p className="forever-message">
          Sufiyan, no matter how many pages life has
          ahead of us, I want you in every single one.
        </p>

        <p className="forever-message">
          More laughter, more little adventures,
          more dreams coming true, more memories,
          and a lifetime of choosing each other.
        </p>

        <p className="forever-highlight">
          My today, my tomorrow, my always. 💙
        </p>

        <motion.div
          className="forever-infinity"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ∞
        </motion.div>

        <div className="forever-bottom">
          <Sparkles size={18} />
          <span>Our story has only just begun.</span>
          <Sparkles size={18} />
        </div>

        <p className="forever-signature">
          Made with endless love, just for you.
        </p>

        <motion.button
          className="forever-replay-button"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={18} />
          Replay Our Story
        </motion.button>
      </motion.section>
    </main>
  );
}

export default Forever;
