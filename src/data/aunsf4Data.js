import sampuImg from "./sampu.webp";
import mansiImg from "./mansi.webp";
import rithikaImg from "./rithika.webp";
import krishnaVedulaImg from "./krishna vedula.png";
import archanaMantriImg from "./Dr-Archana-Mantri.png";

const TEAM = "/events/aunsf/aunsf_4.0/team";
const TEAM_PICS = "/team_pics";

export const pageNavLinks = [
  { id: "itinerary", label: "Itinerary" },
  { id: "domains", label: "Domains" },
  { id: "chief-guests", label: "Chief Guests" },
  { id: "faculty-advisory", label: "Faculty & Advisory" },
  { id: "project-managers", label: "Project Managers" },
  { id: "leads", label: "Leads" },
];

export const eventInfo = {
  theme: "The Blueprint of Tomorrow",
  forumTheme: "Fourth Industrial Revolution (4IR)",
  dates: "30th July – 1st August, 2026",
  venue: "Anurag University, Hyderabad",
  tagline:
    "A transformative student-led initiative fostering innovation, leadership, collaboration, and sustainable thinking among future changemakers.",
};

export const itinerary = [
  {
    day: "Day 1 — Ignite the Journey",
    date: "30th July 2026",
    subtitle:
      "Begin your journey with registration, the inaugural ceremony, and the problem statement release. Connect with fellow participants, interact with mentors, and start building innovative solutions.",
    items: [
      { time: "08:00 AM – 09:30 AM", title: "Registrations", description: "A Block Sides", venue: "A Block Sides" },
      { time: "09:30 AM – 11:30 AM", title: "Inauguration", description: "Formal opening ceremony", venue: "D Block Manas Auditorium" },
      { time: "11:30 AM – 11:40 AM", title: "Break", description: "Movement to dedicated venues" },
      { time: "11:40 AM – 01:00 PM", title: "Session 1", description: "Domain-wise problem statement sessions", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "01:00 PM – 02:00 PM", title: "Lunch", venue: "D Block Canteen" },
      { time: "02:00 PM – 04:45 PM", title: "Interaction Between Mentors & Participants", description: "Mentor-guided collaborative sessions", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "04:45 PM – 05:00 PM", title: "Tea Break", venue: "A Block Lawn" },
      { time: "05:00 PM – 06:30 PM", title: "Activity 1", venue: "A Block Lawn" },
      { time: "06:30 PM", title: "Day 1 Closing" },
    ],
  },
  {
    day: "Day 2 — Build, Create & Collaborate",
    date: "31st July 2026",
    subtitle:
      "Dive into focused development sessions with mentor support and team collaboration. Unwind in the evening with cultural activities and fun engagements.",
    items: [
      { time: "09:00 AM – 11:00 AM", title: "Session 2", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "11:00 AM – 11:15 AM", title: "Break" },
      { time: "11:15 AM – 01:00 PM", title: "Session 3", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "01:00 PM – 02:00 PM", title: "Lunch Break", venue: "D Block Canteen" },
      { time: "02:00 PM – 05:00 PM", title: "Session 4", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "05:00 PM – 05:15 PM", title: "High Tea", venue: "D Block Canteen" },
      { time: "05:15 PM – 07:30 PM", title: "Culturals (Retro Theme)", venue: "D Block Manas Auditorium" },
      { time: "07:30 PM – 08:30 PM", title: "Dinner", venue: "D Block Canteen" },
      { time: "08:30 PM", title: "Day 2 Closing" },
    ],
  },
  {
    day: "Day 3 — Present, Celebrate & Conclude",
    date: "1st August 2026",
    subtitle:
      "The final day starts with a refreshing morning activity, followed by project presentations before the evaluation panel. The event concludes with the valedictory ceremony, recognizing outstanding ideas and celebrating achievements.",
    items: [
      { time: "05:30 AM – 07:30 AM", title: "Activity 2", description: "Agricultural Campus, Aushapur" },
      { time: "09:00 AM – 10:00 AM", title: "Chapter-wise Photoshoot", venue: "Rainbow Pillars" },
      { time: "10:00 AM – 01:00 PM", title: "Session 5", venue: "H Block 315 · A Block 329 · B Block Aarambh Auditorium" },
      { time: "01:00 PM – 02:00 PM", title: "Lunch", venue: "D Block Canteen" },
      { time: "02:00 PM – 04:30 PM", title: "Presentation & Evaluation", venue: "D Block Manas Auditorium" },
      { time: "04:30 PM – 06:30 PM", title: "Valedictory", venue: "D Block Manas Auditorium" },
      { time: "06:30 PM", title: "Wrap Up" },
    ],
  },
];

