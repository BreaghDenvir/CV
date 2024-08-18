function expandDetails(id) {
    const element = document.getElementById(id);
    const collapse = new bootstrap.Collapse(element, {
        toggle: true
    });
}

function showSkillDetails(skill) {
    const skillDetails = {
        skill1: "Worked collaboratively with other scouts to organize and plan events and initiatives. This experience developed strong teamwork skills.",
        skill2: "Addressed challenges and conflicts that arose during scouting activities and trips, finding effective solutions to resolve them.",
        skill3: "Regular practice of guitar while balancing other responsibilities has improved my time management skills.",
        skill4: "Consistently demonstrated the ability to quickly learn and apply new skills in various contexts, such as learning new software or adapting to new work environments."
    };
    document.getElementById('skillDetails').innerText = skillDetails[skill];
}
