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
        ],
        neutral: [
          "Independence in thought and action",
          "Desire for recognition from others",
          "Need to be in a leadership position",
          "Pride in personal achievements",
          "Strong sense of individuality",
          "Prefers self-reliance over teamwork"
        ],
        remedies: [
          "रविवार के दिन सूर्य को जल अर्पित करें",
          "सुबह ताँबे के लोटे में जल से सूर्य अर्घ्य दें",
          "गुड़ एवं गेहूँ दान करें",
          "पिता या पिता समान व्यक्ति का सम्मान करें",
          "लाल वस्त्र या ताम्बा धारण करें",
          "ॐ घृणि सूर्याय नमः का 108 बार जाप करें"
        ], 
        hobbies: [
          "योगा और ध्यान",
          "लीडरशिप ट्रेनिंग",
          "फिटनेस वर्कआउट",
          "सोलो ट्रैवल",
          "पब्लिक स्पीकिंग",
          "आउटडोर स्पोर्ट्स"
        ],
        career: [
          "नेतृत्व पद (CEO, मैनेजर, एडमिनिस्ट्रेटर)",
          "सरकारी उच्च पद",
          "सेना/पुलिस/सुरक्षा सेवाएं",
          "राजनीति या पब्लिक सर्विस",
          "प्रेरक वक्ता (Motivational Speaker)",
          "स्पोर्ट्स कोच",
          "स्वास्थ्य और फिटनेस ट्रेनर",
          "संगठन प्रमुख या प्रोजेक्ट लीडर"
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
        ],
        neutral: [
          "Attachment to family traditions",
          "Focus on financial image",
          "Desire for respectful communication",
          "Strong opinions in family discussions",
          "Prefers stability in resources",
          "Enjoyment of luxury when available"
        ],
        remedies: [
          "मीठे फल का दान करें",
          "पारिवारिक बड़ों का आशीर्वाद लें",
          "गाय को गुड़-चारा खिलाएं",
          "मुख से कटु वचन न बोलने का संकल्प लें",
          "सोमवार को शिव पूजन करें",
          "पीपल के वृक्ष में जल चढ़ाएं"
        ],
        hobbies: [
          "कुकिंग",
          "गायन/वादन",
          "पारिवारिक कार्यक्रमों में भाग लेना",
          "कलेक्शन हॉबी (स्टाम्प/कॉइन)",
          "फाइनेंशियल मैनेजमेंट गेम्स",
          "नई भाषाएँ सीखना"
        ],
        career: [
          "फैमिली बिज़नेस मैनेजमेंट",
          "फाइनेंसियल एडवाइजर",
          "बैंकिंग और निवेश क्षेत्र",
          "पब्लिक रिलेशन और स्पीच थेरेपी",
          "मीडिया और ब्रॉडकास्टिंग",
          "संग्रहालय या ऐतिहासिक संरक्षण कार्य"
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
        ],
        neutral: [
          "Ocassional competitiveness with siblings",
          "Enthusiasm for new experiences",
          "Enjoyment in sharing ideas",
          "Varied hobbies and interests",
          "Active participation in community events",
          "Tendency to explore multiple skills"
        ],
        remedies: [
          "भाई-बहनों की सहायता करें",
          "शुभ कार्य में भाग लें",
          "वीर रस के भजन/कीर्तन सुनें",
          "ताँबे का छल्ला धारण करें",
          "स्वयं पत्रकारिता/लेखन में समय दें",
          "गरीब छात्रों को किताबें दान करें"
        ],
        hobbies: [
          "लेखन और ब्लॉगिंग",
          "जर्नलिज़्म",
          "शॉर्ट ट्रिप्स और ट्रेकिंग",
          "फोटोग्राफी",
          "डिबेट या पब्लिक डिस्कशन",
          "बुक क्लब मीटिंग्स"
        ],
        career: [
          "पत्रकारिता और मीडिया",
          "पब्लिक रिलेशन, प्रचार, विज्ञापन",
          "शिक्षण और संवाद कौशल प्रशिक्षक",
          "ट्रैवल गाइड, ईवेंट मैनेजर",
          "पब्लिक स्पीकर्स, प्रेरक वक्ता",
          "लेखन और साहित्यिक कार्य"
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
        ],
        neutral: [
          "Attachment to ancestral property",
          "Value for cultural heritage",
          "Preference for orderly home environment",
          "Emphasis on family reputation",
          "Interest in interior decoration",
          "Respect for elder advice"
        ],
        remedies: [
          "माता का सम्मान करें",
          "घर में सूर्य की तस्वीर रखें",
          "रविवार को चावल और गुड़ का दान करें",
          "घर को नियमित साफ रखें",
          "पीला, लाल या केसरिया वस्त्र पहनें",
          "जरूरतमंदों को वस्त्र दान करें"
        ],
        hobbies: [
          "इंटीरियर डेकोरेशन",
          "गार्डनिंग",
          "कुकिंग ऐट होम",
          "पारिवारिक मेलजोल",
          "घर में पूजा-पाठ",
          "होम रेनोवेशन प्रोजेक्ट्स"
        ],
        career: [
          "रियल एस्टेट डेवलपमेंट",
          "इंटीरियर डिजाइनिंग",
          "परिवारिक सेवा और काउंसलिंग",
          "शिक्षा संस्थान संचालक",
          "हॉस्पिटेलिटी उद्योग",
          "पूजा-पाठ या धार्मिक आयोजन"
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
        ],
        neutral: [
          "Interest in learning new subjects",
          "Enthusiasm in social events",
          "Pride in personal talents",
          "Enjoyment of leisure activities",
          "Fondness for intellectual discussions",
          "Occasional mood-based creativity"
        ],
        remedies: [
          "बच्चों को शिक्षा में मदद करें",
          "मंगलवार को हनुमान जी का दर्शन करें",
          "किसी विद्यार्थी को पेन/कॉपी दान करें",
          "कला-संगीत में रुचि लें",
          "सुबह की सूर्य किरणें लें",
          "ॐ आदित्याय नमः का जाप करें"
        ],
        hobbies: [
          "पेंटिंग",
          "संगीत/नृत्य",
          "थिएटर एक्टिंग",
          "क्रिएटिव राइटिंग",
          "चिल्ड्रन टीचिंग",
          "स्पोर्ट्स / गेम्स"
        ],
        career: [
          "अभिनय, कला, संगीत",
          "शिक्षक, प्रोफेसर, गाइड",
          "युवा मनोरंजन उद्योग में काम",
          "प्रशिक्षक, स्पोर्ट्स कोच",
          "लेखन और कथाकार",
          "राजनीति या सामाजिक कार्यकर्ता"
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
        ],
        neutral: [
          "Steady approach to problem solving",
          "Desire for order and cleanliness",
          "Pride in work achievements",
          "Reliance on proven methods at work",
          "Occasional overfocus on routine",
          "Respect for authority in workplace"
        ],
        remedies: [
          "जरूरतमंद की कानूनी-मदद करें",
          "ताँबे का कड़ा धारण करें",
          "गुड़ और गेहूं का दान करें",
          "शत्रुओं से प्रेमपूर्ण व्यवहार करें",
          "रविवार उपवास करें",
          "गाय को हरा चारा खिलाएं"
        ],
        hobbies: [
          "हेल्थ और फिटनेस एक्टिविटी",
          "सर्विस वॉलंटियरिंग",
          "गार्डनिंग",
          "समाज सेवा",
          "कानूनी सहायता कार्य",
          "डेली रूटीन फिटनेस"
        ],
        career: [
          "सेना या पुलिस में सेवाएं",
          "स्वास्थ्य क्षेत्र, फिजियोथेरेपी",
          "सामाजिक सेवा, वकालत",
          "अनुसंधान और रक्षा",
          "स्वास्थ्य एडमिनिस्ट्रेशन",
          "मेडिकल या सैन्य ट्रेंडिंग"
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
        ],
        neutral: [
          "Value for mutual respect in partnerships",
          "Interest in building joint ventures",
          "Desire for socially reputable alliances",
          "Occasional compromises in relationships",
          "Concern for spouse's public image",
          "Balanced give-and-take approach"
        ],
        remedies: [
          "पति/पत्नी का सम्मान व विश्वास बनाएं",
          "लाल फूल घर में रखें",
          "व्यापारिक साझेदार की मदद करें",
          "पारदर्शिता रखें",
          "गोमूत्र से घर शुद्ध करें",
          "शुक्रवार को मीठा दान करें"
        ],
        hobbies: [
          "सोशल गैदरिंग",
          "कपल डांस या एक्टिविटी",
          "बिज़नेस नेटवर्किंग",
          "काउंसलिंग",
          "टीम स्पोर्ट्स",
          "डिनर/पार्टी होस्टिंग"
        ],
        career: [
          "वकालत, कानूनी प्रतिनिधि",
          "बिजनेस पार्टनरशिप",
          "पब्लिक रिलेशन और सोशल नेटवर्किंग",
          "मार्केटिंग और सेल्स",
          "डिप्लोमैसी और इंटरनेशनल रिलेशन",
          "पार्टनरशिप मैनेजमेंट"
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
        ],
        neutral: [
          "Curiosity about mysteries",
          "Adaptive to intense changes",
          "Keen observer of life patterns",
          "Drawn to unconventional topics",
          "Practical in crisis resolution",
          "Occasional secrecy in dealings"
        ],
        remedies: [
          "गुप्त दान करें",
          "नियमित ध्यान और प्राणायाम करें",
          "ॐ ह्रीं आदित्याय नमः का जाप करें",
          "रविवार को अनाथ बच्चों को भोजन कराएं",
          "तेल का दान करें",
          "मंदिर में लाल कपड़ा चढ़ाएं"
        ],
        hobbies: [
          "एस्ट्रोलॉजी/ओकल्ट स्टडी",
          "रिसर्च वर्क",
          "मेडिटेशन",
          "मिस्ट्री नॉवेल रीडिंग",
          "क्राइसिस मैनेजमेंट गेम्स",
          "फाइनेंस/इन्वेस्टिगेशन"
        ],
        career: [
          "फोरेंसिक एक्सपर्ट",
          "दीर्घकालीन रिसर्चर",
          "वित्तीय सलाहकार (बीमा, निवेश)",
          "मिस्ट्री और ओकल्ट विश्वविद्यालय",
          "अदालत या चोरी पकड़ने के क्षेत्र",
          "गुप्त एजेंसी या साइबर सिक्योरिटी"
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
        ],
        neutral: [
          "Interest in cultural exploration",
          "Desire for moral clarity",
          "Moderate spiritual curiosity",
          "Balanced approach to religious discussions",
          "Respect for knowledge regardless of source",
          "Occasional adherence to traditional customs"
        ],
        remedies: [
          "गुरुजनों/टीचर का सम्मान करें",
          "विदेश यात्रा से पहले गरीबों को भोजन कराएं",
          "धार्मिक ग्रंथ पढ़ें या सुनें",
          "केसर का तिलक लगाएं",
          "सूर्य मंत्र का जप करें",
          "ब्रह्म मुहूर्त में उठकर सूर्य नमस्कार करें"
        ],
        hobbies: [
          "ट्रैवलिंग",
          "धार्मिक या आध्यात्मिक यात्राएँ",
          "फिलॉसफी किताबें पढ़ना",
          "कल्चरल इवेंट्स में भाग लेना",
          "मेंटरिंग",
          "स्पिरिचुअल डिस्कशन ग्रुप्स"
        ],
        career: [
          "धार्मिक गुरु, शिक्षक",
          "एडवोकेट, राजनीतिक विश्लेषक",
          "विदेशी यात्रा, विदेश सेवा",
          "व्याख्याता, प्रोफेसर",
          "पब्लिक स्पीकिंग, सेमिनार वर्क",
          "फॉरेन ट्रेड और संस्कृति इंटरचेंज"
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
        neutral: [
          "Loyalty towards professional duties",
          "Pride in career designation",
          "Prefers structured work environment",
          "Focus on steady advancement",
          "Occasional defensive approach with authority",
          "Value for public respect"
        ],
        remedies: [
          "ऑफिस में ईमानदारी व पारदर्शिता रखें",
          "रविवार को गरीबों को गेहूं और गुड़ दें",
          "पिता से आशीर्वाद लें",
          "सामाजिक कार्य में हिस्सा लें",
          "लाल या केसरिया पगड़ी दान करें",
          "मंदिर में दीया जलाएं"
        ],
        hobbies: [
          "प्रोफेशनल नेटवर्किंग",
          "पब्लिक स्पीकिंग",
          "लीडरशिप रोल्स",
          "कैरियर ट्रेनिंग",
          "सोशल सर्विस",
          "मेडल/एवॉर्ड कलेक्शन"
        ],
        career: [
          "सरकारी अधिकारी, उच्च पदस्थ कर्मचारी",
          "पोलिटिकल लीडर, स्पोर्ट्स एंड एंटरटेनमेंट",
          "बिजनेस एक्सीक्यूटिव, मैनेजर",
          "कॉर्पोरेट लीडरशिप",
          "प्रोजेक्ट मैनेजमेंट",
          "कैरियर ट्रेनिंग और काउंसलिंग"
        ]
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
        neutral: [
          "Selectiveness in friendships",
          "Preference for meaningful social ties",
          "Enjoyment in goal-oriented collaborations",
          "Occasional disagreement in group direction",
          "Desire for recognition in community",
          "Balancing personal and group interests"
        ],
        remedies: [
          "दोस्तों से रिश्ते मधुर रखें",
          "रविवार को सामूहिक हवन में भाग लें",
          "समूह के हित के लिए काम करें",
          "मीठा और गुड़ बांटें",
          "सूर्य उपासना करें",
          "सामूहिक सेवा कार्य में जाएं"
        ],
        hobbies: [
          "सोशल वर्क",
          "फंडरेज़िंग इवेंट",
          "ग्रुप स्पोर्ट्स",
          "कम्युनिटी मीटअप्स",
          "कलेक्टिव आर्ट प्रोजेक्ट्स",
          "पब्लिक फेस्टिवल आयोजन"
        ],
        career: [
          "सोशल मीडिया एक्सपर्ट, नेटवर्किंग",
          "फंडरेजिंग और सामूहिक कार्य",
          "सामुदायिक नेता, आयोजक",
          "संगठन के अध्यक्ष या सलाहकार",
          "प्रोफेशनल सोशल नेटवर्किंग",
          "पब्लिक रिलेशन मैनेजमेंट"
        ]
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
        neutral: [
          "Interest in meditation retreats",
          "Occasional desire for solitude",
          "Balanced approach to charity",
          "Curiosity about foreign cultures",
          "Value for quiet self-reflection",
          "Acceptance of life's temporary nature"
        ],
        remedies: [
          "विदेश यात्रा से पहले गरीबों को भोजन कराएं",
          "अस्पताल में मरीजों की सेवा करें",
          "तांबे के लोटे में जल भरकर सूर्य को अर्पित करें",
          "गायत्री मंत्र का जाप करें",
          "रविवार को मीठा दान करें",
          "एकांत में ध्यान और आत्मचिंतन करें"
        ],
        hobbies: [
          "मेडिटेशन रिट्रीट",
          "ट्रैवल टू फॉरेन कंट्रीज",
          "चैरिटी वॉलंटियरिंग",
          "एकांत में किताब पढ़ना",
          "योग और प्राणायाम",
          "रिसर्च इन स्पिरिचुअल सब्जेक्ट्स"
        ],
        career: [
          "आश्रम या सेवा केंद्र में कार्य",
          "धार्मिक गुरु, योग गुरु, ध्यान शिक्षक",
          "विदेशी सेवा या प्रवास",
          "आत्मिक मार्गदर्शन, काउंसलिंग",
          "लेखन, अध्यात्मिक साहित्य",
          "गुप्त या छुपे हुए प्रशासनिक पद"
        ]
      }
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
        ],
        neutral: [
          "Need for emotional reassurance",
          "Preference for familiar surroundings",
          "Episodic bursts of creativity",
          "Mood influenced by environment",
          "Value for close-knit family ties",
          "Occasional tendency to change priorities quickly"
        ],
        remedies: [
          "सोमवार को शिवलिंग पर कच्चा दूध और जल अर्पित करें",
          "चंद्रोदय के समय चंद्रमा को अर्घ्य दें",
          "माताजी और वरिष्ठ महिलाओं की सेवा व सम्मान करें",
          "सफेद कपड़े, चावल, या दूध का दान करें",
          "मानसिक शांति के लिए ध्यान/प्राणायाम करें",
          "ॐ चं चंद्राय नमः का 108 बार जाप करें"
        ],
        hobbies: [
          "मेडिटेशन",
          "जर्नलिंग",
          "सेल्फ-कयर रूटीन",
          "फोटोग्राफी",
          "सofte आर्ट्स (पेंटिंग, क्राफ्ट)",
          "भावनात्मक विकास पर किताबें पढ़ना"
        ],
        career: [
          "सलाहकार, काउंसलर",
          "सामाजिक कार्यकर्ता",
          "मनोचिकित्सक, थैरेपिस्ट",
          "स्वास्थ्य और पोषण विशेषज्ञ",
          "सहायक शिक्षक",
          "हरित या पर्यावरणीय कार्यकर्ता",
          "प्रेसिडेंट या लीडरशिप रोल में",
          "समाजिक सेवाओं में कार्य"
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
        ],
        neutral: [
          "Soft tone in general conversation",
          "Occasional emotional spending",
          "Careful with financial discussions",
          "Respect for family values",
          "Mild attachment to heritage property",
          "Fluctuating confidence in money matters"
        ],
        remedies: [
          "मीठे चावल या खीर सोमवार को गरीबों को खिलाएं",
          "माताजी के साथ भोजन करें या उनका आशीर्वाद लें",
          "सफ़ेद मिठाई या शक्कर का सोमवार को दान करें",
          "धन के मामले में ईमानदारी रखें",
          "सोमवार को चावल या दूध बहते जल में प्रवाहित करें"
        ],
        hobbies: [
          "कुकिंग",
          "पारिवारिक मेलजोल",
          "गायन और भजन",
          "स्टोरीटेलिंग",
          "फैमिली फोटो एल्बम बनाना",
          "म्यूज़िक सुनना"
        ],
        career: [
          "वित्तीय सलाहकार",
          "पोषण विशेषज्ञ",
          "खानपान और हॉस्पिटैलिटी इंडस्ट्री",
          "होटल मैनेजमेंट",
          "जल परिवहन तथा समुद्री व्यापार",
          "कृषि और कृषि आधारित व्यवसाय",
          "स्थानीय व्यापार एवं परिवारिक व्यवसाय"
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
        ],
        neutral: [
          "Interest in maintaining sibling harmony",
          "Occasional mood-led communication",
          "Attachment to early friendships",
          "Involvement in local events",
          "Frequent short trips or changes in plans",
          "Tendency to mix emotions with conversations"
        ],
        remedies: [
          "छोटे भाई-बहनों के साथ मधुर व्यवहार करें",
          "विद्यार्थियों को कलम, कॉपी या दूध दान करें",
          "सोमवार या पूर्णिमा को सफेद फूल बहते जल में बहाएं",
          "सृजनात्मक लेखन या भजन-कीर्तन सुनें/गाएं",
          "मित्रों को सहारा दें"
        ],
        hobbies: [
          "ट्रैवल ब्लॉगिंग",
          "पोएट्री राइटिंग",
          "लघु कथाएँ लिखना",
          "फोटोग्राफी",
          "साइक्लिंग या शॉर्ट रोड ट्रिप",
          "लोकल कल्चर एक्सप्लोर करना"
        ],
        career: [
          "सोशल मीडिया मैनेजर",
          "यात्रा ब्लॉगर, ट्रैवल गाइड",
          "लेखक, पत्रकार",
          "संचार, भाषण विशेषज्ञ",
          "स्थानीय पर्यटन एवं छोटे व्यवसाय",
          "लेखन, काव्य और कला"
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
        ],
        neutral: [
          "Value for traditions and customs",
          "Preference for home-based activities",
          "Fondness for comfort and aesthetics",
          "Balanced approach to family decisions",
          "Occasional changes in home setup",
          "Interest in family history"
        ],
        remedies: [
          "मां की सेवा और मान सम्मान करें",
          "घर में मोती का बर्तन या चाँदी का सामान रखें",
          "सोमवार को चावल, दूध, या मिश्री का दान करें",
          "घर में सफेद रंग के पर्दें/वस्त्र रखें",
          "बालकनी या छत पर तुलसी का पौधा रखें"
        ],
        hobbies: [
          "इंटीरियर डेकोरेशन",
          "गार्डनिंग",
          "होम कुकिंग",
          "कैंडल मेकिंग",
          "होम मेड क्राफ्ट्स",
          "घर पर आध्यात्मिक आयोजन"
        ],
        career: [
          "परिवार चिकित्सक या काउंसलर",
          "इंटीरियर डिजाइनर",
          "रियल एस्टेट एवं गृह प्रबंधन",
          "परिवार सेवा और घरेलू व्यवस्थापक",
          "गृहस्थी संबंधित शिक्षा एवं काउंसलिंग"
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
        ],
        neutral: [
          "Occasional daydreaming",
          "Sensitivity to creative criticism",
          "Enjoyment of light romantic gestures",
          "Fondness for artistic gatherings",
          "Changing academic interests",
          "Preference for emotionally engaging subjects"
        ],
        remedies: [
          "बच्चों/विद्यार्थियों को दूध वाला भोजन करवाएं",
          "सोमवार को कलात्मक वस्तु या पेन दान करें",
          "रचनात्मकता बढ़ाने हेतु सफ़ेद फूल चढ़ाएं",
          "मनोरंजन के लिए संगीत सुनें, कविता लिखें",
          "चंद्रमा के समय ध्यान करें या जल देखें"
        ],
        hobbies: [
          "पेंटिंग",
          "ड्रामा/थिएटर",
          "म्यूज़िकल इंस्ट्रूमेंट",
          "क्रिएटिव राइटिंग",
          "चिल्ड्रेन एक्टिविटीज़",
          "खेल और डांस"
        ],
        career: [
          "लेखक, कलाकार, गीतकार",
          "शिक्षक, विशेषकर बच्चों के लिए",
          "मनोरंजन उद्योग में कार्य",
          "प्रेरक वक्ता, कोच",
          "मनोरंजन तथा खेल शिक्षा"
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
        ],
        neutral: [
          "Sensitivity to work environment mood",
          "Need for a peaceful routine",
          "Occasional fluctuations in work pace",
          "Preference for cooperative professional ties",
          "Emotional approach to resolving conflicts",
          "Mild concern over long-term security"
        ],
        remedies: [
          "सफेद कपड़े, चावल, चीनी या दही का दान करें",
          "रोगियों की या जानवरों की सेवा करें",
          "सोमवार को जल में मिश्री डालकर पेड़ को अर्पित करें",
          "तनाव अधिक हो तो मौन व्रत या मेडिटेशन करें",
          "घर या ऑफिस में जल का पात्र पूर्व/उत्तर में रखें"
        ],
        hobbies: [
          "योग और प्राणायाम",
          "हेल्थ कुकिंग",
          "पशु सेवा",
          "गार्डनिंग",
          "सोशल वर्क",
          "रेगुलर मॉर्निंग वॉक"
        ],
        career: [
          "स्वास्थ्य सलाहकार, नर्सिंग",
          "सामाजिक कार्यकर्ता",
          "मानसिक स्वास्थ्य विशेषज्ञ",
          "सहायक डॉक्टर या थेरेपिस्ट",
          "सफाई, पर्यावरण एवं सेवा क्षेत्र"
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
        ],
        neutral: [
          "Value for gentle communication in marriage",
          "Occasional emotional decisions in partnerships",
          "Preference for mutual reassurance",
          "Sensitivity to partner’s moods",
          "Balanced give-and-take approach",
          "Willingness to compromise for harmony"
        ],
        remedies: [
          "पति/पत्नी को सफ़ेद वस्त्र या मिठाई गिफ्ट करें",
          "सोमवार को जल का दान करें",
          "वैवाहिक जीवन में शांति हेतु शिव-पार्वती का स्मरण करें",
          "जोड़ों में सामंजस्य बढ़ाएँ",
          "नीला/सफेद रुमाल साथ रखें"
        ],
        hobbies: [
          "कपल डांस",
          "सोशल गैदरिंग्स",
          "होम डिनर पार्टीज़",
          "कपल ट्रैवल",
          "कोऑपरेटिव गेम्स",
          "क्राफ्ट/कुकिंग विद पार्टनर"
        ],
        career: [
          "व्यापार सहयोगी, पार्टनर",
          "क्लाइंट रिलेशन मैनेजर",
          "संपर्क और काउंसलिंग व्यवसाय",
          "परिवार एवं वैवाहिक काउंसलिंग",
          "सेवा क्षेत्र के लोक संपर्क अधिकारी"
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
        ],
        neutral: [
          "Curiosity about hidden truths",
          "Measured approach to sensitive topics",
          "Drawn to deep conversations",
          "Practical in emotionally intense situations",
          "Occasional secrecy in matters",
          "Tendency to reflect deeply before acting"
        ],
        remedies: [
          "सोमवार को किसी अस्पताल या आश्रय में सेवा करें",
          "गुप्त दान दें (white food की चीजें)",
          "ॐ सोम सोमाय नमः का 108 जाप करें",
          "निर्धनों को दूध, इमरती या चाँदी दान करें",
          "नियमित ध्यान या जल-स्नान करें"
        ],
        hobbies: [
          "एस्ट्रोलॉजी स्टडी",
          "मेडिटेशन",
          "ज्योतिष या टैरो",
          "सस्पेंस नॉवेल पढ़ना",
          "जर्नलिंग",
          "मिस्ट्री सीरीज़ देखना"
        ],
        career: [
          "मनोवैज्ञानिक, शोधकर्ता",
          "वित्तीय सलाहकार, बीमा एजेंट",
          "जाँच, गुप्तचर, फोरेंसिक विशेषज्ञ",
          "ओकल्ट या आध्यात्मिक गुरु",
          "मानसिक स्वास्थ्य काउंसलिंग"
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
        ],
        neutral: [
          "Respect for cultural diversity",
          "Emotional connection with beliefs",
          "Interest in occasional travel",
          "Moderate curiosity for higher learning",
          "Value for peaceful philosophical debates",
          "Sometimes adapting beliefs to mood or situation"
        ],
        remedies: [
          "शीक्षा-दीक्षा देने वालों/आचार्यों का सम्मान",
          "सफ़ेद वस्त्र, चावल, दही तीर्थस्थान/मंदिर में दान करें",
          "सोमवार को जल में चावल/सफेद पुष्प मिलाकर चंद्रमा को अर्पित करें",
          "धर्मिक यात्रा/पुन्य कार्य में भाग लें",
          "चन्द्रमा से संबंधित मंत्रजाप करें"
        ],
        hobbies: [
          "तीर्थ यात्रा",
          "स्पिरिचुअल रीडिंग",
          "कल्चरल ट्रैवल",
          "योगा रिट्रीट",
          "धार्मिक आयोजन में भाग लेना",
          "नयी फिलॉसफी सीखना"
        ],
        career: [
          "शिक्षक, प्रोफेसर",
          "धार्मिक गुरु, फाउण्डर",
          "विदेशी सेवा, अंतरराष्ट्रीय संबंध",
          "धार्मिक उद्धारक, समाजसेवी",
          "स्पिरिचुअल गाइड, योग और ध्यान शिक्षक"
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
        ],
        neutral: [
          "Enjoys public acknowledgment",
          "Preference for cooperative work culture",
          "Work performance sometimes influenced by emotions",
          "Value for reputation maintenance",
          "Balanced approach to career growth",
          "Occasional changes in career focus"
        ],
        remedies: [
          "वर्कप्लेस पर शांति हेतु सफेद फूल रखें",
          "उच्चाधिकारियों के साथ विनम्रता बरतें",
          "सोमवार को कच्चा दूध किसी धार्मिक स्थान पर दान करें",
          "काम में भावना/समर्पण रखें",
          "माताजी से सलाह लें, उनका आशीर्वाद प्राप्त करें"
        ],
        hobbies: [
          "ऑफिस इवेंट ऑर्गनाइज करना",
          "कॉर्पोरेट सोशल वर्क",
          "पब्लिक स्पीकिंग",
          "प्रोफेशनल ट्रेनिंग",
          "सफलता की कहानियाँ पढ़ना",
          "वर्कशॉप्स अटेंड करना"
        ],
        career: [
          "पब्लिक सर्विस, सरकारी नौकरी",
          "सामाजिक कार्यकर्ता",
          "शिक्षक, ट्रेनर",
          "मीडिया और जनसंपर्क",
          "स्वास्थ्य सेवा क्षेत्र"
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
        ],
        neutral: [
          "Selectiveness in social circles",
          "Interest in group activities",
          "Preference for emotionally warm friendships",
          "Occasional withdrawal from large gatherings",
          "Pragmatism in collaborations",
          "Balancing personal and group ambitions"
        ],
        remedies: [
          "मित्रों के साथ स्नेहपूर्ण व्यवहार रखें",
          "सोमवार को दूध, दही या सफ़ेद मिठाई का दान करें",
          "मित्रों को मन से माफ करें, मन-कलुष न रखें",
          "सामाजिक सेवा के कामों में हिस्सा लें",
          "किसी महिला सहकर्मी या मित्र की मदद करें"
        ],
        hobbies: [
          "सोशल नेटवर्किंग",
          "कम्युनिटी प्रोजेक्ट्स",
          "कलेक्टिव आर्ट वर्क",
          "ग्रुप ट्रैवल",
          "फंडरेजिंग इवेंट",
          "फ्रेंड्स मीटअप"
        ],
        career: [
          "समाजसेवी, NGO कार्यकर्ता",
          "सोशल मीडिया विशेषज्ञ",
          "नेटवर्किंग इवेंट्स आयोजक",
          "फ्रेंड्स ग्रुप काउंसलर",
          "फंडरेजर, सामुदायिक आयोजक"
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
        ],
        neutral: [
          "Occasional desire for solitude",
          "Value for quiet reflection",
          "Interest in foreign or secluded environments",
          "Balanced approach to charity",
          "Acceptance of emotional phases",
          "Curiosity for spiritual retreats"
        ],
        remedies: [
          "सोमवार को मंदिर में सफ़ेद पुष्प अर्पित करें",
          "आश्रम, हॉस्पिटल या वृद्धाश्रम में भोजन सेवा दें",
          "ॐ चन्द्राय नमः या सोमाय नमः जाप करें",
          "मन की शांति के लिए गीता/शिवपुराण आदि पढ़ें",
          "सफ़ेद कपड़े धारण करें और दूध का दान करें"
        ],
        hobbies: [
          "ध्यान और मौन साधना",
          "फॉरेन ट्रैवल",
          "रेकी/हीलिंग प्रैक्टिस",
          "डायरी राइटिंग",
          "आत्मचिंतन",
          "सी साइड वॉक"
        ],
        career: [
          "मोनास्टिक सेवा, आश्रम में सेवक",
          "योग गुरु, ध्यान शिक्षक",
          "विदेशी सेवा या प्रवास",
          "धार्मिक लेखक,काउंसलर",
          "आध्यात्मिक चिंतन और संरक्षणकर्ता"
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
        ],
        neutral: [
          "Preference for a calm lifestyle",
          "Occasional over-expectation from self",
          "Value for fairness in dealings",
          "Moderate reliance on personal beliefs",
          "Reserved but impactful in speech",
          "Tendency to plan big but act slowly"
        ],
        remedies: [
          "गुरुवार को पीला वस्त्र धारण करें",
          "पीली दाल (चना/अरहर) का दान करें",
          "बुजुर्ग और गुरुओं का सम्मान करें",
          "“ॐ गुरवे नमः” या “ॐ बृहस्पतये नमः” मंत्र का 108 बार जाप करें",
          "ब्रह्म मुहूर्त में उठकर सूर्य को अर्घ्य दें",
          "गरीब बच्चों की शिक्षा में मदद करें"
        ],
        hobbies: [
          "पर्सनल ग्रोथ सेमिनार अटेंड करना",
          "स्पिरिचुअल डिस्कशन ग्रुप्स",
          "शिक्षक/गुरु से ज्ञान प्राप्त करना",
          "आत्मविकास हेतु पुस्तकें पढ़ना",
          "योग या प्राणायाम",
          "मोटिवेशनल स्पीकिंग"
        ],
        career: [
          "शिक्षक, प्रोफेसर, गुरु",
          "धार्मिक नेता, संघटक",
          "धार्मिक या आध्यात्मिक शिक्षक",
          "अनुसंधानकर्ता",
          "सामाजिक कार्यकर्ता",
          "वकील",
          "मार्गदर्शक और काउंसलर"
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
        ],
        neutral: [
          "Balanced approach to resource growth",
          "Occasional generosity even in hardship",
          "Interest in family traditions",
          "Respect for ancestral wealth",
          "Mild fluctuations in savings",
          "Tendency to spend on philosophical or religious causes"
        ],
        remedies: [
          "परिवार में मधुरता रखें",
          "गुरुवार को बेसन या हल्दी दान करें",
          "चोरी और झूठ से बचें",
          "गाय को गुड़-चना खिलाएं",
          "बुजुर्गों के साथ भोजन करें",
          "वाणी में संयम रखें"
        ],
        hobbies: [
          "फायनेंस ट्यूटरिंग",
          "धार्मिक ग्रंथ पढ़ना/सुनाना",
          "फैमिली गाइडेंस देना",
          "पुस्तकें/कलेक्शन बनाना",
          "दान-पुण्य कार्य",
          "भाषा या भाषण प्रतियोगिता"
        ],
        career: [
          "वित्तीय सलाहकार",
          "लेखक, साहित्यकार",
          "शिक्षण व वाचन सामग्री निर्माता",
          "धार्मिक ग्रंथों का अनुवादक",
          "धार्मिक एवं कलात्मक संग्रहकर्ता",
          "पारिवारिक संपत्ति प्रबंधक"
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
        ],
        neutral: [
          "Occasional involvement in sibling advice",
          "Balanced but cautious speech",
          "Interest in informative travel",
          "Moderate participation in group tasks",
          "Mild competitive spirit with peers",
          "Varied hobbies with intellectual curiosity"
        ],
        remedies: [
          "भाई-बहनों की शिक्षा में मदद करें",
          "गुरुवार को पीले फूल जल प्रवाह में अर्पित करें",
          "धार्मिक ग्रंथों का वाचन करें",
          "विद्यालय/पुस्तकालय में पुस्तक दान करें",
          "सत्य और न्याय के साथ संवाद करें",
          "स्वयं भी नियमित कुछ नया सीखें"
        ],
        hobbies: [
          "एजुकेशनल ट्रिप्स",
          "पॉडकास्ट होस्ट करना",
          "डिबेटिंग",
          "बुक क्लब में भाग लेना",
          "जर्नलिज़्म या स्टोरी टेलिंग",
          "भाई-बहनों को पढ़ाना"
        ],
        career: [
          "लेखक, पत्रकार",
          "शिक्षण प्रशिक्षक",
          "ट्रैवल गाइड",
          "भाषणदाता",
          "मीडिया और पब्लिक रिलेशन",
          "भाई-बहन संबंधों में मध्यस्थ"
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
        ],
        neutral: [
          "Preference for respectful family discussions",
          "Value for traditional home decor",
          "Steady but slow property expansion",
          "Interest in cultural family events",
          "Occasional focus on practical needs over luxuries",
          "Balanced but conservative spending on home"
        ],
        remedies: [
          "घर के बुजुर्गों का सम्मान और सेवा करें",
          "गुरुवार को हल्दी या पीला कपड़ा दान करें",
          "माता-पिता के आशीर्वाद से कार्य शुरू करें",
          "घर में धार्मिक वातावरण बनाएँ",
          "हरिवंश पुराण या गीता का पाठ करें",
          "गृहस्थ जीवन में सादगी लाएं"
        ],
        hobbies: [
          "पारिवारिक धार्मिक आयोजन",
          "घरेलू लाइब्रेरी बनाना",
          "वास्तु/शिल्प अध्ययन",
          "माता-पिता या बड़ों को पढ़ाना",
          "बच्चों को धार्मिक शिक्षा देना",
          "योग/ध्यान Home Sessions"
        ],
        career: [
          "रियल एस्टेट एजेंट/डेवलपर",
          "शिक्षण संस्थान संचालक",
          "आधिकारिक सेवक",
          "संपत्ति प्रबंधन",
          "परिवारिक परामर्शदाता",
          "धार्मिक आयोजन संचालक"
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
        ],
        neutral: [
          "Occasional academic curiosity",
          "Romance based on intellectual connection",
          "Balanced but cautious speculative ventures",
          "Interest in cultural arts without full involvement",
          "Moderate religious or spiritual participation",
          "Measured approach in guiding children"
        ],
        remedies: [
          "छात्रों को शिक्षा सामग्री दान करें",
          "गुरुवार को पीले वस्त्र या केला दान करें",
          "सट्टा/जुए से बचें",
          "ध्यान और आध्यात्मिक ज्ञान प्राप्त करें",
          "बच्चों को नैतिक शिक्षा दें",
          "कला और संस्कृति को प्रोत्साहन दें"
        ],
        hobbies: [
          "शिक्षा-संबंधी वॉलंटियरिंग",
          "ट्यूटरिंग/मेंटरिंग",
          "फिल्म/ड्रामा एनालिसिस",
          "क्रिएटिव राइटिंग",
          "संगीत या भाषा सीखना",
          "स्पोर्ट्स कोचिंग"
        ],
        career: [
          "शिक्षक, प्रोफेसर",
          "आध्यात्मिक गाइड",
          "लेखक, कवि",
          "मनोरंजन व कला क्षेत्र",
          "शिक्षा व प्रशिक्षणार्थी",
          "धार्मिक कार्यकर्ता"
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
        ],
        neutral: [
          "Preference for slow but steady work routines",
          "Moderate attention to physical wellness",
          "Occasional delegation of small tasks",
          "Balanced approach to workplace politics",
          "Patient resolution of disputes",
          "Mild detachment from workplace gossip"
        ],
        remedies: [
          "दुश्मनों के प्रति क्रोध न रखें",
          "गुरुवार को चने की दाल और हल्दी दान",
          "बीमार और गरीब की सेवा करें",
          "सत्यनिष्ठा से कार्य करें",
          "दैनिक दिनचर्या संतुलित रखें",
          "कर्म से धर्म का पालन करें"
        ],
        hobbies: [
          "समाज सेवा",
          "मेंटल हेल्थ काउंसलिंग",
          "फ्री एजुकेशन प्रोजेक्ट्स",
          "कानूनी/समाजिक सहायता",
          "आयुर्वेद/योग अभ्यास",
          "परेशान लोगों को गाइड करना"
        ],
        career: [
          "स्वास्थ्य सेवा, योग प्रशिक्षक",
          "विधि और न्याय सेवा",
          "सामाजिक कार्यकर्ता",
          "मेडिकल सलाहकार",
          "अनुसंधानकर्ता",
          "सफाई और अनुशासन से जुड़े कार्य"
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
        ],
        neutral: [
          "Preference for fairness in partnerships",
          "Occasional compromise for partnership benefit",
          "Balanced negotiation approach",
          "Moderate involvement in spouse’s ambitions",
          "Patience in resolving disagreements",
          "Value for formal relationship commitments"
        ],
        remedies: [
          "पति/पत्नी के साथ ईमानदारी और सम्मान रखें",
          "गुरुवार को पीले फूल अर्पित करें",
          "धार्मिक स्थलों पर संयुक्त दान करें",
          "संवाद में संयम और संतुलन रखें",
          "विवादों में मध्यस्थता अपनाएँ",
          "धार्मिक यात्राएं साथ करें"
        ],
        hobbies: [
          "काउंसलिंग वर्कशॉप्स",
          "मैरिड कपल्स के लिए सेमिनार",
          "रिलेशनशिप मैटर पर लेखन",
          "को-ऑपरेटिव प्रोजेक्ट्स",
          "दंपत्ति के साथ धार्मिक यात्रा",
          "मेहमानों को गाइड करना"
        ],
        career: [
          "कानूनी सलाहकार",
          "दंपत्ति काउंसलर",
          "बिजनेस पार्टनरशिप",
          "डिप्लोमैटिक सर्विस",
          "मार्केटिंग और सेल्स",
          "सामाजिक सेवाएँ"
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
        ],
        neutral: [
          "Practical in handling crises",
          "Curiosity about mystical subjects",
          "Moderate secrecy in sensitive matters",
          "Balanced patience in change",
          "Interest in karmic lessons of life",
          "Occasional spiritual withdrawal"
        ],
        remedies: [
          "गुप्त विद्या का दुरुपयोग न करें",
          "मार्गदर्शक/गुरु की संगति में रहें",
          "गुरुवार को पीला कपड़ा और गुड़ दान करें",
          "तिल और हल्दी को जल में बहाएं",
          "नियमित ध्यान और योग करें",
          "पुराने विवादों को सुलझाएं और क्षमा करें"
        ],
        hobbies: [
          "एस्ट्रोलॉजी स्टडी",
          "मिस्टीरी/ओकल्ट क्लब जॉइन करना",
          "हिस्ट्री ऑफ रिलिजन पढ़ना",
          "रिसर्च/राइटिंग",
          "मेडिटेशन/योग",
          "सीक्रेट/गुप्त सहायता देना"
        ],
        career: [
          "वित्तीय सलाहकार",
          "अनुसंधानकर्ता",
          "मनोवैज्ञानिक",
          "ज्योतिषी, टैरो रीडर",
          "गुप्तचर या फोरेंसिक विशेषज्ञ",
          "बीमा और निवेश क्षेत्र"
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
        ],
        neutral: [
          "Respect for multiple belief systems",
          "Interest in cultural exchange",
          "Moderate participation in spiritual practices",
          "Occasional long-distance travel",
          "Balanced ideological discussions",
          "Philosophy-driven personal goals"
        ],
        remedies: [
          "विद्यार्थियों को छात्रवृत्ति दें",
          "गुरुवार को केसर और हल्दी का दान करें",
          "गुरु का सम्मान करें और सेवा करें",
          "गुरु मन्त्र का जाप करें",
          "धार्मिक यात्रा करें और धर्मग्रंथ पढ़ें",
          "परोपकार में भाग लें"
        ],
        hobbies: [
          "धार्मिक ग्रुप टूर करना",
          "वेद-शास्त्र अध्ययन",
          "स्पिरिचुअल रिट्रीट्स",
          "फिलॉसफी क्लब में भाग लेना",
          "मल्टीकल्चरल प्रोग्राम्स",
          "हायर स्टडीज/स्कॉलरशिप समझाना"
        ],
        career: [
          "धार्मिक गुरु, शिक्षक",
          "वकील, न्यायाधीश",
          "विदेशी सेवा",
          "प्रोफेसर/व्याख्याता",
          "पर्यटन उद्योग",
          "धार्मिक प्रचारक"
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
        ],
        neutral: [
          "Preference for ethical professional decisions",
          "Balanced thinking in leadership",
          "Patience in long-term career growth",
          "Occasional slow adoption of new strategies",
          "Value for public recognition",
          "Moderate reliance on senior guidance"
        ],
        remedies: [
          "ईमानदारी से पेशा अपनाएँ",
          "गुरुवार को मंदिर में पीला चावल दान करें",
          "गुरु या वरिष्ठ अधिकारी का सम्मान",
          "कार्यक्षेत्र में नैतिकता और नियमों का पालन करें",
          "कर्म योग को अपनाएं",
          "सार्वजनिक कल्याण के कार्य करें"
        ],
        hobbies: [
          "कोचिंग",
          "सेमिनार कंडक्ट करना",
          "प्रोफेशनल ट्रेनिंग",
          "लीडरशिप डेवलपमेंट",
          "सामाजिक व्यवस्था",
          "मेजर कैरियर इवेंट्स में भाग लेना"
        ],
        career: [
          "सरकारी पदाधिकारी",
          "शिक्षा संस्थान प्रमुख",
          "व्यापारिक सलाहकार",
          "प्रशासनिक अधिकारी",
          "प्रोजेक्ट मैनेजर",
          "धार्मिक/सामाजिक नेता"
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
        ],
        neutral: [
          "Selectiveness in networking",
          "Value for steady team growth",
          "Occasional preference for small gatherings",
          "Participation in community projects",
          "Balancing personal gain with group needs",
          "Moderate optimism in group ventures"
        ],
        remedies: [
          "सच्चे मित्र बनाएं",
          "गुरुवार को अंध विद्यालय/अनाथालय में सेवा",
          "लालच और अनैतिक निवेश से दूर रहें",
          "धार्मिक समूह गतिविधियों में योगदान दें",
          "टीम में सत्यनिष्ठा रखें",
          "साझा प्रोजेक्ट्स में निष्पक्षता रखें"
        ],
        hobbies: [
          "नेटवर्किंग इवेंट",
          "सोशल क्लब में भाग लेना",
          "लायंस/रोटरी जैसे ग्रुप्स",
          "फंडरेजिंग वॉलंटियरिंग",
          "सपोर्ट ग्रुप गाइड करना",
          "ग्लोबल स्टडी सर्कल बनाना"
        ],
        career: [
          "नेटवर्किंग आयोजक",
          "सामूहिक कार्यकर्ता",
          "सामाजिक कार्यकर्ता",
          "फंडरेजर",
          "सामाजिक सेवाओं के आयोजक",
          "प्रेरणा वक्ता"
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
        ],
        neutral: [
          "Occasional preference for solitude",
          "Balanced approach to charity and self-care",
          "Interest in foreign lands",
          "Moderate secrecy in personal life",
          "Acceptance of past mistakes",
          "Value for mental peace over material gain"
        ],
        remedies: [
          "गुप्त दान करें",
          "अस्पताल, आश्रम या स्कूल में सेवा करें",
          "गुरुवार को पीले फल दान करें",
          "मन की शांति के लिए ध्यान करें",
          "विदेश यात्रा से पहले गुरुवार को दान",
          "धार्मिक ग्रंथ पढ़ना आदत बनाएं"
        ],
        hobbies: [
          "मेडिटेशन कैंप",
          "फॉरेन स्टडी ट्रैवल",
          "चैरिटी वॉलंटियरिंग",
          "स्पिरिचुअल काउंसलिंग",
          "धार्मिक/शांति रिट्रीट्स",
          "रिसर्च प्रोजेक्ट्स"
        ],
        career: [
          "आध्यात्मिक शिक्षक",
          "चित्त शांति गुरु",
          "विदेशी सेवा कर्मी",
          "चिकित्सक, मानसिक स्वास्थ्य विशेषज्ञ",
          "लेखक या चिंतक",
          "धार्मिक संस्थान सेवक"
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
        ],
        neutral: [
          "Restless desire for personal recognition",
          "Interest in new experiences and self-expression",
          "Occasional dissatisfaction with the status quo",
          "Curiosity about social status and power",
          "Quick adaptability to changing circumstances",
          "Preference for unique styles and self-presentation"
        ],
        remedies: [
          "शनि और गणेश जी की नियमित पूजा करें",
          "राहु मंत्र - ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः - 108 बार जाप करें",
          "नीला-सफेद कपड़ा पहनें, लेकिन स्वच्छ रखें",
          "तिल, सरसों का तेल और नीला कपड़ा दान करें",
          "मद्यपान और नशे से दूर रहें",
          "गुरुवार को गरीबों को काले तिल/कंबल दें"
        ],
        hobbies: [
          "नया हेयरस्टाइल या लुक आज़माना",
          "सेल्फी/फोटोशूट",
          "मेटावर्स या अतरंगी आभासी दुनिया एक्सप्लोर करना",
          "कन्फ्यूजन-सॉल्विंग गेम्स",
          "मिस्ट्री मूवीज देखना",
          "सामाजिक मीडिया ट्रेंड्स फॉलो करना"
        ],
        career: [
          "सोशल मीडिया इन्फ्लुएंसर",
          "विपणन और प्रचारक",
          "अनौपचारिक व्यवसाय",
          "विकासशील तकनीकी क्षेत्र से जुड़े काम",
          "फ्रिलांसर या क्रिएटिव प्रोफेशन",
          "मनोरंजन और ग्लैमर उद्योग"
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
        ],
        neutral: [
          "Unconventional choices in family traditions",
          "Interest in collecting rare or foreign items",
          "Open attitude towards different cuisines or tastes",
          "Occasional experimental spending patterns",
          "Moderate attachment to family name or legacy",
          "Fluctuating opinions in family disputes"
        ],
        remedies: [
          "सत्य वाणी बोलने और वाणी संयम का अभ्यास करें",
          "काले तिल, उड़द, नारियल जल में प्रवाहित करें",
          "परिवार में बुजुर्गों का सम्मान करें",
          "सोमवार या शनिवार को चांदी का दान करें",
          "मिश्री और दूध दान करें",
          "चोरी और झूठ से दूर रहें"
        ],
        hobbies: [
          "फाइनेंशियल ट्रेडिंग/क्रिप्टो",
          "ऑनलाइन गैंबलिंग/गेमिंग",
          "स्टैंड-अप/शॉकिंग स्पीच प्रैक्टिस",
          "लॉटरी-रिसर्च",
          "रहस्यमयी कहानियाँ सुनना",
          "रहस्यवादी संगीत या लिरिक्स बनाना"
        ],
        career: [
          "फाइनेंस ट्रेडिंग, क्रिप्टोकरेंसी",
          "ऑनलाइन मार्केटिंग और ई-कॉमर्स",
          "वायरल कंटेंट क्रिएटर",
          "धार्मिक या रहस्यमय विषयों से जुड़ा काम",
          "संग्रह और कलेक्शन",
          "स्पीच थेरेपी या भाषा विशेषज्ञता"
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
        ],
        neutral: [
          "Interest in trending topics or new gadgets",
          "Exploring various short-term projects",
          "Occasional detachment from sibling issues",
          "Tendency to seek new friendships frequently",
          "Changing circles of social influence",
          "Unique approach to communication and writing"
        ],
        remedies: [
          "भाई-बहनों के साथ संबंध सुधारें",
          "निम्नवर्गीय/जरूरतमंद मित्र को कपड़े व भोजन दें",
          "हर शनिवार को काले तिल का दान करें",
          "तुलसी में जल चढ़ाएं और 11 परिक्रमा करें",
          "राहु-केतु पूजन करें",
          "सोशल मीडिया पर विवादास्पद टिप्पणियों से बचें"
        ],
        hobbies: [
          "ब्लॉगिंग/फेक न्यूज़ एक्सप्लोर करना",
          "एडवेंचर बाइकिंग",
          "हैकिंग/कोडिंग चैलेंजेस",
          "ड्रोन फ्लाइंग",
          "स्पाइ/जासूसी गेम्स",
          "शॉर्ट वायरल वीडियोज बनाना"
        ],
        career: [
          "ब्लॉगिंग, वीडियो कंटेंट क्रिएशन",
          "युवा उद्यमिता",
          "डिजिटल मीडिया और एंटरटेनमेंट",
          "हैकिंग और साइबर सुरक्षा",
          "शॉर्ट ट्रिप गाइडिंग",
          "जासूसी या रिसर्च"
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
        ],
        neutral: [
          "Preference for a non-traditional home setup",
          "Interest in redecorating or changing house layouts",
          "Openness to hosting guests from diverse backgrounds",
          "Attachment to unique family routines",
          "Acceptance of periodic changes in home environment",
          "Alternating phases of wanting solitude and activity at home"
        ],
        remedies: [
          "घर में साफ-सफाई और शांति बनाए रखें",
          "मां या मां समान महिला का सम्मान करें",
          "शनि मंदिर में काले तिल और तेल चढ़ाएं",
          "घर के उत्तर-पश्चिम कोना साफ रखें",
          "पक्षियों को दाना डालें",
          "पारिवारिक संपत्ति पर ईमानदार व्यवहार रखें"
        ],
        hobbies: [
          "अभाग्य-निवारण घर डेकोरेशन/टोना-टोटका",
          "सीक्रेट पार्टी होस्टिंग",
          "ज्योतिष/गुप्त विद्या की स्टडी",
          "होम ऑटोमेशन गैजेट्स",
          "पैरानॉर्मल एक्टिविटी रिसर्च",
          "रेट्रो/ग्लैमरस इंटीरियर डिज़ाइनिंग"
        ],
        career: [
          "होम ऑटोमेशन टेक्नोलॉजी",
          "गुप्त सूचना या रिसर्च",
          "ज्योतिष और पौराणिक अध्ययन",
          "इंटीरियर डिजाइनिंग",
          "अनोखे या अनूठे व्यवसाय",
          "सांस्कृतिक आयोजन"
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
        ],
        neutral: [
          "Interest in avant-garde art or music",
          "Experimenting with new hobbies and entertainment",
          "Changing tastes in romantic relationships",
          "Desire to stand out creatively",
          "Occasional detachment from children’s affairs",
          "Contemporary approach to fun and recreation"
        ],
        remedies: [
          "सट्टा, जुआ जैसे जोखिमों से दूर रहें",
          "विद्यार्थियों की मदद करें, किताबें दान करें",
          "काले तिल से बनी मिठाई शनिवार को दान करें",
          "रचनात्मक कार्य करते समय धैर्य बनाए रखें",
          "ॐ रां राहवे नमः 108 बार जाप करें",
          "बाल-कलाकारों को प्रोत्साहन दें"
        ],
        hobbies: [
          "इल्ल्यूजन/मैजिक ट्रिक्स",
          "क्रिप्टिक कविता-लेखन",
          "नवीन खेल या गीक कल्चर",
          "फिल्म-निर्माण/एनीमेशन",
          "मिस्ट्री नोवेल्स",
          "स्पेकुलेटिव इन्वेस्टिंग (क्रिप्टो/शेयर)"
        ],
        career: [
          "फिल्म निर्माण और एनिमेशन",
          "रहस्यमय और साइंस फिक्शन लेखन",
          "क्रुप्टो इन्वेस्टिंग",
          "मैजिक और इल्ल्यूजन शो",
          "नवाचार और तकनीकी प्रदर्शनी",
          "शिक्षण और प्रशिक्षण"
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
        ],
        neutral: [
          "Occasionally experimenting with health routines",
          "Mixed feelings toward co-workers or competitors",
          "Novelty-seeking in workplace problem solving",
          "Interest in unusual wellness trends",
          "Fluctuating discipline in daily routine",
          "Balanced reaction to criticism or rivalry"
        ],
        remedies: [
          "कर्म-क्षेत्र में ईमानदार रहें",
          "काले-नीले कपड़े शनिवार को दान करें",
          "जल प्रवाह में काले उड़द बहाएं",
          "बीमारों और मजदूर वर्ग की सेवा करें",
          "नियमित व्यायाम करें",
          "रोग और कर्ज़ से बचने हेतु गणेश पूजन करें"
        ],
        hobbies: [
          "डिटेक्टिव गेम्स",
          "ऑनलाइन रिसर्च/इन्फॉर्मेशन हंटिंग",
          "रहस्यमयी बीमारियाँ पर स्टडी",
          "टैबू सोशल सर्विस",
          "हैकथॉन/एथिकल हैकिंग",
          "वायरल सॉल्यूशन एक्सपेरिमेंट्स"
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
        ],
        neutral: [
          "Attraction to unique or unconventional partners",
          "Interest in open or experimental relationship types",
          "Changing preferences in partnership roles",
          "Tolerance for partner’s eccentricities",
          "Alternating closeness and distance in relationships",
          "Occasional indifference to traditional social norms"
        ],
        remedies: [
          "संबंधों में पारदर्शिता रखें",
          "विवाह में झूठ या धोखाधड़ी से बचें",
          "पत्नी/पति को इमानदारी और प्यार दें",
          "शनिवार को नीले, काले कपड़ों का दान",
          "काले चने और सरसों के तेल का दान करें",
          "शादी या साझेदारी से पहले विचारशीलता रखें"
        ],
        hobbies: [
          "डेटिंग ऐप यूज करना",
          "अनजानी संस्कृति या रिलेशनशिप ट्रेंड्स एक्सप्लोर करना",
          "चौंकाने वाले सोशल इवेंट्स होस्ट करना",
          "अनकन्वेंशनल कपल फोटोग्राफी",
          "रिलेशनशिप ब्लॉगिंग",
          "मिस्टीरियस डेट्स प्लैन करना"
        ],
        career: [
          "डिजिटल रिलेशनशिप काउंसलर",
          "साझेदारी आधारित व्यवसाय",
          "इनोवेटिव मार्केटिंग",
          "खास इवेंट्स और सोशलाइजेशन",
          "महत्वपूर्ण सार्वजनिक संचार",
          "पार्टनरशिप मैनेजमेंट"
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
        ],
        neutral: [
          "Curiosity about hidden subjects",
          "Occasional periods of introspection",
          "Collecting secrets or rare items",
          "Changeable interest in esoteric matters",
          "Balanced response to crises",
          "Pragmatic approach to mystery and loss"
        ],
        remedies: [
          "रहस्यों का दुरुपयोग न करें",
          "अस्पताल/शवदाह गृह में सेवा कार्य करें",
          "ॐ रां राहवे नमः जाप करें",
          "शनिवार को सरसों के तेल का दीपक जलाएं",
          "सांप को दूध पिलाना या नाग-पूजन करें",
          "गुप्त दान करें"
        ],
        hobbies: [
          "ओकल्ट/ज्योतिष/टैरो स्टडी",
          "एस्केप रूम्स/मिस्ट्री गेम्स",
          "स्पाइ एक्टिविटी/क्राइम स्टोरी एनालिसिस",
          "गुप्त शोध या डीप वेब एक्सप्लोर",
          "हिंटेड प्लेसेस विज़िट करना",
          "साइकिक रीडिंग"
        ],
        career: [
          "जासूसी एजेंसी या सिक्योरिटी",
          "रहस्यमय विज्ञान, टैरो कार्ड रीडिंग",
          "फोरेंसिक विशेषज्ञ",
          "आध्यात्मिक शिक्षक या गुरु",
          "वित्तीय सलाहकार",
          "अनुसंधानकर्ता"
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
        ],
        neutral: [
          "Interest in alternative philosophies and religions",
          "Mixed adherence to personal beliefs",
          "Changing views on travel and adventure",
          "Phases of seeking knowledge from various sources",
          "Occasional preference for non-traditional teachers",
          "Open approach to studying belief systems"
        ],
        remedies: [
          "झूठे गुरु या अप्रामाणिक शिक्षा से दूर रहें",
          "यात्रा से पहले काले उड़द और नारियल का जल में विसर्जन",
          "बुजुर्ग गुरुओं का सम्मान करें",
          "भ्रमित करने वाली किताब/ज्ञान से बचें",
          "शनिवार को गरीबों को गर्म कपड़े दें",
          "नए मार्गों में भी ठहराव लाकर कदम रखें"
        ],
        hobbies: [
          "विदेशी/अलौकिक धर्म या संप्रदायों की स्टडी",
          "फारिन ट्रेडिशन्स में पार्टिसिपेट करना",
          "ग्लोबल मिस्ट्रीज एक्सप्लोर करना",
          "स्पिरिचुअल सेमिनार्स (अनोखे विषयों पर)",
          "फॉरेन लैंग्वेज में अनुवाद/डबिंग",
          "अल्टरनेट रिवाज़-रीति सीखना"
        ],
        career: [
          "विदेशी व्यापार और कूटनीति",
          "धार्मिक अध्ययनकर्ता",
          "योग और ध्यान शिक्षक",
          "विश्वविद्यालय में शोधकर्ता",
          "अंतरराष्ट्रीय यात्रा गाइड",
          "कल्पनात्मक लेखक"
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
        ],
        neutral: [
          "Trying different career paths",
          "Preference for freelance or project-based work",
          "Occasional desire for public attention",
          "Willingness to change jobs or roles suddenly",
          "Interest in working with foreign entities",
          "Non-conformist approach to job responsibilities"
        ],
        remedies: [
          "अनुशासन में काम करें",
          "पद-प्रतिष्ठा के लालच में गलत कदम न उठाएं",
          "सरकारी कार्य में रिश्वत से बचें",
          "रविवार और शनिवार का उपवास करें",
          "काले-सफेद तिल को जल में प्रवाहित करें",
          "नीति-नियमों का पालन करें"
        ],
        hobbies: [
          "फिल्म/मीडिया प्रोडक्शन",
          "गुप्त एजेंसी शो का एनालिसिस",
          "टेक स्टार्टअप्स एक्सप्लोर",
          "इनफ्लुएंसर/ग्लैमरस पेशा आजमाना",
          "फेम हंटिंग",
          "वार्तालापों में रहस्य/अनोखे प्रयोग"
        ],
        career: [
          "राजनीति और नेतृत्व पद",
          "मीडिया और पब्लिक रिलेशन",
          "आधुनिक तकनीकी उद्योग",
          "इनोवेशन हब या स्टार्टअप",
          "ग्लोबल कॉर्पोरेट्स",
          "प्रोजेक्ट मैनेजर"
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
        ],
        neutral: [
          "Interest in joining new groups or clubs",
          "Diversity in friendship circles",
          "Occasional detachment from social trends",
          "Alternating involvement in group activities",
          "Tolerance towards eccentric friends",
          "Balanced enthusiasm for community projects"
        ],
        remedies: [
          "मित्रों का सही चयन करें",
          "राहु-शांति हवन कराएं",
          "सोमवार/शनिवार को झूठ न बोलें",
          "समूह गतिविधियों में ईमानदारी रखें",
          "गुरुजनों से सलाह लेकर निवेश करें",
          "कमाई का एक भाग दान करें"
        ],
        hobbies: [
          "सोशल मीडिया वायरल ग्रुप्स",
          "साइबर फ्रेंड नेटवर्किंग",
          "ऑनलाइन पॉडकास्ट/रहस्यमय इंटरव्यू",
          "फ्रीलांसिंग (सीक्रेटिव विधा में)",
          "बुक क्लब (गुप्त कथाएं)",
          "मल्टीप्लयर मिस्ट्री गेम्स"
        ],
        career: [
          "सोशल नेटवर्किंग स्पेशलिस्ट",
          "ऑनलाइन कम्युनिटी मैनेजर",
          "फंडरेजिंग और प्रचार",
          "ग्रुप सोशल सगाई आयोजक",
          "इन्फ्लुएंसर मार्केटिंग",
          "वेब डेवलपर"
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
        ],
        neutral: [
          "Quiet curiosity for spiritual exploration",
          "Variable connection to solitude or privacy",
          "Interest in mysterious or foreign cultures",
          "Periods of introspection and self-questioning",
          "Mixed attitude towards charity and philanthropy",
          "Changing interests in secret or behind-the-scenes roles"
        ],
        remedies: [
          "गुप्त शत्रुओं से बचाव हेतु गणेश उपासना करें",
          "आश्रम, अस्पताल, जेल में सेवा कार्य करें",
          "विदेश यात्रा से पहले गरीबों को दान करें",
          "मन को स्थिर रखने हेतु ध्यान, योग करें",
          "ॐ रां राहवे नमः मंत्र का जाप",
          "शनिवार को नीले-काले वस्त्र और तेल दान करना"
        ],
        hobbies: [
          "ड्रीम जर्नलिंग/सपनों का विश्लेषण",
          "पैरानॉर्मल/अक्ल्ट ट्रैवल",
          "अज्ञात देशों की ट्रैवल व्लॉगिंग",
          "एकांत साधना या कैलियोग्राफी",
          "स्पिरिचुअल रिट्रीट्स (रहस्यवादी)",
          "ऑनलाइन अनाम समूहों में भागीदारी"
        ],
        career: [
          "विदेशी सेवा और प्रवास",
          "धार्मिक और आध्यात्मिक कार्य",
          "डिजिटल नोमैड",
          "गुप्तचर या रिसर्चर",
          "आध्यात्मिक गुरु या गुरुता",
          "आर्टिस्ट या एकांतवादी लेखक"
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
        ],
        neutral: [
          "Occasional change of opinion",
          "Interest in acquiring new skills",
          "Preference for short conversations",
          "Enjoyment of word puzzles and games",
          "Inclined to multitask, sometimes with mixed results",
          "Sometimes favors logic over emotion in decisions"
        ],
        remedies: [
          "बुध मंत्र - ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः - का 108 बार जाप करें",
          "बुधवार को हरे कपड़े पहनें",
          "गौघास (हरा चारा) गाय को खिलाएं",
          "हरे मूंग या पत्तेदार सब्ज़ियों का दान करें",
          "लेखन या अध्ययन की आदत बढ़ाएं",
          "शांत और स्पष्ट वाणी का अभ्यास करें"
        ],
        hobbies: [
          "पब्लिक स्पीकिंग",
          "पज़ल सॉल्विंग",
          "डायरी/जर्नल लिखना",
          "डिबेट में हिस्सा लेना",
          "भाषण कला सीखना",
          "पर्सनैलिटी डेवलपमेंट कोर्स"
        ],
        career: [
          "लेखक, पत्रकार",
          "वक्ता, पब्लिक स्पीकिंग",
          "सलाहकार, प्रशिक्षक",
          "बिजनेस कम्युनिकेशन एक्सपर्ट",
          "विविध तकनीकी पेशेवर",
          "शिक्षक और ट्रेनर"
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
        ],
        neutral: [
          "Interest in budgeting and tracking expenses",
          "Occasionally fluctuating business interests",
          "Preference for analysis before spending",
          "Balanced approach to family negotiations",
          "Sometimes takes time to finalize deals",
          "Periodic interest in financial news"
        ],
        remedies: [
          "बुधवार को हरे वस्त्र या हरे फल का दान करें",
          "गाय को हरा चारा खिलाएँ",
          "बुजुर्गों/परिजनों की आर्थिक मदद करें",
          "संपत्ति और धन सम्बन्धी मामलों में पारदर्शिता रखें",
          "गणेश जी की पूजा करें",
          "हरे कपड़े, तांबा या कांसा उपयोग में लाएँ"
        ],
        hobbies: [
          "फाइनेंशियल प्लानिंग गेम्स",
          "कविता या गीत लेखन",
          "भाषण प्रतियोगिता",
          "नयी भाषा सीखना",
          "फैमिली अकाउंटिंग",
          "ऑडियोबुक रेकॉर्डिंग"
        ],
        career: [
          "वित्तीय विश्लेषक",
          "रायता सलाहकार",
          "बैंकिंग और निवेश",
          "मीडिया और ब्रॉडकास्टिंग",
          "संपत्ति प्रबंधन",
          "पारिवारिक व्यवसाय प्रबंधन"
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
        ],
        neutral: [
          "Enjoyment in group activities",
          "Interest in multiple hobbies",
          "Occasional playful banter with siblings",
          "Frequent changes in preferred subjects",
          "Open to learning from peers",
          "Sometimes mixes humor with serious talks"
        ],
        remedies: [
          "भाई-बहनों के साथ संबंध मजबूत करें",
          "बुधवार को कलम, किताबें दान करें",
          "हरे कांच की चूड़ियां/अंगूठी गिफ्ट करें",
          "गणेश मंत्र का जाप करें",
          "वाणी में मीठास रखें और गपशप से बचें",
          "ग्रीन सब्ज़ियों का सेवन बढ़ाएँ"
        ],
        hobbies: [
        "ट्रैवल ब्लॉगिंग",
        "पत्रकारिता",
        "लोकेशन फोटोग्राफी",
        "भाषायी चर्चा",
        "शॉर्ट ट्रिप प्लानिंग",
        "यूट्यूब व्लॉगिंग"
        ],
        career: [
          "पत्रकार, ब्लॉगर",
          "ट्रैवल गाइड",
          "मार्केटिंग एवं सेल्स प्रोफेशनल",
          "फ्रीलांसर लेखक",
          "संचार और भाषा विशेषज्ञ",
          "शॉर्ट ट्रिप आयोजक"
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
        ],
        neutral: [
          "Interest in reading or studying at home",
          "Occasional mood-based focus on home tasks",
          "Preference for discussing issues logically with family",
          "Mild flexibility in home rules",
          "Sometimes rearranges living spaces for variety",
          "Likes to collect books or quirky home gadgets"
        ],
        remedies: [
          "माता और परिवार से मधुर सम्बंध बनाए रखें",
          "घर की सजावट में हरियाली/पौधे लगाएँ",
          "हरी मूंग या हरा कपड़ा दान करें",
          "संगीत/पढ़ाई के शांत वातावरण में समय बिताएं",
          "घर में उत्तर-पूर्व दिशा साफ रखें",
          "गणेश जी का चित्र/प्रतिमा घर में रखें"
        ],
        hobbies: [
          "फैमिली स्टोरी राइटिंग",
          "होम लाइब्रेरी बनाना",
          "इंटीरियर प्लान के लिए सॉफ्टवेयर डिजाइन",
          "ज्योतिष/वास्तु पढ़ना",
          "पैरेंट्स के साथ क्रिएटिव खेल",
          "घरेलू डॉक्यूमेंटेशन"
        ],
        career: [
          "इंटीरियर डिजाइनर",
          "घर और संपत्ति प्रबंधक",
          "शिक्षक",
          "लेखन या परिवारिक सेवा क्षेत्र",
          "सामाजिक कार्यकर्ता"
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
        ],
        neutral: [
          "Playful approach to learning",
          "Enjoyment in friendly competition",
          "Preference for intellectual discussions in romance",
          "Interest in diverse creative outlets",
          "Sometimes shifts between academic and artistic pursuits",
          "Balanced approach to children’s questions"
        ],
        remedies: [
          "बुधवार को बच्चे/विद्यार्थियों को लिखने का सामान दें",
          "अध्ययन या क्रिएटिव स्किल सुधारने हेतु कोर्स करें",
          "रत्न - पन्ना (Emerald) पहनें (सुझाव पर)",
          "बुद्धि-वर्धक मंत्रों का जाप करें",
          "शतरंज, पज़ल आदि से मानसिक क्षमता बढ़ाएँ",
          "दूसरों को पढ़ाने/गाइड करने में सहयोग करें"
        ],
        hobbies: [
          "क्रिएटिव राइटिंग",
          "बच्चों को पढ़ाना",
          "एजुकेशनल गेम्स",
          "स्टेज ड्रामा",
          "कोडिंग/ऑनलाइन लर्निंग",
          "क्विज़ प्रतियोगिता"
        ],
        career: [
          "शिक्षक, कोच",
          "कंटेंट राइटर, संपादक",
          "क्रिएटिव लेखक",
          "मीडिया और मनोरंजन",
          "शिक्षा क्षेत्र के प्रबंधक",
          "साहित्यकार"
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
        ],
        neutral: [
          "Interest in health tips and new routines",
          "Occasionally varied work pace",
          "Testing different methods for problem solving",
          "Preference for adaptable daily schedules",
          "Likes learning about workplace tech or systems",
          "Moderate attention to wellness trends"
        ],
        remedies: [
          "गाय को हरा चारा खिलाएं",
          "झगड़ा/वाद-विवाद से बचें",
          "बुधवार को अस्पताल में फल वितरित करें",
          "हर्बल चाय/हरी सब्जियों से सेहत सुधारें",
          "नियमित योग व ध्यान करें",
          "हरे मूंग का जल में प्रवाह करें"
        ],
        hobbies: [
          "डेली जर्नल बनाना",
          "ऑर्गनाइज़ेशन प्लानिंग",
          "डेटा एनालिसिस",
          "वर्कशॉप कंडक्ट करना",
          "बुककीपिंग",
          "सर्विस ट्रेनिंग"
        ],
        career: [
          "स्वास्थ्य सेवा में प्रशासन",
          "समाजसेवी",
          "विश्लेषक, डेटा प्रोफेशनल",
          "मेडिकल रिसर्चर",
          "रूटीन मैनेजर",
          "सर्विस ट्रेनर"
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
        ],
        neutral: [
          "Periodic interest in discussing relationship terms",
          "Preference for clarity in communication with partner",
          "Occasional wit in partner interactions",
          "Changing preferences in mutual activities",
          "Balanced approach to resolving misunderstandings",
          "Sometimes lets partner lead conversations"
        ],
        remedies: [
          "संबंधों में स्पष्ट संवाद और ईमानदारी रखें",
          "गणेश जी के मंदिर में बुधवार को दर्शन करें",
          "व्यापारिक साझेदार से वाद-विवाद टालें",
          "हरे फल व सब्ज़ियां दोनों मिलकर दान करें",
          "बुधवार को दूल्हा-दुल्हन या जोड़े की मदद करें",
          "संयुक्त निर्णय सोच-समझकर लें"
        ],
        hobbies: [
          "कपल ब्लॉगिंग",
          "रिलेशनशिप काउंसलिंग",
          "जॉइंट बिज़नेस प्लानिंग",
          "ट्रैवल व्लॉग विद पार्टनर",
          "टीम कम्युनिकेशन वर्कशॉप",
          "को-ऑथरिंग बुक्स"
        ],
        career: [
          "काउंसलर, रिलेशनशिप एक्सपर्ट",
          "बिजनेस पार्टनरशिप",
          "सामाजिक आयोजक",
          "मार्केटिंग एवं सेल्स",
          "क्लाइंट मैनेजर"
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
        ],
        neutral: [
          "Interest in solving mysteries or puzzles",
          "Occasional shifts in focus between subjects",
          "Balanced attitude to personal secrets",
          "Preference for logic in emotional matters",
          "Trying various approaches to problem solving",
          "Interest in unconventional knowledge sources"
        ],
        remedies: [
          "बुधवार को हरे वस्त्र या रुमाल अपने पास रखें",
          "गुप्त शत्रुओं से बचने हेतु सावधानी",
          "पढ़ाई और शोध में समय दें",
          "हरे चने या हरा मूंग गरीबों में बांटें",
          "ध्यान और प्राणायाम करें",
          "किसी बुजुर्ग से बुद्धिमत्ता भरी राय लें"
        ],
        hobbies: [
          "साइकोलॉजी/माइंड साइंस स्टडी",
          "पज़ल/मिस्ट्री सॉल्विंग",
          "डेटा रिसर्च",
          "गुप्त लेखन",
          "ओकल्ट आर्टिकल्स लिखना",
          "इन्वेस्टिगेशन गेम्स"
        ],
        career: [
          "रिसर्चर",
          "जासूसी या फोरेंसिक",
          "विश्लेषक",
          "ज्योतिष या टैरो विशेषज्ञ",
          "गुप्तचर",
          "अध्यात्मिक शिक्षक"
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
        ],
        neutral: [
          "Interest in online education or global seminars",
          "Changing academic topics or focus",
          "Occasional travel for learning",
          "Flexible approach to belief systems",
          "Balanced curiosity about cultural differences",
          "Mixes practical and philosophical viewpoints"
        ],
        remedies: [
          "शिक्षक/गुरु का सम्मान करें",
          "विदेश यात्रा से पहले दान-पुण्य करें",
          "बुधवार को हरे रंग की वस्तु दान करें",
          "विद्या-विनम्रता के साथ अर्जित करें",
          "गुरु मंत्र या गणेश मंत्र का जाप करें",
          "पढ़ने/पढ़ाने में रुचि रखें"
        ],
        hobbies: [
          "भाषा/संस्कृति अध्ययन",
          "यात्रा वृत्तांत लिखना",
          "विदेशी भाषाओं का अनुवाद",
          "स्पिरिचुअल ब्लॉगिंग",
          "सांस्कृतिक शोध",
          "धार्मिक बहस"
        ],
        career: [
          "शिक्षक, प्रोफेसर",
          "धार्मिक प्रचारक",
          "विदेशी सेवा",
          "सांस्कृतिक विशेषज्ञ",
          "विदेशी यात्रा सलाहकार"
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
        ],
        neutral: [
          "Interest in trying new professional domains",
          "Changing approach to project management",
          "Preference for short-term projects",
          "Mild attention to public opinion",
          "Occasional use of humor at work",
          "Testing new business strategies"
        ],
        remedies: [
          "ऑफिस में ईमानदारी और स्पष्टता रखें",
          "कार्यस्थल पर हरियाली बढ़ाएं (पौधे लगाएँ)",
          "गणेश जी के चित्र अपने डेस्क पर रखें",
          "बुधवार को कार्यस्थल के स्टाफ को मिठाई/फल दें",
          "पढ़ने और रिसर्च करने की आदत बनाए रखें",
          "ध्यान-एकाग्रता के अभ्यास करें"
        ],
        hobbies: [
          "बिज़नेस नेटवर्किंग",
          "ऑनलाइन कोर्स बनाना",
          "कम्युनिकेशन ट्रेनिंग",
          "प्रोफेशनल ब्लॉगिंग",
          "मार्केट रिसर्च",
          "कन्फ्रेंस होस्टिंग"
        ],
        career: [
          "प्रशासनिक अधिकारी",
          "प्रोफेशनल ट्रेनर",
          "लेखक और वक्ता",
          "संचार विशेषज्ञ",
          "इवेंट मैनेजर"
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
        ],
        neutral: [
          "Interest in collaborative group work",
          "Occasionally shifting friend circles",
          "Affinity for intellectual debate among friends",
          "Balanced approach to networking events",
          "Mixes fun and work in social settings",
          "Occasional preference for online groups"
        ],
        remedies: [
          "नेटवर्क में अच्छे मित्र बनाएं",
          "गुरुवार/बुधवार को गुरु या मेंटर का आशीर्वाद लें",
          "गणेश मंदिर में सामूहिक दर्शन करें",
          "हरी मूंग की खिचड़ी बनाकर गरीबों को खिलाएं",
          "नेटवर्किंग में सजग रहें",
          "सत्य और स्पष्टता से समूह में योगदान दें"
        ],
        hobbies: [
          "सोशल मीडिया मैनेजमेंट",
          "पब्लिक रिलेशन एक्टिविटी",
          "फ्रेंड्स पॉडकास्ट",
          "नेटवर्किंग इवेंट्स",
          "टीम क्विज़ नाइट",
          "कम्युनिटी न्यूज़लेटर"
        ],
        career: [
          "नेटवर्किंग स्पेशलिस्ट",
          "सोशल मीडिया मैनेजर",
          "फ्रेंड्स ग्रुप आयोजक",
          "फंडरेजर",
          "कम्युनिटी लीडर"
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
        ],
        neutral: [
          "Occasional involvement in secret activities",
          "Interest in foreign philosophies",
          "Preference for privacy in personal life",
          "Flexible attitude toward charitable work",
          "Curiosity about spiritual retreats",
          "Need for periodic solitude to recharge"
        ],
        remedies: [
          "विदेश यात्रा पूर्व या कठिन समय में दान करें",
          "अस्पताल/आश्रम में सेवा दें",
          "गुप्त दान करें (शिक्षा सामग्री/हरे अनाज)",
          "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः का 108 जाप",
          "ध्यान और प्राणायाम करें",
          "आध्यात्मिक अध्ययन में समय बिताएं"
        ],
        hobbies: [
          "फॉरेन लैंग्वेज स्टडी",
          "ट्रैवल जर्नलिंग",
          "ध्यान और पुस्तक समीक्षा",
          "स्पिरिचुअल राइटिंग",
          "ऑनलाइन रिसर्च",
          "विदेशी लेखकों की किताबें पढ़ना"
        ],
        career: [
          "लेखक, चिंतक",
          "धार्मिक गुरु, ध्यान शिक्षक",
          "विदेशी सेवा कर्मी",
          "स्वतंत्र लेखक",
          "शांतिपूर्ण एकांत कार्य"
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
        ],
        neutral: [
          "Desire for a pleasant personal image",
          "Occasional preference for luxury over necessity",
          "Interest in self-care and grooming",
          "Moderate importance given to social approval",
          "Changing moods in personal interactions",
          "Balanced mix of practicality and charm"
        ],
        remedies: [
          "शुक्र मंत्र - ॐ द्रां द्रीं द्रौं सः शुक्राय नमः - का 108 बार जाप करें",
          "शुक्रवार को सफेद वस्त्र और इत्र पहनें",
          "गरीब कन्या को सौंदर्य-सामग्री या वस्त्र दान करें",
          "साफ-सफाई और सुगंध बनाए रखें",
          "स्वस्थ रिश्ते बनाए रखने हेतु नम्र भाषा अपनाएँ",
          "कला/संगीत में रुचि लें"
        ],
        hobbies: [
          "फैशन स्टाइलिंग",
          "मॉडलिंग",
          "मेकअप आर्ट",
          "पर्सनैलिटी ग्रूमिंग",
          "फोटोशूट/सेल्फी कलेक्शन",
          "ज्वेलरी डिजाइन"
        ],
        career: [
          "फैशन डिजाइनर, कॉस्मेटोलॉजिस्ट",
          "मॉडलिंग और फोटोशूट",
          "संपर्क और पर्सनैलिटी कोच",
          "संगीतकार, कलाकार",
          "सौंदर्य प्रसाधन व्यवसाय",
          "ज्वेलरी डिजाइनर"
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
        ],
        neutral: [
          "Enjoyment of good food and comforts",
          "Occasional splurging on décor or art",
          "Need for harmony in family discussions",
          "Mild attachment to valuable possessions",
          "Balanced focus on earning and saving",
          "Interest in maintaining social grace in financial dealings"
        ],
        remedies: [
          "मीठा खिलाएं और खुद भी ग्रहण करें",
          "शुक्रवार को सफेद मीठाई दान करें",
          "गाय या गौशाला में चारा व गुड़ खिलाएं",
          "पारिवारिक मेल-मिलाप में मधुरता लाएं",
          "साफ-सुथरे वस्त्र पहनकर बैठकों में जाएं",
          "बहनों और कन्याओं को उपहार दें"
        ],
        hobbies: [
          "गायन/वादन",
          "कुकिंग और बेकिंग",
          "लक्ज़री आइटम कलेक्शन",
          "फाइन डाइनिंग",
          "होम डेकोर",
          "पारिवारिक आयोजन"
        ],
        career: [
          "कुकिंग और बेकिंग पेशे",
          "फाइन डाइनिंग और रेस्टोरेंट व्यवसाय",
          "लक्ज़री सामान विक्रेता",
          "फाइनेंसियल योजना सलाहकार",
          "पारिवारिक व्यापार प्रबंधन"
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
        ],
        neutral: [
          "Interest in collaborative creative work",
          "Occasional desire to avoid sibling disputes",
          "Friendly but selective socialising",
          "Balanced tone in negotiation",
          "Mild inclination towards music or art in speech",
          "Preference for aesthetically pleasing environments"
        ],
        remedies: [
          "भाई-बहनों के साथ मधुर संवाद स्थापित करें",
          "कला/लेखन में समय दें",
          "शुक्रवार को सफेद फूल दान करें",
          "संगीत/नृत्य कार्यशालाओं में भाग लें",
          "हरे/सफेद कपड़े धारण करें",
          "मनोरंजन में संयम रखें"
        ],
        hobbies: [
          "ट्रैवल फोटोग्राफी",
          "रोमांटिक ब्लॉगिंग",
          "शार्ट ट्रिप विथ फैमिली",
          "कला प्रदर्शनी देखना",
          "पोएट्री/शायरी लिखना",
          "भाई-बहनों संग म्यूज़िक सेशन"
        ],
        career: [
          "ट्रैवल ब्लॉगिंग और फोटोग्राफी",
          "साहित्यकार, कवि, शायर",
          "सोशल मीडिया इन्फ्लुएंसर",
          "डिजाइनर, आर्टिस्ट",
          "कला और संगीत शिक्षक"
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
        ],
        neutral: [
          "Interest in home improvement",
          "Attachment to comfort and style in residence",
          "Preference for well-decorated surroundings",
          "Mild adaptability in household changes",
          "Balanced role between work and home duties",
          "Occasional desire to host social gatherings"
        ],
        remedies: [
          "घर में साफ-सफाई और सुगंध बनाए रखें",
          "मां का आशीर्वाद लें",
          "गृह में गुलाब, मोगरा आदि के फूल रखें",
          "शुक्रवार को घर के नौकरों को मीठा दें",
          "सुंदर पर्दे/कपड़े से सजावट करें",
          "भोजन में दूध या मिठास शामिल करें"
        ],
        hobbies: [
          "होम डेकोरेशन",
          "गार्डनिंग",
          "इंटीरियर डिजाइन",
          "घर पर संगीत महफिल",
          "कुकिंग और सर्विंग",
          "सुगंधित कैंडल बनाना"
        ],
        career: [
          "इंटीरियर डिजाइनर",
          "होम डेकोरेटर",
          "फैमिली काउंसलर",
          "रियल एस्टेट व्यवसायी",
          "सौंदर्य सेवाएं और स्पा"
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
        ],
        neutral: [
          "Occasional playful romantic gestures",
          "Attraction to artistic hobbies",
          "Interest in festive and cultural events",
          "Balanced admiration for beauty and skill",
          "Variable interest in speculative ventures",
          "Changing focus between romance and creative work"
        ],
        remedies: [
          "बच्चों और विद्यार्थियों को कला सिखाएं",
          "शुक्रवार को चॉकलेट/मिठाई बच्चों को दें",
          "रचनात्मक कार्यों में समय दें",
          "गाय के दूध से बने खाद्य पदार्थ ग्रहण करें",
          "सकारात्मक प्रेम संबंध हेतु 'ॐ शुक्राय नमः' का जप करें",
          "अपनी कला को समाज सेवा से जोड़ें"
        ],
        hobbies: [
          "ड्रामा/थिएटर एक्टिंग",
          "डांस क्लासेज",
          "क्रिएटिव पेंटिंग",
          "फैशन ड्रॉइंग",
          "रोमांटिक कहानियाँ लिखना",
          "बाल कला कार्यशाला"
        ],
        career: [
          "अभिनेता, नर्तक, कलाकार",
          "ड्रामा शिक्षक",
          "क्रिएटिव राइटर",
          "मनोरंजन उद्योग से जुड़े कार्य",
          "डिजाइन और कला के शिक्षक"
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
        ],
        neutral: [
          "Interest in creating a peaceful workspace",
          "Mild flexibility in routines",
          "Occasional avoidance of minor conflicts",
          "Preference for fairness in workplace dealings",
          "Changing interest in fitness or diet plans",
          "Measured reaction to workplace competitiveness"
        ],
        remedies: [
          "शत्रुता से बचें, व्यवहार में मधुरता रखें",
          "कार्यस्थल पर सुगंधित माहौल बनाएं",
          "गुलाबी रंग का रूमाल साथ रखें",
          "गाय को रोज़ाना हरा चारा दें",
          "शुक्रवार को मीठा/खीर दान करें",
          "रोगियों की सेवा करें"
        ],
        hobbies: [
          "सौंदर्य देखभाल रूटीन",
          "योग और डांस एक्सरसाइज",
          "फ्लोरल गार्डनिंग",
          "हेल्दी कुकिंग",
          "अरोमाथेरेपी",
          "म्यूज़िक थैरेपी"
        ],
        career: [
          "फैशन और ब्यूटी कंसल्टेंट",
          "योग और डांस प्रशिक्षक",
          "स्वास्थ्य और सौंदर्य थैरेपिस्ट",
          "फूलों की कढ़ाई या गार्डनिंग",
          "सौंदर्य थैरेपी और अरोमाथेरेपी"
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
        ],
        neutral: [
          "Preference for respectful dialogue in marriage",
          "Occasional flexibility in partnership roles",
          "Balanced sharing of responsibilities",
          "Mild concern for social image as a couple",
          "Interest in building harmonious public appearances",
          "Changing preferences for joint activities"
        ],
        remedies: [
          "पति/पत्नी को उपहार दें और इज्ज़त करें",
          "शुक्रवार को सफेद वस्त्र या आभूषण पहनें",
          "विवाह में सामंजस्य हेतु शिव-पार्वती का पूजन करें",
          "दाम्पत्य में सौंदर्य और स्वच्छता बनाए रखें",
          "संवाद में मिठास रखें",
          "कटु वचन से बचें"
        ],
        hobbies: [
          "कपल डांस",
          "रोमांटिक डिनर",
          "कपल फोटोग्राफी",
          "डेस्टिनेशन वेडिंग प्लानिंग",
          "लव पोएट्री",
          "जॉइंट आर्ट प्रोजेक्ट्स"
        ],
        career: [
          "विवाह सलाहकार और प्लानर",
          "कपल काउंसलर",
          "सोशल इवेंट प्लानर",
          "लव और रिलेशनशिप काउंसलिंग",
          "क्रिएटिव पार्टनरशिप व्यवसाय"
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
        ],
        neutral: [
          "Curiosity about hidden aspects of life",
          "Occasional interest in mystery literature or shows",
          "Moderate secrecy in personal matters",
          "Changing interest in spiritual or mystical topics",
          "Preference for emotional privacy",
          "Mixed feelings towards deep emotional sharing"
        ],
        remedies: [
          "शुक्रवार को मंदिर में गुलाब के फूल अर्पित करें",
          "गुप्त दान करें (भोजन/कपड़े)",
          "जल में गुलाब पंखुड़ियां डालकर स्नान करें",
          "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः का जाप करें",
          "अत्यधिक गोपनीयता व छल से बचें",
          "शांत और संतुलित आचरण रखें"
        ],
        hobbies: [
          "मिस्ट्री फिल्म देखना",
          "परफ्यूम कलेक्शन",
          "फैशन स्टाइल रिसर्च",
          "ग्लैमरस फोटोशूट्स",
          "सीक्रेट आर्ट गैलरी विज़िट",
          "विंटेज ज्वेलरी कलेक्शन"
        ],
        career: [
          "फैशन और ग्लैमर उद्योग",
          "फॉरेंसर या फोटोग्राफर",
          "एनिमेशन और फिल्म निर्माण",
          "अनोखी कलेक्शन और आर्ट गैलरी",
          "परफ्यूम और कॉस्मेटिक्स निर्माता"
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
        ],
        neutral: [
          "Interest in travel for leisure and learning",
          "Balanced respect for various philosophies",
          "Occasional creative involvement in cultural events",
          "Moderate curiosity about different belief systems",
          "Changing depth of spiritual practices",
          "Preference for comfortable travel arrangements"
        ],
        remedies: [
          "गुरुजनों व धर्मपत्नी का सम्मान करें",
          "शुक्रवार को सिक्के, कपड़े तीर्थस्थल पर दान करें",
          "विदेश/यात्रा से पहले सफेद मिठाई का दान करें",
          "कला व धर्म के संगम में भाग लें",
          "धार्मिक कार्यक्रम में सफेद वस्त्र धारण करें",
          "दूसरों के मतों का सम्मान करें"
        ],
        hobbies: [
          "स्पिरिचुअल ट्रैवल",
          "कल्चरल फेस्टिवल्स",
          "विदेशी कला और फैशन सीखना",
          "धार्मिक नृत्य संगीत",
          "ऐतिहासिक आर्ट टूर",
          "कल्चरल डॉक्यूमेंट्री देखना"
        ],
        career: [
          "स्पिरिचुअल टीचर, योग गुरु",
          "कल्चरल इवेंट ऑर्गनाइजर",
          "विदेश यात्रा गाइड",
          "धार्मिक संगीतकार",
          "शिक्षक, प्रोफेसर"
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
        ],
        neutral: [
          "Interest in leadership roles with creativity",
          "Changing focus between career and personal life",
          "Moderate ambition with preference for balance",
          "Occasional reliance on charm to gain advantage",
          "Value for aesthetic presentation at work",
          "Flexibility in career direction"
        ],
        remedies: [
          "कार्यस्थल पर साफ-सुथरा और सुंदर माहौल बनाएं",
          "सहकर्मियों को मीठा बांटें",
          "इत्र/सुगंधित तेल का उपयोग करें",
          "ईमानदारी और सौंदर्यपूर्ण प्रस्तुति रखें",
          "शुक्रवार को कोई छोटा उपहार सहकर्मी को दें",
          "अपनी कला/स्किल को निखारें"
        ],
        hobbies: [
          "फैशन बिज़नेस",
          "इवेंट प्लानिंग",
          "फिल्म/मीडिया प्रोडक्शन",
          "कॉस्मेटिक ब्रांडिंग",
          "मॉडलिंग शो",
          "लक्ज़री मार्केटिंग"
        ],
        career: [
          "फैशन इंडस्ट्री प्रबंधक",
          "इवेंट मैनेजर",
          "मीडिया और पब्लिक रिलेशन",
          "फिल्म और थिएटर प्रोड्यूसर",
          "लक्ज़री ब्रांड एंबेसडर"
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
        ],
        neutral: [
          "Enjoyment of social gatherings",
          "Balanced give-and-take in friendships",
          "Diverse but selective social circles",
          "Changing involvement in group activities",
          "Moderate focus on popularity",
          "Occasional preference for smaller friend circles"
        ],
        remedies: [
          "दोस्तों के साथ संबंध मधुर बनाएं",
          "साझा भोज या चाय-समारोह करें",
          "शुक्रवार को सफेद या हरे कपड़े दान करें",
          "समूह में सभी को सम्मान दें",
          "सामाजिक कार्यों में कुछ योगदान दें",
          "संबंधित मित्र की आर्थिक मदद करें"
        ],
        hobbies: [
          "फ्रेंड्स पार्टी",
          "सोशल गैदरिंग फोटोग्राफी",
          "म्यूज़िक बैंड",
          "थीम पार्टियों का आयोजन",
          "ग्लैमरस नेटवर्किंग",
          "कला मेले में भाग लेना"
        ],
        career: [
          "सोशल नेटवर्किंग एक्सपर्ट",
          "पार्टी आयोजक, सोशल इवेंट मैनेजर",
          "म्यूजिक बैंड या शो के आयोजक",
          "कलात्मक या सांस्कृतिक आयोजक",
          "फैशन और आर्ट फेस्टिवल क्यूरेटर"
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
        ],
        neutral: [
          "Interest in artistic charity projects",
          "Occasional retreat into solitude for self-reflection",
          "Preference for calm and harmonious surroundings",
          "Changing focus between self-care and social work",
          "Balanced view of spiritual and material needs",
          "Mild fascination with foreign or hidden cultures"
        ],
        remedies: [
          "गुप्त दान करें (कपड़े/भोजन)",
          "विदेश यात्रा से पहले गरीबों को मिठाई खिलाएं",
          "ध्यान और योग को रोजमर्रा में अपनाएं",
          "शुक्रवार को सफेद फूल अर्पित करें",
          "एकांत में रचनात्मक कार्य करें",
          "भावनाओं को कला में बदलें"
        ],
        hobbies: [
          "विदेश यात्रा",
          "सी बीच रिलैक्सेशन",
          "लक्ज़री स्पा",
          "एकांत में संगीत सुनना",
          "विदेशी कला व फैशन सीखना",
          "योगा/डांस रिट्रीट"
        ],
        career: [
          "विदेशी फैशन डिजाइनर या आर्टिस्ट",
          "स्पा और विश्राम केंद्र संचालन",
          "धार्मिक आश्रम में सेवा",
          "ध्यान और योग प्रशिक्षक",
          "इंटरनेशनल कल्चरल काउंसलर"
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
        ],
        neutral: [
          "Occasional need for self-reflection",
          "Mild indifference to social validation",
          "Willingness to observe before acting",
          "Interest in spiritual topics without full commitment",
          "Periodic preference for solitude",
          "Balanced attitude toward personal ambitions"
        ],
        remedies: [
          "ॐ कें केतुये नमः मंत्र का 108 बार जाप करें",
          "काले/सफेद कंबल या चादर मंदिर में दान करें",
          "काले-सफेद कंबल या ऊनी वस्त्र दान करें",
          "मंगलवार को हनुमान मंदिर में नारियल चढ़ाएं",
          "साधना और ध्यान का अभ्यास करें",
          "मिट्टी के पात्र में जल भरकर पीपल के पेड़ में अर्पित करें"
        ],
        hobbies: [
          "ध्यान और योग अभ्यास",
          "आत्मचिंतन",
          "साधु-संतों से मिलना",
          "मिनिमलिस्ट लाइफस्टाइल अपनाना",
          "सोलो ट्रैवल",
          "ज्योतिष व दर्शन अध्ययन"
        ],
        career: [
          "आध्यात्मिक शिक्षक, योग गुरु",
          "ध्यान और तांत्रीय साधक",
          "गुप्त और रहस्यमय विज्ञान शोधकर्ता",
          "साधु-संत या गुरु के रूप में सेवा",
          "कौन, रहस्य और जासूसी से जुड़ा कार्य",
          "गुप्तचर या फोरेंसिक विश्लेषक"
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
        ],
        neutral: [
          "Occasional quietness in communication",
          "Variable interest in financial matters",
          "Preference for simplicity in possessions",
          "Mild attachment to family traditions",
          "Selective participation in family discussions",
          "Interest in minimal but meaningful investments"
        ],
        remedies: [
          "काले-सफेद तिल जल में प्रवाहित करें",
          "परिवार में सच और पारदर्शिता बनाए रखें",
          "बुजुर्गों और गुरुजनों का आशीर्वाद लें",
          "मंगलवार/शनिवार को चावल और गुड़ का दान",
          "भोजन में सादा और सात्विक भोजन शामिल करें",
          "झूठ और चुगली से दूर रहें"
        ],
        hobbies: [
          "आध्यात्मिक भजन गाना",
          "दान-पुण्य कार्य",
          "फैमिली हिस्ट्री और रूट्स की खोज",
          "संस्कृत श्लोक कंठस्थ करना",
          "सरल जीवनशैली अपनाना",
          "फिलॉसफिकल डिस्कशन"
        ],
        career: [
          "धार्मिक भजन गायक या साधक",
          "दान-पुण्य और सेवा संबंधित कार्य",
          "संस्कृत या पुरातन ग्रंथों का शोधकर्ता",
          "सरल और संयमित जीवनशैली आधारित व्यवसाय",
          "आध्यात्मिक पुस्तक लेखक",
          "साधना और ध्यान केन्द्र संचालित करना"
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
        ],
        neutral: [
          "Occasional participation in sibling activities",
          "Measured approach in social conversations",
          "Interest in intellectual interactions in small groups",
          "Balanced involvement in community tasks",
          "Changing attitude towards hobbies",
          "Mild detachment in team-oriented situations"
        ],
        remedies: [
          "भाई-बहनों से तालमेल बनाए रखें",
          "हरे कपड़े और नारियल मंदिर में अर्पित करें",
          "संतों/गुरुओं की सेवा करें",
          "मंगलवार को तांबे का दान",
          "गपशप और विवाद से बचें",
          "कलम और किताब जरूरतमंद विद्यार्थियों को दान करें"
        ],
        hobbies: [
          "तीर्थ यात्रा",
          "ध्यान रिट्रीट में भाग लेना",
          "हस्तलिखित पत्र/जर्नल",
          "गुप्त लेखन",
          "माइंडफुल ट्रेकिंग",
          "भाई-बहनों के साथ सामाजिक सेवा"
        ],
        career: [
          "तीर्थ यात्रा गाइड या आयोजक",
          "ध्यान रिट्रीट में कोऑर्डिनेटर",
          "गुप्त लेखन या जर्नलिस्ट",
          "माइंडफुलनेस ट्रेनर",
          "भाई-बहनों के लिए सामाजिक कार्यकर्ता",
          "मोह-निर्मूलन व कार्यशाला संचालक"
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
        ],
        neutral: [
          "Mild interest in reorganising living spaces",
          "Occasional preference for solitude at home",
          "Balanced role in family matters",
          "Minimal but tasteful home decor choices",
          "Interest in quiet corners for reflection",
          "Adaptability to home changes without resistance"
        ],
        remedies: [
          "माता का सम्मान करें और उनका आशीर्वाद लें",
          "घर में अनावश्यक वस्तुएं न रखें, सफाई रखें",
          "मंगलवार को लाल कपड़ा दान करें",
          "शिवलिंग पर जल और कच्चा दूध अर्पित करें",
          "शुरू के दिनों में चांदी का ताबीज पहनें (सुझाव के बाद)",
          "ध्यानपूर्वक घर में शांत माहौल बनाएं"
        ],
        hobbies: [
          "घर में ध्यान कक्ष बनाना",
          "वास्तु और अध्यात्मिक सजावट",
          "पौधों की देखभाल (औषधीय/पवित्र वृक्ष)",
          "पारिवारिक धार्मिक आयोजन",
          "कथा/पुराण सुनना",
          "देवपूजन"
        ],
        career: [
          "धार्मिक स्थल या आश्रम प्रबंधक",
          "वास्तु शास्त्र और आध्यात्मिक सजावट विशेषज्ञ",
          "औषधीय पौधों की देखभाल या अनुसन्धान",
          "देवपूजन, पुराण पाठक",
          "स्थानीय धार्मिक कार्यकर्ता",
          "परिवारिक परंपरा का संरक्षण"
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
        ],
        neutral: [
          "Interest in arts with a philosophical perspective",
          "Moderate enthusiasm for hobbies",
          "Balanced emotional connection with children",
          "Changing creative interests over time",
          "Mild romantic gestures now and then",
          "Preference for meaningful over casual entertainment"
        ],
        remedies: [
          "बच्चों को अध्ययन सामग्री या फल दान करें",
          "मंगलवार को लाल वस्त्र मंदिर में दें",
          "बच्चों/युवाओं को आध्यात्मिक ज्ञान दें",
          "अध्यात्म व ध्यान में समय दें",
          "हनुमान चालीसा का नियमित पाठ करें",
          "अपने शौक/कला को सेवा कार्य में बदलें"
        ],
        hobbies: [
          "आध्यात्मिक शिक्षा देना",
          "ध्यान व योग सिखाना",
          "पौराणिक कहानियां लिखना",
          "मंत्र जाप व कीर्तन",
          "शास्त्रों का अध्ययन",
          "शांतिपूर्ण पेंटिंग या मंडला आर्ट"
        ],
        career: [
          "आध्यात्मिक शिक्षक, गुरु",
          "मंत्र जाप, कीर्तन, शास्त्रीय संगीतकार",
          "शास्त्रों का अध्ययन और शिक्षण",
          "ध्यान आधारित कला और मंडला चित्रण",
          "मंत्र और तंत्र की रचना या अध्ययन",
          "संतान के लिए आध्यात्मिक शिक्षा"
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
        ],
        neutral: [
          "Preference for non-confrontational problem solving",
          "Changing approach towards daily tasks",
          "Occasional focus on alternative health remedies",
          "Adaptive work style depending on environment",
          "Mild patience in dealing with competitors",
          "Inclination towards peaceful workspaces"
        ],
        remedies: [
          "जरूरतमंदों की सहायता करें",
          "काले-सफेद चने या उड़द का दान करें",
          "वाद-विवाद से बचें और संयम रखें",
          "हारे हुए शत्रु को भी क्षमा करें",
          "आलस और असावधानी से बचें",
          "पीपल या बरगद के पेड़ में जल अर्पित करें"
        ],
        hobbies: [
          "नेचुरोपैथी",
          "रीकी हीलिंग",
          "रिक्त समय में माला जप",
          "पशु सेवा",
          "मेडिटेशन मेंटल हेल्थ",
          "गरीब मरीजों की मुफ्त सेवा"
        ],
        career: [
          "नेचुरोपैथी, वैकल्पिक चिकित्सा",
          "मेडिटेशन और हीलिंग थैरेपिस्ट",
          "मनोविज्ञान, मानसिक स्वास्थ्य सलाहकार",
          "पशु सेवा या चिकित्सा",
          "फ्री हेल्थ केयर वॉलंटियर",
          "धार्मिक या योग सेवा केंद्र"
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
        ],
        neutral: [
          "Occasional openness to unconventional relationship norms",
          "Balanced tolerance for differences",
          "Mixed involvement in partner’s personal matters",
          "Mild preference for space in marriage",
          "Alternating closeness and distance",
          "Value for calm companionship without drama"
        ],
        remedies: [
          "पति/पत्नी का सम्मान करें और विश्वास बनाएं",
          "रिश्तों में पारदर्शिता लाएं",
          "मंगलवार को मंदिर में लाल फूल अर्पित करें",
          "शत्रुओं से बचने के लिए गणपति जी की पूजा करें",
          "अनावश्यक रिश्तों में उलझने से बचें",
          "किसी बुजुर्ग जोड़े की सेवा करें"
        ],
        hobbies: [
          "कपल मेडिटेशन",
          "एकांत में ट्रैवल",
          "धार्मिक तीर्थ कपल के साथ",
          "रिलेशनशिप में आध्यात्मिकता लाना",
          "गहरी बातचीत",
          "मीनिंगफुल वॉलंटियरिंग"
        ],
        career: [
          "धार्मिक विवाह सलाहकार",
          "कैसे चिकित्सा और रिश्ते सुधारकर्ता",
          "ध्यान और योग सेमिनार आयोजक",
          "गुप्त वैवाहिक काउंसलिंग",
          "शांति सेवाएँ और विवाद समाधान",
          "पूर्णतः आध्यात्मिक जीवन शैली प्रचारक"
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
        ],
        neutral: [
          "Interest in learning life lessons from challenges",
          "Occasional analysis of past events",
          "Balanced view of spiritual vs. material matters",
          "Mild secrecy about personal transformations",
          "Changing depth of interest in occult topics",
          "Adaptable to moderate life changes"
        ],
        remedies: [
          "रहस्य और तंत्र-मंत्र का दुरुपयोग न करें",
          "ॐ कें केतुये नमः का नियमित जाप करें",
          "काले-नीले वस्त्र/कंबल का दान करें",
          "नारियल जल में प्रवाहित करें",
          "आध्यात्मिक साधना करें",
          "जरूरतमंद विधवा महिला की मदद करें"
        ],
        hobbies: [
          "गुप्त विद्याओं का अध्ययन (ज्योतिष, टैरो)",
          "आत्मज्ञान साधना",
          "शमैनिक हीलिंग",
          "मंत्र-तंत्र साधना",
          "अज्ञात स्थानों का अन्वेषण",
          "सपनों का विश्लेषण"
        ],
        career: [
          "ज्योतिषी, टैरो कार्ड रीडर",
          "फोरेंसिक विशेषज्ञ, मानसिक स्वास्थ्य विशेषज्ञ",
          "ओकल्ट या तांत्रिक गुरु",
          "रहस्यमय विज्ञान शोधकर्ता",
          "गुप्तचर, क्रिमिनल जासूसी",
          "मिस्ट्री और गुप्त वृत्तांत लेखक"
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
        ],
        neutral: [
          "Curiosity about different philosophies",
          "Balanced attitude to spiritual learning",
          "Occasional participation in religious or cultural events",
          "Variable dedication to study or travel",
          "Interest in long discussions without fixed conclusions",
          "Openness to adapting beliefs to new understandings"
        ],
        remedies: [
          "गुरुजनों का सम्मान व सेवा करें",
          "तिल-गुड़ का दान करें",
          "दोषपूर्ण ज्ञान से बचें",
          "पवित्र ग्रंथ पढ़ें और सुनें",
          "विदेश यात्रा से पहले गरीबों को भोजन कराएं",
          "सच्चाई और ईमानदारी से चलें"
        ],
        hobbies: [
          "धार्मिक यात्राएं",
          "मठ/आश्रम में समय बिताना",
          "शास्त्र व वेद-पाठ",
          "फिलॉसफी सेमिनार",
          "विदेश में आध्यात्मिक कोर्स",
          "अनुष्ठान में भाग लेना"
        ],
        career: [
          "धार्मिक गुरु, वेद-शास्त्रज्ञ",
          "धार्मिक अनुष्ठान और आयोजनकर्ता",
          "आध्यात्मिक शिक्षक, योग प्रशिक्षक",
          "विदेशी सेवा या तीर्थ यात्रा गाइड",
          "फिलॉसफर, लेखक",
          "धार्मिक संस्थान के प्रमुख"
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
        ],
        neutral: [
          "Occasional preference for behind-the-scenes roles",
          "Balanced mix of ambition and detachment",
          "Interest in careers linked to research or spirituality",
          "Changing career focus due to inner reflections",
          "Mild adaptability in work responsibilities",
          "Moderate involvement in authority structures"
        ],
        remedies: [
          "कार्यस्थल पर ईमानदारी और निष्ठा रखें",
          "कर्म को धर्म के रूप में अपनाएं",
          "काले तिल और सरसों का तेल दान करें",
          "अनावश्यक विवाद और राजनीति से बचें",
          "गुरु या मेंटर का मार्गदर्शन लें",
          "एकांत में करियर की योजना बनाएं"
        ],
        hobbies: [
          "सोशल सर्विस प्रोजेक्ट",
          "गुरुकुल सेवा",
          "रेस्पॉन्सिबल वॉलंटियरिंग",
          "हीलिंग प्रोफेशन सीखना",
          "माइंडफुल मैनेजमेंट",
          "डाक्यूमेंट्री बनाना (धार्मिक विषयों पर)"
        ],
        career: [
          "धार्मिक संस्थान या आश्रम प्रबंधक",
          "मेडिटेशन गुरु, योग प्रशिक्षक",
          "शिक्षा और सामाजिक सेवा में नेता",
          "गुप्त एजेंसियों में कार्यकर्ता",
          "मानसिक स्वास्थ्य कार्यकर्ता",
          "लेखक और चिंतक"
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
        ],
        neutral: [
          "Occasional interest in selective social gatherings",
          "Balanced networking without over-commitment",
          "Preference for purposeful group activities",
          "Mild detachment from group drama",
          "Changing intensity of social bonds",
          "Interest in contributing without leading"
        ],
        remedies: [
          "सच्चे और योग्य मित्रों का चयन करें",
          "गुरुवार/मंगलवार को धार्मिक दान करें",
          "समूह में राजनीति से बचें",
          "सामाजिक सेवा कार्य में शामिल हों",
          "गुरु मंत्र का जाप करें",
          "अनैतिक निवेश से बचें"
        ],
        hobbies: [
          "धार्मिक/आध्यात्मिक ग्रुप्स जॉइन करना",
          "भजन समूह",
          "धार्मिक यात्राओं की योजना",
          "ग्रुप मेडिटेशन",
          "सामूहिक सामाजिक सेवा",
          "आध्यात्मिक कैंप आयोजक बनना"
        ],
        career: [
          "धार्मिक और आध्यात्मिक समूह आयोजक",
          "सोशल सेवा, ध्यान समूह संचालक",
          "फंडरेजिंग और चैरिटी कार्यकर्ता",
          "आध्यात्मिक कैंप आयोजक",
          "मेटा-फिजिकल वर्कशॉप्स का संचालन",
          "व्यूअर्स और रिपीटर्स की सहायता"
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
        ],
        neutral: [
          "Interest in meditation and self-contemplation",
          "Occasional interest in retreats or travel for peace",
          "Variable connection with material responsibilities",
          "Mild separation from public activities",
          "Changing pace of spiritual discipline",
          "Preference for quiet environments without full isolation"
        ],
        remedies: [
          "अस्पताल, जेल, वृद्धाश्रम में सेवा करें",
          "मंगलवार को लाल वस्त्र दान करें",
          "ॐ कें केतुये नमः का 108 बार जाप करें",
          "विदेश यात्रा से पहले गरीबों को भोजन कराएं",
          "एकांत ध्यान और योग का अभ्यास करें",
          "गुप्त दान करें"
        ],
        hobbies: [
          "मौन साधना",
          "विदेश में ध्यान शिविर",
          "एकांत में स्क्रिप्ट राइटिंग",
          "तपस्या और मंत्र साधना",
          "समुद्र तट पर मेडिटेशन",
          "मोक्षदायक शास्त्रों का अध्ययन"
        ],
        career: [
          "मौन साधना गुरु",
          "धार्मिक रिट्रीट्स और ध्यान केन्द्र संचालक",
          "विदेशी आध्यात्मिक कार्यकर्ता",
          "अकेले काम करने वाले लेखक/फिलॉसफर",
          "तपस्वी, साधु या संन्यासी",
          "आध्यात्मिक और वैदिक ज्ञान के संरक्षक"
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
        ],
        neutral: [
          "Preference for structured daily routines",
          "Measured approach before starting projects",
          "Gradual development of self-confidence",
          "High regard for personal responsibilities",
          "Reserved personality in new situations",
          "Patience with slow progress"
        ],
        remedies: [
          "शनिवार को काले तिल, उड़द, और तेल का दान करें",
          "ॐ शं शनैश्चराय नमः मंत्र का 108 बार जाप करें",
          "काले या नीले कपड़े शनिवार को पहनें",
          "गाय, कुत्ते या कौवे को भोजन कराएं",
          "बुज़ुर्ग और गरीबों की सेवा करें",
          "जल्दी सोना और जल्दी उठना अपनाएँ"
        ],
        hobbies: [
          "योग और प्राणायाम",
          "लॉन्ग-टर्म फिटनेस रूटीन",
          "मेडिटेशन",
          "सेल्फ-डिसिप्लिन कोर्स",
          "डायरी राइटिंग",
          "धैर्य बढ़ाने वाले खेल (जैसे शतरंज)"
        ],
        career: [
          "इंजीनियर, सरकारी कर्मचारी",
          "प्रशासक, प्रबंधक",
          "कानूनी क्षेत्र, न्यायाधीश",
          "सैन्य या पुलिस सेवा",
          "अनुसंधानकर्ता, वैज्ञानिक",
          "एनवायर्नमेंटल कंसल्टेंट"
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
        ],
        neutral: [
          "Preference for safe investments",
          "Occasional reluctance to spend",
          "Awareness of long-term financial goals",
          "Balanced view of family traditions",
          "Value for quality over quantity in possessions",
          "Patience in financial growth"
        ],
        remedies: [
          "आर्थिक मामलों में धैर्य और ईमानदारी रखें",
          "शनिवार को लोहे का दान करें",
          "परिवार के बुजुर्गों का सम्मान करें",
          "गरीब कन्या की शादी में दान दें",
          "नीले या काले कपड़े और अनाज का दान",
          "पारिवारिक झगड़ों में मध्यस्थता अपनाएँ"
        ],
        hobbies: [
          "फाइनेंशियल प्लानिंग",
          "बजट में जीवनशैली",
          "स्टाम्प/कॉइन कलेक्शन",
          "पुरानी कहानियों का लेखन",
          "घर का हिसाब रखना",
          "धैर्यपूर्वक वार्तालाप का अभ्यास"
        ],
        career: [
          "वित्तीय सलाहकार, बैंक अधिकारी",
          "लेखाकार, टैक्स सलाहकार",
          "परिवार व्यवसाय प्रबंधक",
          "बजट प्लानर, निवेशक",
          "भाषण और संवाद कोच"
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
        ],
        neutral: [
          "Preference for meaningful rather than casual talks",
          "Clear but measured communication style",
          "Slow to open up to new acquaintances",
          "Steady but gradual building of friendships",
          "Logical approach to problem-solving in teams",
          "Interest in structured learning environments"
        ],
        remedies: [
          "भाई-बहनों की सहायता करें",
          "शनिवार को नारियल जल में प्रवाहित करें",
          "तुलसी या पीपल के पेड़ में जल दें",
          "कठिन परिश्रम से कार्य पूर्ण करें",
          "गपशप और विवादों से दूर रहें",
          "काले-नीले कपड़े दान करें"
        ],
        hobbies: [
          "लॉन्ग ड्राइव (धीरे-धीरे)",
          "पत्र लेखन",
          "हस्तशिल्प",
          "साइकिलिंग",
          "भाई-बहनों के साथ बोर्ड गेम्स",
          "लोकल हिस्ट्री रिसर्च"
        ],
        career: [
          "प्रशासनिक कार्यकर्ता",
          "प्रशासनिक कर्मचारी",
          "शिक्षक, ट्रेनर",
          "स्थानीय सरकारी अधिकारी",
          "लेखक, संवाद विशेषज्ञ"
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
        ],
        neutral: [
          "Value for order and cleanliness in home",
          "Preference for functional home décor",
          "Patience in resolving domestic challenges",
          "Saving for long-term property or home goals",
          "Moderate attachment to family traditions",
          "Occasional preference for solitude at home"
        ],
        remedies: [
          "माता का सम्मान और सेवा करें",
          "घर में स्वच्छता और सादगी रखें",
          "नील/काले पर्दे या कपड़े शनिवार को धोकर पहनें",
          "माता-पिता को सुख दें",
          "गृहकलह से बचने के लिए शनि पूजा करें",
          "पीपल के वृक्ष में सरसों के तेल का दीपक जलाएं"
        ],
        hobbies: [
          "होम रिपेयर और मेंटेनेंस",
          "बागवानी",
          "घरेलू फर्नीचर बनाना",
          "घर को व्यवस्थित रखना",
          "वास्तु/आर्किटेक्चर स्टडी",
          "माता-पिता के साथ समय बिताना"
        ],
        career: [
          "रियल एस्टेट मैनेजर",
          "घर और संपत्ति सलाहकार",
          "परिवार सलाहकार",
          "शिक्षक, शिक्षण संस्थान संचालक",
          "इंटीरियर डिजाइनर"
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
        ],
        neutral: [
          "Cautious approach to speculative ventures",
          "Interest in traditional forms of creativity",
          "Measured romantic expressions",
          "Preference for steady progress in education",
          "Value for discipline in hobbies",
          "Occasional reluctance to take spontaneous risks"
        ],
        remedies: [
          "बच्चों की शिक्षा में मदद करें",
          "ज्ञान से दूसरों का मार्गदर्शन करें",
          "शनिवार को नीले/काले रंग की वस्तुएं पहनें",
          "सट्टा या जुआ से बचें",
          "शनि मंदिर में तेल चढ़ाएं",
          "धैर्यपूर्वक रचनात्मक कार्य करें"
        ],
        hobbies: [
          "गंभीर साहित्य पढ़ना",
          "मंत्र लेखन",
          "कला में धीमी और डिटेल वर्क",
          "खगोल विज्ञान अध्ययन",
          "शिष्य को लंबी अवधि तक प्रशिक्षित करना",
          "ड्रम्स या किसी वाद्य का दीर्घकालीन अभ्यास"
        ],
        career: [
          "शिक्षक, प्रोफेसर",
          "अनुसंधान एवं विकास",
          "लेखक, शास्त्रीय कलाकार",
          "अभिनेता, संगीतकार",
          "प्रशिक्षक, मेंटर"
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
        ],
        neutral: [
          "Preference for routine in daily work",
          "Methodical problem-solving style",
          "Consistent pace in tasks",
          "Fair-minded approach toward coworkers",
          "Balanced priority between health and work",
          "Steady effort without rushing outcomes"
        ],
        remedies: [
          "विवादों में शांत रहकर समाधान करें",
          "मजदूरों और सेवकों की मदद करें",
          "शनिवार को अनाज/कपड़े दान करें",
          "नीला/काला धागा बांधें (सुझाव पर)",
          "दुर्भावना से कार्य न करें",
          "पीपल वृक्ष की सेवा करें"
        ],
        hobbies: [
          "मेडिकल वॉलंटियरिंग",
          "योग थेरेपी",
          "हेल्थ डाइट ट्रैकिंग",
          "सोशल सर्विस",
          "रूटीन प्लानिंग",
          "फिजिकल एंड्योरेंस ट्रेनिंग"
        ],
        career: [
          "डॉक्टर, स्वास्थ्य सेवा कर्मी",
          "मेडिकल रिसर्चर",
          "सामाजिक कार्यकर्ता",
          "फिजियोथेरेपिस्ट",
          "सफाई और स्वास्थ्य प्रबंधन"
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
        ],
        neutral: [
          "Preference for stable and reliable partners",
          "Measured emotional expression in marriage",
          "Value for commitment over passion",
          "Moderate tolerance for differences",
          "Cautious approach to making joint decisions",
          "Gradual development of trust"
        ],
        remedies: [
          "पति/पत्नी के साथ धैर्य और सम्मान रखें",
          "वैवाहिक जीवन में पारदर्शिता रखें",
          "शनिवार को तेल और काले कपड़े दान करें",
          "दूसरों के साथ समझौता और शांति रखें",
          "अहंकार से बचें",
          "संयुक्त कार्यों में ईमानदारी दिखाएं"
        ],
        hobbies: [
          "संवाद कौशल प्रशिक्षण",
          "धैर्य आधारित गेम्स",
          "कपल योग",
          "संयुक्त सामाजिक सेवा",
          "लॉन्ग-टर्म गोल प्लानिंग",
          "मैरिज काउंसलिंग वर्कशॉप अटेंड करना"
        ],
        career: [
          "वकील, कानूनी सलाहकार",
          "बिजनेस पार्टनर, मैनेजर",
          "डिप्लोमेट, सार्वजनिक संबंध अधिकारी",
          "प्रशासनिक कार्यकर्ता",
          "मार्केटिंग और सेल्स"
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
        ],
        neutral: [
          "Interest in history and past events",
          "Analytical approach to deep problems",
          "Steady healing after setbacks",
          "Preference for privacy in personal matters",
          "Occasional guarded reactions to change",
          "Cautious interest in transformative opportunities"
        ],
        remedies: [
          "आध्यात्मिक पुस्तकों का अध्ययन करें",
          "गुप्त दान करें",
          "शनिवार को नीला/काला वस्त्र पहनें",
          "पीपल की जड़ में जल और तेल अर्पित करें",
          "राहु-केतु शांति पूजा करें",
          "कर्म और ध्यान में स्थिर रहें"
        ],
        hobbies: [
          "धार्मिक अनुष्ठान",
          "ज्योतिष का गहन अध्ययन",
          "तांत्रिक साधना",
          "रिसर्च प्रोजेक्ट्स",
          "पुरातत्व अध्ययन",
          "गंभीर ध्यान साधना"
        ],
        career: [
          "फोरेंसिक विशेषज्ञ",
          "डीप रिसर्चर, साइकोलॉजिस्ट",
          "बीमा सलाहकार",
          "अधिकारियों के गुप्त विभाग",
          "खगोलशास्त्री, ज्योतिषी"
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
        ],
        neutral: [
          "Preference for proven and time-tested knowledge",
          "Respect for experienced teachers",
          "Gradual exploration of new beliefs",
          "Interest in philosophy for practical use",
          "Measured approach to travel for learning",
          "Open to debate but slow to change beliefs"
        ],
        remedies: [
          "गुरुजनों और बुज़ुर्गों की सेवा करें",
          "धार्मिक स्थलों पर श्रमदान करें",
          "Saturday को मंदिर में तिल और तेल दान",
          "नकारात्मक विचारों से बचें",
          "शनि स्तुति का पाठ करें",
          "शिक्षा में धैर्य रखें"
        ],
        hobbies: [
          "धार्मिक ग्रंथ अध्ययन",
          "तीर्थ यात्रा (पैदल यात्राएं)",
          "दर्शनशास्त्र क्लासेस",
          "वेदांत/योग कोर्स",
          "आध्यात्मिक गुरु सेवा",
          "गंभीर विषयों पर डिबेट"
        ],
        career: [
          "धार्मिक शिक्षक, गुरु",
          "शिक्षक, प्रोफेसर",
          "वैज्ञानिक, शोधकर्ता",
          "यात्रा गाइड, पर्यटक उद्योग",
          "वकील, नीतिकार"
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
        ],
        neutral: [
          "Steady focus on long-term career goals",
          "Preference for traditional workplace structures",
          "Gradual adaptation to change at work",
          "Balanced authority in leadership",
          "Measured ambition",
          "Moderate concern for public image"
        ],
        remedies: [
          "कठोर परिश्रम एवं ईमानदारी से काम करें",
          "शनिवार को नीले वस्त्र व अनाज का दान",
          "सरकारी कार्य में रिश्वत से बचें",
          "अधिकारियों के साथ विनम्र रहें",
          "बहु-स्तरीय योजना बनाएं",
          "कार्यस्थल पर सजग रहे"
        ],
        hobbies: [
          "लॉन्ग-टर्म कैरियर प्लानिंग",
          "प्रोफेशनल ट्रेनिंग",
          "सामाजिक नेतृत्व",
          "लोक प्रशासन अध्ययन",
          "मेहनत वाले क्राफ्ट",
          "कानूनी अध्ययन"
        ],
        career: [
          "सरकारी अधिकारी, प्रशासक",
          "नेता, प्रबंधन विशेषज्ञ",
          "पुलिस या सैन्य अधिकारी",
          "वकील, न्यायाधीश",
          "सामाजिक कार्यकर्ता"
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
        ],
        neutral: [
          "Selective in building friendships",
          "Preference for small but loyal social circles",
          "Measured enthusiasm in group projects",
          "Value for trust and realism in collaborations",
          "Balanced patience in achieving goals",
          "Occasional withdrawal from social life to focus"
        ],
        remedies: [
          "सच्चे मित्र बनाए रखें",
          "सामाजिक सेवा संगठनों में जुड़ें",
          "शनिवार को गरीब बच्चों को भोजन दें",
          "कौवों को दाना डालें",
          "लालच और गलत निवेश से बचें",
          "समूह में शिष्टाचार बनाए रखें"
        ],
        hobbies: [
          "सीनियर्स के साथ नेटवर्किंग",
          "कम्युनिटी सर्विस",
          "लॉन्ग-टर्म ग्रुप प्रोजेक्ट्स",
          "सोशल रिफॉर्म मूवमेंट",
          "गंभीर क्लब मीटिंग्स",
          "परंपरागत त्योहार आयोजन"
        ],
        career: [
          "नेटवर्किंग विशेषज्ञ",
          "ग्रुप मैनेजर, सोशल कार्यकर्ता",
          "सामाजिक संगठन नेता",
          "फंडरेजर, संग्रहकर्ता",
          "कार्यक्रम आयोजक"
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
        ],
        neutral: [
          "Occasional preference for peaceful retreat",
          "Interest in quiet self-reflection",
          "Measured approach to resolving past mistakes",
          "Value for minimal distractions",
          "Balance between solitude and necessary socializing",
          "Gradual inner growth over time"
        ],
        remedies: [
          "एकांत साधना करें",
          "अस्पताल, जेल, या वृद्धाश्रम में सेवा करें",
          "शनिवार को रंगीन वस्त्र दान न करें",
          "ॐ शं शनैश्चराय नमः का जाप",
          "जल्दी सोना और ब्रह्म मुहूर्त में उठना",
          "राजसी भोग से परहेज करें"
        ],
        hobbies: [
          "एकांत ध्यान",
          "गंभीर आध्यात्मिक साधना",
          "मौन व्रत",
          "विदेश यात्रा पर अध्ययन",
          "पहाड़ों या जंगलों में समय बिताना",
          "आश्रम जीवन"
        ],
        career: [
          "आध्यात्मिक शिक्षक, योग गुरु",
          "ध्यान, तपस्या गुरु",
          "विदेशी सेवा कर्मी",
          "अकेले काम करने वाला लेखक",
          "चेतना और मानसिक स्वास्थ्य सलाहकार"
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
        ],
        neutral: [
          "Occasional bursts of enthusiasm",
          "Preference for direct communication",
          "Moderate risk-taking in personal goals",
          "Interest in sports or physical challenges",
          "Tendency to get impatient with slow results",
          "Value for independence in action"
        ],
        remedies: [
          "मंगल मंत्र – ॐ क्रां क्रीं क्रौं सः भौमाय नमः – का 108 बार जाप",
          "मंगलवार को लाल मसूर और गुड़ का दान",
          "मंगलवार का व्रत रखें",
          "हनुमान चालीसा पाठ करें",
          "प्याज-लहसुन, शराब, और मांसाहार से बचें",
          "लाल वस्त्र या रुमाल धारण करें"
        ],
        hobbies: [
          "जिम वर्कआउट",
          "मार्शल आर्ट्स",
          "एथलेटिक्स",
          "साहसिक खेल",
          "ट्रेकिंग",
          "रनिंग रेस"
        ],
        career: [
          "सेना, पुलिस, सुरक्षा सेवाएं",
          "खेल प्रशिक्षक, एथलीट",
          "इंजीनियरिंग, निर्माण क्षेत्र",
          "आपातकालीन सेवा (फायर फाइटर, रेस्क्यू टीम)",
          "खेल आयोजक, फिटनेस ट्रेनर",
          "अभिनय, अभिनय में साहसिक भूमिकाएं"
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
        ],
        neutral: [
          "Occasional firmness in family discussions",
          "Interest in entrepreneurial ventures",
          "Selective risk-taking in investments",
          "Balanced mix of saving and spending",
          "Pride in protecting family resources",
          "Calculated boldness in money matters"
        ],
        remedies: [
          "वाणी में संयम और मधुरता रखें",
          "मंगलवार को गुड़ और मसूर दान करें",
          "परिवार के बुजुर्गों का सम्मान करें",
          "अनावश्यक बहस से बचें",
          "रसोई में हमेशा आग/अग्नि तत्व को स्वच्छ रखें",
          "मीठा बोलने का अभ्यास करें"
        ],
        hobbies: [
          "कुकिंग (स्पाइसी फूड)",
          "डिबेट प्रतियोगिता",
          "एक्शन फोटोग्राफी",
          "स्पोर्ट्स कमेंट्री",
          "शतरंज",
          "शूटिंग गेम्स"
        ],
        career: [
          "खाद्य उद्योग (खाना बनाना, मसालों का व्यापार)",
          "विक्रेता, बिक्री विभाग",
          "स्पोर्ट्स कमेंटेटर",
          "फोटोग्राफी, एक्शन फोटोग्राफी",
          "शतरंज या रणनीतिक खेल",
          "शूटिंग और आर्चरी कोच"
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
        ],
        neutral: [
          "Friendly competitiveness with siblings",
          "Active involvement in group tasks",
          "Interest in skill-based hobbies",
          "On-and-off participation in sports",
          "Adaptability during short journeys",
          "Occasional urge to prove a point"
        ],
        remedies: [
          "भाई-बहनों के साथ सहयोगपूर्ण संबंध रखें",
          "लाल चने या मसूर दान करें",
          "खेले-कूदें या शारीरिक व्यायाम करें",
          "ध्यान और योग का अभ्यास करें",
          "टकराव वाली चर्चाओं से बचें",
          "मित्र मंडली में शांति बनाए रखें"
        ],
        hobbies: [
          "बाइक राइडिंग",
          "एडवेंचर ट्रिप्स",
          "शॉर्ट हाइकिंग",
          "रॉक क्लाइम्बिंग",
          "भाई-बहनों के साथ टीम स्पोर्ट्स",
          "गन/आर्चरी ट्रेनिंग"
        ],
        career: [
          "बाइक राइडर, एडवेंचर ट्रैवल गाइड",
          "खेल पत्रकारिता",
          "शॉर्ट ट्रिप्स और हाइकिंग",
          "टीम स्पोर्ट्स कोच",
          "मार्शल आर्ट्स प्रशिक्षक",
          "रॉक क्लाइम्बिंग गाइड"
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
        ],
        neutral: [
          "Occasional initiative in home improvement",
          "Pride in maintaining a safe home",
          "Interest in family activities",
          "Balanced assertiveness in domestic affairs",
          "Readiness to defend home interests",
          "Preference for energetic but harmonious household"
        ],
        remedies: [
          "घर में लाल फूल लगाएं",
          "मंगलवार को लाल मसूर और वस्त्र दान करें",
          "माता या मातृ तुल्य महिला का सम्मान करें",
          "घर में अग्नि और रसोई स्थल की पवित्रता रखें",
          "अनावश्यक गुस्सा घर में न लाएं",
          "लाल रंग की सजावट संतुलित मात्रा में करें"
        ],
        hobbies: [
          "होम डीआईवाई प्रोजेक्ट्स",
          "गार्डन रिपेयर",
          "सेल्फ डिफेंस ट्रेनिंग घर पर",
          "कुकिंग",
          "होम जिम सेटअप",
          "टेबल टेनिस"
        ],
        career: [
          "घर की देखभाल या मरम्मत सेवाएं",
          "होम जिम सेटअप विशेषज्ञ",
          "सेल्फ डिफेंस ट्रेनर",
          "कुक/खाना बनाना",
          "गार्डनिंग और घर के बाहर कंस्ट्रक्शन",
          "टेबल टेनिस या इंडोर गेम प्रशिक्षक"
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
        ],
        neutral: [
          "Occasional ambition in creative competitions",
          "Balanced approach to sports or games",
          "Interest in active hobbies",
          "Fluctuating romantic enthusiasm",
          "Calculated participation in contests",
          "Value for achievement through effort"
        ],
        remedies: [
          "बच्चों और युवाओं को खेल या स्वसंरक्षण कला सिखाएं",
          "शिक्षा से जुड़ी वस्तुएं दान करें",
          "मंगलवार को लाल वस्त्र/मसूर का दान करें",
          "कला और खेल दोनों में अनुशासन रखें",
          "अत्यधिक प्रतिस्पर्धा से बचें",
          "स्वस्थ रोमांस और सकारात्मक रचनात्मकता को बढ़ावा दें"
        ],
        hobbies: [
          "डांस (एनर्जेटिक)",
          "स्पोर्ट्स कोचिंग",
          "टीम गेम्स",
          "स्पोर्ट्स डिज़ाइन और स्ट्रैटेजी",
          "कैरम/बैडमिंटन",
          "फुटबॉल/क्रिकेट"
        ],
        career: [
          "स्पोर्ट्स कोच, टीम मैनेजर",
          "डांस और थिएटर में एनर्जी भरना",
          "खेल आयोजक",
          "क्रिएटिव राइटर (साहसिक विषयों पर)",
          "फुटबॉल/क्रिकेट खिलाड़ी",
          "बाल शिक्षा में ऊर्जा लाना"
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
        ],
        neutral: [
          "Proactive in solving work issues",
          "Occasional extra effort in workplace challenges",
          "Balanced assertiveness with coworkers",
          "Preference for structured goals",
          "Resisting minor opposition calmly",
          "Interest in active lifestyle for health"
        ],
        remedies: [
          "अस्पताल या पुलिस विभाग में सेवा कार्य करें",
          "मंगलवार को लाल वस्त्र/मसूर का दान करें",
          "क्रोध नियंत्रण व धैर्य का अभ्यास करें",
          "मांगलिक दोष शांति हेतु हनुमान जी की पूजा",
          "कार्यस्थल के विवाद में शांत रहें",
          "दुर्बलों की सुरक्षा और सहायता करें"
        ],
        hobbies: [
          "मॉर्निंग रन",
          "जिम ट्रेनिंग",
          "मेडिकल फर्स्ट-एड ट्रेनिंग",
          "रेस्क्यू वॉलंटियरिंग",
          "रेग्युलर योगा",
          "स्पोर्ट्स इवेंट मैनेजमेंट"
        ],
        career: [
          "फर्स्ट-एड प्रशिक्षक",
          "रेस्क्यू कार्यकर्ता",
          "योग और फिटनेस ट्रेनर",
          "डॉक्टर, खासकर आपातकालीन सेवा",
          "मेडिकल रिसर्च असिस्टेंट",
          "स्पोर्ट्स इवेंट मैनेजर"
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
        ],
        neutral: [
          "Occasional assertiveness in relationship decisions",
          "Mutual drive for shared goals",
          "Balanced competitiveness in partnership growth",
          "Interest in maintaining mutual respect",
          "Taking initiative in marital plans",
          "Mild need for personal space in relationships"
        ],
        remedies: [
          "वैवाहिक रिश्ते में सम्मान और धैर्य रखें",
          "मंगलवार को दोनों साझेदार पूजा करें",
          "लाल मसूर/गुड़ का दान करें",
          "पारिवारिक कलह से बचें",
          "संवाद में आक्रामकता से बचें",
          "शक्ति को रचनात्मक कार्यों में लगाएं"
        ],
        hobbies: [
          "कपल आउटडोर स्पोर्ट्स",
          "ट्रैवलिंग विद पार्टनर",
          "साहसिक एडवेंचर",
          "कपल डांस",
          "टेन्डम साइक्लिंग",
          "कपल फिटनेस प्रोग्राम"
        ],
        career: [
          "कपल फिटनेस ट्रेनर",
          "साझेदारी में एडवेंचर वेंचर्स",
          "ट्रैवल एजेंसी, एडवेंचर टूरिज्म",
          "सपोर्टिव पार्टनरशिप मैनेजर",
          "सांस्कृतिक या खेल आयोजन",
          "कपल डांस या एक्टिविटी कोच"
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
        ],
        neutral: [
          "Interest in exploring life's mysteries",
          "Occasional readiness to confront difficult truths",
          "Attraction to adventure with calculated risks",
          "Strategic thinking during intense situations",
          "Preference for privacy in personal changes",
          "Balanced persistence in investigations"
        ],
        remedies: [
          "मंगलवार को लाल कंबल या वस्त्र दान करें",
          "गुप्त शत्रुओं से बचने हेतु हनुमान जी की पूजा करें",
          "लाल मसूर जल में प्रवाहित करें",
          "क्रोध और प्रतिशोध की भावना से बचें",
          "तंत्र-मंत्र व गलत प्रयोग न करें",
          "ध्यान और साधना में समय दें"
        ],
        hobbies: [
          "मार्शल आर्ट्स रिसर्च",
          "सर्वाइवल ट्रेनिंग",
          "टैक्टिकल गेम्स",
          "माउंटेन क्लाइम्बिंग",
          "एस्ट्रल प्रोजेक्शन प्रैक्टिस",
          "क्राइसिस मैनेजमेंट"
        ],
        career: [
          "मार्शल आर्ट्स और सर्वाइवल ट्रेनिंग",
          "डिफेंस रिसर्च, हथियार निर्माण",
          "टैक्टिकल गेम्स कोच",
          "क्राइसिस मैनेजमेंट एक्सपर्ट",
          "एस्ट्रोलॉजी या ओकल्ट रिसर्चर",
          "माउंटेन क्लाइम्बिंग गाइड"
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
        ],
        neutral: [
          "Curiosity towards varied cultures",
          "Moderate interest in adventure travel",
          "Balanced discussion of beliefs",
          "Occasional risk-taking in education or travel",
          "Open-minded but selective in philosophies",
          "Adaptive approach to learning"
        ],
        remedies: [
          "गुरु और बुज़ुर्गों का सम्मान करें",
          "यात्रा से पहले गुड़ और पानी का दान",
          "धार्मिक कार्यों में उत्साह से भाग लें",
          "मंगल मंत्र जाप करें",
          "विदेश यात्रा से पहले लाल पदार्थ दान करें",
          "सत्य और धर्म का पालन करें"
        ],
        hobbies: [
          "एडवेंचर ट्रैवल",
          "पिलग्रिमेज ट्रेक",
          "फॉरेन हाइकिंग टूर्स",
          "कल्चरल स्पोर्ट्स",
          "हॉर्स राइडिंग",
          "ट्रैवल फोटोग्राफी"
        ],
        career: [
          "एडवेंचर ट्रैवल गाइड",
          "धार्मिक यात्रा आयोजनकर्ता",
          "विदेशी संरक्षक या मिशनरी",
          "हॉर्स राइडिंग प्रशिक्षक",
          "कंपटीशन स्पोर्ट्स कोच",
          "विदेशी संस्कृति अध्ययनकर्ता"
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
        ],
        neutral: [
          "Determined yet patient approach to career",
          "Occasional flexibility in leadership style",
          "Preference for challenging but rewarding roles",
          "Balanced ambition with practical planning",
          "Willingness to accept calculated career risks",
          "Moderate assertiveness with authority"
        ],
        remedies: [
          "कार्यस्थल पर ईमानदारी रखें",
          "संयमित नेतृत्व करें",
          "मंगलवार को लाल कपड़े दान करें",
          "कार्यक्षेत्र में अनुशासन रखें",
          "अत्यधिक कार्यभार से बचें",
          "शक्ति को सकारात्मक दिशा में लगाएं"
        ],
        hobbies: [
          "स्पोर्ट्स कोचिंग",
          "पब्लिक सर्विस (आर्मी/पुलिस)",
          "लीडरशिप ट्रेनिंग",
          "इवेंट मैनेजमेंट",
          "फिटनेस इंडस्ट्री",
          "एथलेटिक चैंपियनशिप"
        ],
        career: [
          "सेना/पुलिस अधिकारी",
          "फिटनेस सेंटर मालिक",
          "लीडरशिप ट्रेनर",
          "इवेंट मैनेजर (स्पोर्ट्स/एडवेंचर)",
          "क्राफ्ट या निर्माण उद्योग",
          "स्पोर्ट्स टीम कैप्टन"
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
        ],
        neutral: [
          "Actively involved in select group goals",
          "Changing interest in networking events",
          "Moderate risk-taking for group benefit",
          "Balanced give-and-take in friendships",
          "Creative ideas for community projects",
          "Occasional reserve in group decision-making"
        ],
        remedies: [
          "मित्रता में विवेक और चयनशीलता रखें",
          "लाल मसूर और गुड़ का दान करें",
          "समूह में विवाद टालें",
          "सामूहिक सेवा कार्य में भाग लें",
          "मंगलवार को हनुमान जी के मंदिर में दीपक जलाएं",
          "अनावश्यक दिखावे से बचें"
        ],
        hobbies: [
          "टीम स्पोर्ट्स",
          "एडवेंचर क्लब",
          "नेटवर्किंग स्पोर्ट्स",
          "मैराथन",
          "ग्रुप साइक्लिंग",
          "टीम फिटनेस चैलेंज"
        ],
        career: [
          "टीम स्पोर्ट्स कोच",
          "एडवेंचर क्लब आयोजक",
          "सामूहिक फिटनेस प्रोग्राम",
          "माराथन आयोजक",
          "नेटवर्किंग और स्पोर्ट्स नेटवर्किंग",
          "ग्रुप ट्रेकिंग आयोजक"
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
        ],
        neutral: [
          "Occasional preference for introspection",
          "Moderate openness to spiritual retreats",
          "Balanced healing through rest",
          "Interest in overcoming past setbacks",
          "Mild solitude to focus on personal growth",
          "Readiness to adapt after challenges"
        ],
        remedies: [
          "विदेश यात्रा से पहले गरीबों को लाल वस्त्र दान करें",
          "मंगलवार को पुलिस/सैनिकों को भोजन कराएं",
          "तप, साधना और ध्यान में समय दें",
          "मंगल ग्रह शांति हवन कराएं",
          "गुप्त शत्रुओं से सचेत रहें",
          "ॐ क्रां क्रीं क्रौं सः भौमाय नमः मंत्र का जाप करें"
        ],
        hobbies: [
          "विदेशी एडवेंचर ट्रिप",
          "सोलो ट्रेकिंग",
          "स्पिरिचुअल मार्शल आर्ट्स",
          "गहरे पानी में डाइविंग",
          "सेल्फ डिफेंस रिट्रीट",
          "मेडिटेशन के साथ फिटनेस"
        ],
        career: [
          "विदेशी एडवेंचर टूर गाइड",
          "स्पिरिचुअल मार्शल आर्ट्स प्रशिक्षक",
          "मेडिटेशन और फिटनेस कोच",
          "सेल्फ डिफेंस रिट्रीट होस्ट",
          "गहरे पानी में डाइविंग प्रशिक्षक",
          "एकांत में एडवेंचर लेखक"
        ]
      }
    ]
  }  
];

export default planetHouseSymptoms;
