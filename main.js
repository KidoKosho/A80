
document.getElementById('feedback-btn-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.add('active');
};
document.getElementById('feedback-close-bottom').onclick = function() {
    document.getElementById('feedback-modal-bottom').classList.remove('active');
};
document.getElementById('feedback-modal-bottom').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};

const scriptURL = "https://script.google.com/macros/s/AKfycbyuJFtCjTyzQQeJk6Uyfy-MY7K6z7kJU9vPn6DJqYpk93DkIdAsRexMCC6caqyItfnt/exec"

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
