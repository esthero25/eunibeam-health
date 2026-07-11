//slideshow animation + functionality
//TODO: Add functions
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");

  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
}, 4000);

// role tabs functionality
const roleData = {
    senior: {
        image: "../images/seniorcareassistance-1.jpg",
        title: "What is a Senior Care Assistant?",
        description: "A senior care assistant is a professional who provides support and assistance to elderly individuals, typically within their homes, assisted living facilities, or nursing homes.",
        list: [
            "Personal Care",
            "Medication Management",
            "Mobility Support",
            "Household Tasks",
            "Companionship",
            "Health Monitoring"
        ],
        ending: "Senior care assistants play a crucial role in enhancing the quality of life for elderly individuals by offering personalized care and support."
    },

    social: {
        image: "../images/socialcareworker-1.jpg",
        title: "What is a Social Care Worker?",
        description: "A social care worker is a professional who provides support, assistance, and care to individuals in need, such as the elderly, people with disabilities, those with mental health issues, and vulnerable individuals.",
        list: [
            "Assessment",
            "Support and Assistance",
            "Emotional Support",
            "Advocacy",
            "Coordination of Services",
            "Skill Development",
            "Crisis Intervention",
            "Documentation"
        ],
        ending: "Social care workers operate in clients' homes. Their work is vital in fostering a supportive environment that empowers individuals to lead fulfilling lives."
    }
};

const tabs = document.querySelectorAll(".role-tab");
const roleContent = document.querySelector(".role-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const role = tab.dataset.role;
        const data = roleData[role];

        if (tab.classList.contains("active")) return;

        roleContent.classList.add("fade-out");

        setTimeout(() => {
            document.getElementById("roleImage").src = data.image;
            document.getElementById("roleImage").alt = data.title;
            document.getElementById("roleTitle").textContent = data.title;
            document.getElementById("roleDescription").textContent = data.description;
            document.getElementById("roleEnding").textContent = data.ending;

            document.getElementById("roleList").innerHTML = data.list
                .map(item => `<li>${item}</li>`)
                .join("");

            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            roleContent.classList.remove("fade-out");
        }, 300);
    });
});