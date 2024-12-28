// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.classList.toggle("dark", savedTheme === "dark");
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    html.classList.toggle("dark", prefersDark);
}

themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        html.classList.contains("dark") ? "dark" : "light"
    );
});

// Profile Dropdown functionality
const profileButton = document.getElementById("profile-menu-button");
const profileDropdown = document.getElementById("profile-dropdown");
let isDropdownOpen = false;

// Toggle dropdown when clicking the profile button
profileButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isDropdownOpen = !isDropdownOpen;
    profileDropdown.classList.toggle("hidden", !isDropdownOpen);
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (isDropdownOpen && !profileDropdown.contains(e.target)) {
        isDropdownOpen = false;
        profileDropdown.classList.add("hidden");
    }
});

// Prevent dropdown from closing when clicking inside it
profileDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Notifications Dropdown functionality
const notificationsButton = document.getElementById(
    "notifications-button"
);
const notificationsDropdown = document.getElementById(
    "notifications-dropdown"
);
let isNotificationsOpen = false;

// Toggle notifications when clicking the button
notificationsButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isNotificationsOpen = !isNotificationsOpen;
    notificationsDropdown.classList.toggle("hidden", !isNotificationsOpen);

    // Close profile dropdown if open
    if (isDropdownOpen) {
        isDropdownOpen = false;
        profileDropdown.classList.add("hidden");
    }
});

// Close notifications when clicking outside
document.addEventListener("click", (e) => {
    if (isNotificationsOpen && !notificationsDropdown.contains(e.target)) {
        isNotificationsOpen = false;
        notificationsDropdown.classList.add("hidden");
    }
});

// Prevent notifications from closing when clicking inside
notificationsDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
});
