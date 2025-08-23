
document.getElementById('feedback-btn-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.add('active');
};
document.getElementById('feedback-close-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.remove('active');
};
document.getElementById('feedback-modal-bottom').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};
document.getElementById('feedback-form-bottom').onsubmit = function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi phản hồi!');
    document.getElementById('feedback-modal-bottom').classList.remove('active');
    this.reset();
};