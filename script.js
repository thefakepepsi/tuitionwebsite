// Select the form
const trialForm = document.getElementById("trialForm");

// Listen for submit
trialForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = {
        parentName: trialForm.parentName.value.trim(),
        studentName: trialForm.studentName.value.trim(),
        studentAge: trialForm.studentAge.value.trim(),
        studentSchool: trialForm.studentSchool.value.trim(),
        location: trialForm.location.value
    };

    // Basic validation
    if (!formData.parentName || !formData.studentName || !formData.studentAge || !formData.studentSchool) {
        alert("Please fill out all fields.");
        return;
    }

    try {
        // Send data to server
        const response = await fetch("/submit", {
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
            alert("Something went
