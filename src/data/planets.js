const planets = [
    {
      no: 1,
      name: "sun",
      hindi_name: "सूर्य",
      symbol: "☀️",
      karak: "Atma, ego, father, authority, govt",
      exalted_in: { sign: "Aries", house: 1, degree: 10 },
      debilitated_in: { sign: "Libra", house: 7, degree: 10 },
      drishti: [{ no: 7, type: 'basic' }],
      relationships: {
        friends: ["Moon", "Mars", "Jupiter"],
        enemies: ["Venus", "Saturn"],
        neutral: ["Mercury"]
      },
      transit: { per_sign_days: 30, full_cycle_days: 365 },
      professions: [
        "Government", "Politics", "Leadership", "Administration", "Medical (surgeons)", "Spiritual authority"
      ],
      color: { 
        favorable: ["Red", "Orange"], 
        unfavorable: ["Black", "Blue"] 
      },
      day: "Sunday"
    },
    {
      no: 2,
      name: "moon",
      hindi_name: "चंद्र",
      symbol: "🌙",
      karak: "Mind, mother, emotions, memory",
      exalted_in: { sign: "Taurus", house: 2, degree: 3 },
      debilitated_in: { sign: "Scorpio", house: 8, degree: 3 },
      drishti: [{ no: 7, type: 'basic' }],
      relationships: {
        friends: ["Sun", "Mercury"],
        enemies: [],
        neutral: ["Mars", "Jupiter", "Venus", "Saturn"]
      },
      transit: { per_sign_days: 2.25, full_cycle_days: 27.3 },
      professions: [
        "Nursing", "Hospitality", "Public service", "Hotel", "Marine professions", "Creative writing", "Psychology"
      ],
      color: { 
        favorable: ["White", "Silver"], 
        unfavorable: ["Dark Red", "Black"] 
      },
      day: "Monday"
    },
    {
      no: 3,
      name: "jupiter",
      hindi_name: "गुरु",
      symbol: "♃",
      karak: "Wisdom, dharma, children, wealth",
      exalted_in: { sign: "Cancer", house: 4, degree: 5 },
      debilitated_in: { sign: "Capricorn", house: 10, degree: 5 },
      drishti: [
        { no: 5, type: 'basic' },
        { no: 7, type: 'basic' },
        { no: 9, type: 'special' }
      ],
      relationships: {
        friends: ["Sun", "Moon", "Mars"],
        enemies: ["Venus", "Mercury"],
        neutral: ["Saturn"]
      },
      transit: { per_sign_days: 365, full_cycle_days: 4380 },
      professions: [
        "Teaching", "Finance", "Law", "Spirituality", "Philosophy", "Counseling"
      ],
      color: { 
        favorable: ["Yellow", "Gold"], 
        unfavorable: ["Black", "Blue"] 
      },
      day: "Thursday"
    },
    {
      no: 4,
      name: "rahu",
      hindi_name: "राहु",
      symbol: "☊",
      karak: "Obsession, illusion, foreign, shortcut",
      exalted_in: { sign: "Taurus", house: 2, degree: 20 },
      debilitated_in: { sign: "Scorpio", house: 8, degree: 20 },
      drishti: [
        { no: 5, type: 'basic' },
        { no: 7, type: 'basic' },
        { no: 9, type: 'basic' }
      ],
      relationships: {
        friends: ["Venus", "Saturn", "Mercury"],
        enemies: ["Sun", "Moon"],
        neutral: ["Mars", "Jupiter"]
      },
      transit: { per_sign_days: 548, full_cycle_days: 6570 },
      professions: [
        "Technology", "Espionage", "Politics", "Mass communication", "Import-export", "Aviation"
      ],
      color: { 
        favorable: ["Smoke Grey", "Electric Blue"], 
        unfavorable: ["Red", "Yellow"] 
      },
      day: "Saturday"
    },
    {
      no: 5,
      name: "mercury",
      hindi_name: "बुध",
      symbol: "☿️",
      karak: "Intelligence, speech, business, logic",
      exalted_in: { sign: "Virgo", house: 6, degree: 15 },
      debilitated_in: { sign: "Pisces", house: 12, degree: 15 },
      drishti: [{ no: 7, type: 'basic' }],
      relationships: {
        friends: ["Sun", "Venus"],
        enemies: ["Moon"],
        neutral: ["Mars", "Jupiter", "Saturn"]
      },
      transit: { per_sign_days: 21, full_cycle_days: 365 },
      professions: [
        "Teaching", "Writing", "Commerce", "Accountancy", "Astrology", "IT/Programming", "Mathematics"
      ],
      color: { 
        favorable: ["Green"], 
        unfavorable: ["Red", "Black"] 
      },
      day: "Wednesday"
    },
    {
      no: 6,
      name: "venus",
      hindi_name: "शुक्र",
      symbol: "♀️",
      karak: "Love, beauty, wife, luxury, art",
      exalted_in: { sign: "Pisces", house: 12, degree: 27 },
      debilitated_in: { sign: "Virgo", house: 6, degree: 27 },
      drishti: [{ no: 7, type: 'basic' }],
      relationships: {
        friends: ["Mercury", "Saturn"],
        enemies: ["Sun", "Moon"],
        neutral: ["Mars", "Jupiter"]
      },
      transit: { per_sign_days: 30, full_cycle_days: 365 },
      professions: [
        "Arts", "Fashion", "Film industry", "Jewelry", "Design", "Interior decoration", "Hospitality"
      ],
      color: { 
        favorable: ["White", "Light Pink"], 
        unfavorable: ["Dark Brown", "Black"] 
      },
      day: "Friday"
    },
    {
      no: 7,
      name: "ketu",
      hindi_name: "केतु",
      symbol: "☋",
      karak: "Detachment, moksha, spirituality, loss",
      exalted_in: { sign: "Scorpio", house: 8, degree: 20 },
      debilitated_in: { sign: "Taurus", house: 2, degree: 20 },
      drishti: [
        { no: 5, type: 'basic' },
        { no: 7, type: 'basic' },
        { no: 9, type: 'basic' }
      ],
      relationships: {
        friends: ["Mars", "Jupiter", "Saturn"],
        enemies: ["Sun", "Moon"],
        neutral: ["Mercury", "Venus"]
      },
      transit: { per_sign_days: 548, full_cycle_days: 6570 },
      professions: [
        "Spiritual teacher", "Mystic", "Monk", "Astrology", "Occult", "Exorcist"
      ],
      color: { 
        favorable: ["Ash", "Brown", "Grey"], 
        unfavorable: ["Red", "Yellow"] 
      },
      day: "Tuesday"
    },
    {
      no: 8,
      name: "saturn",
      hindi_name: "शनि",
      symbol: "♄",
      karak: "Discipline, delay, servant, karmic lessons",
      exalted_in: { sign: "Libra", house: 7, degree: 20 },
      debilitated_in: { sign: "Aries", house: 1, degree: 20 },
      drishti: [
        { no: 3, type: 'basic' },
        { no: 7, type: 'basic' },
        { no: 10, type: 'special' }
      ],
      relationships: {
        friends: ["Venus", "Mercury"],
        enemies: ["Sun", "Moon"],
        neutral: ["Mars", "Jupiter"]
      },
      transit: { per_sign_days: 913, full_cycle_days: 10731 },
      professions: [
        "Engineering", "Mining", "Construction", "Politics", "Social work", "Labor"
      ],
      color: { 
        favorable: ["Black", "Dark Blue", "Navy"], 
        unfavorable: ["White", "Red"] 
      },
      day: "Saturday"
    },
    {
      no: 9,
      name: "mars",
      hindi_name: "मंगल",
      symbol: "♂️",
      karak: "Energy, aggression, siblings, land",
      exalted_in: { sign: "Capricorn", house: 10, degree: 28 },
      debilitated_in: { sign: "Cancer", house: 4, degree: 28 },
      drishti: [
        { no: 4, type: 'basic' },
        { no: 7, type: 'basic' },
        { no: 9, type: 'special' }
      ],
      relationships: {
        friends: ["Sun", "Moon", "Jupiter"],
        enemies: ["Mercury"],
        neutral: ["Venus", "Saturn"]
      },
      transit: { per_sign_days: 45, full_cycle_days: 690 },
      professions: [
        "Military", "Police", "Engineering", "Athletics", "Martial arts", "Surgery", "Construction"
      ],
      color: { 
        favorable: ["Red", "Orange"], 
        unfavorable: ["Black", "White"] 
      },
      day: "Tuesday"
    }
];

export default planets;