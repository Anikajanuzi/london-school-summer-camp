(function () {
  const STORAGE_KEY = "londonSummerCampLanguage";
  const DEFAULT_LANGUAGE = "en";

  const dictionaries = {
    en: {
      "Message / Reservation Request / Alergjies": "Message / Reservation Request / Allergies",
      "Outodoor Activities": "Outdoor Activities",
      "Financal Officer": "Financial Officer",
      "Coding Tranier": "Coding Trainer",
      "Whatsap": "WhatsApp",
      "Email u dÃ«rgua!": "Email sent!",
      "Gabim!": "Error!",
      "Sending…": "Sending…",
      "Sending...": "Sending...",
      "Reservation request sent successfully. We will contact you soon.": "Reservation request sent successfully. We will contact you soon.",
      "Reservation request sent successfully.": "Reservation request sent successfully.",
      "Unable to send the reservation request. Please try again.": "Unable to send the reservation request. Please try again.",
      "Unable to send your reservation request. Please try again or contact us directly.": "Unable to send your reservation request. Please try again or contact us directly.",
      "Email service is not configured. Please check SMTP_USER, SMTP_PASS, SMTP_HOST, and SMTP_PORT.": "Email service is not configured. Please check SMTP_USER, SMTP_PASS, SMTP_HOST, and SMTP_PORT.",
      "Please complete all required fields before sending.": "Please complete all required fields before sending.",
      "Only children from 5 to 12 years old can be accepted.": "Only children from 5 to 12 years old can be accepted."
    },
    sq: {
      "Home": "Ballina",
      "About": "Rreth Nesh",
      "About Us": "Rreth Nesh",
      "Activities": "Aktivitetet",
      "Schedule": "Orari",
      "Gallery": "Galeria",
      "Apply Now": "Apliko Tani",
      "Contact": "Kontakti",
      "Quick Links": "Lidhje të Shpejta",
      "Contact Info": "Informacione Kontakti",
      "Follow Us": "Na Ndiqni",
      "Instagram": "Instagram",
      "London School Website": "Faqja e London School",
      "London Summer Camp": "Kampi Veror London",
      "London School Summer Camp": "Kampi Veror i London School",
      "Creating unforgettable summer experiences for children through learning, adventure, and fun.": "Krijojmë përvoja verore të paharrueshme për fëmijët përmes mësimit, aventurës dhe argëtimit.",
      "Copyright 2026 London Summer Camp. All Rights Reserved.": "E drejta e autorit 2026 Kampi Veror London. Të gjitha të drejtat e rezervuara.",
      "© 2026 London Summer Camp. All Rights Reserved.": "© 2026 Kampi Veror London. Të gjitha të drejtat e rezervuara.",
      "Phone": "Telefoni",
      "Phone: +045 224 876": "Telefoni: +045 224 876",
      "Email": "Email",
      "Email: londonsummercamp@gmail.com": "Email: londonsummercamp@gmail.com",
      "Location": "Lokacioni",
      "London School, Mitrovica": "London School, Mitrovicë",
      "Rruga Mbreteresha Teuta, 40000 Mitrovica": "Rruga Mbretëresha Teutë, 40000 Mitrovicë",
      "Open London School on Google Maps": "Hape London School në Google Maps",
      "Working Hours": "Orari i Punës",
      "Monday-Friday:8:00-20:30": "E hënë-E premte: 8:00-20:30",
      "Saturday:10:00-16:30": "E shtunë: 10:00-16:30",
      "We reply within 24 hours": "Përgjigjemi brenda 24 orëve",
      "Follow us": "Na ndiqni",

      "𝙁𝙐𝙉•𝘼𝘿𝙑𝙀𝙉𝙏𝙐𝙍𝙀•𝙇𝙀𝘼𝙍𝙉": "ARGËTIM•AVENTURË•MËSIM",
      "THE BEST": "MË E MIRA",
      "SUMMER": "VERORE",
      "EXPERIENCE": "PËRVOJË",
      "Fun,learning and adventure": "Argëtim, mësim dhe aventurë",
      "for kids aged 5-12": "për fëmijë të moshës 5-12 vjeç",
      "Watch Video": "Shiko Videon",
      "EXPLORE & ENJOY": "EKSPLORO & KËNAQU",
      "Outdoor Activities": "Aktivitete në Natyrë",
      "Creative Arts": "Arte Kreative",
      "Sports & Games": "Sport dhe Lojëra",
      "Camping": "Kamping",
      "Hiking": "Ecje në natyrë",
      "Field games": "Lojëra në terren",
      "Nature exploration": "Eksplorim i natyrës",
      "Beach activities": "Aktivitete në plazh",
      "Drawing and painting": "Vizatim dhe pikturë",
      "Arts and crafts projects": "Projekte arti dhe punë dore",
      "Music and dance sessions": "Seanca muzike dhe vallëzimi",
      "Drama and storytelling": "Dramë dhe tregim historish",
      "Talent shows": "Shfaqje talentesh",
      "Football": "Futboll",
      "Basketball": "Basketboll",
      "Volleyball": "Volejboll",
      "Running": "Vrapim",
      "Group Games": "Lojëra në Grup",
      "Why Choose Our Camp?": "Pse të Zgjidhni Kampin Tonë?",
      "Achievements": "Arritje",
      "500+ Happy Campers 50+ Activities 8 Years of Experience": "500+ kampistë të lumtur 50+ aktivitete 8 vite përvojë",
      "Our Team": "Ekipi Ynë",
      "Meet our camp staff on the About page": "Njihuni me stafin e kampit në faqen Rreth Nesh",
      "Professional and dedicated staff creating a safe and unforgettable experience for every camper.": "Staf profesional dhe i përkushtuar që krijon një përvojë të sigurt dhe të paharrueshme për çdo kampist.",
      "What's Included": "Çfarë Përfshihet",
      "A fun time , Memories , New friends , knowledge": "Argëtim, kujtime, miq të rinj dhe njohuri",

      "LONDON": "LONDËR",
      "SUMMER CAMP": "KAMPI VEROR",
      "LEARN • EXPLORE • HAVE FUN • MAKE MEMORIES": "MËSO • EKSPLORO • ARGËTOHU • KRIJO KUJTIME",
      "Art & Crafts": "Art dhe Punë Dore",
      "Unleash creativity and express yourself through colors and fun projects": "Çliro kreativitetin dhe shprehu përmes ngjyrave dhe projekteve argëtuese",
      "Chess": "Shah",
      "Improve strategy and focus through chess": "Përmirëso strategjinë dhe përqendrimin përmes shahut",
      "Outodoor Activities": "Aktivitete në Natyrë",
      "Enjoy nature, teamwork and adventure": "Shijo natyrën, punën në ekip dhe aventurën",
      "Yoga": "Joga",
      "Relax your body and mind with calming yoga sessions": "Relakso trupin dhe mendjen me seanca qetësuese joge",
      "Picnic": "Piknik",
      "Enjoy fun outdoor picnics with friends and nature": "Shijo piknikë argëtues në natyrë me miqtë",
      "Sports": "Sport",
      "Stay active, play games, and build team spirit": "Qëndro aktiv, luaj dhe ndërto frymën e ekipit",
      "Karate": "Karate",
      "Build discipline, strength and confidence through karate training": "Ndërto disiplinë, forcë dhe vetëbesim përmes karateve",
      "Climbing": "Ngjitje",
      "Challenge yourself and reach new heights with climbing adventures": "Sfidoni veten dhe arrini lartësi të reja me aventura ngjitjeje",
      "Arrow": "Shigjeta",
      "Test your aim and focus in the exciting arrow shooting game": "Testo shënjestrën dhe përqendrimin në lojën emocionuese me shigjeta",
      "SAFE & SUPPORTED": "TË SIGURT & TË MBËSHTETUR",
      "24/7 SUPERVISION": "MBIKËQYRJE 24/7",
      "AND HAVE FUN!": "DHE ARGËTOHU!",
      "LEARN, GROW": "MËSO, RRITU",
      "MAKE FRIENDS": "BËJ MIQ",
      "This is your summer.": "Kjo është vera jote.",
      "This is your adventure.": "Kjo është aventura jote.",

      "A Place to Learn,": "Një Vend për të Mësuar,",
      "Grow and": "Për t'u Rritur dhe",
      "Have Fun!": "Për t'u Argëtuar!",
      "We create unforgettable summer experiences where children": "Krijojmë përvoja verore të paharrueshme ku fëmijët",
      "learn, explore,and make new friends in a safe and exciting": "mësojnë, eksplorojnë dhe bëjnë miq të rinj në një mjedis të sigurt dhe emocionues",
      "environment. Our camp combines education,sports, creativity,": "Kampi ynë bashkon edukimin, sportin, kreativitetin,",
      "and adventure to help every camper build confidence, teamwork.": "dhe aventurën për të ndihmuar çdo kampist të ndërtojë vetëbesim dhe bashkëpunim.",
      "Quality Education": "Edukimi Cilësor",
      "English courses and creative workshops": "Kurse anglishteje dhe punëtori kreative",
      "english course number one in Mitrovica": "kursi numër një i anglishtes në Mitrovicë",
      "Fun Activities": "Aktivitete Argëtuese",
      "Grow & Learn": "Rritu dhe Mëso",
      "Sports, games and adventures": "Sport, lojëra dhe aventura",
      "New Friends": "Miq të Rinj",
      "Teamwork and social activities": "Punë në ekip dhe aktivitete shoqërore",
      "Green Environment": "Mjedis i Gjelbër",
      "Fresh air and beautiful landscapes": "Ajër i pastër dhe peizazhe të bukura",
      "Safe and Peaceful Location": "Vend i Sigurt dhe i Qetë",
      "We are located in Kosovo Mitrovica,": "Gjendemi në Mitrovicë, Kosovë,",
      "Innature, away from traffic and noise": "në natyrë, larg trafikut dhe zhurmës",
      "WHERE WE ARE": "KU NDODHEMI",
      "Staff": "Stafi",
      "Learn More": "Mëso Më Shumë",
      "Close modal": "Mbyll dritaren",
      "Fun • Games • Adventure • Friends (Ages 5–12)": "Argëtim • Lojëra • Aventurë • Miq (Mosha 5-12)",
      "London Summer Camp is a fun summer program for kids where they play, explore,": "Kampi Veror London është një program veror argëtues për fëmijët ku ata luajnë, eksplorojnë,",
      "and enjoy exciting outdoor adventures with friends.": "dhe shijojnë aventura të bukura në natyrë me miqtë.",
      "🏕️ Camping Fun": "🏕️ Argëtim në Kamping",
      "Kids sleep in safe tents and experience nature adventures.": "Fëmijët flenë në tenda të sigurta dhe përjetojnë aventura në natyrë.",
      "🎯 Games": "🎯 Lojëra",
      "Fun group games that build teamwork and friendships.": "Lojëra argëtuese në grup që ndërtojnë bashkëpunim dhe miqësi.",
      "🎨 Creativity": "🎨 Kreativitet",
      "Drawing, painting, and creative activities every day.": "Vizatim, pikturë dhe aktivitete kreative çdo ditë.",
      "CEO": "Drejtoreshë Ekzekutive",
      "Coding Teacher": "Mësuese e Kodimit",
      "Coding Tranier": "Trajnere e Kodimit",
      "Financial Officer": "Zyrtare Financiare",
      "Financal Officer": "Zyrtare Financiare",
      "School Coordinator": "Koordinatore Shkolle",
      "English Teacher": "Mësuese e Anglishtes",
      "German Teacher": "Mësuese e Gjermanishtes",
      "Manager& German Teacher": "Menaxhere dhe Mësuese e Gjermanishtes",

      "Camp Schedule": "Orari i Kampit",
      "3 week camp program": "Program kampi 3-javor",
      "Three themed weeks, each running from 10:00 AM 2:00 PM (10:00-14:00).": "Tri javë tematike, secila nga ora 10:00 deri në 14:00.",
      "3 weeks": "3 javë",
      "5 days per week": "5 ditë në javë",
      "Camp Hours: 10:00 AM 2:00 PM (10:00-14:00)": "Orari i Kampit: 10:00-14:00",
      "Week 1 Robotics": "Java 1 Robotikë",
      "Week 2 Language & Culture": "Java 2 Gjuhë dhe Kulturë",
      "Week 3 Adventure Makers": "Java 3 Krijues të Aventurës",
      "Day 1": "Dita 1",
      "Day 2": "Dita 2",
      "Day 3": "Dita 3",
      "Day 4": "Dita 4",
      "Day 5": "Dita 5",
      "Welcome & Introduction": "Mirëseardhje dhe Prezantim",
      "Introduction to Robotics": "Hyrje në Robotikë",
      "Robot Components Workshop": "Punëtori për Pjesët e Robotit",
      "Sensors and Motors": "Sensorë dhe Motorë",
      "Build Your First Robot": "Ndërto Robotin tënd të Parë",
      "Robot Movement Activities": "Aktivitete të Lëvizjes së Robotit",
      "Coding Basics": "Bazat e Kodimit",
      "Problem Solving with Robots": "Zgjidhje Problemesh me Robotë",
      "Team Robot Project": "Projekt Robotik në Ekip",
      "Robot Showcase": "Prezantim i Robotëve",
      "Final Robot Project": "Projekti Final i Robotit",
      "Presentation Preparation": "Përgatitje për Prezantim",
      "English Speaking Workshop": "Punëtori e Të Folurit Anglisht",
      "Around the World Languages": "Gjuhë nga e Gjithë Bota",
      "Cultural Activities": "Aktivitete Kulturore",
      "International Traditions": "Tradita Ndërkombëtare",
      "Music & Culture": "Muzikë dhe Kulturë",
      "Cultural Quiz": "Kuiz Kulturor",
      "Creative Storytelling": "Tregim Kreativ",
      "Fun Communication Games": "Lojëra Argëtuese Komunikimi",
      "Culture Fair": "Panair Kulture",
      "Team Presentations": "Prezantime në Ekip",
      "Awards & Recognition": "Çmime dhe Mirënjohje",
      "Welcome Adventure Challenge": "Sfida e Mirëseardhjes",
      "Outdoor Discovery": "Zbulim në Natyrë",
      "Team Building Games": "Lojëra për Ndërtimin e Ekipit",
      "Nature Exploration": "Eksplorim i Natyrës",
      "Obstacle Course Challenge": "Sfidë me Pengesa",
      "Adventure Workshop": "Punëtori Aventurash",
      "Treasure Hunt": "Gjueti Thesari",
      "Nature Skills": "Aftësi në Natyrë",
      "Outdoor Team Games": "Lojëra Ekipore në Natyrë",
      "Grand Adventure Challenge": "Sfida e Madhe e Aventurës",
      "Certificates & Celebration": "Certifikata dhe Festë",
      "Awards Ceremony": "Ceremoni Çmimesh",
      "Team Activities": "Aktivitete Ekipore",
      "Creative Activities": "Aktivitete Kreative",
      "Interactive Games": "Lojëra Interaktive",
      "Mini Challenge": "Sfidë e Vogël",
      "Creative Building": "Ndërtim Kreativ",
      "Problem Solving Challenges": "Sfida për Zgjidhje Problemesh",
      "Team Projects": "Projekte Ekipore",
      "Testing Session": "Seancë Testimi",
      "Science Experiments": "Eksperimente Shkencore",
      "Practical Experiments": "Eksperimente Praktike",
      "Creative Challenges": "Sfida Kreative",
      "Global Explorers Challenge": "Sfida e Eksploruesve Globalë",
      "Leadership Activities": "Aktivitete Lidershipi",
      "Final Team Activities": "Aktivitete Finale Ekipore",
      "Project Completion": "Përfundimi i Projektit",
      "Team Competition": "Gara Ekipore",
      "Celebration Activities": "Aktivitete Festuese",
      "Closing Celebration": "Festa Përmbyllëse",

      "Camp Gallery": "Galeria e Kampit",
      "Close photo preview": "Mbyll pamjen e fotos",
      "Previous photo": "Fotoja e mëparshme",
      "Next photo": "Fotoja tjetër",

      "Reserve a place": "Rezervo një vend",
      "Parents can contact London School administration to reserve a place for their child at London Summer Camp.": "Prindërit mund të kontaktojnë administratën e London School për të rezervuar një vend për fëmijën e tyre në Kampin Veror London.",
      "Administration Contact": "Kontakti i Administratës",
      "Reservation Request": "Kërkesë për Rezervim",
      "Send the parent details, child name, and a short message so the administration team can confirm availability and next steps.": "Dërgoni të dhënat e prindit, emrin e fëmijës dhe një mesazh të shkurtër që ekipi i administratës të konfirmojë vendet dhe hapat e ardhshëm.",
      "Places are limited": "Vendet janë të kufizuara",
      "The administration team will contact parents to confirm the reservation and share payment or preparation details.": "Ekipi i administratës do t'i kontaktojë prindërit për të konfirmuar rezervimin dhe për të ndarë detajet e pagesës ose përgatitjes.",
      "Parent Name": "Emri i Prindit",
      "Name": "Emri",
      "Child Name": "Emri i Fëmijës",
      "Child name": "Emri i fëmijës",
      "Child Age": "Mosha e Fëmijës",
      "Child age": "Mosha e fëmijës",
      "Message / Reservation Request / Alergjies": "Mesazh / Kërkesë Rezervimi / Alergji",
      "Message / Reservation Request / Allergies": "Mesazh / Kërkesë Rezervimi / Alergji",
      "Tell us your child's age...": "Na tregoni moshën e fëmijës...",
      "Send Reservation Request": "Dërgo Kërkesën për Rezervim",
      "Email sent!": "Emaili u dërgua!",
      "Email u dÃ«rgua!": "Emaili u dërgua!",
      "Error!": "Gabim!",
      "Gabim!": "Gabim!",
      "Sending…": "Duke dërguar…",
      "Sending...": "Duke dërguar...",
      "Reservation request sent successfully. We will contact you soon.": "Kërkesa për rezervim u dërgua me sukses. Do t'ju kontaktojmë së shpejti.",
      "Reservation request sent successfully.": "Kërkesa për rezervim u dërgua me sukses.",
      "Unable to send the reservation request. Please try again.": "Kërkesa për rezervim nuk mund të dërgohej. Ju lutemi provoni përsëri.",
      "Unable to send your reservation request. Please try again or contact us directly.": "Kërkesa juaj për rezervim nuk mund të dërgohej. Ju lutemi provoni përsëri ose na kontaktoni direkt.",
      "Email service is not configured. Please check SMTP_USER, SMTP_PASS, SMTP_HOST, and SMTP_PORT.": "Shërbimi i emailit nuk është konfiguruar. Ju lutemi kontrolloni SMTP_USER, SMTP_PASS, SMTP_HOST dhe SMTP_PORT.",
      "Please complete all required fields before sending.": "Ju lutemi plotësoni të gjitha fushat e kërkuara para dërgimit.",
      "Only children from 5 to 12 years old can be accepted.": "Pranohen vetëm fëmijët nga mosha 5 deri në 12 vjeç.",

      "More Than a Summer Program": "Më Shumë se një Program Veror",
      "Learning, adventure, and friendship in one place": "Mësim, aventurë dhe miqësi në një vend",
      "A safe, energetic camp experience where children build confidence, practice English, make friends, and enjoy outdoor adventure with a caring team.": "Një përvojë kampi e sigurt dhe energjike ku fëmijët ndërtojnë vetëbesim, praktikojnë anglishten, bëjnë miq dhe shijojnë aventura në natyrë me një ekip të kujdesshëm.",
      "Meet the Staff": "Njih Stafin",
      "A camp rhythm designed for happy, confident kids": "Një ritëm kampi i krijuar për fëmijë të lumtur dhe me vetëbesim",
      "London Summer Camp combines the structure parents expect with the excitement children remember. Each day balances English learning, creative workshops, sports, teamwork, nature, and time to relax with friends.": "Kampi Veror London bashkon strukturën që prindërit presin me emocionin që fëmijët e kujtojnë. Çdo ditë balancon mësimin e anglishtes, punëtoritë kreative, sportin, punën në ekip, natyrën dhe kohën për t'u çlodhur me miqtë.",
      "The experience": "Përvoja",
      "Structured enough for parents, exciting enough for kids": "E organizuar për prindërit, emocionuese për fëmijët",
      "Campers spend their summer in a warm environment where every activity has a purpose: cooperation, courage, communication, and joy. The program encourages children to try new things while feeling guided and supported.": "Kampistët e kalojnë verën në një mjedis të ngrohtë ku çdo aktivitet ka një qëllim: bashkëpunim, guxim, komunikim dhe gëzim. Programi i inkurajon fëmijët të provojnë gjëra të reja duke u ndier të udhëzuar dhe të mbështetur.",
      "Learning blocks": "Blloqe mësimore",
      "English, creative workshops, and discovery projects keep the day useful without feeling like school.": "Anglishtja, punëtoritë kreative dhe projektet zbuluese e bëjnë ditën të dobishme pa u ndjerë si shkollë.",
      "Active days": "Ditë aktive",
      "Sports, games, nature exploration, and group challenges help children move, laugh, and cooperate.": "Sportet, lojërat, eksplorimi i natyrës dhe sfidat në grup i ndihmojnë fëmijët të lëvizin, të qeshin dhe të bashkëpunojnë.",
      "Trusted staff": "Staf i besuar",
      "Professional, dedicated staff guide children through every part of the camp day.": "Staf profesional dhe i përkushtuar i udhëzon fëmijët gjatë çdo pjese të ditës së kampit.",
      "A day at camp": "Një ditë në kamp",
      "Welcome and warm-up": "Mirëseardhje dhe nxehje",
      "Campers start with group energy, check-ins, and simple activities that help everyone feel included.": "Kampistët e nisin ditën me energji grupi, kontrollime dhe aktivitete të thjeshta që i bëjnë të gjithë të ndihen të përfshirë.",
      "English in action": "Anglishtja në praktikë",
      "Language practice is woven into games, projects, conversations, and daily routines.": "Praktika gjuhësore ndërthuret me lojëra, projekte, biseda dhe rutina ditore.",
      "Outdoor adventure": "Aventurë në natyrë",
      "Sports, beach activities, field games, and nature time keep energy high and teamwork strong.": "Sportet, aktivitetet në plazh, lojërat në terren dhe koha në natyrë e mbajnë energjinë të lartë dhe ekipin të fortë.",
      "Creative confidence": "Vetëbesim kreativ",
      "Art, drama, music, and storytelling give every child a way to express themselves.": "Arti, drama, muzika dhe tregimi i historive i japin çdo fëmije një mënyrë për t'u shprehur.",
      "Reflection and memories": "Reflektim dhe kujtime",
      "The day ends with calm routines, shared wins, and moments campers can carry home.": "Dita mbyllet me rutina të qeta, suksese të përbashkëta dhe momente që kampistët i marrin me vete në shtëpi.",
      "What makes it special": "Çfarë e bën të veçantë",
      "Balanced program": "Program i balancuar",
      "Learning, movement, creativity, and rest are planned together so kids stay engaged.": "Mësimi, lëvizja, kreativiteti dhe pushimi planifikohen së bashku që fëmijët të mbeten të përfshirë.",
      "Memorable setting": "Ambient i paharrueshëm",
      "Activities use inspiring places, fresh air, and group moments that make summer feel special.": "Aktivitetet shfrytëzojnë vende frymëzuese, ajër të pastër dhe momente grupore që e bëjnë verën të veçantë.",
      "Parents can feel confident": "Prindërit mund të ndihen të sigurt",
      "The team focuses on clear routines, age-appropriate activities, supportive supervision, and a friendly atmosphere where each camper feels noticed.": "Ekipi fokusohet në rutina të qarta, aktivitete të përshtatshme për moshën, mbikëqyrje mbështetëse dhe atmosferë miqësore ku çdo kampist ndihet i vlerësuar.",
      "Ready for summer?": "Gati për verën?",
      "Give your child a summer full of learning, courage, and new friends.": "Jepini fëmijës tuaj një verë plot mësim, guxim dhe miq të rinj.",
      "Reserve a place": "Rezervo një vend",
      "Meet our team →": "Njih ekipin tonë →",
      "Meet our team ?": "Njih ekipin tonë →",
      "Age range for young campers": "Grupmosha për kampistët e rinj",
      "Years of summer camp experience": "Vite përvojë në kamp veror",
      "Activities across learning, sport, and creativity": "Aktivitete në mësim, sport dhe kreativitet",
      "Safe, supervised, and thoughtfully planned": "I sigurt, i mbikëqyrur dhe i planifikuar me kujdes",
      "Camp video preview": "Parapamje e videos së kampit",
      "Latest public posts": "Postimet e fundit publike",
      "Public Instagram videos and camp moments": "Video publike nga Instagram dhe momente të kampit",
      "See recent public moments from London Summer Camp. Instagram embeds can take a moment to load depending on browser privacy settings.": "Shihni momentet e fundit publike nga Kampi Veror London. Përfshirjet nga Instagram mund të kërkojnë pak kohë për t'u ngarkuar, varësisht nga cilësimet e privatësisë së shfletuesit.",
      "Open @londonsummercamp": "Hap @londonsummercamp",
      "Open public Instagram feed": "Hap burimin publik të Instagramit",
      "Open video on Instagram": "Hap videon në Instagram",
      "Public Instagram video": "Video publike në Instagram",
      "@londonsummercamp public Instagram video": "Video publike në Instagram nga @londonsummercamp",
      "@londonsummercamp public Instagram feed": "Burim publik në Instagram nga @londonsummercamp",
      "London Summer Camp group activity by the sea": "Aktivitet grupor i Kampit Veror London pranë detit",
      "Learn More | London Summer Camp": "Mëso Më Shumë | Kampi Veror London",

      "Please fill out this field.": "Ju lutemi plotësoni këtë fushë.",
      "Please enter a valid email address.": "Ju lutemi shkruani një adresë të vlefshme emaili."
    }
  };

  const translatableAttributes = ["placeholder", "aria-label", "title", "alt", "value"];
  const skipSelector = "script, style, .language-switcher";
  const originalTextNodes = new WeakMap();
  const originalTitle = document.title;
  let currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
  let isApplying = false;

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function translateValue(value, language = currentLanguage) {
    const normalized = normalize(value);
    if (!normalized) return value;
    return dictionaries[language]?.[normalized] || value;
  }

  function translateTextNode(node, language) {
    if (!node.nodeValue || !normalize(node.nodeValue)) return;
    if (node.parentElement?.closest(skipSelector)) return;

    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }

    const original = originalTextNodes.get(node);
    const translated = translateValue(original, language);
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + normalize(translated) + trailing;
  }

  function translateAttributes(element, language) {
    if (element.closest(skipSelector)) return;

    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const key = `data-i18n-original-${attribute}`;
      if (!element.hasAttribute(key)) {
        element.setAttribute(key, element.getAttribute(attribute));
      }
      element.setAttribute(attribute, translateValue(element.getAttribute(key), language));
    });
  }

  function applyLanguage(language) {
    currentLanguage = language;
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "sq" ? "sq" : "en";
    isApplying = true;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => translateTextNode(node, language));

    document.querySelectorAll("*").forEach((element) => translateAttributes(element, language));
    document.title = translateValue(originalTitle, language);

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    isApplying = false;
  }

  function createLanguageSwitcher() {
    const nav = document.getElementById("Makarone");
    if (!nav || nav.querySelector(".language-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = `
      <button type="button" class="language-option" data-language="en" aria-pressed="false">English</button>
      <button type="button" class="language-option" data-language="sq" aria-pressed="false">Albanian</button>
    `;
    nav.appendChild(switcher);

    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("[data-language]");
      if (!button) return;
      applyLanguage(button.dataset.language);
    });
  }

  function setupValidationMessages() {
    document.addEventListener("invalid", (event) => {
      const field = event.target;
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) return;

      field.setCustomValidity("");
      if (currentLanguage !== "sq") return;

      if (field.validity.valueMissing) {
        field.setCustomValidity(dictionaries.sq["Please fill out this field."]);
      } else if (field.validity.typeMismatch && field.type === "email") {
        field.setCustomValidity(dictionaries.sq["Please enter a valid email address."]);
      }
    }, true);

    document.addEventListener("input", (event) => {
      if (event.target?.setCustomValidity) {
        event.target.setCustomValidity("");
      }
    });
  }

  function observeDynamicText() {
    const observer = new MutationObserver((mutations) => {
      if (isApplying) return;
      const needsUpdate = mutations.some((mutation) => mutation.addedNodes.length);
      if (needsUpdate) applyLanguage(currentLanguage);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  const nativeAlert = window.alert.bind(window);
  window.alert = (message) => nativeAlert(translateValue(message, currentLanguage));

  window.siteI18n = {
    applyLanguage,
    getLanguage: () => currentLanguage,
    t: translateValue
  };

  document.addEventListener("DOMContentLoaded", () => {
    createLanguageSwitcher();
    setupValidationMessages();
    applyLanguage(currentLanguage);
  });
})();
