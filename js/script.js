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

// Chat toggle button
document.getElementById('chat-toggle').addEventListener('click', () => {
  document.getElementById('chat-box').classList.toggle('hidden');
});

// Handle user input
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const input = this.value.trim();
    if (input === '') return;

    appendMessage(input, 'user');
    this.value = '';

    // Simulate bot response
    const reply = getBotReply(input);
    setTimeout(() => appendMessage(reply, 'bot'), 600);
  }
});

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-msg', `chat-${sender}`);
  msgDiv.textContent = message;
  document.getElementById('chat-messages').appendChild(msgDiv);
  document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

// Fake AI logic
function getBotReply(userInput) {
  const lower = userInput.toLowerCase();
  if (lower.includes('society')) return "You can join a society via the Opportunities tab!";
  if (lower.includes('freshers')) return "Freshers Week kicks off September 15. Check the Freshers section for updates.";
  if (lower.includes('support')) return "You can visit the Support & Advice section for wellbeing, housing, or academic help.";
  return "I'm here to help! Please check our menu or try asking something else.";
}

// Simulated announcement popup
function showAnnouncement() {
  alert("📰 Latest Update: NTSU Summer Ball tickets go on sale this Friday at 10 AM!");
}
