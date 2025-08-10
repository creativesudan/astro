import React, { forwardRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink} from "react-router-dom";
import Home from './screens/home';

const zodiacs = [
  {
    no: 1,
    rashi_hindi: 'मेष',
    name_english: 'Aries',
    element: 'Fire',
    nature: 'Movable (चर)',
    symbol: '♈',
    gender: 'Male',
    direction: 'East',
    color: 'Red',
    body_part: 'Head',
    animal: 'Ram',
    nakshatras: ['Ashwini', 'Bharani', 'Krittika (1st Pada)'],
    exaltation: { planet: 'Sun', degree: 10 },
    debilitation: { planet: 'Saturn', degree: 20 },
    mooltrikon: { planet: 'Mars', range: '0°-12°' },
    lord: 'Mars (मंगल)',
    traits: 'Bold, energetic, action-oriented',
    friends: { planets: ['Sun', 'Moon', 'Jupiter'], zodiacs: ['Cancer', 'Leo', 'Sagittarius'] },
    enemies: { planets: ['Mercury'], zodiacs: ['Gemini'] },
    neutrals: { planets: ['Saturn', 'Venus'], zodiacs: ['Capricorn', 'Taurus'] }
  },
  {
    no: 2,
    rashi_hindi: 'वृषभ',
    name_english: 'Taurus',
    element: 'Earth',
    nature: 'Fixed (स्थिर)',
    symbol: '♉',
    gender: 'Female',
    direction: 'South',
    color: 'White',
    body_part: 'Face',
    animal: 'Bull',
    nakshatras: ['Krittika (2nd-4th Padas)', 'Rohini', 'Mrigashira (1st-2nd Padas)'],
    exaltation: { planet: 'Moon', degree: 3 },
    debilitation: { planet: 'Ketu', degree: 0 },
    mooltrikon: { planet: 'Venus', range: '0°-15°' },
    lord: 'Venus (शुक्र)',
    traits: 'Practical, grounded, reliable',
    friends: { planets: ['Saturn', 'Mercury'], zodiacs: ['Virgo', 'Capricorn'] },
    enemies: { planets: ['Sun', 'Moon'], zodiacs: ['Leo', 'Cancer'] },
    neutrals: { planets: ['Jupiter', 'Mars'], zodiacs: ['Aries', 'Pisces'] }
  },
  {
    no: 3,
    rashi_hindi: 'मिथुन',
    name_english: 'Gemini',
    element: 'Air',
    nature: 'Dual (द्विस्वभाव)',
    symbol: '♊',
    gender: 'Male',
    direction: 'West',
    color: 'Green',
    body_part: 'Shoulders',
    animal: 'Parrot',
    nakshatras: ['Mrigashira (3rd-4th Padas)', 'Ardra', 'Punarvasu (1st-3rd Padas)'],
    exaltation: { planet: 'Rahu', degree: 20 },
    debilitation: { planet: 'Ketu', degree: 20 },
    mooltrikon: { planet: 'None', range: null },
    lord: 'Mercury (बुध)',
    traits: 'Intelligent, communicative, versatile',
    friends: { planets: ['Venus', 'Saturn'], zodiacs: ['Libra', 'Aquarius'] },
    enemies: { planets: ['Moon'], zodiacs: ['Cancer'] },
    neutrals: { planets: ['Jupiter', 'Mars'], zodiacs: ['Pisces', 'Aries'] }
  },
  {
    no: 4,
    rashi_hindi: 'कर्क',
    name_english: 'Cancer',
    element: 'Water',
    nature: 'Movable (चर)',
    symbol: '♋',
    gender: 'Female',
    direction: 'North',
    color: 'Silver',
    body_part: 'Chest',
    animal: 'Crab',
    nakshatras: ['Punarvasu (4th Pada)', 'Pushya', 'Ashlesha'],
    exaltation: { planet: 'Jupiter', degree: 5 },
    debilitation: { planet: 'Mars', degree: 28 },
    mooltrikon: { planet: 'Moon', range: '0°-10°' },
    lord: 'Moon (चंद्र)',
    traits: 'Emotional, nurturing, sensitive',
    friends: { planets: ['Sun', 'Mars', 'Jupiter'], zodiacs: ['Leo', 'Aries', 'Sagittarius'] },
    enemies: { planets: ['Venus', 'Mercury'], zodiacs: ['Gemini', 'Libra'] },
    neutrals: { planets: ['Saturn'], zodiacs: ['Capricorn'] }
  },
  {
    no: 5,
    rashi_hindi: 'सिंह',
    name_english: 'Leo',
    element: 'Fire',
    nature: 'Fixed (स्थिर)',
    symbol: '♌',
    gender: 'Male',
    direction: 'East',
    color: 'Orange',
    body_part: 'Heart',
    animal: 'Lion',
    nakshatras: ['Magha', 'Purva Phalguni', 'Uttara Phalguni (1st Pada)'],
    exaltation: { planet: 'None', degree: null },
    debilitation: { planet: 'None', degree: null },
    mooltrikon: { planet: 'Sun', range: '0°-20°' },
    lord: 'Sun (सूर्य)',
    traits: 'Leadership, confident, authoritative',
    friends: { planets: ['Moon', 'Mars', 'Jupiter'], zodiacs: ['Cancer', 'Aries', 'Sagittarius'] },
    enemies: { planets: ['Venus', 'Saturn'], zodiacs: ['Libra', 'Capricorn'] },
    neutrals: { planets: ['Mercury'], zodiacs: ['Gemini'] }
  },
  {
    no: 6,
    rashi_hindi: 'कन्या',
    name_english: 'Virgo',
    element: 'Earth',
    nature: 'Dual (द्वि भाव)',
    symbol: '♍',
    gender: 'Female',
    direction: 'South',
    color: 'Green',
    body_part: 'Abdomen',
    animal: 'Virgin',
    nakshatras: ['Uttara Phalguni (2nd–4th Pada)', 'Hasta', 'Chitra (1st–2nd Pada)'],
    exaltation: { planet: 'Mercury', degree: 15 },
    debilitation: { planet: 'Venus', degree: 27 },
    mooltrikon: { planet: 'Mercury', range: '16°-20°' },
    lord: 'Mercury (बुध)',
    traits: 'Analytical, practical, perfectionist',
    friends: { planets: ['Sun', 'Mercury'], zodiacs: ['Taurus', 'Capricorn'] },
    enemies: { planets: ['Moon'], zodiacs: ['Cancer'] },
    neutrals: { planets: ['Mars', 'Jupiter', 'Venus', 'Saturn'], zodiacs: ['Leo', 'Pisces'] }
  },
  {
    no: 7,
    rashi_hindi: 'तुला',
    name_english: 'Libra',
    element: 'Air',
    nature: 'Movable (चर)',
    symbol: '♎',
    gender: 'Male',
    direction: 'West',
    color: 'Blue',
    body_part: 'Lower back',
    animal: 'Scales',
    nakshatras: ['Chitra (3rd–4th Pada)', 'Swati', 'Vishakha (1st–3rd Pada)'],
    exaltation: { planet: 'Saturn', degree: 20 },
    debilitation: { planet: 'Sun', degree: 10 },
    mooltrikon: { planet: 'Venus', range: '0°–15°' },
    lord: 'Venus (शुक्र)',
    traits: 'Diplomatic, artistic, balanced',
    friends: { planets: ['Saturn', 'Mercury'], zodiacs: ['Gemini', 'Aquarius'] },
    enemies: { planets: ['Sun', 'Moon'], zodiacs: ['Cancer', 'Leo'] },
    neutrals: { planets: ['Mars', 'Jupiter'], zodiacs: ['Aries', 'Pisces'] }
  },
  {
    no: 8,
    rashi_hindi: 'वृश्चिक',
    name_english: 'Scorpio',
    element: 'Water',
    nature: 'Fixed (स्थिर)',
    symbol: '♏',
    gender: 'Female',
    direction: 'North',
    color: 'Red',
    body_part: 'Genitals',
    animal: 'Scorpion',
    nakshatras: ['Vishakha (4th Pada)', 'Anuradha', 'Jyeshtha'],
    exaltation: { planet: 'None', degree: null },
    debilitation: { planet: 'Moon', degree: 3 },
    mooltrikon: { planet: 'Mars', range: '0°–7°' },
    lord: 'Mars (मंगल)',
    traits: 'Intense, secretive, passionate',
    friends: { planets: ['Jupiter', 'Sun', 'Moon'], zodiacs: ['Cancer', 'Pisces'] },
    enemies: { planets: ['Mercury', 'Venus'], zodiacs: ['Gemini', 'Libra'] },
    neutrals: { planets: ['Saturn'], zodiacs: ['Capricorn', 'Aquarius'] }
  },
  {
    no: 9,
    rashi_hindi: 'धनु',
    name_english: 'Sagittarius',
    element: 'Fire',
    nature: 'Dual (द्विस्वभाव)',
    symbol: '♐',
    gender: 'Male',
    direction: 'East',
    color: 'Yellow',
    body_part: 'Thighs',
    animal: 'Horse',
    nakshatras: ['Mula', 'Purva Ashadha', 'Uttara Ashadha (1st Pada)'],
    exaltation: { planet: 'Ketu', degree: 0 },
    debilitation: { planet: 'Rahu', degree: 0 },
    mooltrikon: { planet: 'Jupiter', range: '0°–10°' },
    lord: 'Jupiter (गुरु)',
    traits: 'Optimistic, adventurous, philosophical',
    friends: { planets: ['Sun', 'Moon', 'Mars'], zodiacs: ['Aries', 'Leo'] },
    enemies: { planets: ['Venus', 'Mercury'], zodiacs: ['Taurus', 'Gemini', 'Virgo'] },
    neutrals: { planets: ['Saturn'], zodiacs: ['Capricorn', 'Aquarius'] }
  },
  {
    no: 10,
    rashi_hindi: 'मकर',
    name_english: 'Capricorn',
    element: 'Earth',
    nature: 'Movable (चर)',
    symbol: '♑',
    gender: 'Female',
    direction: 'South',
    color: 'Black',
    body_part: 'Knees',
    animal: 'Crocodile',
    nakshatras: ['Uttara Ashadha (2nd to 4th Pada)', 'Shravana', 'Dhanishta (1st & 2nd Pada)'],
    exaltation: { planet: 'Mars', degree: 28 },
    debilitation: { planet: 'Jupiter', degree: 5 },
    mooltrikon: { planet: 'None', range: '' },
    lord: 'Saturn (शनि)',
    traits: 'Disciplined, practical, responsible',
    friends: { planets: ['Mercury', 'Venus'], zodiacs: ['Taurus', 'Virgo'] },
    enemies: { planets: ['Sun', 'Moon'], zodiacs: ['Cancer', 'Leo'] },
    neutrals: { planets: ['Mars', 'Jupiter'], zodiacs: ['Aries', 'Sagittarius'] }
  },
  {
    no: 11,
    rashi_hindi: 'कुंभ',
    name_english: 'Aquarius',
    element: 'Air',
    nature: 'Fixed (स्थिर)',
    symbol: '♒',
    gender: 'Male',
    direction: 'West',
    color: 'Blue',
    body_part: 'Ankles',
    animal: 'Man carrying pitcher',
    nakshatras: ['Dhanishta (3rd & 4th Pada)', 'Shatabhisha', 'Purva Bhadrapada (1st to 3rd Pada)'],
    exaltation: { planet: 'None', degree: 0 },
    debilitation: { planet: 'None', degree: 0 },
    mooltrikon: { planet: 'None', range: '' },
    lord: 'Saturn (शनि)',
    traits: 'Innovative, humanitarian, intellectual',
    friends: { planets: ['Mercury', 'Venus'], zodiacs: ['Libra', 'Gemini'] },
    enemies: { planets: ['Sun', 'Moon'], zodiacs: ['Cancer', 'Leo'] },
    neutrals: { planets: ['Mars', 'Jupiter'], zodiacs: ['Aries', 'Sagittarius'] }
  },
  {
    no: 12,
    rashi_hindi: 'मीन',
    name_english: 'Pisces',
    element: 'Water',
    nature: 'Dual (द्विस्वभाव)',
    symbol: '♓',
    gender: 'Female',
    direction: 'North',
    color: 'Sea green',
    body_part: 'Feet',
    animal: 'Fish',
    nakshatras: ['Purva Bhadrapada (4th Pada)', 'Uttara Bhadrapada', 'Revati'],
    exaltation: { planet: 'Venus', degree: 27 },
    debilitation: { planet: 'Mercury', degree: 15 },
    mooltrikon: { planet: 'None', range: '' },
    lord: 'Jupiter (गुरु)',
    traits: 'Compassionate, imaginative, spiritual',
    friends: { planets: ['Moon', 'Mars'], zodiacs: ['Cancer', 'Scorpio'] },
    enemies: { planets: ['Mercury', 'Venus'], zodiacs: ['Virgo', 'Libra'] },
    neutrals: { planets: ['Sun', 'Saturn'], zodiacs: ['Leo', 'Capricorn'] }
  }
];


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

