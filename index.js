const contentLetterSrart_actived = "Nhân dịp Quốc khánh 2-9, xin gửi tới cậu những lời chúc tốt đẹp nhất. Mong rằng trong những ngày lễ trọng đại này, mỗi người dân đều có những trải nghiệm thật đáng nhớ khi được sống trong không khí hào hùng của lịch sử, được tận hưởng niềm vui đoàn viên bên gia đình, bạn bè, và thêm tự hào khi thấy đất nước mình ngày càng đổi mới, giàu đẹp. Hy vọng rằng 2-9 không chỉ là một ngày nghỉ lễ bởi biết đâu giữa dòng người tấp nập, ngoài niềm vui chung của đất nước, ta lại tình cờ mang về thêm một nụ cười riêng để nhớ mãi 😉" //Lời mở đầu cho bức thư
 //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/test1.png";


const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

setTimeout(function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
}, 1000)

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên