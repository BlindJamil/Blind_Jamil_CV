// Multi-language translations
// Note: Supports both flat keys (e.g., "Home") and nested keys via dot-notation (e.g., "nav.home")
const translations = {
    en: {
        meta: { title: "Blind Mizuri — Full-Stack Developer & Graphic Designer" },
        skills: {
            laravel: "Laravel",
            laravelDesc: "Backend Framework",
            tailwind: "Tailwind CSS",
            tailwindDesc: "Styling Framework",
            react: "React",
            reactDesc: "Frontend Library",
            uiux: "UI/UX Design",
            uiuxDesc: "User Experience",
            photoshop: "Photoshop",
            photoshopDesc: "Photo Editing",
            illustrator: "Illustrator",
            illustratorDesc: "Vector Graphics",
            optimization: "Web Optimization",
            optimizationDesc: "Performance",
            deployment: "Deployment",
            deploymentDesc: "Cloud Services"
        },
        projects: {
            airoscan: { title: "AiroScan Website", desc: "Responsive website for AiroScan with clean UI and fast performance." },
            mhaplus: { title: "MHA Plus Website", desc: "Corporate website for MHA Plus with clear services and modern design." },
            tiucharity: { title: "TIU Charity", desc: "Donation platform for Tishk International University to support charitable initiatives and community projects." },
            booth: { title: "Exhibition Booth" },
            services: { title: "Services Brochure" },
            social: { title: "Social Media" },
            web1: { title: "Web Design" },
            web2: { title: "Web Mockup" },
            print: { title: "Print Design" },
            package: { title: "Packaging" },
            production: { title: "Production" },
            graphic: { title: "Graphic Design" },
            gaming: { title: "Gaming Website", desc: "Interactive gaming platform with real-time features and responsive design." },
            charity: { title: "Charity Website", desc: "Non-profit organization website with donation system and event management." },
            business: { title: "Business Landing", desc: "Modern business landing page with lead generation and analytics integration." },
            ecommerce: { title: "E-commerce Platform", desc: "Full-featured online store with payment integration and inventory management." },
            education: { title: "Education Portal", desc: "Learning management system with course creation and student tracking." }
        },
        exp: {
            current: {
                title: "Head of Operations & Co-Founder",
                company: "MHA Plus",
                time: "2022 - Present",
                badge: "Co-Founder",
                desc: "Co-founded and currently manage all operational aspects of MHA Plus, overseeing business strategy, client relations, and service delivery. Drive growth through strategic marketing initiatives, develop and implement business processes, and ensure high-quality project execution from concept to completion.",
                tags: {
                    businessStrategy: "Business Strategy",
                    marketingStrategy: "Marketing Strategy",
                    clientManagement: "Client Management",
                    projectExecution: "Project Execution"
                }
            },
            freelance: {
                title: "Freelance Developer & Designer",
                company: "Independent",
                time: "2020 - Present",
                badge: "Freelance",
                desc: "Delivering end-to-end web development and graphic design solutions for diverse clients. Specialized in creating responsive websites, e-commerce platforms, and comprehensive brand identity systems that drive business growth and user engagement.",
                tags: {
                    fullStack: "Full-Stack Development",
                    brandDesign: "Brand Design",
                    clientRelations: "Client Relations",
                    projectManagement: "Project Management"
                }
            },
            personal: {
                title: "Personal Projects & Learning",
                company: "Continuous Development",
                time: "2019 - Present",
                badge: "Innovation",
                desc: "Continuously exploring new technologies and design trends through personal projects. Built various web applications, mobile-responsive sites, and design systems while staying current with industry best practices and emerging technologies.",
                tags: {
                    selfLearning: "Self-Learning",
                    innovation: "Innovation",
                    experimentation: "Experimentation",
                    problemSolving: "Problem Solving"
                }
            }
        },
        // Nested keys (preferred)
        nav: {
            home: "Home",
            skills: "Skills",
            portfolio: "Portfolio",
            experience: "Experience",
            contact: "Contact"
        },
        hero: {
            name: "Blind Mizuri",
            title: "Full-Stack Developer & Graphic Designer",
            intro: "I'm a creative full-stack developer and designer who blends functionality with elegance to craft engaging digital experiences.",
            cta: "View My Work"
        },
        portfolio: {
            title: "Selected Work",
            subtitle: "A showcase of my recent web development and graphic design projects",
            webProjectsTitle: "Web Development Projects",
            designProjectsTitle: "Graphic Design Gallery",
            seeMoreWeb: "See More Web Projects",
            seeMoreDesign: "See More Design Work",
            viewProject: "View Project",
        },
        contactSection: {
            title: "Let's Work Together",
            subtitle: "Ready to bring your ideas to life? Get in touch and let's create something amazing.",
            infoTitle: "Get In Touch",
            infoText: "I'm always interested in new opportunities and exciting projects. Whether you need a website, graphic design, or just want to say hello, feel free to reach out!",
            labels: { name: "Name", email: "Email", message: "Message" },
            submit: "Send Message",
            metaLabels: { email: "Email", location: "Location", responseTime: "Response Time" },
            metaValues: { location: "Available Worldwide", responseTime: "Within 2 hours" }
        },
        ui: { language: "Language" },
        common: {
            showLess: "Show Less",
            sending: "Sending..."
        },
        messages: {
            fillAllFields: "Please fill in all fields.",
            invalidEmail: "Please enter a valid email address.",
            sentSuccess: "Message sent successfully! I'll get back to you soon."
        },
        // Navigation
        "Home": "Home",
        "Skills": "Skills",
        "Portfolio": "Portfolio",
        "Experience": "Experience",
        "Contact": "Contact",
        
        // Hero Section
        "hero-name": "Blind Mizuri",
        "hero-title": "Full-Stack Developer & Graphic Designer",
        "hero-intro": "I'm a creative full-stack developer and designer who blends functionality with elegance to craft engaging digital experiences.",
        "cta-button": "View My Work",
        
        // Skills Section
        "skills-title": "Skills & Expertise",
        "skills-subtitle": "Technologies and tools I use to bring ideas to life",
        
    // Portfolio Section (flat keys for backward-compat)
    "portfolio-title": "Selected Work",
    "portfolio-subtitle": "A showcase of my recent web development and graphic design projects",
    "web-projects-title": "Web Development Projects",
    "design-projects-title": "Graphic Design Gallery",
    "see-more-web": "See More Web Projects",
    "see-more-design": "See More Design Work",
    "view-project": "View Project",
        
        // Experience Section
        "experience-title": "Experience",
        "experience-subtitle": "Professional journey and key achievements",
        
        // Contact Section (flat)
        "contact-title": "Let's Work Together",
        "contact-subtitle": "Ready to bring your ideas to life? Get in touch and let's create something amazing.",
        "form-label": {
            "name": "Name",
            "email": "Email",
            "message": "Message"
        },
        "submit-button": "Send Message",
        "contact-info-title": "Get In Touch",
        "contact-info-text": "I'm always interested in new opportunities and exciting projects. Whether you need a website, graphic design, or just want to say hello, feel free to reach out!",
        "contact-meta-label-email": "Email",
        "contact-meta-label-location": "Location",
        "contact-meta-label-response": "Response Time",
        "contact-meta-value-location": "Available Worldwide",
        "contact-meta-value-response": "Within 2 hours",
        
        // Footer
        "footer-text": "© 2025 Blind Mizuri. All rights reserved."
    },
    
    ar: {
        meta: { title: "بلند ميزوري — مطور ويب متكامل ومصمم جرافيك" },
        skills: {
            laravel: "لارافيل",
            laravelDesc: "إطار عمل للواجهة الخلفية",
            tailwind: "تايلويند CSS",
            tailwindDesc: "إطار التنسيق",
            react: "ريأكت",
            reactDesc: "مكتبة الواجهة الأمامية",
            uiux: "تصميم UI/UX",
            uiuxDesc: "تجربة المستخدم",
            photoshop: "فوتوشوب",
            photoshopDesc: "تحرير الصور",
            illustrator: "إليستريتور",
            illustratorDesc: "رسومات متجهة",
            optimization: "تحسين الويب",
            optimizationDesc: "الأداء",
            deployment: "النشر",
            deploymentDesc: "خدمات سحابية"
        },
        projects: {
            airoscan: { title: "موقع AiroScan", desc: "موقع استعراضي متجاوب لآيروسكان بواجهة أنيقة وأداء سريع." },
            mhaplus: { title: "موقع MHA Plus", desc: "موقع شركة MHA Plus بخدمات واضحة وتصميم حديث." },
            tiucharity: { title: "TIU للأعمال الخيرية", desc: "منصة تبرعات لجامعة تشك الدولية لدعم المبادرات الخيرية ومشاريع المجتمع." },
            booth: { title: "جناح عرض" },
            services: { title: "نشرة الخدمات" },
            social: { title: "وسائل التواصل" },
            web1: { title: "تصميم ويب" },
            web2: { title: "نموذج ويب" },
            print: { title: "تصميم مطبوعات" },
            package: { title: "التغليف" },
            production: { title: "الإنتاج" },
            graphic: { title: "تصميم جرافيك" },
            gaming: { title: "موقع ألعاب", desc: "منصة ألعاب تفاعلية بميزات فورية وتصميم متجاوب." },
            charity: { title: "موقع خيري", desc: "موقع لمنظمة غير ربحية مع نظام تبرعات وإدارة فعاليات." },
            business: { title: "صفحة هبوط للأعمال", desc: "صفحة هبوط حديثة مع توليد عملاء ودمج التحليلات." },
            ecommerce: { title: "منصة تجارة إلكترونية", desc: "متجر إلكتروني متكامل مع دمج الدفع وإدارة المخزون." },
            education: { title: "بوابة تعليمية", desc: "نظام إدارة تعلم مع إنشاء الدورات وتتبع الطلاب." }
        },
        exp: {
            current: {
                title: "رئيس العمليات والمؤسس المشارك",
                company: "MHA Plus",
                time: "2022 - الآن",
                badge: "مؤسس مشارك",
                desc: "شاركت في تأسيس وأدير حالياً جميع الجوانب التشغيلية لـ MHA Plus، مع الإشراف على استراتيجية العمل وعلاقات العملاء وتقديم الخدمات. أقود النمو من خلال مبادرات تسويقية استراتيجية، وأطور وأنفذ العمليات التجارية، وأضمن تنفيذ المشاريع بجودة عالية من الفكرة إلى الإنجاز.",
                tags: {
                    businessStrategy: "استراتيجية الأعمال",
                    marketingStrategy: "استراتيجية التسويق",
                    clientManagement: "إدارة العملاء",
                    projectExecution: "تنفيذ المشاريع"
                }
            },
            freelance: {
                title: "مطور ومصمم حر",
                company: "عمل حر",
                time: "2020 - الآن",
                badge: "عمل حر",
                desc: "تقديم حلول متكاملة في تطوير الويب والتصميم الجرافيكي لعملاء متنوعين. متخصص في إنشاء مواقع متجاوبة ومنصات تجارة إلكترونية وهويات بصرية متكاملة.",
                tags: {
                    fullStack: "تطوير متكامل",
                    brandDesign: "تصميم علامة تجارية",
                    clientRelations: "علاقات العملاء",
                    projectManagement: "إدارة المشاريع"
                }
            },
            personal: {
                title: "مشاريع شخصية وتعلّم",
                company: "تطوير مستمر",
                time: "2019 - الآن",
                badge: "ابتكار",
                desc: "استكشاف التقنيات والاتجاهات الجديدة عبر مشاريع شخصية، وبناء تطبيقات ويب وأنظمة تصميم مع مواكبة أفضل الممارسات.",
                tags: {
                    selfLearning: "تعلّم ذاتي",
                    innovation: "ابتكار",
                    experimentation: "تجريب",
                    problemSolving: "حل المشكلات"
                }
            }
        },
        nav: {
            home: "الرئيسية",
            skills: "المهارات",
            portfolio: "معرض الأعمال",
            experience: "الخبرة",
            contact: "التواصل"
        },
        hero: {
            name: "بلند ميزوري",
            title: "مطور ويب متكامل ومصمم جرافيك",
            intro: "أنا مطور ومصمم مبدع أمزج بين الوظائف والأناقة لصناعة تجارب رقمية جذابة.",
            cta: "شاهد أعمالي"
        },
        portfolio: {
            title: "أعمال مختارة",
            subtitle: "عرض لأحدث مشاريع تطوير الويب والتصميم الجرافيكي",
            webProjectsTitle: "مشاريع تطوير الويب",
            designProjectsTitle: "معرض التصميم الجرافيكي",
            seeMoreWeb: "المزيد من مشاريع الويب",
            seeMoreDesign: "المزيد من أعمال التصميم",
            viewProject: "شاهد المشروع"
        },
        contactSection: {
            title: "لنعمل معاً",
            subtitle: "مستعد لتحويل أفكارك إلى واقع؟ تواصل معي ولننشئ شيئاً رائعاً.",
            infoTitle: "تواصل معي",
            infoText: "أنا مهتم دائماً بالفرص الجديدة والمشاريع المثيرة. سواء كنت تحتاج موقع ويب أو تصميم جرافيكي أو مجرد إلقاء التحية، لا تتردد في التواصل!",
            labels: { name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة" },
            submit: "إرسال الرسالة",
            metaLabels: { email: "البريد الإلكتروني", location: "الموقع", responseTime: "سرعة الرد" },
            metaValues: { location: "متاح للعمل عن بُعد", responseTime: "خلال ٢ ساعة" }
        },
    ui: { language: "اللغة" },
        common: { showLess: "عرض أقل", sending: "جاري الإرسال..." },
        messages: {
            fillAllFields: "يرجى ملء جميع الحقول.",
            invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
            sentSuccess: "تم إرسال الرسالة بنجاح! سأتواصل معك قريباً."
        },
        // Navigation
        "Home": "الرئيسية",
        "Skills": "المهارات",
        "Portfolio": "معرض الأعمال",
        "Experience": "الخبرة",
        "Contact": "التواصل",
        
        // Hero Section
        "hero-name": "بلند ميزوري",
        "hero-title": "مطور ويب متكامل ومصمم جرافيك",
        "hero-intro": "أنا مطور ومصمم مبدع أمزج بين الوظائف والأناقة لصناعة تجارب رقمية جذابة.",
        "cta-button": "شاهد أعمالي",
        
        // Skills Section
        "skills-title": "المهارات والخبرات",
        "skills-subtitle": "التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع",
        
    // Portfolio Section (flat)
    "portfolio-title": "أعمال مختارة",
    "portfolio-subtitle": "عرض لأحدث مشاريع تطوير الويب والتصميم الجرافيكي",
    "web-projects-title": "مشاريع تطوير الويب",
    "design-projects-title": "معرض التصميم الجرافيكي",
    "see-more-web": "المزيد من مشاريع الويب",
    "see-more-design": "المزيد من أعمال التصميم",
    "view-project": "شاهد المشروع",
        
        // Experience Section
        "experience-title": "الخبرة",
        "experience-subtitle": "الرحلة المهنية والإنجازات الرئيسية",
        
        // Contact Section (flat)
        "contact-title": "لنعمل معاً",
        "contact-subtitle": "مستعد لتحويل أفكارك إلى واقع؟ تواصل معي ولننشئ شيئاً رائعاً.",
        "form-label": {
            "name": "الاسم",
            "email": "البريد الإلكتروني",
            "message": "الرسالة"
        },
        "submit-button": "إرسال الرسالة",
        "contact-info-title": "تواصل معي",
        "contact-info-text": "أنا مهتم دائماً بالفرص الجديدة والمشاريع المثيرة. سواء كنت تحتاج موقع ويب أو تصميم جرافيكي أو مجرد إلقاء التحية، لا تتردد في التواصل!",
        "contact-meta-label-email": "البريد الإلكتروني",
        "contact-meta-label-location": "الموقع",
        "contact-meta-label-response": "سرعة الرد",
        "contact-meta-value-location": "متاح للعمل عن بُعد",
        "contact-meta-value-response": "خلال ٢ ساعة",
        
        // Footer
        "footer-text": "© 2025 بلند ميزوري. جميع الحقوق محفوظة."
    },
    
    ku: {
        meta: { title: "بلند میزوری — گەشەپێدەری تەواو و دیزاینەری گرافیک" },
        skills: {
            laravel: "Laravel",
            laravelDesc: "فریمۆرکی پشتەوە",
            tailwind: "Tailwind CSS",
            tailwindDesc: "فریمۆرکی ستایل",
            react: "React",
            reactDesc: "کتێبخانەی پێشەوە",
            uiux: "دەزاینی UI/UX",
            uiuxDesc: "ئەزموونی بەکارهێنەر",
            photoshop: "Photoshop",
            photoshopDesc: "دەستکاری وێنە",
            illustrator: "Illustrator",
            illustratorDesc: "گرافیکی ڤێکتۆر",
            optimization: "باشترکردنی وێب",
            optimizationDesc: "پەرفۆرمانس",
            deployment: "بڵاوکردنەوە",
            deploymentDesc: "خزمەتگوزارییەکانی کلاود"
        },
        projects: {
            airoscan: { title: "ماڵپەڕی AiroScan", desc: "ماڵپەڕێکی وەگەرخراو بۆ AiroScan بە ڕووکاری جوان و پەرفۆرمانسی خێرا." },
            mhaplus: { title: "ماڵپەڕی MHA Plus", desc: "ماڵپەڕێکی کۆمپانیایی بۆ MHA Plus بە خزمەتگوزارییە ڕوون و دیزاینی نوێ." },
            tiucharity: { title: "TIU خێراتی", desc: "ستەمێکی بەخشین بۆ زانکۆی نێودەوڵەتی تیشک بۆ پشتگیری هەنگاوەکانی خێراتی و پڕۆژەکانی کۆمەڵگا." },
            booth: { title: "بووتی پێشاندان" },
            services: { title: "بروشوری خزمەتگوزاری" },
            social: { title: "سۆشیاڵ میدیا" },
            web1: { title: "دیزاینی ماڵپەڕ" },
            web2: { title: "نموونەی ماڵپەڕ" },
            print: { title: "دیزاینی چاپ" },
            package: { title: "پاکێجینگ" },
            production: { title: "پرۆدەکشن" },
            graphic: { title: "دیزاینی گرافیک" },
            gaming: { title: "ماڵپەڕی یاری", desc: "پلاتفۆڕمی یاری تێکڕاودەری لەگەڵ تایبەتمەندییەکانی کات-ڕاست و دیزاینی وەگەرخراو." },
            charity: { title: "ماڵپەڕی خێراتی", desc: "ماڵپەڕ بۆ رێکخراوێکی نەخێرەباز لەگەڵ سیستەمی بەخشین و بەڕێوەبردنی ڕووداو." },
            business: { title: "پەڕەی هاتنەخوارەوەی کاروباڕ", desc: "پەڕەی هاتنەخوارەوەی نوێ بۆ کاروبار لەگەڵ هێنانەوەی لیید و هاوکێشانی ئۆنالیټیکس." },
            ecommerce: { title: "ستەمێکی بازرگانی ئۆنلاین", desc: "فڕۆشگای ئۆنلاین بە تایبەتمەندییە تەواوەکان لەگەڵ یەکخستنەوەی پارەدان و بەڕێوەبردنی کەلەپوور." },
            education: { title: "دەروازەی فێركردن", desc: "سیستەمی بەڕێوەبردنی فێركردن لەگەڵ دروستکردنی وانە و شوێنکەوتنی قوتابیان." }
        },
        exp: {
            current: {
                title: "سەرپەرشتیاری کارگێڕی و هاوبنیاتنەر",
                company: "MHA Plus",
                time: "2022 - ئێستا",
                badge: "هاوبنیاتنەر",
                desc: "هاوبەشم بووم لە دامەزراندنی MHA Plus و ئێستا بەڕێوەبردنی هەموو لایەنە کارگێڕییەکان دەکەم، لەگەڵ سەرپەرشتیکردنی ستراتیجی کاروبار و پەیوەندیدانی کارمەند و گەیاندنی خزمەتگوزاری. گەشە بەرێوە دەبەم لە ڕێگەی هەنگاوە بازاڕکردنە ستراتیجییەکان، پرۆسەی کاروباری پەرەپێدەدەم و جێبەجێ دەکەم، و دڵنیایی دەدەم لە جێبەجێکردنی پڕۆژە بە کوالیتی بەرز لە بیرۆکەوە تا تەواوکردن.",
                tags: {
                    businessStrategy: "ستراتیجی کاروبار",
                    marketingStrategy: "ستراتیجی بازاڕکردن",
                    clientManagement: "بەڕێوەبردنی کارمەند",
                    projectExecution: "جێبەجێکردنی پڕۆژە"
                }
            },
            freelance: {
                title: "گەشەپێدەر و دیزاینەری ئازاد",
                company: "سەربەخۆ",
                time: "2020 - ئێستا",
                badge: "فریلانس",
                desc: "پێشکەشکردنی چارەسەری تەواو بۆ گەشەپێدانی وێب و دیزاینی گرافیک بۆ کارمەندان؛ دروستکردنی وێبسایتە وەگەرخراوەکان، ئی-کۆمەرز و سیستەمە ناساندنی برند.",
                tags: {
                    fullStack: "گەشەپێدانی تەواو",
                    brandDesign: "دیزاینی براند",
                    clientRelations: "پەیوەندیدانی کارمەند",
                    projectManagement: "بەڕێوەبردنی پڕۆژە"
                }
            },
            personal: {
                title: "پڕۆژەی کەسی و فێرکاری",
                company: "پەیوەندیدانی بەردەوام",
                time: "2019 - ئێستا",
                badge: "نوێکاری",
                desc: "هەمیشە لەسەر تەکنەلۆژیای نوێ و ئەمڕۆدا کاردەکەم بە پڕۆژە کەسییەکان؛ دروستکردنی ئەپی وێب و سیستەمی دیزاین و پەیڕەوکردنی باشترین ریخراوەکان.",
                tags: {
                    selfLearning: "خۆفێربوون",
                    innovation: "نوێکاری",
                    experimentation: "تاقیکردنەوە",
                    problemSolving: "چارەسەرکردنی کێشە"
                }
            }
        },
        nav: {
            home: "سەرەتا",
            skills: "کارامەیی",
            portfolio: "نمونە کارەکان",
            experience: "ئەزموون",
            contact: "پەیوەندی"
        },
        hero: {
            name: "بلند میزوری",
            title: "گەشەپێدەری تەواو و دیزاینەری گرافیک",
            intro: "من گەشەپێدەر و دیزاینەرێکی داهێنەرم کە فەنکشن و جوانی تێکەڵ دەکەم بۆ دروستکردنی ئەزموونە دیجیتاڵی سەرنجڕاکێش.",
            cta: "کارەکانم ببینە"
        },
        portfolio: {
            title: "کارە هەڵبژێردراوەکان",
            subtitle: "نمایشکردنی نوێترین پڕۆژەکانی گەشەپێدانی ماڵپەڕ و دیزاینی گرافیک",
            webProjectsTitle: "پڕۆژەکانی گەشەپێدانی ماڵپەڕ",
            designProjectsTitle: "گالەری دیزاینی گرافیک",
            seeMoreWeb: "زیاتر لە پڕۆژەکانی ماڵپەڕ",
            seeMoreDesign: "زیاتر لە کارەکانی دیزاین",
            viewProject: "پڕۆژەکە ببینە"
        },
        contactSection: {
            title: "با پێکەوە کار بکەین",
            subtitle: "ئامادەیت بیرۆکەکانت بخەیتە ژیانەوە؟ پەیوەندی بکە و با شتێکی نایاب دروست بکەین.",
            infoTitle: "پەیوەندی بکە",
            infoText: "من هەمیشە حەزم بە دەرفەتی نوێ و پڕۆژە سەرنجڕاکێشەکانە. جا ئەگەر پێویستیت بە ماڵپەڕ، دیزاینی گرافیک یان تەنها دەتەوێت سڵاو بکەیت، دوودڵ مەبە پەیوەندی بکە!",
            labels: { name: "ناو", email: "ئیمەیڵ", message: "نامە" },
            submit: "نامە بنێرە",
            metaLabels: { email: "ئیمەیڵ", location: "شوێن", responseTime: "کاتژمێری وەڵامدانەوە" },
            metaValues: { location: "بەردەستە لە هەموو شوێن", responseTime: "لە ماوەی ٢ کاتژمێر" }
        },
    ui: { language: "زمان" },
        common: { showLess: "کەمتر پیشانبدە", sending: "ناردن..." },
        messages: {
            fillAllFields: "تکایە هەموو خانەکان پڕبکەوە.",
            invalidEmail: "تکایە ناونیشانی ئیمەیڵێکی دروست بنووسە.",
            sentSuccess: "نامەکە بەسەرکەوتوویی نێردرا! زوو وەڵامت دەدەمەوە."
        },
        // Navigation
        "Home": "سەرەتا",
        "Skills": "کارامەیی",
        "Portfolio": "نمونە کارەکان",
        "Experience": "ئەزموون",
        "Contact": "پەیوەندی",
        
        // Hero Section
        "hero-name": "بلند میزوری",
        "hero-title": "گەشەپێدەری تەواو و دیزاینەری گرافیک",
        "hero-intro": "من گەشەپێدەر و دیزاینەرێکی داهێنەرم کە فەنکشن و جوانی تێکەڵ دەکەم بۆ دروستکردنی ئەزموونە دیجیتاڵی سەرنجڕاکێش.",
        "cta-button": "کارەکانم ببینە",
        
        // Skills Section
        "skills-title": "کارامەیی و شارەزایی",
        "skills-subtitle": "تەکنەلۆژیا و ئامرازەکان کە بەکاری دێنم بۆ ژیانەوەی بیرۆکەکان",
        
    // Portfolio Section (flat)
    "portfolio-title": "کارە هەڵبژێردراوەکان",
    "portfolio-subtitle": "نمایشکردنی نوێترین پڕۆژەکانی گەشەپێدانی ماڵپەڕ و دیزاینی گرافیک",
    "web-projects-title": "پڕۆژەکانی گەشەپێدانی ماڵپەڕ",
    "design-projects-title": "گالەری دیزاینی گرافیک",
    "see-more-web": "زیاتر لە پڕۆژەکانی ماڵپەڕ",
    "see-more-design": "زیاتر لە کارەکانی دیزاین",
    "view-project": "پڕۆژەکە ببینە",
        
        // Experience Section
        "experience-title": "ئەزموون",
        "experience-subtitle": "گەشتی پیشەیی و دەستکەوتە سەرەکیەکان",
        
        // Contact Section (flat)
        "contact-title": "با پێکەوە کار بکەین",
        "contact-subtitle": "ئامادەیت بیرۆکەکانت بخەیتە ژیانەوە؟ پەیوەندی بکە و با شتێکی نایاب دروست بکەین.",
        "form-label": {
            "name": "ناو",
            "email": "ئیمەیڵ",
            "message": "نامە"
        },
        "submit-button": "نامە بنێرە",
        "contact-info-title": "پەیوەندی بکە",
        "contact-info-text": "من هەمیشە حەزم بە دەرفەتی نوێ و پڕۆژە سەرنجڕاکێشەکانە. جا ئەگەر پێویستیت بە ماڵپەڕ، دیزاینی گرافیک یان تەنها دەتەوێت سڵاو بکەیت، دوودڵ مەبە پەیوەندی بکە!",
        "contact-meta-label-email": "ئیمەیڵ",
        "contact-meta-label-location": "شوێن",
        "contact-meta-label-response": "کاتژمێری وەڵامدانەوە",
        "contact-meta-value-location": "بەردەستە لە هەموو شوێن",
        "contact-meta-value-response": "لە ماوەی ٢ کاتژمێر",
        
        // Footer
        "footer-text": "© 2025 بلند میزوری. هەموو مافەکان پارێزراون."
    }
};

// Helper to get translations with dot-notation support and flat-key fallback
function t(path) {
    const locale = translations[currentLang] || {};
    // Dot-notation resolve
    const parts = path.split('.');
    let cursor = locale;
    for (const p of parts) {
        if (cursor && Object.prototype.hasOwnProperty.call(cursor, p)) {
            cursor = cursor[p];
        } else {
            cursor = undefined;
            break;
        }
    }
    if (typeof cursor === 'string') return cursor;
    // Fallback to flat key
    if (typeof locale[path] === 'string') return locale[path];
    return undefined;
}

// Current language state
let currentLang = 'en';

// DOM Elements
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const currentLangSpan = document.getElementById('currentLang');
const languageBtnMd = document.getElementById('languageBtnMd');
const languageDropdownMd = document.getElementById('languageDropdownMd');
const currentLangMdSpan = document.getElementById('currentLangMd');
const languageBtnMobile = document.getElementById('languageBtnMobile');
const languageDropdownMobile = document.getElementById('languageDropdownMobile');
const currentLangMobileSpan = document.getElementById('currentLangMobile');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const seeMoreWebBtn = document.getElementById('seeMoreWeb');
const seeMoreDesignBtn = document.getElementById('seeMoreDesign');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeLanguageSwitcher();
    initializePortfolioShowMore();
    initializeContactForm();
    initializeSmoothScroll();
    
    // Apply initial translations
    updateTranslations();
});

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle with smooth animation
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            // Trigger animation on next frame
            requestAnimationFrame(() => {
                mobileMenu.classList.add('show');
            });
            mobileMenuBtn.classList.add('active');
        } else {
            // Hide menu
            mobileMenu.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
            // Wait for animation to complete before hiding
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-accent');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('text-accent');
            }
        });
    });
}

