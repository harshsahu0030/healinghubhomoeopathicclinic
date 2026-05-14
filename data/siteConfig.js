import Doctor01 from "@/public/doctor/doctor-1.webp";
import Doctor02 from "@/public/doctor/doctor-2.webp";
import Doctor03 from "@/public/doctor/doctor-3.webp";
import Doctor04 from "@/public/doctor/doctor-4.webp";
import Doctor06 from "@/public/doctor/doctor-6.webp";
import Doctor07 from "@/public/doctor/doctor-7.webp";
import Doctor08 from "@/public/doctor/doctor-8.webp";
import Doctor09 from "@/public/doctor/doctor-9.webp";
import Doctor10 from "@/public/doctor/doctor-10.webp";

export const siteConfig = {
  name: "HealingHub Multi-Speciality Homoeopathic Clinic",
  desc: "Get safe, personalized homeopathic treatment at HealingHub Multi-Speciality Homoeopathic Clinic — designed for long-term relief without side effects.",
  doctor: "Dr. Mohd Aadil S. Khan",

  contact: {
    code: "+91",
    phone: "7620763094",
    email: "headlinghubhomoeopathicclinic@gmail.com",
    whatsapp: "https://api.whatsapp.com/send/?phone=919768902678",
  },

  hours: "Mon-Sat [11am-3pm] - [6pm - 10pm]  - Pre-Appointment Required",

  googleMap: "https://share.google/vpiFcnUelRgKjcu0c",

  addressInOneline:
    " Aventus Commercial Complex, Shop No. 102, 1st floor, D Wing, Road No. 5/6, Shivaji Nagar, Govandi, Mumbai - 43",

  address: {
    line1: "Aventus Commercial Complex, , Road No. ,",
    line2: "Shop No. 102, 1st floor, D Wing",
    area: "5/6, Shivaji Nagar, Govandi",
    city: " Mumbai ",
    state: "Maharashtra",
    pincode: "400043",
    country: "India",
  },

  social: {
    instagram:
      "https://www.instagram.com/healinghub_homoeopathic_clinic/?igsh=bDEydWZxZzZ6Mmhy#",
    youtube: "https://www.youtube.com/@healinghub_homoeopathic_clinic",
    facebook: "https://www.facebook.com/aadilkhan.aadilkham",
    whatsapp: "https://api.whatsapp.com/send/?phone=919768902678",
  },

  youtubeLinks: [
    "https://www.youtube.com/embed/0QimRdW5YwE?si=uzUH-by6I33_hyf1",
    "https://www.youtube.com/embed/RENtM6QpMlk?si=odo5T2RuGtOnie9e",
    "https://www.youtube.com/embed/bDbcGwVo8N0?si=QeDnQtP3y3lRJqRU",
    "https://www.youtube.com/embed/_WZfj19DmpA?si=WsyW5A_gg2M0f2nR",
  ],

  navLinks: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About Us",
      url: "/about-us",
    },
    {
      label: "Our Treatments",
      url: "/our-treatments",
    },
    {
      label: "Contact Us",
      url: "/contact-us",
    },
    {
      label: "Blog",
      url: "/blog",
    },
  ],

  doctorImages: [
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor01,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor02,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor03,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor04,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor06,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor07,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor08,
    },
    {
      label: "Dr. Mohd Aadil K. Khan",
      url: Doctor09,
    },
    {
      label: "Dr. Mohd Aadil S. Khan",
      url: Doctor10,
    },
  ],

  homeFaqs: [
    {
      question: "What conditions can homeopathy treat?",
      answer:
        "Homeopathy can effectively treat a wide range of acute and chronic conditions including skin problems, allergies, asthma, digestive issues, hair fall, hormonal imbalance, joint pain, and stress-related disorders.",
    },
    {
      question: "Is homeopathy safe?",
      answer:
        "Yes, homeopathy is completely safe. The medicines are natural, gentle, and free from harmful side effects, making them suitable for people of all age groups, including children and elderly patients.",
    },
    {
      question: "How long does homeopathy take to work?",
      answer:
        "The duration depends on the condition. Acute problems may improve quickly, while chronic conditions take more time as the treatment focuses on the root cause for long-term relief.",
    },
    {
      question: "Does homeopathy have any side effects?",
      answer:
        "No, homeopathy does not cause side effects when prescribed correctly. It works by stimulating the body’s natural healing process.",
    },
    {
      question: "Will I need to take homeopathy medicines for a long time?",
      answer:
        "Not necessarily. The goal is to treat the root cause so that your dependency on medicines reduces over time.",
    },
    {
      question: "Can I take homeopathy along with other treatments?",
      answer:
        "Yes, homeopathy can be taken alongside conventional treatments. However, it is always best to consult your doctor for proper guidance.",
    },
    {
      question: "Is homeopathy effective for chronic diseases?",
      answer:
        "Yes, homeopathy is especially known for treating chronic and recurring conditions by addressing the underlying cause rather than just symptoms.",
    },
    {
      question: "Do you provide personalized treatment?",
      answer:
        "Absolutely. Every patient receives a customized treatment plan based on their symptoms, lifestyle, and overall health condition.",
    },
    {
      question: "Where is your clinic located?",
      answer:
        "HealingHub Multi-Speciality Homoeopathic Clinic is located at Aventus Commercial Complex, Govandi, Mumbai.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can easily book your consultation by calling us or using the “Book Your Consultation Now” button on our website.",
    },
  ],

  localBusinessSchema: {
    "@context": "https://schema.org",
    "@type": "Homeopath", // Be specific!
    name: "HealingHub Multi-Speciality Homoeopathic Clinic",

    image:
      "https://content.healinghubhomoeopathicclinic.com/wp-content/uploads/2026/04/logo.png",

    "@id": "https://healinghubhomoeopathicclinic.com",

    url: "https://healinghubhomoeopathicclinic.com",

    telephone: "+91-7620763094", // Your actual number

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "  Aventus Commercial Complex, , Road No. , Shop No. 102, 1st floor, D Win, 5/6, Shivaji Nagar, Govandi",
      addressLocality: "Mumbai", // City
      addressRegion: "Maharashtra", // State
      postalCode: "400043",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.062180133130962, // Get this from Google Maps
      longitude: 72.92237709558039,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00", // 11:00 AM
        closes: "15:00", // 3:00 PM in 24hr format
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00", // 6:00 PM in 24hr format
        closes: "22:00", // 10:00 PM in 24hr format
      },
    ],
  },
};