const houses = [
  {
    no: 1,
    theme: "Lagna (Self, Body, Personality)",
    problems: [
      {planet: "Sun", effect: "Ego issues, arrogance"},
      {planet: "Saturn", effect: "Laziness, delayed growth, depression"},
      {planet: "Rahu", effect: "False ego, illusions, mental unrest"},
      {planet: "Ketu", effect: "Identity crisis, confusion, detachment"}
    ],
    benefits: [
      {planet: "Sun", effect: "Strong self-confidence, leadership"},
      {planet: "Moon", effect: "Emotional balance, charisma"},
      {planet: "Jupiter", effect: "Wisdom, optimism, good health"},
      {planet: "Mars", effect: "Physical energy, courage"}
    ]
  },
  {
    no: 2,
    theme: "Wealth, Speech, Family",
    problems: [
      {planet: "Rahu", effect: "Speech issues, family disturbance"},
      {planet: "Saturn", effect: "Delayed wealth, harsh speech"},
      {planet: "Mars", effect: "Aggressive speech, Mangal Dosh"},
      {planet: "Ketu", effect: "Financial instability, detachment from family"}
    ],
    benefits: [
      {planet: "Jupiter", effect: "Wealth accumulation, sweet speech"},
      {planet: "Venus", effect: "Good food, family happiness"},
      {planet: "Mercury", effect: "Sharp speech, communication skills"}
    ]
  },
  {
    no: 3,
    theme: "Courage, Siblings, Communication",
    problems: [
      {planet: "Rahu", effect: "Risky behavior, overconfidence"},
      {planet: "Ketu", effect: "Lack of motivation, sibling issues"},
      {planet: "Saturn", effect: "Fearfulness, suppression in expression"}
    ],
    benefits: [
      {planet: "Mars", effect: "Boldness, courage"},
      {planet: "Mercury", effect: "Strong communication, intelligence"},
      {planet: "Sun", effect: "Initiative, influence over siblings"}
    ]
  },
  {
    no: 4,
    theme: "Mother, Home, Emotions",
    problems: [
      {planet: "Rahu", effect: "Problems with mother, disturbed home life"},
      {planet: "Ketu", effect: "Detached from mother/emotions"},
      {planet: "Saturn", effect: "Cold emotional environment"},
      {planet: "Mars", effect: "Fire risks, anger in home"}
    ],
    benefits: [
      {planet: "Moon", effect: "Emotional comfort, motherly support"},
      {planet: "Venus", effect: "Luxurious home, comfort"},
      {planet: "Jupiter", effect: "Family harmony, spiritual growth at home"}
    ]
  },
  {
    no: 5,
    theme: "Children, Love, Creativity",
    problems: [
      {planet: "Rahu", effect: "Childbirth issues, negative love life"},
      {planet: "Ketu", effect: "Block in creativity, detachment"},
      {planet: "Saturn", effect: "Delay in children, stress"},
      {planet: "Sun", effect: "Ego clashes in romance"}
    ],
    benefits: [
      {planet: "Jupiter", effect: "Healthy children, good education"},
      {planet: "Sun", effect: "Leadership in creative fields"},
      {planet: "Venus", effect: "Romantic success, artistic talent"}
    ]
  },
  {
    no: 6,
    theme: "Enemies, Debts, Diseases",
    problems: [
      {planet: "Rahu", effect: "Hidden enemies, legal problems"},
      {planet: "Saturn", effect: "Chronic illnesses"},
      {planet: "Ketu", effect: "Mysterious diseases"}
    ],
    benefits: [
      {planet: "Mars", effect: "Victory over enemies, strong will"},
      {planet: "Saturn", effect: "Discipline in health and service"},
      {planet: "Mercury", effect: "Problem-solving mindset"}
    ]
  },
  {
    no: 7,
    theme: "Marriage, Partnerships",
    problems: [
      {planet: "Rahu", effect: "Marriage instability, foreign partner"},
      {planet: "Ketu", effect: "Detachment from partner"},
      {planet: "Mars", effect: "Conflict, Mangal Dosh"},
      {planet: "Saturn", effect: "Late or cold marriage"},
      {planet: "Sun", effect: "Ego clashes in relationship"}
    ],
    benefits: [
      {planet: "Venus", effect: "Happy marriage, harmony in relationships"},
      {planet: "Jupiter", effect: "Supportive spouse, wisdom in partnerships"},
      {planet: "Mercury", effect: "Effective communication with partner"}
    ]
  },
  {
    no: 8,
    theme: "Sudden Events, Inheritance, Occult",
    problems: [
      {planet: "Sun", effect: "Father-related problems"},
      {planet: "Moon", effect: "Emotional instability"},
      {planet: "Rahu", effect: "Accidents, risky behavior"},
      {planet: "Ketu", effect: "Sudden losses, detachment"},
      {planet: "Mars", effect: "Violent tendencies"}
    ],
    benefits: [
      {planet: "Ketu", effect: "Spiritual insights, detachment"},
      {planet: "Mars", effect: "Courage to face challenges"},
      {planet: "Jupiter", effect: "Good inheritance, occult wisdom"}
    ]
  },
  {
    no: 9,
    theme: "Luck, Dharma, Father",
    problems: [
      {planet: "Rahu", effect: "Loss of belief, misguided faith"},
      {planet: "Ketu", effect: "Disinterest in religion"},
      {planet: "Saturn", effect: "Lack of faith, educational delays"},
      {planet: "Mars", effect: "Father/guru conflicts"}
    ],
    benefits: [
      {planet: "Jupiter", effect: "Strong dharma, good fortune"},
      {planet: "Sun", effect: "Support from father, self-respect"},
      {planet: "Mars", effect: "Energy in spiritual pursuits"}
    ]
  },
  {
    no: 10,
    theme: "Career, Reputation, Karma",
    problems: [
      {planet: "Rahu", effect: "Unstable career"},
      {planet: "Saturn", effect: "Delayed success, overwork"},
      {planet: "Ketu", effect: "Career confusion"},
      {planet: "Sun", effect: "Issues with authority"}
    ],
    benefits: [
      {planet: "Sun", effect: "Fame, authority"},
      {planet: "Mars", effect: "Drive for success, leadership"},
      {planet: "Saturn", effect: "Persistence, long-term success"},
      {planet: "Mercury", effect: "Skilled in work, communication at workplace"}
    ]
  },
  {
    no: 11,
    theme: "Gains, Friends, Desires",
    problems: [
      {planet: "Rahu", effect: "Bad company, overambition"},
      {planet: "Ketu", effect: "Detachment from success"},
      {planet: "Saturn", effect: "Delayed gains"},
      {planet: "Sun", effect: "Ego in social circle"}
    ],
    benefits: [
      {planet: "Jupiter", effect: "Massive gains, good networks"},
      {planet: "Saturn", effect: "Steady and realistic gains"},
      {planet: "Mercury", effect: "Friendly nature, business success"}
    ]
  },
  {
    no: 12,
    theme: "Losses, Foreign, Moksha",
    problems: [
      {planet: "Sun", effect: "Loss of father's support"},
      {planet: "Moon", effect: "Sleep/mental issues"},
      {planet: "Venus", effect: "Secret relationships, indulgence"},
      {planet: "Rahu", effect: "Addictions, exile"},
      {planet: "Saturn", effect: "Loneliness, isolation"}
    ],
    benefits: [
      {planet: "Ketu", effect: "Spiritual liberation"},
      {planet: "Saturn", effect: "Discipline in isolation or foreign work"},
      {planet: "Venus", effect: "Artistic success abroad, enjoyment of solitude"}
    ]
  }
]