// Language switcher functionality
function initializeLanguageSwitcher() {
    // Desktop language switcher
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('hidden');
            languageDropdownMd?.classList.add('hidden');
            languageDropdownMobile?.classList.add('hidden');
        });
    }

    // Medium screen language switcher
    if (languageBtnMd) {
        languageBtnMd.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdownMd.classList.toggle('hidden');
            languageDropdown?.classList.add('hidden');
            languageDropdownMobile?.classList.add('hidden');
        });
    }

    // Mobile language switcher
    if (languageBtnMobile) {
        languageBtnMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdownMobile.classList.toggle('hidden');
            languageDropdown?.classList.add('hidden');
            languageDropdownMd?.classList.add('hidden');
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        languageDropdown?.classList.add('hidden');
        languageDropdownMd?.classList.add('hidden');
        languageDropdownMobile?.classList.add('hidden');
    });

    // Language selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            const selectedDir = option.getAttribute('data-dir');
            
            if (selectedLang !== currentLang) {
                switchLanguage(selectedLang, selectedDir);
            }
            
            // Hide all dropdowns
            languageDropdown?.classList.add('hidden');
            languageDropdownMd?.classList.add('hidden');
            languageDropdownMobile?.classList.add('hidden');
        });
    });
}

// Switch language function
function switchLanguage(lang, dir) {
    currentLang = lang;
    
    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    
    // Update current language display
    const langMap = { en: 'EN', ar: 'ع', ku: 'ک' };
    if (currentLangSpan) currentLangSpan.textContent = langMap[lang];
    if (currentLangMdSpan) currentLangMdSpan.textContent = langMap[lang];
    if (currentLangMobileSpan) currentLangMobileSpan.textContent = langMap[lang];
    
    // Update all translatable elements
    updateTranslations();
    
    // Add RTL/LTR specific styles
    document.body.classList.toggle('rtl', dir === 'rtl');
}

