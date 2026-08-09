const FIREFLIES = [
  { left: "6%", top: "18%", size: 6, delay: "0s", duration: "3.2s" },
  { left: "14%", top: "62%", size: 4, delay: "0.4s", duration: "2.8s" },
  { left: "22%", top: "35%", size: 8, delay: "1.1s", duration: "3.6s" },
  { left: "31%", top: "78%", size: 5, delay: "0.7s", duration: "3.1s" },
  { left: "9%", top: "45%", size: 5, delay: "1.6s", duration: "2.9s" },
  { left: "40%", top: "22%", size: 6, delay: "0.2s", duration: "3.4s" },
  { left: "48%", top: "60%", size: 4, delay: "1.3s", duration: "2.7s" },
  { left: "58%", top: "15%", size: 7, delay: "0.9s", duration: "3.3s" },
  { left: "66%", top: "48%", size: 5, delay: "0.3s", duration: "3.0s" },
  { left: "73%", top: "70%", size: 6, delay: "1.8s", duration: "3.5s" },
  { left: "80%", top: "30%", size: 4, delay: "0.6s", duration: "2.8s" },
  { left: "88%", top: "58%", size: 7, delay: "1.0s", duration: "3.2s" },
  { left: "93%", top: "20%", size: 5, delay: "1.4s", duration: "3.0s" },
  { left: "18%", top: "12%", size: 4, delay: "2.0s", duration: "2.6s" },
  { left: "54%", top: "85%", size: 6, delay: "0.5s", duration: "3.3s" },
  { left: "84%", top: "82%", size: 5, delay: "1.2s", duration: "2.9s" },
];

export default function Fireflies() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          className="firefly-dot animate-twinkle"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        />
      ))}
    </div>
  );
}