export const domains = [
  {
    id: "arts-culture",
    name: "Arts & Culture",
    emoji: "🎨",
    color: "from-red-500 to-rose-600",
    accent: "text-red-600",
    border: "border-red-200",
    description:
      "Arts & Culture explores the evolution of artistic and cultural systems — understanding their origin, maintenance, and transformation. It encourages participants to develop innovative solutions that preserve cultural identity while embracing responsible change through technology, media, and emerging industries.",
    sdgs: ["SDG 4", "SDG 5", "SDG 8", "SDG 10", "SDG 11", "SDG 13"],
    mentor: {
      name: "Ms. Sampada Pachaury",
      designation: "Director",
      organization: "Anurag Center for Education Innovation (ACEI), Anurag University",
      photo: sampuImg,
    },
  },
  {
    id: "human-behaviour",
    name: "Human Behaviour & Civic Innovation",
    emoji: "🧠",
    color: "from-indigo-500 to-purple-600",
    accent: "text-indigo-600",
    border: "border-indigo-200",
    description:
      "Human Behaviour and Civic Innovation tackles the effects of excessive digital dependence, promoting balanced digital engagement, misinformation resilience, and stronger human connection in an increasingly online world.",
    sdgs: ["SDG 3", "SDG 4", "SDG 10", "SDG 16"],
    mentor: {
      name: "Ms. Mansi Chitgopekar",
      designation: "Psychology Research Enthusiast",
      organization: "Mental Advocate",
      photo: mansiImg,
    },
  },
  {
    id: "blue-economy",
    name: "Blue Economy",
    emoji: "🌊",
    color: "from-cyan-500 to-teal-600",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    description:
      "Blue Economy focuses on the sustainable use of oceans, rivers, and aquatic ecosystems while promoting environmental conservation, economic growth, and community well-being through innovative solutions that protect marine ecosystems.",
    sdgs: ["SDG 8", "SDG 9", "SDG 12", "SDG 13", "SDG 14"],
    mentor: {
      name: "Ms. Ritika Chawla",
      designation: "Climate Education & Sustainability Consultant",
      organization: "",
      photo: rithikaImg,
    },
  },
];

export const chiefGuests = [
  {
    id: "krishna-vedula",
    name: "Dr. Krishna Vedula",
    designation: "Executive Director",
    organization: "IUCEE Foundation",
    role: "Chief Guest",
    photo: krishnaVedulaImg,
  },
  {
    id: "archana-mantri",
    name: "Dr. Archana Mantri",
    designation: "Vice Chancellor",
    organization: "Anurag University",
    role: "Chief Patron",
    photo: archanaMantriImg,
  },
  {
    id: "sampada-pachaury",
    name: "Ms. Sampada Pachaury",
    designation: "Director (ACEI)",
    organization: "Anurag University",
    role: "Chief Guest",
    photo: sampuImg,
  },
];

export const facultyCoordinators = [
  {
    id: "shaik-shaheda",
    name: "Dr. Shaik Shaheda",
    designation: "Faculty Co-ordinator",
    department: "Anurag University",
    photo: `${TEAM_PICS}/shaheda_mam.webp`,
    linkedin: "https://www.linkedin.com/in/shaik-shaheda-808815248",
  },
];

