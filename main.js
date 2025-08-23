
const scriptURL = "https://script.google.com/macros/s/AKfycbzASSgLN5RHZGpNwxhxXXQP1lwE3EA_OswEaj3D3r2L9ODmzwxIBXEymn7ogVcYiB4o/exec"

// Đóng modal (nút X)
document.getElementById('feedback-close-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.remove('active');
};

// Đóng modal khi click ra ngoài
document.getElementById('feedback-modal-bottom').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};

// Gửi form
document.getElementById('feedback-form-bottom').onsubmit = function(e) {
    e.preventDefault();

    const form = e.target;
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
        if (res.result === "success") {
            alert("✅ Cảm ơn bạn đã gửi phản hồi!!");
            form.reset();
            document.getElementById('feedback-modal-bottom').classList.remove('active');
        } else {
            alert("❌ Lỗi: " + JSON.stringify(res));
        }
    })
    .catch(err => {
        alert("❌ Kết nối thất bại: " + err);
    });
};
