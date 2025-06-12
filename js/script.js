// Simulated events data
const events = [
  {
    title: "Free Donuts & Coffee",
    time: "10:00 AM – 12:00 PM",
    location: "Clifton SU Lounge",
    date: "2025-06-12"
  },
  {
    title: "GIAG: Paint & Sip",
    time: "3:00 PM – 5:00 PM",
    location: "City Campus Studio",
    date: "2025-06-12"
  },
  {
    title: "Society Fair",
    time: "1:00 PM – 4:00 PM",
    location: "Brackenhurst Quad",
    date: "2025-06-13"
  },
  {
    title: "Mental Health Drop-In",
    time: "2:00 PM – 3:30 PM",
    location: "Support Hub – Clifton",
    date: "2025-06-12"
  }
];

// Render events that match today's date
const today = new Date().toISOString().split("T")[0];
const container = document.getElementById("events-container");

const todaysEvents = events.filter(event => event.date === today);

if (todaysEvents.length === 0) {
  container.innerHTML = "<p>No events scheduled for today.</p>";
} else {
  todaysEvents.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
    container.appendChild(card);
  });
}