const doshas = [
  {
    name: "Grahan Dosh",
    causedBy: "Sun or Moon conjunct with Rahu/Ketu",
    effects: "Mental stress, obstacles, lack of clarity"
  },
  {
    name: "Kaal Sarp Dosh",
    causedBy: "All 7 planets placed between Rahu and Ketu",
    effects: "Delays, sudden ups/downs, struggles"
  },
  {
    name: "Pitru Dosh",
    causedBy: "Sun/Saturn in 9th or affliction of 9th house",
    effects: "Issues due to ancestral karma, family problems"
  },
  {
    name: "Manglik Dosh",
    causedBy: "Mars in 1st, 4th, 7th, 8th, or 12th house",
    effects: "Delay or problems in marriage"
  },
  {
    name: "Chandal Dosh",
    causedBy: "Jupiter (Guru) with Rahu/Ketu",
    effects: "Confusion in beliefs, spiritual distortions"
  },
  {
    name: "Shrapit Dosh",
    causedBy: "Saturn with Rahu/Ketu or Saturn aspects Rahu",
    effects: "Suffering due to past-life karma"
  },
  {
    name: "Kemadruma Dosh",
    causedBy: "No planet on either side of the Moon",
    effects: "Emotional loneliness, instability"
  },
  {
    name: "Daridra Dosh",
    causedBy: "Malefics in 6th/8th/12th and weak 2nd/11th house",
    effects: "Financial instability"
  },
  {
    name: "Visha Dosh",
    causedBy: "Saturn & Moon in conjunction",
    effects: "Depression, emotional burden"
  },
  {
    name: "Guru-Astabhaav Dosh",
    causedBy: "Jupiter in 6th, 8th or 12th or retrograde",
    effects: "Delayed success, lack of wisdom support"
  }
];

