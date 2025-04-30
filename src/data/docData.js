import { femaledoc2, MaleDoctor } from "../assets";

export const doctorData = [
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    link: "https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc=",
    specialization: "Gynecologist",
    stars: 4.5,
    reviews: 128,
    location: "New Delhi, India",
    experience: "15 years",
    languages: ["English", "Hindi", "Bengali"],
    education: [
      "MBBS - All India Institute of Medical Sciences",
      "MD (Gynecology) - Post Graduate Institute of Medical Education and Research"
    ],
    about: "Dr. Priya Sharma is a highly experienced gynecologist specializing in women's reproductive health, fertility treatments, and high-risk pregnancies. She has successfully handled over 1000 deliveries and has expertise in minimally invasive surgical procedures.",
    consultationFees: {
      video: 1000,
      audio: 800,
      inPerson: 1500
    },
    bookings: {
      "2024-03-20": ["09:00 AM", "10:00 AM", "02:00 PM"],
      "2024-03-21": ["09:30 AM", "11:00 AM", "03:30 PM"],
      "2024-03-22": ["10:30 AM", "02:30 PM", "04:00 PM"]
    }
  },
  {
    id: "dr-siddhant-singh",
    name: "Dr. Siddhant Singh",
    link: MaleDoctor,
    specialization: "Urologist",
    stars: 5.0,
    reviews: 96,
    location: "Mumbai, India",
    experience: "12 years",
    languages: ["English", "Hindi", "Marathi"],
    education: [
      "MBBS - King Edward Memorial Hospital",
      "MS (Urology) - Tata Memorial Hospital"
    ],
    about: "Dr. Siddhant Singh is a renowned urologist with expertise in male reproductive health, kidney diseases, and urological surgeries. He is known for his patient-centric approach and has pioneered several minimally invasive techniques.",
    consultationFees: {
      video: 1200,
      audio: 900,
      inPerson: 1800
    },
    bookings: {
      "2024-03-20": ["10:30 AM", "11:30 AM", "03:00 PM"],
      "2024-03-21": ["09:00 AM", "02:00 PM", "04:30 PM"],
      "2024-03-22": ["09:30 AM", "11:00 AM", "02:30 PM"]
    }
  },
  {
    id: "dr-kavita-iyer",
    name: "Dr. Kavita Iyer",
    link: femaledoc2,
    specialization: "Endocrinologist",
    stars: 4.0,
    reviews: 84,
    location: "Bangalore, India",
    experience: "10 years",
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    education: [
      "MBBS - St. John's Medical College",
      "DM (Endocrinology) - Christian Medical College"
    ],
    about: "Dr. Kavita Iyer is a skilled endocrinologist focusing on hormonal disorders, diabetes management, and thyroid conditions. She is passionate about preventive healthcare and has published several research papers in international journals.",
    consultationFees: {
      video: 1100,
      audio: 850,
      inPerson: 1600
    },
    bookings: {
      "2024-03-20": ["09:30 AM", "11:00 AM", "02:30 PM"],
      "2024-03-21": ["10:00 AM", "02:00 PM", "03:30 PM"],
      "2024-03-22": ["09:00 AM", "11:30 AM", "04:00 PM"]
    }
  }
];