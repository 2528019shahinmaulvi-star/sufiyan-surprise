
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getPhotoUrl } from "../lib/photos";
import "./Memories.css";

const memories = [
  {
    image: "memory1.jpg",
    caption: "The Birthday That Became More Special Because of You 😚",
    note: "My first birthday after you came into my life, and I never knew someone could make an ordinary day feel so magical. Having you by my side made me feel loved in a way I can't put into words. If I could relive that day, I would choose that moment with you a thousand times over 🥹💗"
  },
  {
    image: "memory2.jpg",
    caption: "The Day We Made Our Forever Official 💍❤️",
    note: "A day filled with love, happiness, and dreams coming true. Our engagement wasn't just a grand celebration; it was the beginning of a beautiful forever with you. Among all the lights, smiles, and celebrations, my favourite part was knowing that I get to spend my life with you. My heart will always remember this magical day 💙"
  },
  {
    image: "memory3.jpg",
    caption: "Our Little Dinner Date, My Favourite Evening",
    note: "A beautiful evening, a lovely dinner, and my favourite person by my side. It was never about the place or the food; it was about making another precious memory with you. Here's to a lifetime of dinner dates together. Whatever life brings, let's face it together 💋"
  },
  {
    image: "memory4.jpg",
    caption: "My Favourite Smile 😊",
    note: "Your smile has a special place in my heart. No matter how my day is going, seeing you smile makes everything feel better. I hope I get to be the reason behind that beautiful smile for the rest of our lives."
  },
  {
    image: "memory5.jpg",
    caption: "The Surprise That Made My Day Unforgettable 🎓❤️",
    note: "Among all the happiness of that day, the most beautiful moment was seeing you there. I never expected that surprise, and honestly, no graduation gift could have meant more to me than your presence. You made my achievement feel even more special, and that's a moment I'll keep close to my heart forever 🥹❤️"
  }
];

function Memories() {
  const navigate = useNavigate();
  const [photoUrls, setPhotoUrls] = useState({});

  useEffect(() => {
    let cancelled = false;

    const loadPhotos = async () => {
      const results = await Promise.all(
        memories.map(async (memory) => {
          const url = await getPhotoUrl(memory.image);
          return [memory.image, url];
        })
      );

      if (!cancelled) {
        setPhotoUrls(Object.fromEntries(results));
      }
    };

    loadPhotos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="memories-page">
      <div className="memories-decoration memories-heart-one">♡</div>
      <div className="memories-decoration memories-heart-two">✧</div>
      <div className="memories-decoration memories-heart-three">♡</div>

      <motion.section
        className="memories-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="memories-label">
          LITTLE PIECES OF US
        </span>

        <h1>
          Our Beautiful <span>Memories</span>
        </h1>

        <p className="memories-intro">
          If I could frame my favourite feelings,
          <br />
          they would all have you in them. 💙
        </p>

        <div className="memories-gallery">
          {memories.map((memory, index) => (
            <motion.div
              className={`memory-card memory-card-${index + 1}`}
              key={index}
              initial={{ opacity: 0, y: 35, rotate: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? -3 : 3
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12
              }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -8,
                zIndex: 5
              }}
            >
              <div className="memory-photo">
                {photoUrls[memory.image] && (
                  <img
                    src={photoUrls[memory.image]}
                    alt={memory.caption}
                  />
                )}
              </div>

              <h3>{memory.caption}</h3>
              <p>{memory.note}</p>

              <Heart
                className="memory-heart"
                size={15}
                fill="#a5cbe6"
                color="#a5cbe6"
              />
            </motion.div>
          ))}
        </div>

        <div className="memories-ending">
          <Heart size={19} fill="#8bbce0" color="#8bbce0" />
          <p>
            And my favourite memories are still waiting to be made.
          </p>
        </div>

        <motion.button
          className="memories-next-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/letter")}
        >
          A Letter for You
          <ArrowRight size={19} />
        </motion.button>

        <button
          className="memories-back-button"
          onClick={() => navigate("/balloons")}
        >
          ← Back to Balloon Surprise
        </button>
      </motion.section>
    </main>
  );
}

export default Memories;
