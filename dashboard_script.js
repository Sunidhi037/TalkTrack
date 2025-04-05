function logout() {
    alert("You have been logged out!");
    // Redirect or handle logout logic here
}

function joinMeeting() {
    let meetLink = document.getElementById("meet-link").value.trim();
    if (meetLink && meetLink.startsWith("https://meet.google.com/")) {
        let newTab = window.open(meetLink, "_blank");

        // Send the header HTML to the new tab (Requires Chrome Extension or Browser Injection)
        setTimeout(() => {
            newTab.document.body.insertAdjacentHTML("afterbegin", `<div id="custom-header">Meeting Assistant Active</div>`);
        }, 2000);
    } else {
        alert("Please enter a valid Google Meet link.");
    }
}