const rajyogas = [
  {
    name: "Gajakesari Yoga",
    planets: "Moon & Jupiter in Kendra from each other",
    benefits: "Wisdom, fame, wealth"
  },
  {
    name: "Budha-Aditya Yoga",
    planets: "Sun + Mercury in same house",
    benefits: "Intelligence, eloquence, success"
  },
  {
    name: "Dharma-Karmadhipati Yoga",
    planets: "Lord of 9th + 10th house conjunct",
    benefits: "Great career & spiritual success"
  },
  {
    name: "Raja Yoga",
    planets: "Lords of Kendra & Trikon in conjunction or mutual aspect",
    benefits: "Authority, political or administrative power"
  },
  {
    name: "Vipreet Raj Yoga",
    planets: "Lords of 6th/8th/12th placed in one of these houses",
    benefits: "Success after struggle or setbacks"
  },
  {
    name: "Chandra-Mangal Yoga",
    planets: "Moon + Mars",
    benefits: "Strong financial instincts, good money management"
  },
  {
    name: "Neech Bhanga Rajyog",
    planets: "Debilitated planet gets cancellation",
    benefits: "Strength after initial weakness"
  },
  {
    name: "Adhi Yoga",
    planets: "Benefics in 6th, 7th, 8th from Moon",
    benefits: "Strong leadership, prosperity"
  },
  {
    name: "Maha Bhagya Yoga",
    planets: "Sun, Moon, Lagna in odd signs (male) or even (female)",
    benefits: "Highly fortunate life"
  },
  {
    name: "Lakshmi Yoga",
    planets: "Strong Lagna + Strong Venus + Strong 9th/5th",
    benefits: "Wealth, luxury, name & fame"
  }
];

const benefics = [3, 6, 5, 2];
const malefics = [1, 9, 8, 4, 7];

const specialConjunctions = [
  {
    name: "Gajakesari Yoga",
    type: "Positive",
    planets: [2, 3],
    description: "Occurs when Jupiter is in a kendra (1st, 4th, 7th, or 10th house) from the Moon. It grants intelligence, wealth, and fame."
  },
  {
    name: "Guru-Chandala Yoga",
    type: "Negative",
    planets: [3, 4, 7],
    description: "Occurs when Jupiter is conjunct with Rahu or Ketu. It can cause moral confusion, fake gurus, or spiritual imbalance."
  },
  {
    name: "Budha-Aditya Yoga",
    type: "Positive",
    planets: [1, 5],
    description: "Happens when Sun and Mercury are in conjunction. It brings intelligence, communication skills, and success in writing or teaching."
  },
  {
    name: "Chandra-Mangal Yoga",
    type: "Positive",
    planets: [2, 9],
    description: "Formed by conjunction or mutual aspect of Moon and Mars. It brings financial success and entrepreneurial skill."
  },
  {
    name: "Shakata Yoga",
    type: "Negative",
    planets: [2, 3],
    description: "Occurs when Jupiter is in the 6th, 8th, or 12th house from the Moon. It causes ups and downs in fortune."
  },
  {
    name: "Daridra Yoga",
    type: "Negative",
    conditions: "Lord of 11th in 6th, 8th, or 12th house",
    description: "Indicates poverty, struggles, or financial instability in life."
  },
  {
    name: "Raj Yoga",
    type: "Positive",
    conditions: "Combination of lords of Kendra and Trikona houses",
    description: "One of the most powerful yogas, brings leadership, power, and fame."
  },
  {
    name: "Neecha Bhanga Raja Yoga",
    type: "Positive",
    conditions: "Cancellation of debilitation of a planet",
    description: "Transforms the weakness of a debilitated planet into a strong source of strength and success."
  },
  {
    name: "Kemadruma Yoga",
    type: "Negative",
    conditions: "No planet on either side of the Moon",
    description: "Causes mental stress, loneliness, and lack of support in life."
  },
  {
    name: "Vasi Yoga",
    type: "Positive",
    conditions: "Planets (except Moon) in 12th house from Sun",
    description: "Gives wealth, fame, and good character."
  }
]


// ------------- planet placements at the time of birth



{/*==
const kundli = {
  house_1: {
    rashi: 4
  },
  house_2: {
    rashi: 5
  },
  house_3: {
    rashi: 6
  },
  house_4: {
    rashi: 7
  },
  house_5: {
    rashi: 8
  },
  house_6: {
    rashi: 9,
    planets: [
      {
        no: 4,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  },
  house_7: {
    rashi: 10,
    planets: [
      {
        no: 3,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  },
  house_8: {
    rashi: 11,
    planets: [
      {
        no: 9,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  },
  house_9: {
    rashi: 12
  },
  house_10: {
    rashi: 1,
    planets: [
      {
        no: 2,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  },
  house_11: {
    rashi: 2,
    planets: [
      {
        no: 6,
        degree: "25o48'56",
        vakri: false,
        vargottam: false,
        ast: false
      },
      {
        no: 1,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      },
      {
        no: 5,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      },
      {
        no: 8,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  },
  house_12: {
    rashi: 3,
    planets: [
      {
        no: 7,
        degree: "25o48'56",
        vakri: true,
        vargottam: false,
        ast: false
      }
    ]
  }
};
*/}