// Update translations: robust engine using data-i18n attributes where available
function updateTranslations() {
    // Update the document title based on current language
    const titleT = t('meta.title');
    if (titleT) {
        document.title = titleT;
    }

    // 1) Attribute-driven translation for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (typeof value === 'string') {
            el.textContent = value;
        }
    });

    // 2) Backward-compatibility for existing classes/structure
    // Navigation links (desktop/medium/mobile)
    const navMap = [
        { selector: 'a[href="#home"].nav-link', key: 'nav.home' },
        { selector: 'a[href="#skills"].nav-link', key: 'nav.skills' },
        { selector: 'a[href="#portfolio"].nav-link', key: 'nav.portfolio' },
        { selector: 'a[href="#experience"].nav-link', key: 'nav.experience' },
        { selector: 'a[href="#contact"].nav-link', key: 'nav.contact' },
    ];
    navMap.forEach(({ selector, key }) => {
        document.querySelectorAll(selector).forEach(link => {
            const v = t(key);
            if (v) link.textContent = v;
        });
    });

    // Hero
    const heroName = document.querySelector('.hero-name');
    const heroTitle = document.querySelector('.hero-title');
    const heroIntro = document.querySelector('.hero-intro');
    const ctaButton = document.querySelector('.cta-button');
    if (heroName) heroName.textContent = t('hero.name') || t('hero-name');
    if (heroTitle) heroTitle.textContent = t('hero.title') || t('hero-title');
    if (heroIntro) heroIntro.textContent = t('hero.intro') || t('hero-intro');
    if (ctaButton) ctaButton.textContent = t('hero.cta') || t('cta-button');

    // Section headings and subtitles
    const skillsTitle = document.querySelector('.skills-title');
    const skillsSubtitle = document.querySelector('.skills-subtitle');
    const portfolioTitle = document.querySelector('.portfolio-title');
    const portfolioSubtitle = document.querySelector('.portfolio-subtitle');
    if (skillsTitle) skillsTitle.textContent = t('skills-title');
    if (skillsSubtitle) skillsSubtitle.textContent = t('skills-subtitle');
    if (portfolioTitle) portfolioTitle.textContent = t('portfolio.title') || t('portfolio-title');
    if (portfolioSubtitle) portfolioSubtitle.textContent = t('portfolio.subtitle') || t('portfolio-subtitle');

    // Headings with emojis
    const webProjectsHeading = document.querySelector('#portfolio h3:nth-of-type(1)');
    const designProjectsHeading = document.querySelector('#portfolio h3:nth-of-type(2)');
    if (webProjectsHeading) {
        webProjectsHeading.innerHTML = `<span class="mr-3">🧱</span>${t('portfolio.webProjectsTitle') || t('web-projects-title') || ''}`;
    }
    if (designProjectsHeading) {
        designProjectsHeading.innerHTML = `<span class="mr-3">🎨</span>${t('portfolio.designProjectsTitle') || t('design-projects-title') || ''}`;
    }

    // Buttons
    const seeMoreWebBtnEl = document.getElementById('seeMoreWeb');
    const seeMoreDesignBtnEl = document.getElementById('seeMoreDesign');
    if (seeMoreWebBtnEl && !seeMoreWebBtnEl.innerHTML.includes('chevron-up')) {
        seeMoreWebBtnEl.textContent = t('portfolio.seeMoreWeb') || t('see-more-web');
    }
    if (seeMoreDesignBtnEl && !seeMoreDesignBtnEl.innerHTML.includes('chevron-up')) {
        seeMoreDesignBtnEl.textContent = t('portfolio.seeMoreDesign') || t('see-more-design');
    }

    // Card CTAs (View Project) — only adjust anchors without an inner [data-i18n]
    document.querySelectorAll('#webProjectsContainer a').forEach(a => {
        if (a.querySelector('[data-i18n]')) return;
        const v = t('portfolio.viewProject') || t('view-project');
        if (v) a.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) n.nodeValue = ` ${v} `; });
    });

    // Form labels and submit
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitButton = document.querySelector('.submit-button');
    if (nameLabel) nameLabel.textContent = t('contactSection.labels.name') || t('form-label.name');
    if (emailLabel) emailLabel.textContent = t('contactSection.labels.email') || t('form-label.email');
    if (messageLabel) messageLabel.textContent = t('contactSection.labels.message') || t('form-label.message');
    if (submitButton) submitButton.textContent = t('contactSection.submit') || t('submit-button');

    // Contact info block labels/values
    const ciTitle = document.querySelector('.contact-info-title');
    const ciText = document.querySelector('.contact-info-text');
    if (ciTitle) ciTitle.textContent = t('contactSection.infoTitle') || t('contact-info-title');
    if (ciText) ciText.textContent = t('contactSection.infoText') || t('contact-info-text');
    // Meta rows
    const emailMetaLabel = document.querySelector('[data-i18n="contact.meta.emailLabel"]');
    const locationMetaLabel = document.querySelector('[data-i18n="contact.meta.locationLabel"]');
    const responseMetaLabel = document.querySelector('[data-i18n="contact.meta.responseLabel"]');
    const locationMetaValue = document.querySelector('[data-i18n="contact.meta.locationValue"]');
    const responseMetaValue = document.querySelector('[data-i18n="contact.meta.responseValue"]');
    if (emailMetaLabel) emailMetaLabel.textContent = t('contactSection.metaLabels.email') || t('contact-meta-label-email');
    if (locationMetaLabel) locationMetaLabel.textContent = t('contactSection.metaLabels.location') || t('contact-meta-label-location');
    if (responseMetaLabel) responseMetaLabel.textContent = t('contactSection.metaLabels.responseTime') || t('contact-meta-label-response');
    if (locationMetaValue) locationMetaValue.textContent = t('contactSection.metaValues.location') || t('contact-meta-value-location');
    if (responseMetaValue) responseMetaValue.textContent = t('contactSection.metaValues.responseTime') || t('contact-meta-value-response');

    // Experience and contact section headings
    const experienceTitle = document.querySelector('.experience-title');
    const experienceSubtitle = document.querySelector('.experience-subtitle');
    const contactTitle = document.querySelector('.contact-title');
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (experienceTitle) experienceTitle.textContent = t('experience-title');
    if (experienceSubtitle) experienceSubtitle.textContent = t('experience-subtitle');
    if (contactTitle) contactTitle.textContent = t('contactSection.title') || t('contact-title');
    if (contactSubtitle) contactSubtitle.textContent = t('contactSection.subtitle') || t('contact-subtitle');

    // Footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) footerText.textContent = t('footer-text');

    // Localize any images with data-alt-<lang>
    document.querySelectorAll('img[data-alt-en]').forEach(img => {
        const altMap = {
            en: img.getAttribute('data-alt-en'),
            ar: img.getAttribute('data-alt-ar'),
            ku: img.getAttribute('data-alt-ku')
        };
        if (altMap[currentLang]) img.setAttribute('alt', altMap[currentLang]);
    });
}

