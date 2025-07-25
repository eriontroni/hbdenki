import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef(null);

  // Kontrollo nese eshte ENKI
  const isEnki = name.trim().toLowerCase() === "enki";

  // Ngjyrat burrnore: blu te thelle, gri, pak bardhe
  const background = "linear-gradient(135deg,#232946 0%,#141e30 100%)";
  const cardBg = "rgba(20,24,40,0.98)";
  const accent = "#0f6ab4";
  const textColor = "#eaeaea";

  // Pyetesori ne fillim
  if (!submitted) {
    return (
        <div style={{
          minHeight: "100vh",
          width: "100vw",
          background,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              style={{
                background: cardBg,
                padding: "2.5rem 2rem",
                borderRadius: "1.5rem",
                boxShadow: "0 8px 40px rgba(15,20,40,0.23)",
                width: "100%",
                maxWidth: "370px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                boxSizing: "border-box"
              }}
          >
            <h2 style={{
              fontSize: "2rem", margin: 0, color: accent,
              fontWeight: 800, letterSpacing: ".03em"
            }}>
              Si quhesh?
            </h2>
            <input
                type="text"
                placeholder="Shkruaj emrin..."
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  padding: "0.7rem 1.2rem",
                  borderRadius: "0.7rem",
                  border: `2px solid ${accent}`,
                  fontSize: "1.13rem",
                  width: "100%",
                  maxWidth: "260px",
                  boxSizing: "border-box",
                  outline: "none",
                  margin: 0,
                  background: "#161b2b",
                  color: textColor,
                  fontWeight: 600
                }}
                onKeyDown={e => e.key === "Enter" && setSubmitted(true)}
            />
            <button
                onClick={() => setSubmitted(true)}
                style={{
                  padding: "0.7rem 2rem",
                  border: "none",
                  borderRadius: "999px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  background: `linear-gradient(90deg,${accent},#282c34 95%)`,
                  color: "#fff",
                  cursor: "pointer",
                  marginTop: "0.7rem",
                  letterSpacing: ".04em",
                  boxShadow: "0 2px 10px rgba(15, 106, 180, 0.12)"
                }}
            >
              Hape!
            </button>
          </motion.div>
        </div>
    );
  }

  // Nese emri NUK eshte Enki
  if (!isEnki) {
    return (
        <div style={{
          minHeight: "100vh",
          width: "100vw",
          background,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              style={{
                background: cardBg,
                padding: "2.2rem 2rem",
                borderRadius: "1.4rem",
                boxShadow: "0 8px 36px rgba(0,0,0,0.15)",
                minWidth: 320,
                textAlign: "center"
              }}
          >
            <h2 style={{
              color: accent, fontSize: "2rem", marginBottom: "1rem",
              fontWeight: 800, letterSpacing: ".03em"
            }}>
              Ik o dru, se s'e ki ti ditelindjen! 🧊
            </h2>
            <button
                style={{
                  padding: "0.6rem 1.6rem",
                  border: "none",
                  borderRadius: "999px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  background: `linear-gradient(90deg,${accent},#232946 95%)`,
                  color: "#fff",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
                onClick={() => { setSubmitted(false); setName(""); }}
            >
              Kthehu
            </button>
          </motion.div>
        </div>
    );
  }

  // Nese eshte Enki – kartolina burrnore me konfeti dhe audio/video
  return (
      <div
          style={{
            minHeight: "100vh",
            width: "100vw",
            overflow: "hidden",
            background,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            position: "relative"
          }}
      >
        {/* Konfeti burrnor: blu & te bardhe */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
          pointerEvents: "none", overflow: "hidden", zIndex: 1
        }}>
          {[...Array(22)].map((_, i) => (
              <motion.span
                  key={i}
                  initial={{
                    x: Math.random() * window.innerWidth, y: -30
                  }}
                  animate={{
                    y: [0, window.innerHeight + 60],
                    rotate: [0, Math.random() * 360]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 1.5,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  style={{
                    position: "absolute",
                    left: Math.random() * window.innerWidth,
                    fontSize: 24 + Math.random() * 22,
                    color: i % 2 === 0 ? "#0f6ab4" : "#eaeaea"
                  }}
              >
                {i % 2 === 0 ? "🎉" : "🧊"}
              </motion.span>
          ))}
        </div>

        {/* Audio per Enkin */}
        <audio ref={audioRef} src="/hbd.mp3" />

        {/* Kartolina */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1.1, delay: 0.2 }}
            style={{
              background: cardBg,
              padding: "3rem 2.5rem",
              borderRadius: "2rem",
              boxShadow: "0 8px 40px rgba(0,0,0,0.24)",
              maxWidth: 430,
              width: "100%",
              textAlign: "center",
              position: "relative",
              zIndex: 2
            }}
        >
          <motion.h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                background: `linear-gradient(90deg,${accent},#eaeaea 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1.1rem"
              }}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, type: "spring" }}
          >
            Urime ditelindja VulMond!
              Festofsh edhe 80 tjera!🥳
          </motion.h1>
          <motion.p
              style={{
                fontSize: "1.15rem",
                color: "#b5c8df",
                marginBottom: "2rem",
                fontWeight: 600
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
          >
            U bofsh plak e u martofsh me Agnesa Smakiqin!❤️❤️
          </motion.p>
          <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.06, backgroundColor: "#0f6ab4" }}
              style={{
                padding: "0.9rem 2.3rem",
                border: "none",
                borderRadius: "999px",
                fontSize: "1.13rem",
                fontWeight: 800,
                background: `linear-gradient(90deg,${accent},#232946 80%)`,
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 3px 18px rgba(15,106,180,0.10)",
                marginBottom: "0.5rem",
                letterSpacing: ".03em"
              }}
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();
                }
              }}
          >
            Kliko per urim 🎵
          </motion.button>
        </motion.div>
      </div>
  );
}
