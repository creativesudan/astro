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
];

export default houses;
