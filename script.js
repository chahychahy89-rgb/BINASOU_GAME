let coins = parseInt(localStorage.getItem('user_coins')) || 2000;
document.getElementById('balance').innerText = coins.toLocaleString();

function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');
}

function mine() {
    coins += 100;
    saveProgress();
}

function openTask(url, reward) {
    window.open(url, '_blank');
    setTimeout(() => {
        coins += reward;
        saveProgress();
        alert("تمت إضافة المكافأة! 🎉");
    }, 3000);
}

function inviteFriend() {
    const link = "https://t.me/binasou_win_bot";
    const text = "انضم إلي في بوت Binasou وابدأ التعدين! 🚀";
    window.open(https://t.me/share/url?url=${link}&text=${text});
}

function saveProgress() {
    localStorage.setItem('user_coins', coins);
    document.getElementById('balance').innerText = coins.toLocaleString();
}
