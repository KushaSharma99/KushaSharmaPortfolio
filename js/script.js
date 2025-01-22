// Project Data
const projects = [
    {
        title: "AI-powered French Learning Project",
        image: "assets/ai_french_learning.jpg", // Ensure this file exists in the assets folder
        timeline: "Sep 2024 - Present",
        description: `
            I developed a web app for students to practice vocabulary and grammar using AI tools and other LLMs.
            The interaction mimics a chatbot that provides feedback and asks questions based on the Cengage MindTap ebook 
            for Arizona State University French 101 and 102. It integrates OpenAI APIs to provide personalized feedback.
        `,
        skills: "Flask · Angular · MyAIBuilder · Python",
    },
    {
        title: "CryptoLocker Ransomware Attack",
        image: "assets/cryptolocker.jpg", // Ensure this file exists in the assets folder
        timeline: "May 2024 - Jul 2024",
        description: `
            Conducted a case study on the CryptoLocker Ransomware Attack, detailing its origins, spread, and impact. 
            Analyzed the evolution of ransomware tactics and highlighted lessons learned to prevent future attacks.
        `,
        skills: "Cybersecurity Research · Data Analysis",
    },
    {
        title: "Excel Property Management System",
        image: "assets/excel_property.jpg", // Ensure this file exists in the assets folder
        timeline: "May 2024 - Jul 2024",
        description: `
            Developed a robust system integrating Excel VBA with Access Database for efficient property and tenant management. 
            Features include role-based access control, automated data processing, and dynamic reporting.
        `,
        skills: "VBA Excel · Microsoft Access · Database Management System",
    },
];

// Load Projects into Gallery
function loadProjects() {
    const gallery = document.getElementById("project-gallery");
    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3 onclick="showProjectDetails(${index})">${project.title}</h3>
        `;
        gallery.appendChild(projectCard);
    });
}

// Show Project Details
function showProjectDetails(index) {
    const project = projects[index];
    const detailsSection = document.getElementById("project-details");
    const gallery = document.getElementById("projects");
    detailsSection.style.display = "block";
    gallery.style.display = "none";
    document.getElementById("details").innerHTML = `
        <h2>${project.title}</h2>
        <p><strong>Timeline:</strong> ${project.timeline}</p>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Skills:</strong> ${project.skills}</p>
    `;
}

// Go Back to Gallery
function goBack() {
    document.getElementById("project-details").style.display = "none";
    document.getElementById("projects").style.display = "block";
}

// Initialize Projects on Page Load
window.onload = loadProjects;
