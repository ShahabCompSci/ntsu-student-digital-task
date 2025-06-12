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

const campuses = {
  city: {
    address: "50 Shakespeare St, Nottingham NG1 4FQ",
    phone: "0115 941 8418",
    email: "citycampus@ntu.ac.uk",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4932795867165!2d-1.1541379234698807!3d52.955526372055226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3b3dcd1941b%3A0xfde8ac1e057899fc!2s50%20Shakespeare%20St%2C%20Nottingham%20NG1%204FQ!5e0!3m2!1sen!2suk!4v1718228720000!5m2!1sen!2suk"
  },
  clifton: {
    address: "College Dr, Clifton, Nottingham NG11 8NS",
    phone: "0115 941 8418",
    email: "cliftoncampus@ntu.ac.uk",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.386683810632!2d-1.1876443234690863!3d52.91290967274043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e69aaff3c0b1%3A0x50c1739c926acdf2!2sCollege%20Dr%2C%20Clifton%2C%20Nottingham%20NG11%208NS!5e0!3m2!1sen!2suk!4v1718228750000!5m2!1sen!2suk"
  },
  brackenhurst: {
    address: "Brackenhurst Ln, Southwell NG25 0QF",
    phone: "0115 941 8418",
    email: "brackenhurst@ntu.ac.uk",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.165738689065!2d-0.9525687234650036!3d53.08100717299156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48796d1b4c145cf7%3A0x3b6d775dd7d6be8a!2sBrackenhurst%20Ln%2C%20Southwell%20NG25%200QF!5e0!3m2!1sen!2suk!4v1718228780000!5m2!1sen!2suk"
  },
  london: {
    address: "41 Commercial Rd, London E1 1LA",
    phone: "020 3131 7842",
    email: "londoncampus@ntu.ac.uk",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.41723967482!2d-0.07437662345588898!3d51.51425042800819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cc57f7c4bb3%3A0xe44be1e44e24d2b8!2s41%20Commercial%20Rd%2C%20London%20E1%201LA!5e0!3m2!1sen!2suk!4v1718228800000!5m2!1sen!2suk"
  }
};


function updateCampusInfo() {
  const selected = document.getElementById("campus-select").value;
  const data = campuses[selected];

  document.getElementById("campus-details").innerHTML = `
    <strong>Address:</strong> ${data.address}<br>
    <strong>Phone:</strong> ${data.phone}<br>
    <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
  `;

  document.getElementById("campus-map").src = data.mapUrl;
}

// Load default campus on page load
window.onload = updateCampusInfo;
