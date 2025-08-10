const planetHouseSymptoms = [
  {
    planet_no: 1,
    planet_name: "Sun",
    symptoms: [
      {
        no: 1,
        positive: [
          "Strong self-confidence and leadership qualities",
          "Excellent vitality and good health",
          "Natural authority and charisma",
          "High ambition and willpower",
          "Attractive physical appearance",
          "Ability to inspire others",
          "Courage to face challenges head‑on",
          "Decisiveness in making important choices"
        ],
        negative: [
          "Ego clashes and stubbornness",
          "Health issues related to heart or eyes",
          "Tendency to dominate or be overbearing",
          "Risk of arrogance and pride",
          "Difficulty in accepting criticism",
          "Conflicts with authority figures",
          "Overwork leading to burnout",
          "Impulsiveness in decision‑making"
        ]
      },
      {
        no: 2,
        positive: [
          "Good financial status and family wealth",
          "Clear speech and good communication",
          "Strong values and principles",
          "Influential voice",
          "Ability to resolve family disputes",
          "Financial growth and stability",
          "Talent in public speaking or singing",
          "Ability to persuade others diplomatically"
        ],
        negative: [
          "Family disputes over wealth",
          "Speech-related problems",
          "Pride causing relationship strains",
          "Tendency to boast",
          "Materialistic mindset",
          "Speech impediments or harsh tone",
          "Misuse of financial resources",
          "Difficulty saving money"
        ]
      },
      {
        no: 3,
        positive: [
          "Courage and initiative in communication",
          "Good relationships with siblings",
          "Skilled in writing and arts",
          "Strong willpower in short journeys",
          "Quick learning abilities",
          "Energetic siblings",
          "Ability to influence peer groups",
          "Success in short-term ventures"
        ],
        negative: [
          "Arguments with siblings",
          "Restlessness and impulsive speech",
          "Risk of accidents due to rash behavior",
          "Difficulty in communication",
          "Impatience",
          "Sibling rivalry",
          "Lack of focus in multiple tasks",
          "Distraction due to gossip"
        ]
      },
      {
        no: 4,
        positive: [
          "Strong emotional foundation",
          "Comfortable home life and respect from elders",
          "Good real estate gains",
          "Sense of security",
          "Warm family environment",
          "Success in property matters",
          "Support from maternal relatives",
          "Ability to create a peaceful home"
        ],
        negative: [
          "Troubles in mother’s health or relationship",
          "Emotional instability at home",
          "Property disputes",
          "Household conflicts",
          "Lack of peace at home",
          "Difficulty in maintaining property",
          "Over‑attachment to domestic comforts",
          "Neglect of career due to family focus"
        ]
      },
      {
        no: 5,
        positive: [
          "Strong creativity and intelligence",
          "Good luck with children and education",
          "Leadership in speculative matters",
          "Romantic success",
          "Good memory and intellect",
          "Recognition for talents",
          "Success in artistic or political fields",
          "Ability to mentor younger people"
        ],
        negative: [
          "Lack of concentration",
          "Problems with children",
          "Losses in speculative ventures",
          "Disappointments in love",
          "Creative blocks",
          "Restlessness in education",
          "Overconfidence in speculative risks",
          "Difficulty maintaining long‑term focus"
        ]
      },
      {
        no: 6,
        positive: [
          "Good health and recovery from illness",
          "Ability to overcome enemies and debts",
          "Strong work ethic",
          "Victory in legal matters",
          "Good immunity",
          "Persistence in challenges",
          "Discipline in daily routine",
          "Support from colleagues in tough times"
        ],
        negative: [
          "Chronic health issues",
          "Legal troubles or debts",
          "Workplace conflicts",
          "Health relapses",
          "Financial strain",
          "Conflicts with coworkers",
          "Over‑competitive attitude",
          "Tendency to overwork without rest"
        ]
      },
      {
        no: 7,
        positive: [
          "Strong partnerships and marriage",
          "Respectful and authoritative spouse",
          "Good social standing through partner",
          "Successful business partnerships",
          "Favorable social connections",
          "Harmonious relationships",
          "Mutual growth through marriage",
          "Ability to resolve disputes amicably"
        ],
        negative: [
          "Ego clashes in marriage",
          "Trouble with business partners",
          "Public reputation issues",
          "Marital conflicts",
          "Distrust in partnerships",
          "Legal disputes with partners",
          "Over‑dependency on spouse",
          "Quarrels in public settings"
        ]
      },
      {
        no: 8,
        positive: [
          "Strong willpower and longevity",
          "Ability to overcome sudden troubles",
          "Interest in occult sciences",
          "Transformative life experiences",
          "Healing through crises",
          "Access to hidden resources",
          "Fearless in facing life's uncertainties",
          "Capacity for deep spiritual insight"
        ],
        negative: [
          "Sudden health crises",
          "Inheritance disputes",
          "Secret enemies causing problems",
          "Mental stress due to secrets",
          "Financial losses",
          "Fear of sudden events",
          "Obsession with hidden matters",
          "Emotional turbulence"
        ]
      },
      {
        no: 9,
        positive: [
          "Good luck and fortune",
          "Strong religious or philosophical beliefs",
          "Support from mentors and elders",
          "Spiritual growth",
          "Good fortune in travels",
          "Higher learning success",
          "Generosity towards others",
          "Respect for traditions and culture"
        ],
        negative: [
          "Loss of faith or philosophy",
          "Disputes with mentors",
          "Travel issues",
          "Confusion in beliefs",
          "Failure in higher education",
          "Discord with teachers",
          "Over‑rigid beliefs",
          "Difficulty accepting other viewpoints"
        ]
      },
      {
        no: 10,
        positive: [
          "Strong career and public image",
          "Leadership and recognition",
          "Success in government or administration",
          "Professional growth",
          "Respect in society",
          "Achievement of goals",
          "Ability to handle responsibility well",
          "Strong decision‑making in career"
        ],
        negative: [
          "Career instability",
          "Authority conflicts",
          "Loss of reputation",
          "Job loss",
          "Challenges in professional life",
          "Conflicts with superiors",
          "Work stress affecting health",
          "Over‑ambition leading to burnout"
        ],
      },
      {
        no: 11,
        positive: [
          "Good gains from friends and network",
          "Supportive social circle",
          "Achievement of goals through connections",
          "Financial gains",
          "Fulfillment of desires",
          "Prosperous friendships",
          "Opportunities through influential contacts",
          "Ability to inspire group efforts"
        ],
        negative: [
          "Loss due to false friends",
          "Social isolation",
          "Unfulfilled desires",
          "Deceit by social contacts",
          "Disappointments from friends",
          "Lack of support",
          "Over‑reliance on social approval",
          "Clashes within groups"
        ],
      },
      {
        no: 12,
        positive: [
          "Spiritual growth and philanthropy",
          "Travel to foreign lands",
          "Success in hidden or foreign matters",
          "Strong intuition",
          "Healing abilities",
          "Detachment leading to wisdom",
          "Relief through meditation and solitude",
          "Ability to sacrifice for a higher cause"
        ],
        negative: [
          "Losses due to secrecy",
          "Health problems abroad",
          "Expenses and isolation",
          "Mental stress from solitude",
          "Financial drain",
          "Difficulty in letting go",
          "Escapism or avoidance of reality",
          "Over‑idealism leading to disappointment"
        ],
      },
    ]
  },  
  {
    planet_no: 2,
    planet_name: "Moon",
    symptoms: [
      {
        no: 1,
        positive: [
          "Emotional stability and nurturing nature",
          "Good mental peace and intuition",
          "Strong connection with family",
          "Popularity and empathy",
          "High creativity",
          "Calm mind under stress",
          "Natural motherly or caring instincts",
          "Ability to adapt emotionally to challenges"
        ],
        negative: [
          "Mood swings and emotional vulnerability",
          "Anxiety or nervousness",
          "Difficulties with mother or home environment",
          "Over-sensitivity",
          "Difficulty setting boundaries",
          "Tendency to avoid confrontation",
          "Over-dependence on family support",
          "Emotional reactions affecting decision making"
        ]
      },
      {
        no: 2,
        positive: [
          "Wealth accumulation",
          "Smooth speech and eloquence",
          "Strong family bonds",
          "Financial security",
          "Supportive relatives",
          "Good savings habits",
          "Gentle and compassionate communication",
          "Ability to mediate family financial matters"
        ],
        negative: [
          "Financial instability",
          "Speech impediments",
          "Family misunderstandings",
          "Lack of financial planning",
          "Loss in business",
          "Communication issues",
          "Over-spending on comforts",
          "Over-reliance on family wealth"
        ]
      },
      {
        no: 3,
        positive: [
          "Good communication skills",
          "Close and caring siblings",
          "Creative talents",
          "Strong will and determination in short journeys",
          "Writing and literary skills",
          "Supportive social contacts",
          "Ability to emotionally connect with peers",
          "Courage to express feelings openly"
        ],
        negative: [
          "Sibling rivalry",
          "Restlessness",
          "Emotional conflicts",
          "Lack of focus",
          "Short temper",
          "Communication barriers",
          "Over-emotional reactions with siblings",
          "Gossip causing misunderstandings"
        ]
      },
      {
        no: 4,
        positive: [
          "Comfortable home and family",
          "Strong maternal bonds",
          "Peaceful environment",
          "Property gains",
          "Successful real estate matters",
          "Emotional contentment",
          "Ability to create a warm home environment",
          "Support from maternal lineage"
        ],
        negative: [
          "Family disputes",
          "Emotional stress at home",
          "Property issues",
          "Frequent relocations",
          "Mother's health problems",
          "Emotional confusion",
          "Attachment to past memories causing stagnation",
          "Over-protectiveness towards family"
        ]
      },
      {
        no: 5,
        positive: [
          "Strong intuition and creativity",
          "Good luck with children",
          "Romantic tendencies",
          "Academic success",
          "Good relationship with mentors",
          "Artistic abilities",
          "Ability to inspire young minds",
          "Emotional intelligence in creative work"
        ],
        negative: [
          "Emotional problems with children",
          "Lack of focus",
          "Disappointments in romance",
          "Problems in education",
          "Creative blocks",
          "Delayed success",
          "Over-romanticizing situations",
          "Too emotional in speculative investments"
        ]
      },
      {
        no: 6,
        positive: [
          "Good health and recovery",
          "Emotional strength against enemies",
          "Ability to manage debts",
          "Careful with health matters",
          "Conquering adversities",
          "Discipline in habits",
          "Empathy towards coworkers",
          "Capability to handle stressful work environments calmly"
        ],
        negative: [
          "Health problems",
          "Legal and debt troubles",
          "Emotional stress",
          "Chronic illnesses",
          "Exhaustion",
          "Conflict with colleagues",
          "Overthinking about adversities",
          "Emotional burnout from daily stress"
        ]
      },
      {
        no: 7,
        positive: [
          "Emotionally supportive spouse",
          "Good social harmony",
          "Strong emotional bonds",
          "Peaceful partnerships",
          "Success in marriage",
          "Good negotiations",
          "Mutual emotional understanding",
          "Compassionate approach in resolving conflicts"
        ],
        negative: [
          "Moodiness affecting partnerships",
          "Emotional conflicts",
          "Possibility of separation",
          "Trust issues",
          "Jealousy",
          "Marriage delays",
          "Emotional dependence on partner",
          "Over-sacrificing in relationships"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in mysticism and psychology",
          "Ability to transform through crises",
          "Emotional resilience",
          "Healing abilities",
          "Spiritual awareness",
          "Psychological insights",
          "Strong intuition in uncovering secrets",
          "Capacity to emotionally heal others"
        ],
        negative: [
          "Emotional trauma",
          "Hidden fears",
          "Health problems",
          "Mental health issues",
          "Secret enemies",
          "Sudden shocks",
          "Difficulty letting go of painful memories",
          "Emotional instability during sudden changes"
        ]
      },
      {
        no: 9,
        positive: [
          "Strong spiritual beliefs",
          "Good fortune in travel",
          "Support from teachers",
          "Philosophical thinking",
          "Success in higher education",
          "Optimism",
          "Empathy towards diverse cultures",
          "Emotional satisfaction through spiritual learning"
        ],
        negative: [
          "Loss of faith",
          "Travel difficulties",
          "Conflicts with mentors",
          "Disillusionment",
          "Interruptions in study",
          "Misguided beliefs",
          "Over-reliance on spiritual guidance",
          "Difficulty in maintaining long-term optimism"
        ]
      },
      {
        no: 10,
        positive: [
          "Public popularity",
          "Success in career involving emotions or care",
          "Good reputation",
          "Caring profession success",
          "Recognition for service",
          "Emotional maturity at work",
          "Support from public in career matters",
          "Ability to manage people with empathy"
        ],
        negative: [
          "Public misunderstandings",
          "Career instability",
          "Reputation damage",
          "Job insecurity",
          "Lack of promotion",
          "Workplace stress",
          "Over-emotional reactions in professional settings",
          "Difficulty separating personal and professional life"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive friends",
          "Emotional fulfillment",
          "Achievement of hopes",
          "Good social circle",
          "Financial gains through friends",
          "Popular among peers",
          "Inspiring influence within friend groups",
          "Strong emotional networking"
        ],
        negative: [
          "Disappointment from friends",
          "Social isolation",
          "Unfulfilled desires",
          "False friends",
          "Loss through trust",
          "Weak social support",
          "Emotional hurt from betrayal by friends",
          "Over-dependence on social approval"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual growth",
          "Emotional healing",
          "Success in hidden fields",
          "Peace of mind",
          "Healing abilities",
          "Detachment from materialism",
          "Strong dream intuition",
          "Emotional liberation through solitude"
        ],
        negative: [
          "Emotional isolation",
          "Losses",
          "Secret enemies",
          "Mental stress",
          "Financial drain",
          "Difficulty in socializing",
          "Escapism through fantasies",
          "Over-sacrifice leading to self-neglect"
        ]
      }
    ]
  },  
  {
    planet_no: 3,
    planet_name: "Jupiter",
    symptoms: [
      {
        no: 1,
        positive: [
          "Wisdom and optimism",
          "Good health and fortune",
          "Strong moral compass",
          "Generosity",
          "Respect from others",
          "Philosophical nature",
          "Ability to uplift others with positive energy",
          "Interest in higher knowledge from an early age"
        ],
        negative: [
          "Overconfidence",
          "Weight gain or indulgence",
          "Over-optimism leading to mistakes",
          "Tendency to preach",
          "Ignoring details",
          "Laziness",
          "Difficulty following rules due to arrogance",
          "Neglecting smaller responsibilities"
        ]
      },
      {
        no: 2,
        positive: [
          "Wealth and prosperity",
          "Good speech and values",
          "Supportive family",
          "Financial growth",
          "Strong principles",
          "Good investment sense",
          "Ability to counsel others on financial matters",
          "Generosity towards family and relatives"
        ],
        negative: [
          "Financial carelessness",
          "Speech issues",
          "Lack of discipline in finances",
          "Overconfidence in money matters",
          "Financial losses",
          "Family disputes",
          "Extravagant spending habits",
          "Difficulty saving money"
        ]
      },
      {
        no: 3,
        positive: [
          "Supportive siblings",
          "Good communication skills",
          "Strong mental faculties",
          "Courage in expression",
          "Successful short travels",
          "Creative talents",
          "Mentoring attitude towards siblings",
          "Success in publishing or teaching"
        ],
        negative: [
          "Sibling conflicts",
          "Poor communication",
          "Restlessness",
          "Lack of focus",
          "Emotional outbursts",
          "Arguments",
          "Over-talking or dominating conversations",
          "Difficulty listening to others' perspectives"
        ]
      },
      {
        no: 4,
        positive: [
          "Comfortable home life",
          "Good property gains",
          "Strong family ties",
          "Emotional stability",
          "Success in education",
          "Peaceful domestic environment",
          "Favor from elders and tradition",
          "Ability to create a wise and nurturing home"
        ],
        negative: [
          "Family disputes",
          "Property losses",
          "Emotional disturbances",
          "Frequent moves",
          "Discontent at home",
          "Mother's health issues",
          "Difficulty in managing home finances",
          "Rigid views causing family stress"
        ]
      },
      {
        no: 5,
        positive: [
          "Strong intellect and creativity",
          "Good luck with children",
          "Spiritual inclination",
          "Success in education",
          "Leadership in creative matters",
          "Romantic success",
          "Interest in philosophy and learning",
          "Ability to guide and teach younger people"
        ],
        negative: [
          "Lack of focus",
          "Children issues",
          "Disappointments in love",
          "Creative blocks",
          "Frustration in academics",
          "Failed speculation",
          "Over-promising and underachieving in creative projects",
          "Excessive indulgence in pleasures"
        ]
      },
      {
        no: 6,
        positive: [
          "Good health",
          "Victory over enemies",
          "Strong service orientation",
          "Ability to overcome obstacles",
          "Discipline in health",
          "Helpful attitude",
          "Wisdom in managing conflicts at work",
          "Capacity to recover quickly from illness"
        ],
        negative: [
          "Health problems",
          "Legal troubles",
          "Debt issues",
          "Conflicts at work",
          "Physical ailments",
          "Mental stress",
          "Neglecting routine tasks due to big-picture focus",
          "Overtrusting colleagues, leading to betrayals"
        ]
      },
      {
        no: 7,
        positive: [
          "Supportive spouse",
          "Successful partnerships",
          "Good social skills",
          "Strong emotional bonds",
          "Harmony in marriage",
          "Good negotiation skills",
          "Beneficial alliances and contracts",
          "Ability to spread positivity in relationships"
        ],
        negative: [
          "Marital conflicts",
          "Separation",
          "Argumentative spouse",
          "Distrust",
          "Emotional distance",
          "Court disputes",
          "Over-tolerance leading to being taken advantage of",
          "Preachiness causing relationship strain"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in spirituality/astrology",
          "Ability to overcome obstacles",
          "Good healing power",
          "Strong intuition",
          "Success in occult sciences",
          "Transformative experiences",
          "Deep understanding of life’s mysteries",
          "Luck in inheritance matters"
        ],
        negative: [
          "Sudden losses",
          "Health problems",
          "Hidden enemies",
          "Emotional trauma",
          "Fear of death",
          "Secret troubles",
          "Difficulty letting go of past issues",
          "Excessive risk in investments causing setbacks"
        ]
      },
      {
        no: 9,
        positive: [
          "Strong spirituality",
          "Good fortune in travels",
          "Support from teachers",
          "Success in higher education",
          "Philosophical understanding",
          "Optimistic outlook",
          "Ability to attract wise mentors",
          "Interest in foreign cultures and beliefs"
        ],
        negative: [
          "Loss of faith",
          "Travel problems",
          "Conflicts with mentors",
          "Interrupted studies",
          "Disillusionment",
          "Disputes in ideology",
          "Dogmatic beliefs causing friction",
          "Overextension in religious or charitable works"
        ]
      },
      {
        no: 10,
        positive: [
          "Successful career",
          "Good reputation",
          "Wise leadership",
          "Professional growth",
          "Respect in public life",
          "Strong ethical standards",
          "Ability to guide and mentor others professionally",
          "Support from influential authorities"
        ],
        negative: [
          "Career instability",
          "Public disputes",
          "Loss of position",
          "Scandals",
          "Delays in promotion",
          "Political conflicts",
          "Over-expansion leading to management issues",
          "Difficulty accepting criticism from superiors"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive social network",
          "Achievement of goals",
          "Financial gains",
          "Social popularity",
          "Friendship rewards",
          "Effective networking",
          "Inspiration for large group projects",
          "Generosity towards friends and networks"
        ],
        negative: [
          "False friends",
          "Unfulfilled desires",
          "Social disappointments",
          "Loss in investments",
          "Group conflicts",
          "Isolation",
          "Overcommitting to group activities",
          "Financial losses due to trusting wrong people"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual growth",
          "Philanthropy",
          "Inner peace",
          "Success in hidden endeavors",
          "Healing abilities",
          "Detachment and wisdom",
          "Charitable works bringing deep satisfaction",
          "Ability to recover from losses with hope"
        ],
        negative: [
          "Losses",
          "Isolation",
          "Expenses",
          "Health issues",
          "Mental pressure",
          "Emotional withdrawal",
          "Risk of neglecting practical matters",
          "Tendency to retreat from responsibilities"
        ]
      }
    ]
  },
  {
    planet_no: 4,
    planet_name: "Rahu",
    symptoms: [
      {
        no: 1,
        positive: [
          "Innovative and unconventional personality",
          "Strong desire for success",
          "Ability to think outside the box",
          "Risk-taking attitude",
          "Charismatic presence",
          "Unusual talents",
          "Magnetic leadership in unconventional fields",
          "Courage to break traditional norms for progress"
        ],
        negative: [
          "Confusion about identity",
          "Health issues from nervousness",
          "Prone to addictions",
          "Sudden changes in life",
          "Erratic behavior",
          "Identity crises",
          "Over-ambition causing reckless decisions",
          "Unethical shortcuts to achieve goals"
        ]
      },
      {
        no: 2,
        positive: [
          "Materialistic gains",
          "Unusual speech patterns",
          "Ability to attract wealth unconventionally",
          "Innovative business ideas",
          "Financial opportunities",
          "Strong voice",
          "Skill in persuasive and hypnotic communication",
          "Ability to profit through foreign connections"
        ],
        negative: [
          "Financial instability",
          "Speech problems",
          "Family disputes over money",
          "Gossiping",
          "Misunderstandings",
          "Fraud risks",
          "Over-spending on luxuries",
          "Unrealistic financial expectations"
        ]
      },
      {
        no: 3,
        positive: [
          "Bold and daring communication",
          "Good at new technologies",
          "Quick learning",
          "Active social life",
          "Courageous mindset",
          "Adaptability",
          "Willingness to explore unconventional hobbies",
          "Strong influence over peer groups"
        ],
        negative: [
          "Arguments and misunderstandings",
          "Restlessness",
          "Lack of focus",
          "Impatience",
          "Irresponsible behavior",
          "Sibling conflicts",
          "Tendency to spread unverified information",
          "Over-involvement in controversial issues"
        ]
      },
      {
        no: 4,
        positive: [
          "Unconventional home life",
          "Interest in foreign lands",
          "Curiosity in spiritual matters",
          "Innovative property ideas",
          "Strong family bonds in unusual ways",
          "Emotional depth",
          "Ability to blend different cultures at home",
          "Willingness to modernize family traditions"
        ],
        negative: [
          "Instability at home",
          "Property disputes",
          "Emotional turmoil",
          "Lack of security",
          "Frequent moves",
          "Cold family relations",
          "Domestic life overshadowed by ambition",
          "Hidden tensions in family matters"
        ]
      },
      {
        no: 5,
        positive: [
          "Creative and innovative mind",
          "Strong speculative gains",
          "Good luck in investments",
          "Inventiveness",
          "Curiosity in arts",
          "Original thinking",
          "Out-of-the-box approach to creative ventures",
          "Strong appeal in unconventional romance"
        ],
        negative: [
          "Risk-taking behavior",
          "Losses in speculation",
          "Lack of focus",
          "Creative blocks",
          "Disappointments",
          "Impulsiveness",
          "Attraction to risky pleasures",
          "Overinvestment in unrealistic projects"
        ]
      },
      {
        no: 6,
        positive: [
          "Ability to overcome enemies unconventionally",
          "Good problem-solving skills",
          "Unique approach to health",
          "Strong resilience",
          "Resourcefulness",
          "Success in legal strategies",
          "Skill in winning against odds",
          "Innovative approach to resolving disputes"
        ],
        negative: [
          "Health problems",
          "Legal troubles",
          "Stress",
          "Conflict with enemies",
          "Accidents",
          "Chronic illness",
          "Overcomplication of simple issues",
          "Manipulative tactics causing backlash"
        ]
      },
      {
        no: 7,
        positive: [
          "Unusual and exciting relationships",
          "Attractive partner",
          "Passionate partnerships",
          "Dynamic social life",
          "Good negotiation skills",
          "Strong charisma",
          "Partnerships leading to sudden gains",
          "Cross-cultural or foreign alliances"
        ],
        negative: [
          "Relationship instability",
          "Conflicts",
          "Jealousy",
          "Breakups",
          "Trust issues",
          "Emotional volatility",
          "Manipulation in partnerships",
          "Obsession with partner’s life"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in occult and mysteries",
          "Strong transformative abilities",
          "Ability to rise from crises",
          "Psychic skills",
          "Deep intuition",
          "Healing power",
          "Fearless exploration of taboo topics",
          "Capability to turn setbacks into growth"
        ],
        negative: [
          "Sudden shocks",
          "Hidden enemies",
          "Health crises",
          "Emotional trauma",
          "Fear",
          "Losses",
          "Obsession with secrecy",
          "Danger from risky ventures"
        ]
      },
      {
        no: 9,
        positive: [
          "Unconventional beliefs",
          "Travel to foreign lands",
          "Strong philosophical ideas",
          "Spiritual insights",
          "Adventurous mindset",
          "Open-mindedness",
          "Attraction to unique spiritual masters",
          "Learning from diverse traditions"
        ],
        negative: [
          "Confusion in faith",
          "Travel problems",
          "Disputes with teachers",
          "Loss of faith",
          "Restlessness",
          "Misguided decisions",
          "Following false gurus",
          "Overconfidence in unverified knowledge"
        ]
      },
      {
        no: 10,
        positive: [
          "Success in unconventional careers",
          "Strong public image",
          "Leadership in innovation",
          "Dynamic professional life",
          "Good networking",
          "Ambitious goals",
          "Public recognition for unique skills",
          "Ability to rise suddenly in career"
        ],
        negative: [
          "Career instability",
          "Public scandals",
          "Loss of reputation",
          "Unpredictable job changes",
          "Conflicts with authorities",
          "Misunderstandings",
          "Involvement in controversial projects",
          "Overexposure leading to backlash"
        ]
      },
      {
        no: 11,
        positive: [
          "Unusual social networks",
          "Achievement through innovation",
          "Strong friendships",
          "Good gains from unusual sources",
          "Dynamic social life",
          "Networking skills",
          "Support from influential nontraditional contacts",
          "Ability to unite diverse groups"
        ],
        negative: [
          "Unstable friendships",
          "Disappointments",
          "Isolation",
          "Loss due to trust",
          "Social conflicts",
          "Financial risks",
          "Jealousy among peers",
          "Becoming part of controversial circles"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual insights",
          "Hidden talents",
          "Strong intuition",
          "Success in spiritual pursuits",
          "Healing through meditation",
          "Detachment",
          "Ability to work on secret international projects",
          "Inner transformation through solitude"
        ],
        negative: [
          "Isolation",
          "Losses",
          "Emotional withdrawal",
          "Health problems",
          "Financial drain",
          "Secret enemies",
          "Escapism through unhealthy habits",
          "Over-involvement in hidden affairs"
        ]
      }
    ]
  },  
  {
    planet_no: 5,
    planet_name: "Mercury",
    symptoms: [
      {
        no: 1,
        positive: [
          "Sharp intellect and communication skills",
          "Good adaptability",
          "Quick thinking",
          "Witty personality",
          "Curiosity",
          "Skilled in negotiations",
          "Ability to express ideas confidently",
          "Strong memory and attention to detail"
        ],
        negative: [
          "Overthinking and nervousness",
          "Speech issues",
          "Difficulty in decision making",
          "Restless mind",
          "Anxiety",
          "Lack of focus",
          "Prone to constant worry",
          "Tendency to be indecisive in important matters"
        ]
      },
      {
        no: 2,
        positive: [
          "Good business skills",
          "Financial success through communication",
          "Clear speech",
          "Strong analytical abilities",
          "Negotiation skills",
          "Good financial planning",
          "Talent for market analysis and trading",
          "Persuasiveness in family financial matters"
        ],
        negative: [
          "Financial misunderstandings",
          "Harsh speech",
          "Poor financial management",
          "Speech impediments",
          "Confusion in money matters",
          "Miscommunication",
          "Difficulty in managing savings",
          "Tendency to argue over financial decisions"
        ]
      },
      {
        no: 3,
        positive: [
          "Quick learning and cleverness",
          "Good relationships with siblings",
          "Excellent communication",
          "Adaptability",
          "Mental agility",
          "Creative expression",
          "Skilled in writing or public speaking",
          "Ability to learn new skills rapidly"
        ],
        negative: [
          "Restlessness",
          "Miscommunication",
          "Sibling rivalry",
          "Lack of concentration",
          "Nervousness",
          "Argumentative tone",
          "Short attention span",
          "Difficulty maintaining focus in conversations"
        ]
      },
      {
        no: 4,
        positive: [
          "Intellectual approach to home life",
          "Comfortable family environment",
          "Good planning for property",
          "Strong emotional intellect",
          "Success in education",
          "Calm mind at home",
          "Skillful management of home affairs",
          "Ability to mediate and resolve family disputes"
        ],
        negative: [
          "Mental restlessness at home",
          "Family disagreements",
          "Emotional confusion",
          "Lack of peace in the home",
          "Difficulty in property matters",
          "Unstable emotions",
          "Overcritical towards family members",
          "Disorganized living environment"
        ]
      },
      {
        no: 5,
        positive: [
          "Intellectual creativity",
          "Success in education",
          "Good communication with children",
          "Strong creative thinking",
          "Good memory",
          "Talented in arts",
          "Ability to inspire others through words",
          "Quick wit and humor in romantic life"
        ],
        negative: [
          "Lack of focus",
          "Problems with children",
          "Creative blocks",
          "Learning difficulties",
          "Disappointments in love",
          "Emotional instability",
          "Difficulty expressing feelings creatively",
          "Distraction during academic pursuits"
        ]
      },
      {
        no: 6,
        positive: [
          "Good health through knowledge",
          "Ability to overcome enemies",
          "Analytical approach to health",
          "Success in workplace",
          "Good problem-solving skills",
          "Clear thinking",
          "Skillful handling of daily tasks",
          "Adaptable in overcoming obstacles"
        ],
        negative: [
          "Nervous health issues",
          "Legal troubles",
          "Workplace stress",
          "Chronic illnesses",
          "Conflicts at work",
          "Anxiety",
          "Prone to worry-related physical symptoms",
          "Difficulty maintaining routines"
        ]
      },
      {
        no: 7,
        positive: [
          "Good communication in partnerships",
          "Harmonious marriage",
          "Successful negotiations",
          "Diplomatic spouse",
          "Effective conflict resolution",
          "Trust in relationships",
          "Ability to mediate relationship disputes",
          "Quick understanding of partner's needs"
        ],
        negative: [
          "Arguments with spouse",
          "Lack of trust",
          "Misunderstandings",
          "Communication breakdowns",
          "Marital discord",
          "Jealousy",
          "Overcritical or nitpicking attitude",
          "Difficulty expressing feelings in relationships"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in research and occult",
          "Mental resilience",
          "Ability to analyze hidden matters",
          "Strong investigative skills",
          "Healing through mental strength",
          "Studious nature",
          "Quick adaptation in crisis situations",
          "Ability to uncover secrets through logic"
        ],
        negative: [
          "Anxiety",
          "Hidden enemies",
          "Mental stress",
          "Confusion in finances",
          "Obsessive thoughts",
          "Fear of the unknown",
          "Difficulty letting go of troubling memories",
          "Tendency to overcomplicate private matters"
        ]
      },
      {
        no: 9,
        positive: [
          "Good learning and spirituality",
          "Success in travel",
          "Strong philosophical thinking",
          "Good teachers and mentors",
          "Academic achievements",
          "Optimism",
          "Skilled in foreign languages",
          "Intellectual curiosity about diverse cultures"
        ],
        negative: [
          "Confusion in beliefs",
          "Travel obstacles",
          "Disputes with mentors",
          "Loss of faith",
          "Interruptions in education",
          "Frustrations in philosophy",
          "Difficulty connecting with teachers",
          "Scattered interests in spiritual pursuits"
        ]
      },
      {
        no: 10,
        positive: [
          "Success in communication careers",
          "Good reputation",
          "Leadership through intellect",
          "Effective public speaking",
          "Professional growth",
          "Recognition in business",
          "Skill in organizing projects",
          "Strategic thinking in professional life"
        ],
        negative: [
          "Career instability",
          "Public misunderstandings",
          "Miscommunication at work",
          "Job insecurity",
          "Work stress",
          "Delays in promotion",
          "Difficulty handling workplace politics",
          "Restless or scattered professional interests"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive friends and networks",
          "Achievement of goals",
          "Good social connections",
          "Financial gains through communication",
          "Popular in social circles",
          "Effective networking",
          "Ability to connect diverse groups",
          "Skillful mediation among friends"
        ],
        negative: [
          "Loss from friends",
          "Disappointments",
          "Social misunderstandings",
          "False promises",
          "Jealousy in groups",
          "Lack of support",
          "Difficulty trusting friends",
          "Tendency to gossip or spread rumors"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual intellect",
          "Healing through knowledge",
          "Success in secret or foreign matters",
          "Good intuition",
          "Peace in solitude",
          "Spiritual growth",
          "Ability to learn from solitude",
          "Interest in sacred texts and hidden wisdom"
        ],
        negative: [
          "Isolation",
          "Secret enemies",
          "Mental confusion",
          "Health problems in foreign lands",
          "Financial loss",
          "Difficulty in letting go",
          "Tendency for escapism through overthinking",
          "Obsession with secrets and hidden matters"
        ]
      }
    ]
  },  
  {
    planet_no: 6,
    planet_name: "Venus",
    symptoms: [
      {
        no: 1,
        positive: [
          "Charm and attractiveness",
          "Love for arts and beauty",
          "Pleasant social nature",
          "Graceful appearance",
          "Friendly demeanor",
          "Strong aesthetic sense",
          "Ability to maintain harmonious relationships",
          "Magnetic personality that attracts admiration"
        ],
        negative: [
          "Overindulgence",
          "Vanity",
          "Relationship issues",
          "Laziness",
          "Superficial behavior",
          "Difficulty in commitment",
          "Over-dependence on physical appearance",
          "Lack of seriousness in personal goals"
        ]
      },
      {
        no: 2,
        positive: [
          "Financial gains",
          "Pleasant speech",
          "Good family relations",
          "Artistic talents",
          "Comfort in wealth",
          "Social popularity",
          "Ability to generate income through arts or fashion",
          "Talent in persuasive speaking"
        ],
        negative: [
          "Financial losses",
          "Gossiping",
          "Family disputes",
          "Spendthrift tendencies",
          "Jealousy",
          "Miscommunication",
          "Over-reliance on luxury to feel secure",
          "Unrealistic spending habits"
        ]
      },
      {
        no: 3,
        positive: [
          "Good relationships with siblings",
          "Creative talents",
          "Skilled communication",
          "Social charm",
          "Supportive network",
          "Diplomatic nature",
          "Ability to inspire siblings creatively",
          "Strong aesthetic sense in communication"
        ],
        negative: [
          "Sibling jealousy",
          "Laziness",
          "Poor communication",
          "Arguments",
          "Unreliability",
          "Restlessness",
          "Over-promising and under-delivering in teamwork",
          "Tendency to avoid confrontations"
        ]
      },
      {
        no: 4,
        positive: [
          "Beautiful home and comforts",
          "Good family relations",
          "Artistic expression at home",
          "Peaceful domestic life",
          "Supportive mother",
          "Financial stability in property",
          "Decorative and artistic approach to living spaces",
          "Ability to host and entertain gracefully"
        ],
        negative: [
          "Family disputes",
          "Loss of property",
          "Domestic stress",
          "Emotional fragility",
          "Frequent moves",
          "Maternal health issues",
          "Too much focus on appearances over harmony",
          "Disagreements over home aesthetics or spending"
        ]
      },
      {
        no: 5,
        positive: [
          "Romantic nature",
          "Success in creative arts",
          "Good luck with children",
          "Strong affection",
          "Artistic expression",
          "Emotional warmth",
          "Recognition in fields of beauty and creativity",
          "Ability to inspire love and artistic appreciation"
        ],
        negative: [
          "Heartbreaks",
          "Lack of focus",
          "Disappointments in love",
          "Creative blocks",
          "Problems with children",
          "Delayed success",
          "Over-romanticizing unrealistic partners",
          "Excessive emotional dependence in romance"
        ]
      },
      {
        no: 6,
        positive: [
          "Good health and healing abilities",
          "Victory over enemies",
          "Strong immune system",
          "Peaceful work atmosphere",
          "Legal wins",
          "Persistence",
          "Diplomatic problem-solving skills at work",
          "Aesthetic and pleasant work environment"
        ],
        negative: [
          "Health issues",
          "Legal problems",
          "Conflicts at workplace",
          "Chronic illnesses",
          "Stress",
          "Debts",
          "Over-sensitivity to criticism",
          "Neglecting health for pleasure"
        ]
      },
      {
        no: 7,
        positive: [
          "Harmonious marriage",
          "Attractive spouse",
          "Successful partnerships",
          "Good social harmony",
          "Emotional support",
          "Strong bonds",
          "Ability to maintain balance in marriage",
          "Blessings in public image through marriage"
        ],
        negative: [
          "Marital conflicts",
          "Relationship misunderstandings",
          "Jealousy",
          "Divorce risk",
          "Distrust",
          "External interference",
          "Over-dependence on partner for happiness",
          "Overlooking red flags in relationships"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in occult and mysticism",
          "Ability to transform",
          "Healing powers",
          "Spiritual depth",
          "Strong resilience",
          "Success through crises",
          "Charismatic appeal in mysterious circumstances",
          "Ability to turn challenges into personal growth"
        ],
        negative: [
          "Jealousy",
          "Secret enemies",
          "Sudden losses",
          "Emotional distress",
          "Health crises",
          "Isolation",
          "Obsession with secrecy",
          "Manipulation in personal matters"
        ]
      },
      {
        no: 9,
        positive: [
          "Love for spirituality",
          "Success in travels",
          "Artistic talents in philosophy",
          "Support from mentors",
          "Optimism",
          "Good fortune",
          "Creative expression in higher knowledge",
          "Ability to form harmonious cross-cultural relationships"
        ],
        negative: [
          "Spiritual doubts",
          "Travel troubles",
          "Relationship conflicts",
          "Misunderstandings with teachers",
          "Loss of faith",
          "Interrupted journeys",
          "Over-idealizing spiritual leaders",
          "Confusion between pleasure and spiritual duty"
        ]
      },
      {
        no: 10,
        positive: [
          "Success in arts or luxury professions",
          "Good reputation",
          "Leadership in creative fields",
          "Career satisfaction",
          "Social recognition",
          "Professional charm",
          "Quick rise in status due to charm",
          "Ability to lead artistic or beauty-oriented ventures"
        ],
        negative: [
          "Career instability",
          "Public scandals",
          "Reputation damage",
          "Job loss",
          "Lack of progress",
          "Stress at work",
          "Over-focus on image over productivity",
          "Jealousy from peers in career"
        ]
      },
      {
        no: 11,
        positive: [
          "Good social network",
          "Achievement of desires",
          "Financial gains through social contacts",
          "Popularity",
          "Support from friends",
          "Strong connections",
          "Opportunities through influential contacts",
          "Charisma that attracts beneficial collaborations"
        ],
        negative: [
          "False friends",
          "Disappointments",
          "Social isolation",
          "Jealousy",
          "Loss through trust",
          "Failed social projects",
          "Dependence on others for social validation",
          "Competition within friends circle"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual love and charity",
          "Hidden talents",
          "Success in charitable work",
          "Emotional healing",
          "Peace in solitude",
          "Inner beauty",
          "Compassion towards the underprivileged",
          "Ability to connect beauty with spiritual service"
        ],
        negative: [
          "Losses",
          "Isolation",
          "Financial strain",
          "Emotional withdrawal",
          "Secret enemies",
          "Difficulty in detachment",
          "Over-romanticizing isolation",
          "Escapism in fantasies of love"
        ]
      }
    ]
  },  
  {
    planet_no: 7,
    planet_name: "Ketu",
    symptoms: [
      {
        no: 1,
        positive: [
          "Spiritual and detached personality",
          "Strong intuition",
          "Ability to let go of unwanted attachments",
          "Interest in metaphysics",
          "Calm demeanor",
          "Inner peace",
          "Freedom from ego and pride",
          "Natural inclination towards meditation from early age"
        ],
        negative: [
          "Identity confusion",
          "Health issues related to nervous system",
          "Feeling lost or aimless",
          "Difficulty in social interaction",
          "Emotional detachment",
          "Isolation",
          "Lack of long-term personal goals",
          "Difficulty in connecting with worldly ambitions"
        ]
      },
      {
        no: 2,
        positive: [
          "Detachment from materialism",
          "Clear and concise speech",
          "Minimalistic lifestyle",
          "Strong values",
          "Spiritual wealth",
          "Financial detachment",
          "Ability to give unbiased advice on financial matters",
          "Contentment despite limited resources"
        ],
        negative: [
          "Financial instability",
          "Speech issues",
          "Loss of family support",
          "Lack of material comfort",
          "Communication breakdown",
          "Emotional coldness",
          "Aloofness in family matters",
          "Difficulty in maintaining long-term assets"
        ]
      },
      {
        no: 3,
        positive: [
          "Spiritual communication",
          "Good with subtle arts",
          "Calm and composed",
          "Effective in meditation",
          "Inner wisdom",
          "Detached from petty conflicts",
          "Ability to inspire siblings spiritually",
          "Skill in problem-solving through calm observation"
        ],
        negative: [
          "Communication difficulties",
          "Restlessness",
          "Lack of motivation",
          "Social withdrawal",
          "Sibling conflicts",
          "Isolation",
          "Difficulty expressing emotions to siblings",
          "Tendency to avoid important discussions"
        ]
      },
      {
        no: 4,
        positive: [
          "Detached home life",
          "Interest in spiritual home matters",
          "Peaceful domestic environment",
          "Minimalistic lifestyle at home",
          "Strong inner security",
          "Calm emotions",
          "Ability to create sacred or meditative home space",
          "Unmoved in face of family material losses"
        ],
        negative: [
          "Emotional coldness",
          "Property losses",
          "Family detachment",
          "Distance from mother",
          "Lack of emotional warmth",
          "Frequent relocations",
          "Difficulty in feeling 'at home'",
          "Disinterest in household responsibilities"
        ]
      },
      {
        no: 5,
        positive: [
          "Spiritual creativity",
          "Good intuition with children",
          "Success in spiritual teaching",
          "Detached from worldly pleasures",
          "Strong inner light",
          "Creative inspiration",
          "Ability to guide others towards self-realization",
          "Wisdom in handling romantic emotions with detachment"
        ],
        negative: [
          "Lack of interest in children",
          "Creative blocks",
          "Emotional distance",
          "Disappointments in love",
          "Frustration",
          "Mental restlessness",
          "Over-practicality in romance",
          "Inability to enjoy pleasurable pursuits fully"
        ]
      },
      {
        no: 6,
        positive: [
          "Ability to overcome hidden enemies",
          "Good spiritual healing abilities",
          "Strong immunity",
          "Success over chronic issues",
          "Healing through spirituality",
          "Calmness in adversity",
          "Wisdom in solving workplace conflicts quietly",
          "Ability to remain detached from competition"
        ],
        negative: [
          "Chronic health issues",
          "Legal problems",
          "Isolation",
          "Emotional stress",
          "Weak immunity",
          "Difficulty in routine",
          "Neglect of health matters until too late",
          "Over-detachment causing loss of opportunities"
        ]
      },
      {
        no: 7,
        positive: [
          "Detached and spiritual partnerships",
          "Unique relationships",
          "Ability to forgive and move on",
          "Strong inner bonds",
          "Peaceful companionship",
          "Non-attachment in marriage",
          "Partnership for spiritual growth",
          "Willingness to compromise without resentment"
        ],
        negative: [
          "Relationship instability",
          "Emotional distance",
          "Trust issues",
          "Lack of intimacy",
          "Separation risk",
          "Coldness",
          "Difficulty expressing affection",
          "Unrealistic expectations in relationships"
        ]
      },
      {
        no: 8,
        positive: [
          "Strong occult abilities",
          "Ability to transform",
          "Deep meditation powers",
          "Healing through spiritual means",
          "Ability to face death calmly",
          "Success in mysteries",
          "Fearlessness in confronting life's changes",
          "Insight into karmic life cycles"
        ],
        negative: [
          "Health crises",
          "Sudden shocks",
          "Emotional turmoil",
          "Isolation",
          "Financial losses",
          "Fear of unknown",
          "Obsession with past events",
          "Over-involvement in secret matters"
        ]
      },
      {
        no: 9,
        positive: [
          "Spiritual wisdom",
          "Interest in mysticism",
          "Detachment from dogma",
          "Philosophical insights",
          "Success in spiritual education",
          "Open-mindedness",
          "Ability to integrate multiple belief systems",
          "Natural inclination towards pilgrimage"
        ],
        negative: [
          "Loss of faith",
          "Confusion in beliefs",
          "Disputes in philosophy",
          "Interrupted studies",
          "Disillusionment",
          "Travel issues",
          "Following misguided teachers",
          "Unclear sense of moral direction"
        ]
      },
      {
        no: 10,
        positive: [
          "Detachment from career materialism",
          "Success in spiritual careers",
          "Strong sense of duty",
          "Completion of karmic cycles",
          "Non-attachment to status",
          "Calm professional demeanor",
          "Focus on meaningful, purpose-driven work",
          "Ability to work silently without seeking credit"
        ],
        negative: [
          "Career confusion",
          "Lack of direction",
          "Job instability",
          "Missed opportunities",
          "Frustration",
          "Lack of recognition",
          "Underestimating professional self-worth",
          "Withdrawing from career growth opportunities"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive spiritual friends",
          "Achievement through detachment",
          "Good network in spiritual circles",
          "Peaceful social interactions",
          "Financial gains through spiritual means",
          "Strong intuition",
          "Attracting wise and detached companions",
          "Ability to detach from group politics"
        ],
        negative: [
          "Isolation",
          "Unfulfilled desires",
          "Social withdrawal",
          "Lack of support",
          "Disappointments",
          "Loss in investments",
          "Tendency to avoid networking",
          "Trusting manipulative acquaintances"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual liberation",
          "Deep meditation",
          "Success in ascetic practices",
          "Peace in solitude",
          "Healing and renewal",
          "Inner awakening",
          "Mastery of letting go",
          "Profound spiritual dreams and visions"
        ],
        negative: [
          "Losses",
          "Isolation",
          "Health problems",
          "Emotional pain",
          "Financial drain",
          "Difficulty in letting go",
          "Avoidance of worldly duties",
          "Escapism through spiritual detachment"
        ]
      }
    ]
  },
  {
    planet_no: 8,
    planet_name: "Saturn",
    symptoms: [
      {
        no: 1,
        positive: [
          "Strong discipline and patience",
          "Longevity and endurance",
          "Responsible and serious nature",
          "Ability to handle hardship",
          "Reliable personality",
          "Mature outlook",
          "Cautious approach to life decisions",
          "Practical mindset with strong focus on long-term stability"
        ],
        negative: [
          "Delays and obstacles",
          "Health issues related to bones",
          "Feeling of loneliness",
          "Pessimistic attitude",
          "Rigidity in opinions",
          "Depression",
          "Self-doubt in early life",
          "Tendency to take life too seriously"
        ]
      },
      {
        no: 2,
        positive: [
          "Financial stability through hard work",
          "Frugal and wise spending",
          "Steady income",
          "Commitment to family",
          "Good savings habit",
          "Strong values",
          "Ability to build wealth gradually and steadily",
          "Patience in managing family resources"
        ],
        negative: [
          "Financial hardships",
          "Family disputes",
          "Lack of resources",
          "Material losses",
          "Frustration",
          "Financial delays",
          "Over-attachment to security leading to over-caution",
          "Difficulty spending even when needed"
        ]
      },
      {
        no: 3,
        positive: [
          "Strong communication skills through discipline",
          "Close, responsible siblings",
          "Good organizational skills",
          "Determined mindset",
          "Cautious in speech",
          "Loyal friends",
          "Ability to plan and execute projects carefully",
          "Persistence in learning skills over time"
        ],
        negative: [
          "Cold or distant relationships",
          "Misunderstandings",
          "Lack of enthusiasm",
          "Short temper",
          "Communication blocks",
          "Isolation",
          "Difficulty forming new social connections",
          "Overly serious interactions leading to disconnect"
        ]
      },
      {
        no: 4,
        positive: [
          "Stable home life through discipline",
          "Good property management",
          "Strong family foundation",
          "Patience in domestic matters",
          "Success through hard work",
          "Peaceful household",
          "Ability to maintain long-term investments",
          "Dedication to protecting family legacy"
        ],
        negative: [
          "Cold or strict mother",
          "Property losses",
          "Family disputes",
          "Frequent moves",
          "Emotional distance",
          "Lack of comfort",
          "Difficulty expressing affection in family",
          "Overly rigid family routines"
        ]
      },
      {
        no: 5,
        positive: [
          "Focused creativity",
          "Good leadership in education",
          "Responsible parenting",
          "Success in speculation",
          "Strong morale",
          "Organized thinking",
          "Ability to mentor and guide younger individuals",
          "Steadfast approach to romance and creativity"
        ],
        negative: [
          "Lack of joy or creativity",
          "Problems with children",
          "Failure in investments",
          "Emotional coldness",
          "Frustration",
          "Discipline issues",
          "Fear of taking creative risks",
          "Delayed success in romantic pursuits"
        ]
      },
      {
        no: 6,
        positive: [
          "Strong health through discipline",
          "Ability to overcome enemies",
          "Good work ethic",
          "Success in health routines",
          "Persistence",
          "Ability to fight illnesses",
          "Skill in solving problems methodically",
          "Endurance in long legal or workplace battles"
        ],
        negative: [
          "Chronic illnesses",
          "Legal problems",
          "Workplace conflicts",
          "Fatigue",
          "Stress",
          "Delays in recovery",
          "Rigid attitude causing friction at work",
          "Stagnation in daily work routine"
        ]
      },
      {
        no: 7,
        positive: [
          "Long-lasting partnerships",
          "Serious and responsible spouse",
          "Loyal relationships",
          "Good teamwork",
          "Patient communication",
          "Strong commitment",
          "Ability to work through relationship challenges",
          "Partnerships that endure tests of time"
        ],
        negative: [
          "Cold or distant relationships",
          "Delays in marriage",
          "Marital misunderstandings",
          "Trust issues",
          "Loneliness",
          "Difficult negotiations",
          "Tendency towards over-formality in relationships",
          "Lack of emotional expression with spouse"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in occult sciences",
          "Strong resilience",
          "Ability to handle crises",
          "Endurance in difficult times",
          "Good research skills",
          "Healing powers",
          "Fearless approach to karmic challenges",
          "Skill in uncovering long-hidden truths"
        ],
        negative: [
          "Health crises",
          "Sudden losses",
          "Emotional hardship",
          "Loneliness",
          "Financial setbacks",
          "Fear of change",
          "Obsession with past traumas",
          "Difficulty adapting to sudden transformations"
        ]
      },
      {
        no: 9,
        positive: [
          "Strong faith and spirituality",
          "Wise mentors",
          "Logical thinking",
          "Success in higher education",
          "Patience in learning",
          "Strong ethics",
          "Ability to teach life lessons based on experience",
          "Deep respect for tradition and law"
        ],
        negative: [
          "Loss of faith",
          "Mentor conflicts",
          "Educational delays",
          "Disappointments",
          "Confusion in beliefs",
          "Lack of direction",
          "Overly rigid philosophies",
          "Inability to adapt beliefs to new situations"
        ]
      },
      {
        no: 10,
        positive: [
          "Strong career through hard work",
          "Respect in public life",
          "Discipline in professional matters",
          "Good reputation",
          "Leadership through responsibility",
          "Career longevity",
          "Ability to rise through persistence",
          "Trustworthiness in leadership positions"
        ],
        negative: [
          "Career delays",
          "Reputation damage",
          "Job loss",
          "Workplace conflicts",
          "Stress",
          "Lack of recognition",
          "Overwork leading to burnout",
          "Feeling burdened by professional duties"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive friends",
          "Achievement through persistence",
          "Good financial planning",
          "Long-term goal success",
          "Strong social connections",
          "Reliable network",
          "Ability to turn setbacks into eventual gains",
          "Respect within long-standing groups"
        ],
        negative: [
          "False friends",
          "Unfulfilled desires",
          "Social isolation",
          "Disappointments",
          "Loss in investments",
          "Failure in social projects",
          "Slow progress towards ambitions",
          "Over-dependence on limited contacts"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual solitude",
          "Healing through patience",
          "Ability to meditate deeply",
          "Peace in isolation",
          "Success in spiritual matters",
          "Emotional healing",
          "Wisdom gained through withdrawal from chaos",
          "Strong karmic cleansing through discipline"
        ],
        negative: [
          "Isolation",
          "Losses",
          "Emotional pain",
          "Health decline",
          "Financial difficulties",
          "Loneliness",
          "Difficulty letting go of past burdens",
          "Feeling trapped in seclusion"
        ]
      }
    ]
  },  
  {
    planet_no: 9,
    planet_name: "Mars",
    symptoms: [
      {
        no: 1,
        positive: [
          "High energy and courage",
          "Strong willpower and physical strength",
          "Leadership and initiative",
          "Competitive spirit",
          "Athletic ability",
          "Assertiveness",
          "Determination to achieve goals",
          "Ability to take quick action in emergencies"
        ],
        negative: [
          "Aggressiveness and anger issues",
          "Health issues related to blood",
          "Risk of accidents",
          "Argumentative nature",
          "Impulsivity leading to mistakes",
          "Violent tendencies",
          "Prone to overexertion",
          "Difficulty in handling authority"
        ]
      },
      {
        no: 2,
        positive: [
          "Strong speech and assertiveness",
          "Good financial ambition",
          "Ability to defend property",
          "Energetic family environment",
          "Financial gains through effort",
          "Quick decision-making",
          "Courage to take financial risks",
          "Motivation to increase wealth"
        ],
        negative: [
          "Harsh speech",
          "Financial conflicts",
          "Family disputes",
          "Wasteful spending",
          "Verbal aggression",
          "Financial instability",
          "Speaking without thinking",
          "Losses due to impulsive investments"
        ]
      },
      {
        no: 3,
        positive: [
          "Bravery in communication",
          "Strong sibling bonds",
          "Quick learning",
          "Good athletic abilities",
          "Courageous nature",
          "Leadership in tasks",
          "Initiative in short travels",
          "Ability to defend siblings"
        ],
        negative: [
          "Arguments with siblings",
          "Impulsiveness",
          "Communication breakdowns",
          "Reckless behavior",
          "Short temper",
          "Risk of injury",
          "Petty disputes",
          "Restlessness in decision-making"
        ]
      },
      {
        no: 4,
        positive: [
          "Energetic home life",
          "Protection of property",
          "Strong foundation",
          "Active family involvement",
          "Property gains",
          "Supportive mother figure",
          "Renovation and building projects",
          "Motivation to create a secure base"
        ],
        negative: [
          "Family conflicts",
          "Property disputes",
          "Stress at home",
          "Emotional instability",
          "Health issues related to chest",
          "Sudden relocations",
          "Lack of domestic peace",
          "Accidents in the home"
        ]
      },
      {
        no: 5,
        positive: [
          "Strong leadership in creative fields",
          "Good luck with children",
          "Competitive spirit in education",
          "Creative drive",
          "Strong intellect",
          "Risk-taking for success",
          "Innovations in art or sport",
          "Courage in romantic pursuits"
        ],
        negative: [
          "Aggressive behavior with children",
          "Losses in speculation",
          "Concentration problems",
          "Loss of interest",
          "Disputes with children",
          "Academic failures",
          "Overconfidence in competitive exams",
          "Romantic instability"
        ]
      },
      {
        no: 6,
        positive: [
          "Victory over enemies",
          "Strong health",
          "Energetic work ethic",
          "Ability to overcome obstacles",
          "Success in legal matters",
          "Resilience",
          "Courage in fighting chronic illness",
          "Persistence in workplace challenges"
        ],
        negative: [
          "Health problems",
          "Legal troubles",
          "Workplace conflicts",
          "Physical injuries",
          "Conflicts with coworkers",
          "Stress-related illnesses",
          "Overwork leading to fatigue",
          "Overconfidence in legal disputes"
        ]
      },
      {
        no: 7,
        positive: [
          "Passionate and protective partner",
          "Dynamic partnerships",
          "Strong will in marriage",
          "Successful business relationships",
          "Assertive in negotiations",
          "Energetic spouse",
          "Mutual motivation in partnerships",
          "Defending the partner in adversity"
        ],
        negative: [
          "Quarrels in marriage",
          "Jealousy",
          "Lack of trust",
          "Divorce risk",
          "Aggressiveness towards partner",
          "Unstable relationships",
          "Power struggles in marriage",
          "Impulsiveness in commitments"
        ]
      },
      {
        no: 8,
        positive: [
          "Interest in occult sciences",
          "Strong willpower",
          "Ability to transform",
          "Healing through challenges",
          "Psychic abilities",
          "Spiritual warrior",
          "Courage in facing crises",
          "Determination to uncover secrets"
        ],
        negative: [
          "Health crises",
          "Sudden shocks",
          "Secret enemies",
          "Violent transformations",
          "Accidents",
          "Emotional turmoil",
          "Obsession with danger",
          "Self-destructive patterns"
        ]
      },
      {
        no: 9,
        positive: [
          "Adventurous spirit",
          "Spiritual courage",
          "Success in higher learning",
          "Bravery in travel",
          "Strong beliefs",
          "Leadership in philosophy",
          "Enthusiasm for exploration",
          "Courage in speaking the truth"
        ],
        negative: [
          "Restlessness in beliefs",
          "Travel mishaps",
          "Conflicts with mentors",
          "Loss of faith",
          "Impatience with spirituality",
          "Disruptions in education",
          "Dogmatic arguments",
          "Rash decisions in journeys"
        ]
      },
      {
        no: 10,
        positive: [
          "Strong career drive",
          "Leadership in profession",
          "Ambition for success",
          "Energetic work ethic",
          "Good reputation",
          "Recognition for achievements",
          "Courage to take risks in career",
          "Ability to work in high-pressure roles"
        ],
        negative: [
          "Career conflicts",
          "Aggression at workplace",
          "Job instability",
          "Authority disputes",
          "Workplace stress",
          "Burnout",
          "Overcommitment to work",
          "Reputation damage due to rashness"
        ]
      },
      {
        no: 11,
        positive: [
          "Supportive friends",
          "Achievement of goals",
          "Energetic social circle",
          "Good financial gains",
          "Enterprising attitude",
          "Ambitious in networking",
          "Leadership in community projects",
          "Motivating social influence"
        ],
        negative: [
          "Loss due to arguments",
          "Unreliable friends",
          "Financial risks",
          "Conflict with peers",
          "Social disappointments",
          "Overexertion",
          "False promises from associates",
          "Impulsive investments due to friends"
        ]
      },
      {
        no: 12,
        positive: [
          "Spiritual protection",
          "Healing energy",
          "Ability to recover from losses",
          "Strong inner strength",
          "Success in spiritual healing",
          "Transformation through solitude",
          "Bravery in facing isolation",
          "Learning from past mistakes"
        ],
        negative: [
          "Losses",
          "Isolation",
          "Chronic health issues",
          "Financial drain",
          "Emotional suffering",
          "Difficulty in detachment",
          "Secret frustrations",
          "Self-imposed restrictions"
        ]
      }
    ]
  }  
];

export default planetHouseSymptoms;
