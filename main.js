const scriptURL = "https://script.google.com/macros/s/AKfycbyuJFtCjTyzQQeJk6Uyfy-MY7K6z7kJU9vPn6DJqYpk93DkIdAsRexMCC6caqyItfnt/exec";

// Mở modal
document.getElementById('feedback-btn-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.add('active');
};
// Đóng modal
document.getElementById('feedback-close-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.remove('active');
};
document.getElementById('feedback-modal-bottom').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};

// Xử lý gửi form
document.getElementById('feedback-form-bottom').onsubmit = function(e) {
    e.preventDefault();

    const form = e.target;
    const loading = document.getElementById('feedback-loading-bottom');
    const submitBtn = document.getElementById('feedback-submit-btn');

    // Hiện loading, ẩn nút gửi
    loading.style.display = "flex";
    submitBtn.style.display = "none";

    const data = {
        Name: form.querySelector('#fb-name-bottom').value,
        Content: form.querySelector('#fb-message-bottom').value
    };

    fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(data)
    })
    .then(res => res.json())
    .then(res => {
        loading.style.display = "none";
        submitBtn.style.display = "inline-block";

        if (res.result === "success") {
            alert("✅ Cảm ơn bạn đã gửi phản hồi!");
            form.reset();
            document.getElementById('feedback-modal-bottom').classList.remove('active');
        } else {
            alert("❌ Lỗi: " + JSON.stringify(res));
        }
    })
    .catch(err => {
        loading.style.display = "none";
        submitBtn.style.display = "inline-block";
        alert("❌ Kết nối thất bại: " + err);
    });
};
window.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');

  
  // Thử phát nhạc ngay khi trang load
  audio.play().catch(() => {
    // Nếu bị chặn, phát lại khi người dùng click bất kỳ đâu
    const playMusic = () => {
      audio.play();
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);
  });
    this.alert("🎉 Chúc các bạn 2/9 vui vẻ! Nhớ gửi phản hồi cho mình nhé!");
});