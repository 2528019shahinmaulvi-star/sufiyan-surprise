
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowRight, Mail } from "lucide-react";
import "./LoveLetter.css";

function LoveLetter() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="letter-page">
      <div className="letter-decoration letter-decoration-one">♡</div>
      <div className="letter-decoration letter-decoration-two">✧</div>
      <div className="letter-decoration letter-decoration-three">♡</div>

      <motion.section
        className="letter-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="letter-label">
          SOMETHING FROM MY HEART
        </span>

        <h1>
          A Letter <span>For You</span>
        </h1>

        <p className="letter-subtitle">
          Some feelings are too special to be expressed
          <br />
          in just a few words.
        </p>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              className="envelope-area"
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <motion.div
                className="envelope"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="envelope-back"></div>
                <div className="envelope-paper">
                  <Heart size={28} color="#85afd0" fill="#85afd0" />
                </div>
                <div className="envelope-front"></div>
                <div className="envelope-flap"></div>

                <div className="envelope-seal">
                  <Heart size={24} fill="white" color="white" />
                </div>
              </motion.div>

              <p className="envelope-caption">
                Sealed with all my love, just for you.
              </p>

              <motion.button
                className="letter-open-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
              >
                <Mail size={18} />
                Open My Letter
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              className="letter-paper"
              key="letter"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="paper-decoration">♡</div>

              <div className="letter-content">
                <p className="letter-greeting">
                  My Favourite Person,
                </p>

                <p>
                  I don't think I can ever fully explain
                  how much you mean to me, but I want
                  to try.
                </p>

                <p>
                  Thank you for making me feel so loved,
                  happy, and special. You always notice
                  my little wishes and do your best to
                  make them come true. Those small
                  things mean more to me than you know.
                </p>

                <p>
                  I see how hard you work for our dreams.
                  I see your efforts, your sacrifices,
                  and everything you do for our future.
                  I am so proud of you, and I hope you
                  never forget how much I believe in you.
                </p>

                <p>
                  I don't need a perfect life. I just
                  want a life where we keep growing,
                  laughing, supporting each other, and
                  choosing each other every single day.
                </p>

                <p>
                  I want to celebrate your successes,
                  hold your hand through difficult days,
                  and create a thousand beautiful
                  memories with you.
                </p>

                <p>
                  Thank you for being you. Thank you
                  for being my happiness and my favourite
                  person.
                </p>

                <p className="letter-ending">
                  I love you, today and always ♾
                </p>

                <div className="letter-signature">
                  Forever yours,
                  <span> Your girl ♡</span>
                </div>
              </div>

              <Heart
                className="letter-bottom-heart"
                size={22}
                fill="#8bbce0"
                color="#8bbce0"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.button
            className="letter-next-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate("/forever")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            One Last Surprise
            <ArrowRight size={19} />
          </motion.button>
        )}

        <button
          className="letter-back-button"
          onClick={() => navigate("/memories")}
        >
          ← Back to Our Memories
        </button>
      </motion.section>
    </main>
  );
}

export default LoveLetter;
