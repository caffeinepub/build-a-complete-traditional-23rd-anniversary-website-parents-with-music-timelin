// Central configuration for all anniversary content
export const anniversaryContent = {
    // Basic information
    parentsNames: {
        partner1: "PAPA",
        partner2: "MUMMY"
    },
    anniversaryYear: 23,
    weddingDate: "6 फ़रवरी 2003",
    
    // Hero section
    welcomeNote: "23 वर्षों की साथ, समर्पण और प्रेम का उत्सव। एक यात्रा जो परंपरा से शुरू हुई और एक सुंदर विरासत में बदल गई।",
    
    // About section
    aboutNote: "तेईस साल पहले, एक पवित्र बंधन में दो जीवन जुड़े। जो एक व्यवस्थित विवाह के रूप में शुरू हुआ, वह सम्मान, समझ और साझा मूल्यों पर आधारित एक साझेदारी में खिल गया है। जीवन के हर मौसम में, उन्होंने एक साथ खड़े होकर परिवार का पालन-पोषण किया और अनगिनत यादें बनाईं।",
    
    // Closing blessing
    closingBlessing: {
        quote: "आपका बंधन हर गुजरते साल के साथ और मजबूत हो, और आप स्वास्थ्य, खुशी और कई और वर्षों के साथ धन्य हों।",
        attribution: "परिवार की ओर से प्रेम और सम्मान के साथ"
    },
    
    // Timeline milestones
    timeline: [
        {
            year: "2003",
            title: "शुरुआत",
            description: "एक सुंदर समारोह में जीवन भर की यात्रा की शुरुआत हुई।"
        },
        {
            year: "2005",
            title: "पहला घर",
            description: "अपने पहले घर में बसे, अपने बढ़ते परिवार की नींव रखी।"
        },
        {
            year: "2007",
            title: "बढ़ता परिवार",
            description: "अपने पहले बच्चे का स्वागत किया, जीवन में नई खुशी और उद्देश्य लाया।"
        },
        {
            year: "2010",
            title: "नई शुरुआत",
            description: "नए अवसरों और चुनौतियों को अपनाया, एक साथ और मजबूत हुए।"
        },
        {
            year: "2015",
            title: "महत्वपूर्ण वर्ष",
            description: "महत्वपूर्ण पारिवारिक उपलब्धियों का जश्न मनाया और स्थायी यादें बनाईं।"
        },
        {
            year: "2020",
            title: "दृढ़ता",
            description: "कठिन समय को अनुग्रह के साथ पार किया, अपने बंधन की ताकत साबित की।"
        },
        {
            year: "2026",
            title: "23 साल मजबूत",
            description: "आज हम 23 वर्षों की साझेदारी, सम्मान और अटूट प्रतिबद्धता का जश्न मनाते हैं।"
        }
    ],
    
    // Family messages
    messages: [
        {
            author: "आपके बच्चे",
            message: "हमें दिखाने के लिए धन्यवाद कि प्रतिबद्धता, सम्मान और पारिवारिक मूल्यों का वास्तव में क्या अर्थ है। आपकी साथ की यात्रा हमारे जीवन का सबसे बड़ा पाठ रही है।"
        },
        {
            author: "परिवार",
            message: "तेईस साल की साथ आपकी ताकत और समर्पण का प्रमाण है। आप हम सभी को प्रेरित करते रहें।"
        }
    ],
    
    // Video montage (optional)
    video: {
        enabled: false,
        src: "/assets/video/montage.mp4",
        type: "local", // or "external"
        externalUrl: ""
    }
};

// Computed values
export const computedStats = {
    years: anniversaryContent.anniversaryYear,
    months: anniversaryContent.anniversaryYear * 12,
    days: Math.floor(anniversaryContent.anniversaryYear * 365.25),
    memories: "अनगिनत"
};
