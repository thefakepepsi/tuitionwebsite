
const trialForm = document.getElementById("trialForm");


trialForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page reload


    const formData = {
        parentName: trialForm.parentName.value.trim(),
        studentName: trialForm.studentName.value.trim(),
        studentAge: trialForm.studentAge.value.trim(),
        studentSchool: trialForm.studentSchool.value.trim(),
        location: trialForm.location.value
    };


    if (!formData.parentName || !formData.studentName || !formData.studentAge || !formData.studentSchool) {
        alert("Please fill out all fields.");
        return;
    }

    try {

        const response = await fetch("https://script.google.com/macros/library/d/1JevRTRIHMzXd23htvmm_nQBC4MEiwNTDwzPn5kc2b-_FSz546cgK9Dmm/3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Trial class request submitted! You will be contacted soon.");
            trialForm.reset(); // Clear form
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Server error. Please try again later.");
    }
});
// Smooth auto-scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