const kundli = {
  house_1: {
    rashi: 1,
    planets: [
      {
        no: 4,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
  },
  house_2: {
    rashi: 2,
    planets: [
      {
        no: 2,
        vakri: true,
        vargottam: false,
        ast: false,
      },
      {
        no: 6,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
  },
  house_3: {
    rashi: 3,
  },
  house_4: {
    rashi: 4,
  },
  house_5: {
    rashi: 5,
    planets: [
      {
        no: 8,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
  },
  house_6: {
    rashi: 6,
    planets: [{
        no: 3,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
   
  },
  house_7: {
    rashi: 7,
    planets: [
      {
        no: 7,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
  },
  house_8: {
    rashi: 8,
  },
  house_9: {
    rashi: 9,
  },
  house_10: {
    rashi: 10,
  },
  house_11: {
    rashi: 11,
  },
  house_12: {
    rashi: 12, 
    planets: [
      {
        no: 1,
        vakri: true,
        vargottam: false,
        ast: false,
      },{
        no: 9,
        vakri: true,
        vargottam: false,
        ast: false,
      },{
        no: 5,
        vakri: true,
        vargottam: false,
        ast: false,
      }
    ]
  }
};







const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/kundli')
      .then(res => res.json())
      .then(json => {
        console.log('Fetched Data:', json);
        setData(json);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }, []);

  return (
    <div>
      <h2>Astrology Chart</h2>
      {data ? (
        <div>
          {Object.entries(data).map(([house, info]) => (
            <div key={house}>
              <h3>{house.toUpperCase()} ➤ Rashi {info.rashi}</h3>
              {info.planets?.length > 0 ? (
                <ul>
                  {info.planets.map((planet, i) => (
                    <li key={i}>
                      Planet No. {planet.no}
                      {planet.vakri ? ' (Vakri)' : ''}
                      {planet.vargottam ? ', Vargottam' : ''}
                      {planet.ast ? ', Ast' : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No planets</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};






const ZodiacsTable = ({ zodiacs }) => {
  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Rashi (Hindi/English)</th>
          {/* <th>Symbol</th> */}
          <th>Element</th>
          <th>Nature</th>
          <th>Gender</th>
          <th>Direction</th>
          <th>Color</th>
          <th>Body Part</th>
          <th>Animal</th>
          <th>Nakshatras</th>
          <th>Exaltation</th>
          <th>Debilitation</th>
          <th>Mooltrikon</th>
          <th>Lord</th>
          <th>Traits</th>
          <th>Friends (Planets)</th>
          <th>Enemies (Planets)</th>
          <th>Neutrals (Planets)</th>
          <th>Friends (Zodiacs)</th>
          <th>Enemies (Zodiacs)</th>
          <th>Neutrals (Zodiacs)</th>
        </tr>
      </thead>
      <tbody>
        {zodiacs.map(z => (
          <tr key={z.no}>
            <td>{z.no}</td>
            <td>{z.rashi_hindi} ({z.name_english})</td>
            {/* <td>{z.symbol}</td> */}
            <td>{z.element}</td>
            <td>{z.nature}</td>
            <td>{z.gender}</td>
            <td>{z.direction}</td>
            <td>{z.color}</td>
            <td>{z.body_part}</td>
            <td>{z.animal}</td>
            <td>{z.nakshatras.join(', ')}</td>
            <td>{z.exaltation.planet} ({z.exaltation.degree}°)</td>
            <td>{z.debilitation.planet} ({z.debilitation.degree}°)</td>
            <td>{z.mooltrikon.planet} ({z.mooltrikon.range})</td>
            <td>{z.lord}</td>
            <td>{z.traits}</td>
            <td>{z.friends.planets.join(', ')}</td>
            <td>{z.enemies.planets.join(', ')}</td>
            <td>{z.neutrals.planets.join(', ')}</td>
            <td>{z.friends.zodiacs.join(', ')}</td>
            <td>{z.enemies.zodiacs.join(', ')}</td>
            <td>{z.neutrals.zodiacs.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const PlanetsTable = ({ planets }) => {
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      {/* <th>Symbol</th> */}
      <th>Karak</th>
      <th>Exalted In</th>
      <th>Debilitated In</th>
      <th>Drishti</th>
      <th>Friends</th>
      <th>Enemies</th>
      <th>Neutral</th>
      <th>Professions</th>
      <th>Favorable Colors</th>
      <th>Unfavorable Colors</th>
      <th>Day</th>
    </tr>
  </thead>
  <tbody>
    {planets.map((planet) => (
      <tr key={planet.no}>
        <td>{planet.no}</td>
        <td>{planet.hindi_name} ({planet.name})</td>
        {/* <td>{planet.symbol}</td> */}
        <td>{planet.karak}</td>
        <td>{planet.exalted_in.sign} (House {planet.exalted_in.house}, {planet.exalted_in.degree}°)</td>
        <td>{planet.debilitated_in.sign} (House {planet.debilitated_in.house}, {planet.debilitated_in.degree}°)</td>
        <td>
          {planet.drishti.map((d, i) => (
            <div key={i}>
              House {d.no} ({d.type})
            </div>
          ))}
        </td>
        <td>{planet.relationships.friends.join(', ')}</td>
        <td>{planet.relationships.enemies.join(', ')}</td>
        <td>{planet.relationships.neutral.join(', ')}</td>
        <td>{planet.professions.join(', ')}</td>
        <td>{planet.color.favorable.join(', ')}</td>
        <td>{planet.color.unfavorable.join(', ')}</td>
        <td>{planet.day}</td>
      </tr>
    ))}
  </tbody>
    </table>
  );
};


const HousesTable = ({ houses }) => {
  return (
    <>
      {houses.map((house, index) => (
        <table key={index} border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginBottom: '40px', borderCollapse: 'collapse' }}>
          <caption style={{ fontWeight: 'bold', fontSize: '18px', padding: '10px' }}>
            House {house.no}: {house.theme}
          </caption>
          <thead>
            <tr style={{ backgroundColor: '#ffe6e6' }}>
              <th colSpan="2"  style={{ backgroundColor: '#ffe6e6' }}>Problems</th>
            </tr>
            <tr>
              <th>Planet</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            {house.problems.map((item, idx) => (
              <tr key={'p' + idx}>
                <td>{item.planet}</td>
                <td>{item.effect}</td>
              </tr>
            ))}
            <tr style={{ backgroundColor: '#e6ffe6' }}>
              <th colSpan="2" style={{ backgroundColor: '#e6ffe6' }}>Benefits</th>
            </tr>
            <tr>
              <th>Planet</th>
              <th>Effect</th>
            </tr>
            {house.benefits.map((item, idx) => (
              <tr key={'b' + idx}>
                <td>{item.planet}</td>
                <td>{item.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
}


const D1_chart = ({kundliData}) => {

  // Small reusable component for each house
  const House = ({ index }) => (
    <div className="inner">
      <div className="data">
        <div className="rashi">{kundliData?.houses?.[index]?.rashi}</div>
        <span className="planets">
        {kundliData?.houses?.[index]?.planets?.map((e, i, arr) => {
          const planetName = (planets.find((p) => p.no === e.no)?.name || e.name).slice(0, 3);
          return (
            <React.Fragment key={i}>
            <span className="planet-name">
              {planetName}
              {e.vakri ? "*" : ""}
            </span>
              <span className="planet-degree">
                {Math.floor(e?.degInSign)}
              </span>
              {i < arr.length - 1 ? ", " : ""}
            </React.Fragment>
          );
        })}

        </span>
        <div className="house_num">{kundliData?.houses?.[index]?.house}</div>
      </div>
    </div>
  );

  return (
    <div className="kundli">
      <div className="headerHouses">
        <div className="topLeft corner_house">
          <a href="#0" className="topHouse houses"><House index={1} /></a>
          <a href="#0" className="leftHouse houses"><House index={2} /></a>
        </div>

        <div className="topRight corner_house">
          <a href="#0" className="rightHouse houses"><House index={10} /></a>
          <a href="#0" className="topHouse houses"><House index={11} /></a>
        </div>
      </div>

      <div className="center_houses">
        <a href="#0" className="center_4 houses"><House index={0} /></a>
        <a href="#0" className="center_4 houses"><House index={9} /></a>
        <a href="#0" className="center_4 houses"><House index={3} /></a>
        <a href="#0" className="center_4 houses"><House index={6} /></a>
      </div>

      <div className="footerHouses">
        <div className="bottomLeft corner_house">
          <a href="#0" className="bottomHouse houses"><House index={5} /></a>
          <a href="#0" className="leftHouse houses"><House index={4} /></a>
        </div>

        <div className="bottomRight corner_house">
          <a href="#0" className="rightHouse houses"><House index={8} /></a>
          <a href="#0" className="bottomHouse houses"><House index={7} /></a>
        </div>
      </div>
    </div>
  );
};



const manglikHouses = ['house_1', 'house_4', 'house_7', 'house_8', 'house_12'];


const isManglik = manglikHouses.some(houseKey => {
  const house = kundli[houseKey];
  return house?.planets?.some(planet => planet.no === 9); // no: 3 = Mangal
});

function getRashiByPlanetNo(kundli, planetNo) {
  for (const { rashi, planets } of Object.values(kundli)) {
    if (planets?.some((p) => p.no === planetNo)) {
      return rashi;
    }
  }
  return null; // if not found
}

function getZodiacNameByRashiNo(rashi, zodiacs) {
  const match = zodiacs.find((z) => z.no === rashi);
  return match ? match.rashi_hindi : 'Not Found';
}


function getPlanetaryAspects(kundli, planetsData) {
  const aspects = [];

  // Create a quick lookup for house numbers by planet number
  const planetPositions = {};

  for (const [houseKey, house] of Object.entries(kundli)) {
    if (!house.planets) continue;
    const houseNum = parseInt(houseKey.split("_")[1]);

    for (const planet of house.planets) {
      planetPositions[planet.no] = houseNum;
    }
  }

  for (const planet of planetsData) {
    const fromHouse = planetPositions[planet.no];
    if (!fromHouse) continue; // skip if planet not in kundli

    for (const aspect of planet.drishti) {
      const aspectHouse = (fromHouse + aspect.no - 1) % 12 || 12;

      aspects.push({
        planet_no: planet.no,
        planet_name: planet.name,
        house_from: fromHouse,
        house_aspected: aspectHouse,
        type: aspect.type
      });
    }
  }

  return aspects;
}


function hasGrahanDosh(kundli) {
  const grahanPlanets = [4, 7]; // Moon or Rahu

  for (const [houseNumber, houseData] of Object.entries(kundli)) {
    const planetList = houseData.planets || [];
    const planetNos = planetList.map(p => p.no);

    if (planetNos.includes(1) && grahanPlanets.some(p => planetNos.includes(p))) {
      return {
        result: true,
        house: houseNumber,
        planets: planetNos
      };
    }
  }

  return {
    result: false,
    house: null,
    planets: []
  };
}

function hasChandalDosh(kundli) {
  const chandalPlanets = [4, 7]; // Moon or Rahu

  for (const [houseNumber, houseData] of Object.entries(kundli)) {
    const planetList = houseData.planets || [];
    const planetNos = planetList.map(p => p.no);

    if (planetNos.includes(3) && chandalPlanets.some(p => planetNos.includes(p))) {
      return {
        result: true,
        house: houseNumber,
        planets: planetNos
      };
    }
  }

  return {
    result: false,
    house: null,
    planets: []
  };
}

function hasVishDosh(kundli) {
  const affectPlanets = [8]; // Moon or Rahu

  for (const [houseNumber, houseData] of Object.entries(kundli)) {
    const planetList = houseData.planets || [];
    const planetNos = planetList.map(p => p.no);

    if (planetNos.includes(2) && affectPlanets.some(p => planetNos.includes(p))) {
      return {
        result: true,
        house: houseNumber,
        planets: planetNos
      };
    }
  }

  return {
    result: false,
    house: null,
    planets: []
  };
}

function hasKaalsarpDosh(kundli) {
  const rahuHouse = getPlanetHouse(kundli, 4); // Rahu = no: 4
  const ketuHouse = getPlanetHouse(kundli, 7); // Ketu = no: 7

  if (!rahuHouse || !ketuHouse) {
    return { result: false };
  }

  const rahuPos = parseInt(rahuHouse.split("_")[1]);
  const ketuPos = parseInt(ketuHouse.split("_")[1]);

  let betweenHouses = [];
  let i = rahuPos;
  while (i !== ketuPos) {
    i = (i % 12) + 1;
    if (i !== ketuPos) betweenHouses.push(`house_${i}`);
  }

  const mainPlanetNos = [1, 2, 3, 5, 6, 8, 9];

  let planetHouses = new Set();
  for (const houseKey in kundli) {
    const house = kundli[houseKey];
    if (!house.planets) continue;
    for (const planet of house.planets) {
      if (mainPlanetNos.includes(planet.no)) {
        planetHouses.add(houseKey);
      }
    }
  }

  const planetHouseArray = Array.from(planetHouses);
  const allInBetween = planetHouseArray.every(h => betweenHouses.includes(h));

  if (allInBetween) {
    if (planetHouseArray.length === 7) {
      return {
        result: true,
        type: "Full",
        description: "All 7 planets placed between Rahu and Ketu",
        impact: "Delays, sudden ups/downs, struggles"
      };
    } else {
      return {
        result: true,
        type: "Partial",
        description: `${planetHouseArray.length} planets placed between Rahu and Ketu`,
        impact: "Partial impact of Kaal Sarp Yoga"
      };
    }
  }

  return { result: false };
}


function getPlanetHouse(kundli, planetNo) {
  for (const houseKey in kundli) {
    const house = kundli[houseKey];
    if (!house.planets) continue;
    for (const planet of house.planets) {
      if (planet.no === planetNo) {
        return houseKey;
      }
    }
  }
  return null;
}

function hasBudhaAdityaYoga(kundli) {
  const affectPlanets = [1]; // Moon or Rahu

  for (const [houseNumber, houseData] of Object.entries(kundli)) {
    const planetList = houseData.planets || [];
    const planetNos = planetList.map(p => p.no);

    if (planetNos.includes(5) && affectPlanets.some(p => planetNos.includes(p))) {
      return {
        result: true,
        house: houseNumber,
        planets: planetNos
      };
    }
  }

  return {
    result: false,
    house: null,
    planets: []
  };
}

function hasChandraMangalYoga(kundli) {
  const affectPlanets = [2]; // Moon or Rahu

  for (const [houseNumber, houseData] of Object.entries(kundli)) {
    const planetList = houseData.planets || [];
    const planetNos = planetList.map(p => p.no);

    if (planetNos.includes(9) && affectPlanets.some(p => planetNos.includes(p))) {
      return {
        result: true,
        house: houseNumber,
        planets: planetNos
      };
    }
  }

  return {
    result: false,
    house: null,
    planets: []
  };
}

function hasGajakesariYoga(kundli) {
  let moonHouse = null;
  let jupiterHouse = null;

  for (let i = 1; i <= 12; i++) {
    const houseKey = `house_${i}`;
    const house = kundli[houseKey];
    if (!house?.planets) continue;

    for (const planet of house.planets) {
      if (planet.no === 2) moonHouse = i;
      if (planet.no === 3) jupiterHouse = i;
    }
  }

  if (moonHouse !== null && jupiterHouse !== null) {
    const diff = Math.abs(moonHouse - jupiterHouse) % 12;
    const isKendra = [0, 3, 6, 9].includes(diff);

    return {
      result: isKendra,
      moonHouse,
      jupiterHouse,
      message: isKendra
        ? "✅ Gajakesari Yoga: Moon & Jupiter are in Kendra from each other"
        : "❌ Gajakesari Yoga not formed: Moon & Jupiter are not in Kendra from each other"
    };
  }

  return {
    result: false,
    moonHouse,
    jupiterHouse,
    message: "❌ Either Moon or Jupiter is missing in the kundli"
  };
}

function hasVipreetRajYoga(kundli) {
  const vipreetHouses = [6, 8, 12];

  // Step 1: Get lords of 6th, 8th, and 12th houses
  const lords = vipreetHouses.map(houseNo => {
    const house = kundli[`house_${houseNo}`];
    if (!house || !house.rashi) return null;
    const rashiData = zodiacs.find(z => z.no === house.rashi);
    return rashiData?.lord || null;
  }).filter(Boolean);

  if (!lords.length) {
    return { result: false, reason: "❌ Lords of 6th/8th/12th not found." };
  }

  // Step 2: Check placement of these lords in 6th, 8th, or 12th house
  let hasYoga = false;
  let triggeringPlanets = [];

  for (const houseNo of vipreetHouses) {
    const house = kundli[`house_${houseNo}`];
    if (!house || !house.planets) continue;

    for (const planet of house.planets) {
      if (lords.includes(planet.no)) {
        hasYoga = true;
        triggeringPlanets.push({ house: houseNo, planet_no: planet.no });
      }
    }
  }

  if (hasYoga) {
    return {
      result: true,
      reason: "✅ Vipreet Raj Yoga formed",
      triggering: triggeringPlanets
    };
  }

  return {
    result: false,
    reason: "❌ Lords of 6/8/12 not placed in these houses"
  };
}



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const fetchNatalChartInfo = async (payload) => {
  try {
    const response = await fetch('https://json.freeastrologyapi.com/natal-chart-info', {
      method: 'POST',
      headers: {
        'x-api-key': 'qWgM7NLL1e64CGRhGFdB28wAUlKJdUXK8yGHcssx',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching natal chart info:', error);
    return null;
  }
};
















// Rashi lordship
const rashiLords = {
  1: 3,  // Aries - Mars
  2: 6,  // Taurus - Venus
  3: 4,  // Gemini - Mercury
  4: 2,  // Cancer - Moon
  5: 1,  // Leo - Sun
  6: 4,  // Virgo - Mercury
  7: 6,  // Libra - Venus
  8: 3,  // Scorpio - Mars
  9: 5,  // Sagittarius - Jupiter
  10: 7, // Capricorn - Saturn
  11: 7, // Aquarius - Saturn
  12: 5  // Pisces - Jupiter
};

// Rashi names
const getRashiName = (no) => {
  const rashis = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  return rashis[no - 1];
};

// Find planet by number
const getPlanetByNo = (no) => planets.find(p => p.no === no);

// Classify planet position
function getPlanetStrengthLabel(planet, houseNumber, rashiNumber) {
  const planetData = getPlanetByNo(planet.no);
  if (!planetData) return "Unknown";

  const rashiName = getRashiName(rashiNumber);

  const isExalted =
    planetData.exalted_in?.house === houseNumber ||
    planetData.exalted_in?.sign === rashiName;

  const isDebilitated =
    planetData.debilitated_in?.house === houseNumber ||
    planetData.debilitated_in?.sign === rashiName;

  const isOwnSign = rashiLords[rashiNumber] === planet.no;

  if (isExalted) return "🟢 Uchch (Exalted)";
  if (isDebilitated) return "🔴 Neech (Debilitated)";
  if (isOwnSign) return "🔵 Swagrahi (Own Sign)";
  return "⚪ Normal";
}

function getPlanetEffect(planet, houseNumber, rashiNumber) {
  const planetData = getPlanetByNo(planet.no);
  if (!planetData) return "Unknown";

  const rashiName = getRashiName(rashiNumber);

  const isExalted =
    planetData.exalted_in?.house === houseNumber ||
    planetData.exalted_in?.sign === rashiName;

  const isDebilitated =
    planetData.debilitated_in?.house === houseNumber ||
    planetData.debilitated_in?.sign === rashiName;

  const isOwnSign = rashiLords[rashiNumber] === planet.no;

  // Dummy logic for drishti effect (you can enhance this based on your real drishti rules)
  const hasDrishtiSupport = planetData.drishti?.length > 0;

  // Final classification
  if (isExalted) return "Positive";
  if (isDebilitated && !hasDrishtiSupport) return "Negative";
  if (isDebilitated && hasDrishtiSupport) return "Neutral";
  if (isOwnSign) return "Positive";
  return "Neutral";
}



const PlanetStrengthTable = () => {
  const rows = [];

  for (let houseKey in kundli) {
    const houseNo = parseInt(houseKey.split("_")[1]);
    const houseData = kundli[houseKey];
    const rashiNo = houseData.rashi;

    if (houseData.planets) {
      houseData.planets.forEach((planet) => {
        const planetData = getPlanetByNo(planet.no);
        if (!planetData) return;

        const label = getPlanetStrengthLabel(planet, houseNo, rashiNo);
        const effect = getPlanetEffect(planet, houseNo, rashiNo);

        rows.push({
          planet: planetData.name,
          house: houseNo,
          rashi: getRashiName(rashiNo),
          strength: label,
          effect: effect,
        });
      });
    }
  }

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Planet</th>
          <th>House No</th>
          <th>Rashi</th>
          <th>Strength</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.planet}</td>
            <td>{row.house}</td>
            <td>{row.rashi}</td>
            <td>{row.strength}</td>
            <td>{row.effect}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};





function App() {

  const planetNo = 2;
  const rashi = getRashiByPlanetNo(kundli, planetNo);
  const aspects = getPlanetaryAspects(kundli, planets);
  
  const grahanDosh = hasGrahanDosh(kundli);
  const chandalDosh = hasChandalDosh(kundli);
  const vishDosh = hasVishDosh(kundli);
  const kaalsarpDosh = hasKaalsarpDosh(kundli);

  const budhaAdityaYoga = hasBudhaAdityaYoga(kundli);
  const chandraMangalYoga = hasChandraMangalYoga(kundli);
  const gajakesariYoga = hasGajakesariYoga(kundli);
  const vipreetRajYoga = hasVipreetRajYoga(kundli);

  const [value, setValue] = React.useState(0);


  const [formData, setFormData] = useState({
    day: "23",
    month: "9",
    year: "1993",
    hourIST: "17",
    minute: "2",
    lat: 28.6139,
    lon: 77.2090
  });

  const [kundliData, setKundli] = useState({});

  // input change handler
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // submit handler
  const handleSubmit = () => {
    fetch("http://localhost:8000/api/kundli", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year: parseInt(formData.year),
        month: parseInt(formData.month),
        day: parseInt(formData.day),
        hourIST: parseInt(formData.hourIST),
        minute: parseInt(formData.minute),
        lat: parseFloat(formData.lat),
        lon: parseFloat(formData.lon)
      })
    })
      .then((res) => res.json())
      .then((json) => setKundli(json))
      .catch((err) => console.error("Fetch error:", err));
  };



  const pages = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  // ForwardRef wrapper for react-router-dom Link
  const LinkRouter = forwardRef(function LinkRouter(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });

  return (
  <>



    <div className='chart'>

      <div>
        <D1_chart kundliData={kundliData}/>
   
        <div style={{marginTop:20, paddingLeft:60, flex:1}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Date"
                size="small"
                value={formData.day}
                onChange={handleChange("day")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Month"
                size="small"
                value={formData.month}
                onChange={handleChange("month")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Year"
                size="small"
                value={formData.year}
                onChange={handleChange("year")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="HH"
                size="small"
                value={formData.hourIST}
                onChange={handleChange("hourIST")}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="MM"
                size="small"
                value={formData.minute}
                onChange={handleChange("minute")}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>


      <div style={{flex:1, paddingTop:20}}>

        <PlanetStrengthTable/>
        <Box sx={{bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Basic Details" {...a11yProps(0)} />
            <Tab label="Dosha" {...a11yProps(1)} />
            <Tab label="Yogas" {...a11yProps(2)} />
            <Tab label="Drishti" {...a11yProps(3)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <div>
            <table style={{width:'100%'}}>
              <thead>
                <tr>
                  <th>Rashi:</th>
                  <th>Name:</th>
                  <th>House:</th>
                  <th>effect:</th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(kundli).map(([houseKey, houseValue], houseIndex) =>
                  (houseValue.planets || []).map((planet, pIndex) => {
                    const rashiNo = Number(houseValue.rashi);

                    // Find full planet data from planets array using 'no'
                    const fullPlanetData = planets.find(p => p.no === planet.no);

                    // Get zodiac data (if needed)
                    const zodiac = zodiacs?.find(z => z.no === rashiNo);

                    const displayPlanetName = fullPlanetData?.name || `Planet ${planet.no}`;
                    const PlanetHiName = fullPlanetData?.hindi_name || `Planet ${planet.no}`;

                    // Determine uccha/neech using house number
                    const uccha = fullPlanetData?.exalted_in?.house === rashiNo;
                    const neech = fullPlanetData?.debilitated_in?.house === rashiNo;

                    return (
                      <>
                        <tr>
                          <td>
                            {zodiac?.name_english} - 
                            <b> ({zodiac?.rashi_hindi})</b>
                          </td>
                          <td>
                            {displayPlanetName.substring(0,3)} -
                            <b> ({PlanetHiName})</b>
                          </td>
                          <td>
                            {houseIndex + 1}
                          </td>
                          <td>
                            {uccha && (
                                <img
                                  src="assets/icons/up.png"
                                  className="icon small"
                                  alt="Uccha"
                                />
                              )}
                              {neech && (
                                <img
                                  src="assets/icons/down.png"
                                  className="icon down"
                                  alt="Neech"
                                />
                              )}
                          </td>
                        </tr>
                      
                      {/* 
                      <div className="list" key={`${houseKey}-${planet.no}-${pIndex}`}>
                        <div className="items">
                          <span className="key">Name:</span>{' '}
                          <b>
                          {displayPlanetName.substring(0,3).toUpperCase()} 
                            <small>({planet.degree})</small>
                          </b>
                        </div>

                        <div className="items">
                          <span className="key">Type:</span> <b>Normal</b>
                        </div>

                        <div className="items">
                          <span className="key">Rashi:</span>{' '}
                          <b>{zodiac?.name_english} ({zodiac?.rashi_hindi})</b>
                        </div>

                        <div className="items">
                          <span className="key">House:</span> <b>{houseIndex + 1}</b>
                        </div>

                        {planet.vakri && (
                          <div className="items">
                            <span className="key">Vakri:</span> <b>✔</b>
                          </div>
                        )}

                        {planet.vargottam && (
                          <div className="items">
                            <span className="key">Vargottam:</span> <b>✔</b>
                          </div>
                        )}

                        {planet.ast && (
                          <div className="items">
                            <span className="key">Ast:</span> <b>✔</b>
                          </div>
                        )}

                        {(uccha || neech) && (
                          <div className="items">
                            <span className="key">Hold:</span>{' '}
                            <b>
                              {uccha && (
                                <img
                                  src="assets/icons/up.png"
                                  className="icon"
                                  alt="Uccha"
                                />
                              )}
                              {neech && (
                                <img
                                  src="assets/icons/down.png"
                                  className="icon down"
                                  alt="Neech"
                                />
                              )}
                            </b>
                          </div>
                        )}
                      </div>
                      */}
                      
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
            <div className="planet_grids">
              <div className="list">
                <div class="items"><span class="key">Moon Rashi:</span> <b>{getZodiacNameByRashiNo(rashi, zodiacs)}</b></div>
              </div>

              <div className="list">
                <div class="items"><span class="key">Lagna Rashi:</span> <b>{getZodiacNameByRashiNo(kundli.house_1.rashi, zodiacs)}</b></div>
              </div>
            </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Dosh</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {isManglik && 
                <tr>
                  <td>Manglik</td>
                  <td>
                    <b>Delay or problems in marriage</b>
                    <div>Mars in 1st, 4th, 7th, 8th, or 12th house</div>
                  </td>
                </tr>
                }
                {grahanDosh.result &&
                  <tr>
                    <td>Grahan Dosh</td>
                    <td>
                      <b>Mental stress, obstacles, lack of clarity</b>
                      <div>Sun or Moon conjunct with Rahu/Ketu</div>
                    </td>
                  </tr>
                }
                {chandalDosh.result &&
                  <tr>
                    <td>Guru Chandal Dosh</td>
                    <td>
                      <b>Confusion in beliefs, spiritual distortions</b>
                      <div>Jupiter is conjunct with Rahu/Ketu</div>
                    </td>
                  </tr>
                }
                {vishDosh.result &&
                  <tr>
                    <td>Visha Dosh</td>
                    <td>
                      <b>Depression, emotional burden</b>
                      <div>Saturn & Moon in conjunction</div>
                    </td>
                  </tr>
                }
                {kaalsarpDosh.result &&
                  <tr>
                    <td>Kaal Sarp Dosh</td>
                    <td>
                      <b>Delays, sudden ups/downs, struggles</b>
                      <div>All 7 planets placed between Rahu and Ketu</div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Yogas</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {budhaAdityaYoga.result &&
                  <tr>
                    <td>Budha-Aditya Yoga</td>
                    <td>
                      <b>Intelligence, eloquence, success</b>
                      <div>Sun + Mercury in same house</div>
                    </td>
                  </tr>
                }

                  {chandraMangalYoga.result &&
                  <tr>
                    <td>Chandra-Mangal Yoga</td>
                    <td>
                      <b>Strong financial instincts, good money management</b>
                      <div>Moon + Mars in same house</div>
                    </td>
                  </tr>
                }

              {gajakesariYoga.result &&
                  <tr>
                    <td>Gajakesari Yoga</td>
                    <td>
                      <b>Wisdom, fame, wealth</b>
                      <div>Moon & Jupiter in Kendra from each other</div>
                    </td>
                  </tr>
                }
                
                {vipreetRajYoga.result &&
                  <tr>
                    <td>Vipreet Raj Yoga</td>
                    <td>
                      <b>Success after struggle or setbacks</b>
                      <div>Lords of 6th/8th/12th placed in one of these houses</div>
                    </td>
                  </tr>
                }


              </tbody>
            </table>
            </div>
          </TabPanel>

          <TabPanel value={value} index={3}>      
          <div>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Planet No</th>
                  <th>Planet Name</th>
                  <th>From House</th>
                  <th>Aspected House</th>
                  <th>Type</th>
                  <th>Planets in Aspected House</th>
                </tr>
              </thead>
              <tbody>
                {aspects.map((item, index) => {
                  const aspectedHouseKey = `house_${item.house_aspected}`;
                  const planetsInAspectedHouse = kundli[aspectedHouseKey]?.planets || [];

                  const planetNamesInAspectedHouse = planetsInAspectedHouse
                    .map(p => {
                      const found = planets.find(pl => pl.no === p.no);
                      return found?.name || `#${p.no}`;
                    })
                    .join(", ") || "—";

                  const currentPlanet = planets.find(p => p.no === item.planet_no);
                  const currentPlanetName = currentPlanet?.name || `#${item.planet_no}`;

                  return (
                    <tr key={index}>
                      <td>{item.planet_no}</td>
                      <td>{currentPlanetName}</td>
                      <td>{item.house_from}</td>
                      <td>{item.house_aspected}</td>
                      <td>{item.type}</td>
                      <td>{planetNamesInAspectedHouse}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </TabPanel>



        </Box>
      </div>

    </div>

    <YourComponent/>
    <div className='container'>
      <fieldset>
        <legend><h2>Zodiacs Information</h2></legend>
        <ZodiacsTable zodiacs={zodiacs}/>
      </fieldset>

      <fieldset>
        <legend><h2>Planets Information</h2></legend>
        <PlanetsTable planets={planets}/>
      </fieldset>

      <fieldset>
        <legend><h2>Houses Information</h2></legend>
        <HousesTable houses={houses}/>
      </fieldset>
    </div>

  </>
  );
}

export default App;