// Portfolio "See More" functionality
function initializePortfolioShowMore() {
    let webProjectsExpanded = false;
    let designProjectsExpanded = false;
    
    // Web Projects "See More" functionality
    if (seeMoreWebBtn) {
        seeMoreWebBtn.addEventListener('click', () => {
            const hiddenWebProjects = document.querySelectorAll('.web-project.hidden');
            const visibleWebProjects = document.querySelectorAll('.web-project:not(.hidden)');
            
            if (!webProjectsExpanded) {
                // Show hidden projects
                hiddenWebProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.remove('hidden');
                        project.classList.add('fade-in-up', 'visible');
                    }, index * 100);
                });
                
                seeMoreWebBtn.innerHTML = `<i class="fas fa-chevron-up mr-2"></i>${t('common.showLess') || 'Show Less'}`;
                webProjectsExpanded = true;
            } else {
                // Hide additional projects (keep only first 3)
                const allWebProjects = document.querySelectorAll('.web-project');
                allWebProjects.forEach((project, index) => {
                    if (index >= 3) { // Hide projects after the first 3
                        setTimeout(() => {
                            project.classList.add('hidden');
                            project.classList.remove('visible');
                        }, index * 50);
                    }
                });
                // Reset button text to localized "See More"
                seeMoreWebBtn.textContent = t('portfolio.seeMoreWeb') || t('see-more-web') || 'See More Web Projects';
                webProjectsExpanded = false;
                
                // Scroll back to web projects section
                setTimeout(() => {
                    document.querySelector('#webProjectsContainer').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 200);
            }
        });
    }
    
    // Design Projects "See More" functionality
    if (seeMoreDesignBtn) {
        seeMoreDesignBtn.addEventListener('click', () => {
            const hiddenDesignProjects = document.querySelectorAll('.design-project.hidden');
            
            if (!designProjectsExpanded) {
                // Show hidden projects
                hiddenDesignProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.remove('hidden');
                        project.classList.add('fade-in-up', 'visible');
                    }, index * 100);
                });
                
                seeMoreDesignBtn.innerHTML = `<i class=\"fas fa-chevron-up mr-2\"></i>${t('common.showLess') || 'Show Less'}`;
                designProjectsExpanded = true;
            } else {
                // Hide additional projects (keep only first 3)
                const allDesignProjects = document.querySelectorAll('.design-project');
                allDesignProjects.forEach((project, index) => {
                    if (index >= 3) { // Hide projects after the first 3
                        setTimeout(() => {
                            project.classList.add('hidden');
                            project.classList.remove('visible');
                        }, index * 50);
                    }
                });
                // Reset button text to localized "See More"
                seeMoreDesignBtn.textContent = t('portfolio.seeMoreDesign') || t('see-more-design') || 'See More Design Work';
                designProjectsExpanded = false;
                
                // Scroll back to design projects section
                setTimeout(() => {
                    document.querySelector('#designProjectsContainer').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 200);
            }
        });
    }
    
    // Design project click handlers for lightbox effect (optional)
    document.querySelectorAll('.design-project').forEach(project => {
        project.addEventListener('click', () => {
            // Add lightbox or modal functionality here if needed
            console.log('Design project clicked');
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification(t('messages.fillAllFields') || 'Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification(t('messages.invalidEmail') || 'Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = document.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
    submitButton.textContent = t('common.sending') || 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification(t('messages.sentSuccess') || "Message sent successfully! I'll get back to you soon.", 'success');
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white max-w-sm transform translate-x-full transition-transform duration-300`;
    
    // Set background color based on type
    if (type === 'success') {
        notification.classList.add('bg-green-500');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500');
    } else {
        notification.classList.add('bg-blue-500');
    }
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Smooth scroll functionality
function initializeSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Force light mode colors - Nuclear option
function forceLightMode() {
    // Force on document root
    document.documentElement.style.setProperty('color-scheme', 'light', 'important');
    document.documentElement.style.setProperty('background-color', '#ffffff', 'important');
    document.body.style.setProperty('background-color', '#ffffff', 'important');
    document.body.style.setProperty('color', '#374151', 'important');
    
    // Remove any filters
    document.documentElement.style.filter = 'none';
    document.body.style.filter = 'none';
}

// Run immediately
forceLightMode();

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Force light mode again after DOM loads
    forceLightMode();
    
    // Run again after a short delay to catch any late-loading styles
    setTimeout(forceLightMode, 100);
    setTimeout(forceLightMode, 500);
    
    // Add improved typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Store original content
        const originalText = heroTitle.textContent;
        
        // Clear the text first
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid #F59E0B';
        heroTitle.style.paddingRight = '5px';
        heroTitle.style.display = 'inline';
        
        let charIndex = 0;
        
        // Typing function
        function typeText() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Speed of typing (100ms per character)
            } else {
                // After typing is complete, keep blinking cursor
                heroTitle.style.animation = 'blink-caret 0.75s step-end infinite';
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeText, 500);
    }
});

// CSS animations for typing effect
const style = document.createElement('style');
style.textContent = `
    @keyframes blink-caret {
        from, to { border-right-color: transparent; }
        50% { border-right-color: #F59E0B; }
    }
    
    .notification {
        backdrop-filter: blur(10px);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .fade-in-up,
        .hover-lift,
        * {
            animation: none !important;
            transition: none !important;
        }
        
        /* Disable typing effect for users who prefer reduced motion */
        .hero-title {
            animation: none !important;
            border-right: none !important;
        }
    }
`;
document.head.appendChild(style);