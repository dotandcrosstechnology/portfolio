// Portfolio data array
const portfolioData = [
    {
        id: 1,
        title: "Car Buddy - Rent a Car Website",
        type: "Static Website",
        shortDesc: "A user-friendly platform for customers to browse and rent cars.",
       // imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: "projectimages/carbuddybanner.png",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        overview: "Designed and developed a static website for a car rental service with focus on clean UI, easy navigation, and responsive design. Included sections for car listings, booking form, testimonials, and contact information.",
        liveUrl: "https://anas-yousaf.github.io/carbuddy/",
        githubUrl: "https://github.com/your-repo",
        features: [
            {
                title: "Car Listings",
                description: "Displayed available cars with filters for price, model, and type."
            },
            {
                title: "Booking Form",
                description: "Simple and intuitive form for rental inquiries with validation."
            },
            {
                title: "Responsive Design",
                description: "Optimized layout for all device sizes from mobile to desktop."
            }
        ],
        challenges: [
            {
                challenge: "Ensuring smooth UI transitions between sections",
                solution: "Implemented CSS animations for a seamless user experience"
            }
        ],
        galleryImages: [
            //"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
            //"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            "projectimages/carbuddyfull.png",
            "projectimages/carbuddy1.png",
            "projectimages/carbuddy2.png",
            "projectimages/carbuddy3.png",
            "projectimages/carbuddybanner.png"
        ],
        date: "June 2023",
        client: "Car Buddy Inc."
       
    },
    {
        id: 2,
        title: "Fashion Icon - E-Commerce Site",
        type: "Complete Frontend Template",
        shortDesc: "A modern, interactive fashion e-commerce store with full functionality.",
        //imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: "projectimages/fashioniconbanner.png",
        technologies: ["React.js", "CSS Modules", "Redux", "Node.js"],
        overview: "Built a fully functional frontend for an online clothing store with product pages, cart functionality, and checkout flow. Focused on creating an engaging shopping experience with smooth animations and transitions.",
        features: [
            {
                title: "Product Catalog",
                description: "Grid layout with filters for category, price, and size."
            },
            {
                title: "Shopping Cart",
                description: "Add/remove items with quantity adjustment and real-time updates."
            },
            {
                title: "Checkout Flow",
                description: "User-friendly multi-step form with order summary."
            }
        ],
        challenges: [
            {
                challenge: "Managing cart state efficiently across components",
                solution: "Implemented Redux for centralized state management"
            }
        ],
        galleryImages: [
            //"https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
           // "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
           
           "projectimages/fashioniconbanner.png",
           "projectimages/fashionicon1.png",
           "projectimages/fashionicon2.png",
           "projectimages/fashionicon3.png",
           "projectimages/fashionicon4.png",
           "projectimages/fashionicon5.png",
           "projectimages/fashionicon6.png",
           "projectimages/fashionicon7.png",
           "projectimages/fashionicon8.png",
           "projectimages/fashioniconfull.png"
        ],
        date: "August 2023",
        client: "Fashion Icon LLC",
        liveUrl: "https://anas-yousaf.github.io/fashionicon/index.html",
        githubUrl: "https://github.com/your-repo"
    },
    {
        id: 3,
        title: "Nest Horizon - Real Estate Website",
        type: "Property Listing & Company Portfolio",
        shortDesc: "Showcase available homes and real estate company services.",
        //imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
        imageUrl: "projectimages/nesthorizonbanner.png",
        technologies: ["HTML", "CSS", "JavaScript", "Swiper.js"],
        overview: "Developed a real estate website featuring property listings, agent profiles, and contact forms. Focused on creating an elegant presentation of properties with high-quality images and intuitive navigation.",
        features: [
            {
                title: "Property Listings",
                description: "High-quality images with filters for price, location, and property type."
            },
            {
                title: "Agent Portfolio",
                description: "Professional profiles of real estate agents with contact options."
            },
            {
                title: "Lead Generation",
                description: "Contact forms optimized for capturing potential buyer inquiries."
            }
        ],
        challenges: [
            {
                challenge: "Optimizing image load times for better performance",
                solution: "Implemented lazy loading and image compression techniques"
            }
        ],
        galleryImages: [
            //"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            // "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
            "projectimages/nesthorizonbanner.png",
            "projectimages/nesthorizon1.png",
            "projectimages/nesthorizon2.png",
            "projectimages/nesthorizon3.png",
            "projectimages/nesthorizon4.png",
            "projectimages/nesthorizon5.png",
            "projectimages/nesthorizon6.png",
            "projectimages/nesthorizonfull.png",
        ],
        date: "October 2023",
        client: "Nest Horizon Realty",
        liveUrl: "https://anas-yousaf.github.io/nesthorizon/",
        githubUrl: "https://github.com/your-repo"
    },
    {
        id: 4,
        title: "Chef's Kitchen - Restaurant Website",
        type: "Restaurant Services Showcase",
        shortDesc: "Display menu, services, and reservation options for a restaurant.",
        //imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: "projectimages/chefskitchenbanner.png",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        overview: "Created a restaurant website with menu display, photo gallery, and online reservation system. Focused on visual appeal and usability to enhance the dining experience and encourage reservations.",
        features: [
            {
                title: "Menu Section",
                description: "Categorized food items with prices and descriptions."
            },
            {
                title: "Online Reservation",
                description: "Table booking form with real-time availability indicators."
            },
            {
                title: "Testimonials",
                description: "Customer reviews section to build credibility."
            }
        ],
        challenges: [
            {
                challenge: "Making the reservation form user-friendly and intuitive",
                solution: "Added real-time validation and clear feedback messages"
            }
        ],
        galleryImages: [
            //"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
           // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
           "projectimages/chefskitchenbanner.png",
           "projectimages/chefkitchen1.png",
           "projectimages/chefkitchen2.png",
           "projectimages/chefkitchen3.png",
           "projectimages/chefkitchen4.png",
           "projectimages/chefkitchen5.png",
           "projectimages/chefkitchen6.png",
           "projectimages/chefkitchen7.png",
           "projectimages/chefkitchenfull.png",
        ],
        date: "December 2023",
        client: "Chef's Kitchen Restaurant",
        liveUrl: "https://arkhalid123.github.io/chefs-kitchen/",
        githubUrl: "https://github.com/your-repo"
    },
    {
        id: 5,
        title: "MediConnect - Telemedicine Portal",
        type: "Fullstack Web Application",
        shortDesc: "A secure online platform connecting patients with doctors for virtual consultations.",
        imageUrl: "projectimages/telebanner.png",
        technologies: ["JavaScript", "Bootstrap", "Express.js", "Firebase"],
        overview: "Developed a full-featured telemedicine portal enabling patients to book virtual appointments, chat with doctors, and access medical records. The platform ensures HIPAA-compliant data security and real-time communication.",
        liveUrl: "https://frontend-h3rgk4s73-anas-yousafs-projects.vercel.app/index.html ",
        githubUrl: "https://github.com/your-repo/mediconnect",
        features: [
            {
                title: "Doctor-Patient Video Calls",
                description: "Integrated WebRTC for seamless, low-latency video consultations."
            },
            {
                title: "Appointment Scheduling",
                description: "Real-time calendar booking system with automated reminders."
            },
            {
                title: "Secure Medical Records",
                description: "Encrypted storage and retrieval of patient history using Firebase."
            },
            {
                title: "Prescription Management",
                description: "Doctors can generate and share e-prescriptions directly with patients."
            }
        ],
        challenges: [
            {
                challenge: "Ensuring HIPAA compliance for patient data security.",
                solution: "Implemented Firebase Authentication with end-to-end encryption for sensitive data."
            },
            {
                challenge: "Real-time video call stability across devices.",
                solution: "Used WebRTC with fallback options for weaker connections."
            }
        ],
        galleryImages: [
            "projectimages/telebanner.png",
            "projectimages/tele1.png",
            "projectimages/tele2.png",
            "projectimages/tele3.png",
            "projectimages/tele4.png",
            "projectimages/tele5.png",
            "projectimages/tele6.png",
            "projectimages/tele7.png",
            "projectimages/tele8.png",
            "projectimages/tele9.png",
            "projectimages/tele10.png",
            "projectimages/tele11.png",
            "projectimages/telefull.png"
        ],
        date: "March 2024",
        client: "MediConnect Healthcare Solutions"
    }
];




document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolioContainer');

    // Render Portfolio Cards
    function renderPortfolioCards() {
        portfolioData.forEach(project => {
            const cardColumn = document.createElement('div');
            cardColumn.className = 'col-md-4';
            
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-details">
                        <h3 style="color: white;">${project.title}</h3>
                        <p>${project.shortDesc}</p>
                        <div class="technologies mb-2">
                            ${project.technologies.map(tech => 
                                `<span class="tech-badge">${tech}</span>`
                            ).join('')}
                        </div>
                        <button onclick="viewProjectDetails(${project.id})" 
                                class="btn btn-primary btn-sm">
                            View Project
                        </button>
                    </div>
                </div>
            `;
            
            cardColumn.appendChild(card);
            portfolioContainer.appendChild(cardColumn);
        });
    }

    // View Project Details Function
    window.viewProjectDetails = function(projectId) {
        // Store project ID in localStorage
        localStorage.setItem('selectedProjectId', projectId);
        
        // Redirect to project details page
        window.location.href = 'project-details.html';
    }

    // Initial Render
    renderPortfolioCards();
});