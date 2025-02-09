

// Toggle Contact Information
function showContact() {
    const contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
}

// Sample skills data with names and values (percentage)
const skills = [
    { name: "JavaScript", value: 65 },
    { name: "HTML", value: 60 },
    { name: "CSS", value: 60 },
    { name: "Python", value: 85 },
    { name: "Dash", value: 20 },
    { name: "Powershell", value:  25}
];

// Function to generate the skill bars dynamically
function displaySkills() {
    const skillList = document.getElementById('skill-list');
    skills.forEach(skill => {
        // Create a div for the skill bar
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        
        // Create a span element to represent the progress
        const skillProgress = document.createElement('span');
        skillProgress.style.width = skill.value + '%'; // Set the width of the progress bar
        skillProgress.style.backgroundColor = getColorForSkill(skill.value); // Set color based on skill level
        skillProgress.textContent = `${skill.name}`; // Add the skill name and value to the bar
        
        
        // Append the progress to the skill bar
        skillBar.appendChild(skillProgress);
        
        // Append the skill bar to the skill list
        skillList.appendChild(skillBar);
    });
}

// Helper function to get a color based on the skill value
function getColorForSkill(value) {
    if (value >= 70) return '#03045e'; // Green for high skills
    if (value >= 50) return '#1e336b'; // Yellow for medium skills
    if (value >= 20) return '#465576';
    return { color: '#465576', message: '- Just beginning to learn' }
}

// Call the function to display skills when the page loads
window.onload = displaySkills;

// Sample languages data with names and values (percentage)
const languages = [
    { name: "Vietnamese", value: 100 },
    { name: "Luxemburgish", value: 100 },
    { name: "English", value: 80 },
    { name: "French", value: 80 },
    { name: "German", value: 60 }
];

// Function to generate the language skills with stars
function displayLanguages() {
    const languageList = document.getElementById('language-list');
    languages.forEach(language => {
        // Create a div for the language skill
        const languageSkill = document.createElement('li');
        languageSkill.className = 'language-skill';
        
        // Create the stars for the skill level
        const stars = getStarsForSkill(language.value);
        
        // Add the language name and stars to the skill element
        languageSkill.textContent = `${language.name}: ` + stars;
        
        // Append the language skill to the language list
        languageList.appendChild(languageSkill);
    });
}

// Helper function to get stars based on the skill value
function getStarsForSkill(value) {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.round(value / 20); // Calculate how many stars should be filled
    let stars = '';

    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
        stars += '★'; // Filled star
    }

    // Add empty stars
    for (let i = filledStars; i < totalStars; i++) {
        stars += '☆'; // Empty star
    }

    return stars;
}

// Call the function to display languages when the page loads
window.onload = function() {
    displaySkills(); // Assuming displaySkills() is already defined for programming skills
    displayLanguages(); // Display languages
};


// Sample hobbies data with names and optional icons
const hobbies = [
    { name: "Chess", icon: "chess-icon.png" },
    { name: "Breakdance", icon: "breaking-icon.png" },
    { name: "Martial Arts", icon: "martialart.png" },
    { name: "Boxing", icon: "boxing.png" },
    { name: "Coding", icon: "coding.png" },
    { name: "Traveling", icon: "travelling.png" }
];

// Function to generate the hobbies list
function displayHobbies() {
    const hobbyList = document.getElementById('hobby-list');
    hobbies.forEach(hobby => {
        // Create a div for each hobby
        const hobbyItem = document.createElement('li');
        hobbyItem.className = 'hobby-item';
        
        // If the hobby has an icon, add it
        if (hobby.icon) {
            const hobbyIcon = document.createElement('img');
            hobbyIcon.className = 'hobby-icon';
            hobbyIcon.src = hobby.icon;
            hobbyIcon.alt = hobby.name;
            hobbyItem.appendChild(hobbyIcon);
        }
        
        // Add the hobby name
        hobbyItem.appendChild(document.createTextNode(hobby.name));
        
        // Append the hobby item to the hobby list
        hobbyList.appendChild(hobbyItem);
    });
}

// Call the function to display hobbies when the page loads
window.onload = function() {
    displaySkills(); // Assuming displaySkills() is already defined for programming skills
    displayLanguages(); // Assuming displayLanguages() is already defined for languages
    displayHobbies(); // Display hobbies
};
