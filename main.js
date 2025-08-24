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
// Đây là hàm chỉ chạy khi user chạm vào màn hình lần đầu
function initApp() {
  const audio = document.getElementById('bg-music');
  audio.play().catch(err => console.log("Không phát được nhạc:", err));

  // --- Modal ---
  document.getElementById('feedback-btn-bottom').onclick = function() {
      document.getElementById('feedback-modal-bottom').classList.add('active');
  };
  document.getElementById('feedback-close-bottom').onclick = function() {
      document.getElementById('feedback-modal-bottom').classList.remove('active');
  };
  document.getElementById('feedback-modal-bottom').onclick = function(e) {
      if (e.target === this) this.classList.remove('active');
  };

  // --- Form ---
  document.getElementById('feedback-form-bottom').onsubmit = function(e) {
      e.preventDefault();

      const form = e.target;
      const loading = document.getElementById('feedback-loading-bottom');
      const submitBtn = document.getElementById('feedback-submit-btn');

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

  // Sau khi chạy xong thì gỡ event listener để không gọi lại
  document.removeEventListener('click', initApp);
  document.removeEventListener('touchstart', initApp);
}

// Chờ user click/touch lần đầu
document.addEventListener('click', initApp);
document.addEventListener('touchstart', initApp);

// Hiện overlay khi vào trang
document.body.classList.add('blurred');
document.getElementById('overlay-start').style.display = 'flex';

// Khi user chạm/click, ẩn overlay và chạy app
function hideOverlayAndStart() {
    const overlay = document.getElementById('overlay-start');
    overlay.classList.add('hide');
    setTimeout(() => overlay.style.display = 'none', 400);
    document.body.classList.remove('blurred');
    Start();
    // Khởi động app (nếu cần)
    if (typeof initApp === 'function') initApp();
    document.removeEventListener('click', hideOverlayAndStart);
    document.removeEventListener('touchstart', hideOverlayAndStart);
}
document.addEventListener('click', hideOverlayAndStart);
document.addEventListener('touchstart', hideOverlayAndStart);
