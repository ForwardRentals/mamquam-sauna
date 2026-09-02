import { useState, useEffect } from "react";
import saunaPhoto from "figma:asset/86896a7eadd860628510c1ef3c9870e13224b024.png";
import heroPhoto from "figma:asset/cd80d03d3d480ce717c6aebdd1c038a6e12bbd93.png";
import privateBookingImage from "figma:asset/1e84d429bfd71494c2eab46dfe329c9b7f013e2b.png";

const SAUNA_IMAGE = saunaPhoto;
const MOUNTAINS_IMAGE = "https://images.unsplash.com/photo-1663645038231-55fef6adb6e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcXVhbWlzaCUyMG1vdW50YWlucyUyMGZvcmVzdCUyMHJpdmVyJTIwQkN8ZW58MXx8fHwxNzcxNjE1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const SAUNA_INTERIOR_IMAGE = privateBookingImage;
const COLD_PLUNGE_IMAGE = "https://images.unsplash.com/photo-1663943293034-2103a8f5e6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwcGx1bmdlJTIwaWNlJTIwYmF0aCUyMHdpbnRlciUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTYxNTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080";
const FIREWOOD_IMAGE = "https://images.unsplash.com/photo-1689771716787-0d593884bd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29vZCUyMHN0YWNrJTIwbG9ncyUyMHJ1c3RpY3xlbnwxfHx8fDE3NzE2MTU0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const WHISTLER_IMAGE = "https://images.unsplash.com/photo-1639436027140-d8b8d7ac5af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaGlzdGxlciUyMG1vdW50YWluJTIwc25vdyUyMHdpbnRlciUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzE2MTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TOWELS_IMAGE = "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZWQlMjB3aGl0ZSUyMHRvd2VscyUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTYyMjIzOXww&ixlib=rb-4.1.0&q=80&w=1080";
const FOREST_RIVER_IMAGE = "https://images.unsplash.com/photo-1656962659211-8f32ccb721e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjByaXZlciUyMHdpbGRlcm5lc3MlMjBCQyUyMG5hdHVyZXxlbnwxfHx8fDE3NzE2MjIyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set favicon to sauna photo
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = saunaPhoto;
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  // Set Open Graph meta tags for link preview
  useEffect(() => {
    const metaTags = [
      { property: 'og:title', content: 'Mamquam Sauna | The Secret Sauna - Squamish, Whistler, Pemberton' },
      { property: 'og:description', content: 'Born on the banks of the Mamquam River. Revived for those who seek the heat. Rent the original secret sauna for $325 per 24 hours. Wood-fired heat, cold plunge, and wilderness setting.' },
      { property: 'og:image', content: saunaPhoto },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Mamquam Sauna | The Secret Sauna' },
      { name: 'twitter:description', content: 'Born on the banks of the Mamquam River. Revived for those who seek the heat. $325 per 24 hours.' },
      { name: 'twitter:image', content: saunaPhoto },
    ];

    metaTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Also set page title
    document.title = 'Mamquam Sauna | The Secret Sauna - Squamish, Whistler, Pemberton';
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#0c1409",
        color: "#f0ebe1",
        overflowX: "hidden",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(12,20,9,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,160,80,0.15)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              color: "#c8a050",
              letterSpacing: "0.05em",
              cursor: "pointer",
            }}
            onClick={() => scrollTo("hero")}
          >
            Mamquam Sauna
          </div>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              gap: "36px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {["story", "experience", "locations", "pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#d4c9b4",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a050")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#d4c9b4")
                }
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setBookingOpen(true)}
              style={{
                background: "#c8a050",
                border: "none",
                color: "#0c1409",
                cursor: "pointer",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 22px",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e0b860";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c8a050";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#f0ebe1",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#c8a050",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#c8a050",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#c8a050",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "rgba(12,20,9,0.98)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              borderTop: "1px solid rgba(200,160,80,0.2)",
            }}
          >
            {["story", "experience", "locations", "pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#d4c9b4",
                  cursor: "pointer",
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textAlign: "left",
                  padding: "4px 0",
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setBookingOpen(true);
              }}
              style={{
                background: "#c8a050",
                border: "none",
                color: "#0c1409",
                cursor: "pointer",
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "14px 22px",
                borderRadius: "2px",
                textAlign: "center",
              }}
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={heroPhoto}
          alt="The Secret Sauna with mountain backdrop"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(12,20,9,0.35) 0%, rgba(12,20,9,0.15) 40%, rgba(12,20,9,0.7) 85%, rgba(12,20,9,1) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "0 20px",
            maxWidth: "800px",
          }}
        >
          <p
            style={{
              color: "#c8a050",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: "clamp(0.65rem, 2vw, 0.75rem)",
              marginBottom: "clamp(16px, 4vw, 20px)",
            }}
          >
            Squamish · Whistler · Pemberton
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 12vw, 6.5rem)",
              lineHeight: "1.05",
              color: "#f0ebe1",
              marginBottom: "clamp(20px, 4vw, 24px)",
              fontWeight: 500,
            }}
          >
            The Secret
            <br />
            <em style={{ color: "#c8a050" }}>Sauna</em>
          </h1>
          <p
            style={{
              color: "#c8c0b0",
              fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
              maxWidth: "520px",
              margin: "0 auto",
              marginBottom: "clamp(32px, 6vw, 40px)",
              lineHeight: "1.7",
              padding: "0 10px",
            }}
          >
            Born on the banks of the Mamquam River. Revived for those who seek the heat.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", padding: "0 10px" }}>
            <button
              onClick={() => setBookingOpen(true)}
              style={{
                background: "#c8a050",
                border: "none",
                color: "#0c1409",
                cursor: "pointer",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 36px",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e0b860";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c8a050";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Reserve Your Session
            </button>
            <button
              onClick={() => scrollTo("story")}
              style={{
                background: "transparent",
                border: "1px solid rgba(200,160,80,0.5)",
                color: "#d4c9b4",
                cursor: "pointer",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 36px",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c8a050";
                e.currentTarget.style.color = "#c8a050";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,160,80,0.5)";
                e.currentTarget.style.color = "#d4c9b4";
              }}
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.6,
          }}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#c8a050", textTransform: "uppercase" }}>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #c8a050, transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* THE STORY */}
      <section id="story" style={{ padding: "clamp(60px, 15vw, 100px) 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(40px, 8vw, 60px)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#c8a050",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                marginBottom: "16px",
              }}
            >
              The Legend
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1.2",
                color: "#f0ebe1",
                marginBottom: "28px",
                fontWeight: 500,
              }}
            >
              Born on the
              <br />
              <em style={{ color: "#c8a050" }}>Mamquam River</em>
            </h2>
            <div style={{ color: "#b8b0a0", lineHeight: "1.9", fontSize: "1rem" }}>
              <p style={{ marginBottom: "20px" }}>
                Deep in the wild corridors of Squamish, someone built something extraordinary — a hand-crafted sauna hidden along the banks of the Mamquam River. No signs. No bookings. Just steam, silence, and the sound of the river rushing by.
              </p>
              <p style={{ marginBottom: "20px" }}>
                For a time, it was a local secret. A place where those in the know could find warmth, community, and the kind of reset that only nature — and real heat — can provide.
              </p>
              <p style={{ marginBottom: "20px" }}>
                Then it was taken away. The sauna was sold off, and the legend faded into the trees.
              </p>
              <p>
                That's where <strong style={{ color: "#d4c9b4" }}>Shuwn and Glenn</strong> came in. They purchased the original sauna, preserved its soul, and rebuilt it — so that the story didn't end on the riverbank. Today, The Secret Sauna lives on, ready to be discovered again by those who seek the heat.
              </p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={MOUNTAINS_IMAGE}
              alt="BC Mountains and forest"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                objectFit: "cover",
                borderRadius: "2px",
                filter: "brightness(0.85)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "140px",
                height: "140px",
                border: "1px solid rgba(200,160,80,0.3)",
                borderRadius: "2px",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                padding: "16px 20px",
                backgroundColor: "rgba(12,20,9,0.85)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(200,160,80,0.25)",
                borderRadius: "2px",
              }}
            >
              <p style={{ color: "#c8a050", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>Est. on the</p>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe1", fontSize: "1rem" }}>Mamquam River</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(200,160,80,0.3), transparent)" }} />
      </div>

      {/* THE EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                color: "#c8a050",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                marginBottom: "16px",
              }}
            >
              What's Included
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0ebe1",
                fontWeight: 500,
              }}
            >
              The Full Experience
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
              backgroundColor: "rgba(200,160,80,0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {[
              {
                img: SAUNA_IMAGE,
                label: "The Original Sauna",
                desc: "The hand-crafted barrel-style sauna from the Mamquam River, restored and ready. Reaches temperatures up to 90°C with genuine wood-fired heat.",
              },
              {
                img: COLD_PLUNGE_IMAGE,
                label: "Cold Plunge",
                desc: "A dedicated cold plunge tub for the full contrast therapy experience. Elevate your recovery, sharpen your mind, and feel truly alive.",
              },
              {
                img: FIREWOOD_IMAGE,
                label: "Firewood Included",
                desc: "All the split firewood you need to stoke a full session is included. We take care of the prep so you can focus on the ritual.",
              },
              {
                img: SAUNA_INTERIOR_IMAGE,
                label: "Private Booking",
                desc: "Your 24-hour window is yours alone. No strangers, no schedules — just you, your group, and the heat.",
              },
              {
                img: TOWELS_IMAGE,
                label: "Towels & Essentials",
                desc: "Premium towels and all the essentials provided. We've thought of everything so you can simply arrive, unwind, and let the heat do its work.",
              },
              {
                img: FOREST_RIVER_IMAGE,
                label: "Wild Setting",
                desc: "Surrounded by old-growth forest and the sound of rushing water. This isn't a spa — it's a return to something primal and real.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#111d0e",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.05)";
                  const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                  const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.6)",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  className="card-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(12,20,9,0.95) 0%, rgba(12,20,9,0.4) 60%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px",
                    background: "linear-gradient(to top, rgba(12,20,9,0.95) 0%, transparent 100%)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      color: "#f0ebe1",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p style={{ color: "#a09888", fontSize: "0.85rem", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" style={{ padding: "100px 24px", backgroundColor: "#0a1607" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                color: "#c8a050",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                marginBottom: "16px",
              }}
            >
              Where We Operate
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0ebe1",
                fontWeight: 500,
              }}
            >
              Sea to Sky Corridor
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                name: "Squamish",
                tagline: "Where the legend began",
                desc: "At the foot of the Chief, surrounded by granite walls and old growth forest. The original home of the Secret Sauna.",
                note: "Mamquam River territory",
              },
              {
                name: "Whistler",
                tagline: "Alpine heat ritual",
                desc: "World-class mountains meet a world-class sauna experience. The ultimate après-ski or post-trail recovery session.",
                note: "Year-round availability",
              },
              {
                name: "Pemberton",
                tagline: "Off the beaten path",
                desc: "Wide open valleys, big sky country, and a deep quiet. Pemberton is where the pace slows and the heat hits different.",
                note: "Remote & private setting",
              },
            ].map((loc) => (
              <div
                key={loc.name}
                style={{
                  padding: "40px 32px",
                  border: "1px solid rgba(200,160,80,0.15)",
                  borderRadius: "2px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,160,80,0.4)";
                  e.currentTarget.style.backgroundColor = "rgba(200,160,80,0.04)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,160,80,0.15)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#c8a050",
                    marginBottom: "24px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    color: "#f0ebe1",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  {loc.name}
                </h3>
                <p
                  style={{
                    color: "#c8a050",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {loc.tagline}
                </p>
                <p style={{ color: "#908878", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "24px" }}>
                  {loc.desc}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#c8a050",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#c8a050",
                      flexShrink: 0,
                    }}
                  />
                  {loc.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH SAUNA BANNER */}
      <section style={{ position: "relative", height: "500px", overflow: "hidden" }}>
        <img
          src={WHISTLER_IMAGE}
          alt="Mountains backdrop"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <p
            style={{
              color: "#c8a050",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
              marginBottom: "20px",
            }}
          >
            The ritual
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              color: "#f0ebe1",
              maxWidth: "700px",
              lineHeight: "1.25",
              fontWeight: 400,
            }}
          >
            "Heat. Cold. Repeat. <em style={{ color: "#c8a050" }}>Remember what it feels like to be alive."</em>
          </h2>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                color: "#c8a050",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                marginBottom: "16px",
              }}
            >
              Simple Pricing
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#f0ebe1",
                fontWeight: 500,
              }}
            >
              Reserve Your 24 Hours
            </h2>
          </div>

          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              border: "1px solid rgba(200,160,80,0.3)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {/* Price header */}
            <div
              style={{
                backgroundColor: "#c8a050",
                padding: "40px 48px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "rgba(12,20,9,0.7)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Full Day Rental
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "4px" }}>
                <span style={{ fontSize: "1.5rem", color: "#0c1409", marginTop: "8px", fontFamily: "'Playfair Display', serif" }}>$</span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "5rem",
                    color: "#0c1409",
                    lineHeight: "1",
                    fontWeight: 600,
                  }}
                >
                  325
                </span>
              </div>
              <p style={{ color: "rgba(12,20,9,0.7)", fontSize: "0.8rem", marginTop: "8px", letterSpacing: "0.1em" }}>
                PER 24-HOUR SESSION
              </p>
            </div>

            {/* Inclusions */}
            <div
              style={{
                backgroundColor: "#111d0e",
                padding: "clamp(32px, 6vw, 48px)",
              }}
            >
              <p
                style={{
                  color: "#908878",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                Everything included
              </p>
              {[
                "Wood-fired barrel sauna (original from the Mamquam)",
                "Cold plunge tub, fully set up",
                "All firewood — enough for a full day",
                "Private 24-hour booking window",
                "Available in Squamish, Whistler & Pemberton",
                "Startup instructions & sauna guide",
              ].map((inc) => (
                <div
                  key={inc}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      color: "#c8a050",
                      fontSize: "1rem",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#c8c0b0", fontSize: "0.9rem", lineHeight: "1.5" }}>{inc}</span>
                </div>
              ))}

              <button
                onClick={() => setBookingOpen(true)}
                style={{
                  width: "100%",
                  background: "#c8a050",
                  border: "none",
                  color: "#0c1409",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "18px",
                  borderRadius: "2px",
                  marginTop: "32px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e0b860")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a050")}
              >
                Book Your Session — $325
              </button>
              <p style={{ color: "#605850", fontSize: "0.75rem", textAlign: "center", marginTop: "16px" }}>
                Questions? Reach out to Glenn directly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#080f06",
          borderTop: "1px solid rgba(200,160,80,0.1)",
          padding: "60px 24px 40px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px",
              marginBottom: "60px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  color: "#c8a050",
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                The Secret Sauna
              </h3>
              <p style={{ color: "#706860", fontSize: "0.85rem", lineHeight: "1.7", maxWidth: "260px" }}>
                The original secret sauna from the Mamquam River — rebuilt, restored, and waiting for you.
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#c8a050",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Locations
              </p>
              {["Squamish, BC", "Whistler, BC", "Pemberton, BC"].map((loc) => (
                <p key={loc} style={{ color: "#807870", fontSize: "0.85rem", marginBottom: "10px" }}>
                  {loc}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  color: "#c8a050",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Quick Links
              </p>
              {["story", "experience", "locations", "pricing"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  style={{
                    display: "block",
                    background: "none",
                    border: "none",
                    color: "#807870",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    padding: "0 0 10px",
                    textTransform: "capitalize",
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a050")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#807870")}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <p
                style={{
                  color: "#c8a050",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Book or Enquire
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(200,160,80,0.35)",
                  color: "#c8a050",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  borderRadius: "2px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c8a050";
                  e.currentTarget.style.color = "#0c1409";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#c8a050";
                }}
              >
                Make a Booking
              </button>
              <p style={{ color: "#504840", fontSize: "0.8rem", marginTop: "16px" }}>
                Owners & Founders: Shuwn & Glenn
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p style={{ color: "#403830", fontSize: "0.75rem" }}>
              © 2025 The Secret Sauna. All rights reserved. Sea to Sky Corridor, BC.
            </p>
            <p style={{ color: "#403830", fontSize: "0.75rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              The legend lives on.
            </p>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setBookingOpen(false);
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(8,15,6,0.9)",
              backdropFilter: "blur(12px)",
            }}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#111d0e",
              border: "1px solid rgba(200,160,80,0.25)",
              borderRadius: "2px",
              padding: "clamp(24px, 5vw, 48px)",
              width: "100%",
              maxWidth: "520px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setBookingOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#807870",
                cursor: "pointer",
                fontSize: "1.4rem",
                lineHeight: 1,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a050")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#807870")}
            >
              ×
            </button>

            <p
              style={{
                color: "#c8a050",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
                marginBottom: "12px",
              }}
            >
              Reserve
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                color: "#f0ebe1",
                marginBottom: "32px",
                fontWeight: 500,
              }}
            >
              Book the Secret Sauna
            </h3>

            <BookingForm onClose={() => setBookingOpen(false)} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        /* Responsive navigation */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function BookingForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key
      // Get one free at: https://web3forms.com/
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "6dc83f13-b7ca-4a2e-b33f-ca7264f4a97b",
          subject: `New Sauna Booking - ${form.location} - ${form.date}`,
          from_name: "Mamquam Sauna Website",
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          location: form.location,
          date: form.date,
          guests: form.guests || "1-2",
          message: form.message || "No additional message",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("There was an error submitting your booking. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your booking. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid #c8a050",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "1.5rem",
            color: "#c8a050",
          }}
        >
          ✓
        </div>
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            color: "#f0ebe1",
            marginBottom: "12px",
          }}
        >
          Request Sent
        </h4>
        <p style={{ color: "#908878", lineHeight: "1.6", marginBottom: "32px" }}>
          Shuwn and Glenn will be in touch shortly to confirm your booking. Get ready to heat up.
        </p>
        <button
          onClick={onClose}
          style={{
            background: "#c8a050",
            border: "none",
            color: "#0c1409",
            cursor: "pointer",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "14px 32px",
            borderRadius: "2px",
          }}
        >
          Done
        </button>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(200,160,80,0.2)",
    borderRadius: "2px",
    color: "#f0ebe1",
    padding: "12px 16px",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Inter', sans-serif",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#907870",
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Full Name *</label>
        <input
          required
          style={inputStyle}
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input
          required
          type="email"
          style={inputStyle}
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Phone</label>
        <input
          style={inputStyle}
          placeholder="+1 (604) 000-0000"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Location *</label>
        <select
          required
          style={{ ...inputStyle, cursor: "pointer" }}
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
        >
          <option value="" style={{ backgroundColor: "#111d0e" }}>Select a location</option>
          <option value="squamish" style={{ backgroundColor: "#111d0e" }}>Squamish</option>
          <option value="whistler" style={{ backgroundColor: "#111d0e" }}>Whistler</option>
          <option value="pemberton" style={{ backgroundColor: "#111d0e" }}>Pemberton</option>
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>Date *</label>
          <input
            required
            type="date"
            style={{ ...inputStyle, colorScheme: "dark" }}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Guests</label>
          <select
            style={{ ...inputStyle, cursor: "pointer" }}
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
          >
            <option value="" style={{ backgroundColor: "#111d0e" }}>1–2</option>
            <option value="3-4" style={{ backgroundColor: "#111d0e" }}>3–4</option>
            <option value="5-6" style={{ backgroundColor: "#111d0e" }}>5–6</option>
            <option value="6+" style={{ backgroundColor: "#111d0e" }}>6+</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Any questions or special requests..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.6)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(200,160,80,0.2)")}
        />
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(200,160,80,0.1)",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ color: "#c8a050", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total</p>
          <p style={{ fontFamily: "'Playfair Display', serif", color: "#f0ebe1", fontSize: "1.5rem" }}>$325</p>
        </div>
        <button
          type="submit"
          style={{
            background: "#c8a050",
            border: "none",
            color: "#0c1409",
            cursor: "pointer",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "16px 32px",
            borderRadius: "2px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e0b860")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a050")}
        >
          {submitting ? "Submitting..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}