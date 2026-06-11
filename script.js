// App State Tracker
let userState = {
    isPremium: false
};

// DOM Elements
const upgradeBtn = document.getElementById('upgrade-btn');
const userStatus = document.getElementById('user-status');
const upgradeModal = document.getElementById('upgrade-modal');
const closeModal = document.querySelector('.close-modal');
const checkoutBtn = document.getElementById('checkout-btn');
const enterPrivateBtn = document.getElementById('enter-private-btn');
const sidebarAd = document.getElementById('sidebar-ad');
const privateRoomCard = document.getElementById('private-room-card');

// Open Modal when clicking Upgrade
upgradeBtn.addEventListener('click', () => {
    upgradeModal.style.display = 'flex';
});

// Close Modal
closeModal.addEventListener('click', () => {
    upgradeModal.style.display = 'none';
});

// Simulate Premium Purchase
checkoutBtn.addEventListener('click', () => {
    userState.isPremium = true;
    upgradeModal.style.display = 'none';
    activatePremiumFeatures();
    alert("Thank you for upgrading to EduNexa Pro! 🎉");
});

// Action when trying to access Private Room
enterPrivateBtn.addEventListener('click', () => {
    if (userState.isPremium) {
        alert("Welcome to your Private Room! Loading secure environment...");
        // Here you would redirect to your real private room route or video call API
    } else {
        // Force upgrade popup if they try to access it while free
        upgradeModal.style.display = 'flex';
    }
});

// Function to dynamically update UI based on subscription
function activatePremiumFeatures() {
    if (userState.isPremium) {
        // 1. Update UI Status Badges
        userStatus.textContent = "Pro Member ✨";
        userStatus.style.backgroundColor = "#f59e0b";
        userStatus.style.color = "white";
        upgradeBtn.style.display = "none";

        // 2. Remove ads completely from screen space
        sidebarAd.innerHTML = "<p style='color: #10b981;'>✨ Ad-free Experience Active</p>";
        sidebarAd.parentElement.style.border = "2px solid #10b981";

        // 3. Unlock Private Room UI Elements
        enterPrivateBtn.textContent = "Enter Private Room";
        document.querySelector('.lock-icon').textContent = "🔓";
    }
}
