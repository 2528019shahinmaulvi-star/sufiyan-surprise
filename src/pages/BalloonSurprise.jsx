
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import "./BalloonSurprise.css";

const surprises = [
  {
    image: "/images/balloon1.jpg",
    caption: "My Favourite Human ❤️",
    message: "You have this beautiful way of making everyone around you feel special, but for me, you're the person who makes my world brighter just by being in it"
  },
  {
    image: "/images/balloon2.jpg",
    caption: "Your Hardworking Heart ✨ ",
    message: "Your I admire how hard you work for your dreams and for the future we're building together. Your dedication makes me proud of you every single day."
  },
  {
    image: "/images/balloon3.jpg",
    caption: "My biggest blessing ",
    message: "Having you in my life is a blessing I thank Allah for every day. May He always protect you, guide your steps, fulfil your dreams, and fill your life with endless happiness. May you always be blessed beyond what your heart wishes for. Ameen."
  },
  {
    image: "/images/balloon4.jpg",
    caption: "My Biggest Pride 💙",
    message:  "I wish you could see yourself through my eyes. You'd see how special, capable, and wonderful you are. I'm so proud of the man you are and the man you're becoming. I'll always believe in you."
  },
  {
    image: "/images/balloon5.jpg",
    caption: "Always and forever💍",
    message: " I don't just love who you are today; I love the person you're becoming. I want to stand beside you through every dream, every challenge, and every chapter of our forever."
  }
];

function BalloonSurprise() {
  const navigate = useNavigate();
  const [popped, setPopped] = useState([]);

  const popBalloon = (index) => {
    setPopped((previous) =>
      previous.includes(index) ? previous : [...previous, index]
    );
  };

  const allPopped = popped.length === surprises.length;

  return (
    <main className="balloon-page">
      <div className="balloon-decoration decoration-one">♡</div>
      <div className="balloon-decoration decoration-two">✧</div>
      <div className="balloon-decoration decoration-three">♡</div>

      <motion.section
        className="balloon-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="balloon-label">
          A LITTLE GAME FOR YOU
        </span>

        <h1>
          Pop the <span>Love!</span>
        </h1>

        <p className="balloon-subtitle">
          Five balloons, five little memories.
          <br />
          Pop each one to reveal something special.
        </p>

        <div className="balloon-counter">
          {popped.length} / {surprises.length} memories discovered
        </div>

        <div className="balloon-grid">
          {surprises.map((surprise, index) => {
            const isPopped = popped.includes(index);

            return (
              <div className="balloon-item" key={index}>
                <AnimatePresence mode="wait">
                  {!isPopped ? (
                    <motion.button
                      key="balloon"
                      className={`balloon balloon-${index + 1}`}
                      onClick={() => popBalloon(index)}
                      aria-label={`Pop balloon ${index + 1}`}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        y: [0, -12, 0]
                      }}
                      exit={{
                        scale: 1.5,
                        opacity: 0,
                        rotate: 25
                      }}
                      transition={{
                        scale: { duration: 0.4 },
                        y: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span>♡</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="polaroid"
                      className="surprise-polaroid"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: -12,
                        y: 30
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: index % 2 === 0 ? -3 : 3,
                        y: 0
                      }}
                      transition={{ duration: 0.65 }}
                    >
                      <div className="surprise-photo">
                        <img
                          src={surprise.image}
                          alt={surprise.caption}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <Heart
                          className="photo-heart"
                          size={17}
                          fill="#ffffff"
                        />
                      </div>

                      <p className="polaroid-caption">
                        {surprise.caption}
                      </p>

                      <p className="polaroid-message">
                        {surprise.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {allPopped && (
            <motion.div
              className="balloon-complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles size={22} />
              <p>You found all five pieces of my heart! 💙</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="balloon-next-button"
          disabled={!allPopped}
          onClick={() => navigate("/memories")}
          whileHover={allPopped ? { scale: 1.05 } : {}}
          whileTap={allPopped ? { scale: 0.95 } : {}}
        >
          Next Surprise
          <ArrowRight size={19} />
        </motion.button>

        <button
          className="balloon-back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Welcome
        </button>
      </motion.section>
    </main>
  );
}

export default BalloonSurprise;
