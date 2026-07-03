const translations = {
    en: {
        nav: {
            about: 'About Me',
            education: 'Education',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            hobbies: 'Hobbies',
            contact: 'Contact',
        },
        welcome: {
            loading: 'Portfolio loading',
            welcome: 'Welcome',
            hint: 'Tap anywhere to enter',
        },
        hero: {
            greeting: "Hi, I'm Jit",
            title: 'Software Engineer',
            subtitle: 'Passionate about creating beautiful and functional web applications',
            cta1: 'Get In Touch',
            cta2: 'View My Work',
        },
        about: {
            sectionTitle: 'About Me',
            intro: `Welcome to my portfolio! I'm a passionate software engineer who loves creating innovative solutions and bringing ideas to life through code.\n\nWith a strong foundation in web development, I focus on building user-friendly applications that solve real-world problems. I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field.\n\nWhen I'm not coding, you can find me playing badminton or volleyball, staying active and enjoying life to the fullest. I also love capturing moments through filming and listening to a mix of English and Chinese songs that inspire my creative process.`,
        },
        education: {
            sectionTitle: 'Education',
            cgpa: 'CGPA',
            schools: [
                {
                    name: 'Bachelor of Software Engineering (Honours)',
                    location: 'Kuala Lumpur, Malaysia',
                    duration: 'July 2024 - July 2026',
                },
                {
                    name: 'Diploma in Information Technology',
                    location: 'Kuala Lumpur, Malaysia',
                    duration: 'June 2022 - June 2024',
                },
            ],
        },
        experience: {
            sectionTitle: 'Working Journey',
            jobs: [
                {
                    role: 'Associate Software Engineer - Internship',
                    location: 'Kuala Lumpur, Malaysia',
                    duration: 'January 2026 - July 2026',
                    description: 'Software Support, Technical Investigation & Development',
                    points: [
                        'Provided product support by investigating, troubleshooting, and resolving software-related issues.',
'Managed and resolved Level 1 (L1) and Level 2 (L2) technical support cases while adhering to Service Level Agreements (SLAs) to ensure timely issue resolution and customer satisfaction.',
'Collaborated with cross-functional teams to analyze and resolve complex technical issues, ensuring effective communication and knowledge sharing.',
'Developed and maintained scripts, tools, and utilities to automate repetitive tasks, streamline workflows, and improve overall efficiency.',
'Implemented and customized algorithms and business logic solutions to address customer-specific requirements and improve application functionality.',
'Analyzed customer-reported problems and identified root causes through systematic debugging and issue investigation.',
'Collaborated closely with certified Sitecore developers and cross-functional teams to diagnose, escalate, and resolve complex technical issues.',
'Utilized Docker containers to deploy, reproduce, and troubleshoot customer environments for efficient issue investigation and testing.',
'Documented findings, solutions, and troubleshooting procedures to improve support efficiency and knowledge sharing.',
'Assisted in maintaining product quality by reproducing, validating, and tracking reported defects.',
'Participated in code reviews, solution discussions, and technical investigations to support product improvements and customer success.'
                    ],
                },
                {
                    role: 'IT Technician - Internship',
                    location: 'Petaling Jaya, Malaysia',
                    duration: 'November 2023 - January 2024',
                    description: 'Provided comprehensive technical support and system maintenance services',
                    points: [
                        'Provided technical support to clients by troubleshooting and resolving hardware and software issues',
                        'Performed system maintenance including PC formatting, operating system reinstallation, and software setup',
                    ],
                },
            ],
        },
        projects: {
            sectionTitle: 'Projects',
            items: [
                {
                    title: 'AI-Based Education System',
                    description: 'Final Year Project designed for the education domain. Leverages Java Spring Boot for backend, React for frontend, and Python for extracting text.',
                },
                {
                    title: 'Coin Recognition and Counting System',
                    description: 'Trained a custom Faster R-CNN model for coin detection and counting; built an interactive Streamlit app for inference and results display.',
                },
                {
                    title: 'BananaSis',
                    description: 'Developed a Java web app using JSP/Servlets with MVC architecture for clean separation of concerns.',
                },
                {
                    title: 'Track and Field',
                    description: 'A ticketing system for a Track and Field Society, enabling event registration and ticket management using XAMPP stack.',
                },
                {
                    title: 'HopeWave',
                    description: 'A web/mobile social platform for anonymous bottle messaging with light gamification and chat, built with PHP on the XAMPP stack and integrated with Firebase for real-time features.',
                },
            ],
        },
        skills: {
            sectionTitle: 'Skills & Expertise',
            categories: {
                'Frontend Development': 'Frontend Development',
                'Backend Development': 'Backend Development',
                'Database Management': 'Database Management',
                'Cloud & Tools': 'Cloud & Tools',
                'Machine Learning': 'Machine Learning',
                'Languages': 'Languages',
            },
            langItems: {
                'English': 'English',
                'Malay': 'Malay',
                'Mandarin': 'Mandarin',
                'Cantonese': 'Cantonese',
            },
        },
        hobbies: {
            sectionTitle: 'Hobbies & Interests',
            items: [
                { title: 'Badminton', description: 'Love playing badminton and improving my skills on the court' },
                { title: 'Volleyball', description: 'Enjoy the team spirit and competitive nature of volleyball' },
                { title: 'Filming', description: 'Passionate about capturing moments and creating visual stories' },
                { title: 'Listening to Music', description: 'Enjoy listening to English and Chinese songs across various genres' },
            ],
        },
        contact: {
            next: "07. What's Next?",
            title: "Let's Connect",
            text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
            sendEmail: 'Send Email',
            copied: 'Email copied to clipboard!',
        },
    },

    zh: {
        nav: {
            about: '关于我',
            education: '教育背景',
            experience: '工作经历',
            projects: '项目作品',
            skills: '技能专长',
            hobbies: '兴趣爱好',
            contact: '联系我',
        },
        welcome: {
            loading: '作品集加载中',
            welcome: '欢迎',
            hint: '点击任意处进入',
        },
        hero: {
            greeting: '你好，我是 Jit',
            title: '软件工程师',
            subtitle: '热衷于创建美观且功能强大的网络应用',
            cta1: '联系我',
            cta2: '查看作品',
        },
        about: {
            sectionTitle: '关于我',
            intro: `欢迎来到我的作品集！我是一名热情的软件工程师，热爱创造创新的解决方案，并将想法通过代码转化为现实。\n\n凭借扎实的网页开发基础，我专注于构建用户友好的应用程序，解决现实世界中的问题。我不断学习和探索新技术，以在这个快速发展的领域中保持领先。\n\n当我不在写代码的时候，你可以找到我在打羽毛球或排球，保持活力，享受生活。我也热爱通过拍摄来记录美好瞬间，以及聆听各种启发我创作灵感的英文和中文歌曲。`,
        },
        education: {
            sectionTitle: '教育背景',
            cgpa: 'CGPA',
            schools: [
                {
                    name: '荣誉软件工程学士学位',
                    location: '马来西亚，吉隆坡',
                    duration: '2024年7月 - 2026年7月',
                },
                {
                    name: '信息技术文凭',
                    location: '马来西亚，吉隆坡',
                    duration: '2022年6月 - 2024年6月',
                },
            ],
        },
        experience: {
            sectionTitle: '工作经历',
            jobs: [
                {
                    role: '软件工程师实习生',
                    location: '马来西亚，吉隆坡',
                    duration: '2026年1月 - 2026年7月',
                     description: '软件支援、技术问题调查与开发',
        points: [
            '通过调查、故障排除及问题修复，为客户提供软件产品技术支援。',
            '负责处理一级（L1）及二级（L2）技术支援案例，并遵守服务水平协议（SLA），确保问题能够及时解决并提升客户满意度。',
            '与跨职能团队合作，分析并解决复杂技术问题，确保沟通顺畅及知识共享。',
            '开发及维护脚本、工具和实用程序，以自动化重复性任务、优化工作流程并提高整体效率。',
            '根据客户需求实现及定制算法与业务逻辑解决方案，以提升系统功能和应用表现。',
            '通过系统化调试和问题调查，分析客户反馈的问题并找出根本原因。',
            '与认证 Sitecore 开发工程师及跨职能团队紧密合作，诊断、升级及解决复杂技术问题。',
            '利用 Docker 容器部署、重现及排查客户环境中的问题，以提升问题调查和测试效率。',
            '记录调查结果、解决方案及故障排除流程，以提高支援效率并促进知识共享。',
            '通过重现、验证及追踪缺陷，协助维护产品质量。',
            '参与代码审查、解决方案讨论及技术调查工作，以支持产品优化及客户成功。'
        ],
                },
                {
                    role: 'IT 技术员实习生',
                    location: '马来西亚，八打灵再也',
                    duration: '2023年11月 - 2024年1月',
                    description: '提供全面的技术支持和系统维护服务',
                    points: [
                        '为客户提供技术支持，排查并解决硬件和软件问题',
                        '执行系统维护工作，包括电脑格式化、操作系统重装及软件配置',
                    ],
                },
            ],
        },
        projects: {
            sectionTitle: '项目作品',
            items: [
                {
                    title: '人工智能教育系统',
                    description: '为教育领域设计的毕业项目。后端使用 Java Spring Boot，前端使用 React，并使用 Python 进行文本提取。',
                },
                {
                    title: '硬币识别与计数系统',
                    description: '训练了自定义 Faster R-CNN 模型进行硬币检测和计数；构建了交互式 Streamlit 应用程序用于推理和结果展示。',
                },
                {
                    title: 'BananaSis',
                    description: '使用 JSP/Servlets 和 MVC 架构开发的 Java 网络应用程序，实现关注点的清晰分离。',
                },
                {
                    title: '田径赛事系统',
                    description: '一个田径协会的售票系统，支持赛事报名和票务管理，使用 XAMPP 技术栈构建。',
                },
                {
                    title: 'HopeWave',
                    description: '一个用于匿名漂流瓶消息的网络/移动社交平台，具有轻度游戏化和聊天功能，基于 PHP 和 XAMPP 构建，并集成 Firebase 实现实时功能。',
                },
            ],
        },
        skills: {
            sectionTitle: '技能专长',
            categories: {
                'Frontend Development': '前端开发',
                'Backend Development': '后端开发',
                'Database Management': '数据库管理',
                'Cloud & Tools': '云服务与工具',
                'Machine Learning': '机器学习',
                'Languages': '语言能力',
            },
            langItems: {
                'English': '英语',
                'Malay': '马来语',
                'Mandarin': '中文',
                'Cantonese': '粤语',
            },
        },
        hobbies: {
            sectionTitle: '兴趣爱好',
            items: [
                { title: '羽毛球', description: '热爱打羽毛球，不断提升球场上的技术水平' },
                { title: '排球', description: '享受排球运动中的团队精神和竞技魅力' },
                { title: '拍摄', description: '热衷于捕捉精彩瞬间，创作视觉故事' },
                { title: '听音乐', description: '喜欢欣赏各类英文和中文歌曲' },
            ],
        },
        contact: {
            next: '07. 下一步？',
            title: '保持联系',
            text: '我始终乐于探讨新项目、创意想法，或成为您愿景的一部分。',
            sendEmail: '发送邮件',
            copied: '邮箱已复制到剪贴板！',
        },
    },
};

export default translations;