export const advisoryMembers = [
  { id: "sukruth", name: "Sukruth", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/sukruth.webp`, linkedin: "https://www.linkedin.com/in/baikan-sukruth-b4059a327/" },
  { id: "thanugna", name: "Thanughna", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/thanughana.webp`, linkedin: "https://www.linkedin.com/in/thanughna-dhatrika-076699257" },
  { id: "jahnavi", name: "Jahnavi", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/jahnavi.webp`, linkedin: "https://www.linkedin.com/in/jahnavi-dora-481b31287" },
  { id: "vaishnavi", name: "Vaishnavi", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/vaishnavi.webp`, linkedin: "https://www.linkedin.com/in/vaishnavi-tella-b07b30287" },
  { id: "shiva-sai", name: "Shiva Sai", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/shiva.webp`, linkedin: "https://www.linkedin.com/in/shiva-sai-balbari/" },
  { id: "akhil", name: "Akhil", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/akhil.webp`, linkedin: "https://www.linkedin.com/in/akhil-davula-b5109a24a/" },
  { id: "agrati-sheela", name: "Agrati Sheela", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/agrathi.webp`, linkedin: "https://www.linkedin.com/in/agrati-sheela-01b874253" },
  { id: "abhiram-adv", name: "Abhiram", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/abhiram.webp`, linkedin: "https://www.linkedin.com/in/abhiram-banka-aa542b287" },
  { id: "ram-swaroop", name: "Ram Swaroop", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/ram.webp`, linkedin: "https://www.linkedin.com/in/ramswaroop-dara-77a74b258" },
  { id: "pranav", name: "Pranav", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/pranav.webp`, linkedin: "https://www.linkedin.com/in/pranavkothapalli" },
  { id: "uma-sri", name: "Uma Sri", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/uma.webp`, linkedin: "https://www.linkedin.com/in/umasri-kataboina-9a863b2a4/" },
  { id: "ayesha-shaik", name: "Ayesha Shaik", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/ayesha.webp`, linkedin: "https://www.linkedin.com/in/ayesha-shaik-685327287" },
  { id: "anji-reddy", name: "Anji Reddy", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/anji.webp`, linkedin: "https://www.linkedin.com/in/anjireddyboda" },
  { id: "pavan", name: "Pavan", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/pavan.webp`, linkedin: "https://www.linkedin.com/in/pavan1207/" },
  { id: "sri-charan-raj", name: "Sri Charan Raj", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/sri_charan.webp`, linkedin: "https://www.linkedin.com/in/sricharan-divila-9627a534b/" },
  { id: "vyshali", name: "Vyshali", designation: "Advisory Member", department: "AUISC", photo: `${TEAM_PICS}/vyshali.webp` },
];

export const projectManagers = [
  {
    id: "durga-prasad",
    name: "Durga Prasad",
    role: "Project Manager",
    photo: `${TEAM_PICS}/durga.webp`,
    linkedin: "https://www.linkedin.com/in/durgaprasad-arsoju-81255b23a",
  },
  {
    id: "amulya-gandhi",
    name: "Amulya Gandhi",
    role: "Project Manager",
    photo: `${TEAM_PICS}/amulya.webp`,
    linkedin: "https://www.linkedin.com/in/amulya-pagidimarri-091051236",
  },
];

export const leads = [
  { id: "greshmi", name: "Greshmi", role: "Lead", team: "Program Design", photo: `${TEAM_PICS}/greshmi.webp`, linkedin: "http://www.linkedin.com/in/greshmiratna13" },
  { id: "saketh-prog", name: "Saketh", role: "Lead", team: "Program Design", photo: `${TEAM_PICS}/Gsaketh.webp` },
  { id: "saketh-sponsor", name: "Saketh", role: "Lead", team: "Sponsorship", photo: `${TEAM_PICS}/PRsaketh.webp`, linkedin: "https://www.linkedin.com/in/sakethchittaluri" },
  { id: "chethana-reddy", name: "Chethana Reddy", role: "Lead", team: "Registrations & Tech", photo: `${TEAM_PICS}/chetana.webp`, linkedin: "https://www.linkedin.com/in/chethana-pagidala-60b7b32b6/" },
  //{ id: "ashritha", name: "Ashritha", role: "Lead", team: "Sponsorship", photo: `${TEAM_PICS}/Ashritha.webp`, linkedin: "https://www.linkedin.com/in/ashritha-reddy-318040316" },
  { id: "aishwarya", name: "Aishwarya", role: "Lead", team: "Organising", photo: `${TEAM_PICS}/JR_aishwarya.webp`, linkedin: "https://www.linkedin.com/in/kasula-aishwarya-5b5853299" },
  { id: "rishi", name: "Rishi", role: "Lead", team: "Organising", photo: `${TEAM_PICS}/rishi.webp`, linkedin: "https://www.linkedin.com/in/rishi-thatipelly-352006293" },
  { id: "rajith-rao", name: "Rajith Rao", role: "Lead", team: "Hospitality", photo: `${TEAM_PICS}/rajith.webp`, linkedin: "https://www.linkedin.com/in/rajith-rao-muthyala-842a6128b" },
  { id: "yashaswini", name: "Yashaswini", role: "Lead", team: "Hospitality", photo: `${TEAM_PICS}/yashaswini.webp`, linkedin: "https://www.linkedin.com/in/marlapati-yoga-lakshmi-venkata-yashaswini-2a851a2b7" },
  { id: "nakshatra", name: "Nakshatra", role: "Lead", team: "Content Team", photo: `${TEAM_PICS}/nakshatra.webp`, linkedin: "https://www.linkedin.com/in/nakshatra-gariga-ba987727a" },
  { id: "sriya-sushil", name: "Sriya Sushil", role: "Lead", team: "Content Team", photo: `${TEAM_PICS}/sriya.webp`, linkedin: "https://www.linkedin.com/in/sriya-sushil-393408290" },
  { id: "anwesha-sahu", name: "Anwesha Sahu", role: "Lead", team: "Design Team", photo: `${TEAM_PICS}/anwesha.webp`, linkedin: "https://www.linkedin.com/in/anwesha-sahu-104279281/" },
  { id: "harshitha", name: "Harshitha", role: "Lead", team: "Design Team", photo: `${TEAM_PICS}/harshita.webp`, linkedin: "https://www.linkedin.com/in/harshitha-rayudu-92a9662b0/" },
  { id: "abhiram-lead", name: "Abhiram", role: "Lead", team: "Social Media", photo: `${TEAM_PICS}/JR_abhiram.webp`, linkedin: "https://www.linkedin.com/in/abhiram-beemari" },
  { id: "lakshyatha", name: "Lakshyatha", role: "Lead", team: "Social Media", photo: `${TEAM_PICS}/lakshyatha.webp`, linkedin: "https://www.linkedin.com/in/lakshyatha-chamarthy-30480030b/" },
  { id: "dharun", name: "Dharun", role: "Lead", team: "Marketing", photo: `${TEAM_PICS}/dharun.webp`, linkedin: "https://www.linkedin.com/in/dharun-kamisetty-b12ba3266" },
  { id: "sri-varsha", name: "Sri Varsha", role: "Lead", team: "Marketing", photo: `${TEAM_PICS}/Srivarsha.webp`, linkedin: "https://www.linkedin.com/in/srivarsha-bollampalli-5b165a337/" },
  { id: "trisha", name: "Trisha", role: "Lead", team: "Logistics", photo: `${TEAM_PICS}/trisha.webp`, linkedin: "https://www.linkedin.com/in/surakanti-trisha-reddy-48a614363" },
  { id: "sayyad", name: "Sayyad", role: "Lead", team: "Logistics", photo: `${TEAM_PICS}/sayyad.webp`, linkedin: "https://www.linkedin.com/in/sayyadpasha" },
  { id: "vijaya-lakshmi", name: "Vijaya Lakshmi", role: "Lead", team: "Culturals & Crafts", photo: `${TEAM_PICS}/vijaya.webp`, linkedin: "https://www.linkedin.com/in/vijaya-lakshmi" },
  { id: "pradeepa", name: "Pradeepa", role: "Lead", team: "Culturals & Crafts", photo: `${TEAM_PICS}/pradeepa.webp`, linkedin: "https://www.linkedin.com/in/v-pradeepa-7092a327a/" },
  
];
