document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            welcomeScreen.classList.add('hidden');
            mainScreen.classList.add('show');
            
            // Kích hoạt mưa hoạt ảnh Murakami dày đặc!
            startMurakamiFestival();
        });
    }
});

function startMurakamiFestival() {
    const container = document.getElementById('animation-container');
    const crushName = document.getElementById('crush-name').innerText;

    // Danh sách thiết kế Pop-Art Murakami kết hợp giữa cà chua, máy xúc, peppa pig và hoa mặt cười
    const items = [
        { emoji: '🍅', text: 'Cà chua to bự!' },
        { emoji: '🚜', text: 'Máy xúc khổng lồ!' },
        { emoji: '🐷', text: 'Peppa Murakami!' },
        { emoji: '🌸', text: 'Hoa cười' },
        { emoji: '💖', text: 'Yêu Mai' },
        { emoji: '✨', text: 'Lấp lánh' },
        { emoji: '🌈', text: 'Rực rỡ!' },
        { emoji: '🍅', text: 'Cà chua mọng nước' },
        { emoji: '🚜', text: 'Cực nhiều máy xúc' },
        { emoji: '🐷', text: 'Peppa dễ thương' }
    ];

    function createMurakamiElement() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('murakami-item');

        const randomData = items[Math.floor(Math.random() * items.length)];

        // Tạo cấu trúc: Hình vẽ khổng lồ phía trên, nhãn chữ kiểu sticker ở dưới
        wrapper.innerHTML = `
            <div class="sticker-wrapper">
                <span class="emoji-part">${randomData.emoji}</span>
                <span class="text-part">${randomData.text}</span>
            </div>
        `;

        // Tọa độ xuất hiện ngẫu nhiên rộng khắp chiều ngang màn hình (0% đến 95%)
        const randomX = Math.random() * 95;
        wrapper.style.left = randomX + '%';

        // Tạo sự tự nhiên nhưng vô cùng bão táp bằng cách đẩy tốc độ nhanh chậm xen kẽ
        const duration = Math.random() * 3 + 4; // Từ 4s đến 7s bay xong
        const scale = Math.random() * 0.7 + 0.8; // Kích thước biến thiên ngẫu nhiên tạo độ xa gần (to đùng!)
        const rotation = (Math.random() - 0.5) * 360; // Xoay tự do đầy phóng khoáng

        wrapper.style.setProperty('--duration', duration + 's');
        wrapper.style.setProperty('--scale', scale);
        wrapper.style.setProperty('--rotation', rotation + 'deg');

        container.appendChild(wrapper);

        // Tự hủy phần tử sau khi bay khỏi màn hình
        setTimeout(() => {
            wrapper.remove();
        }, duration * 1000);
    }

    // Tăng mật độ: Cứ mỗi 250ms (0.25 giây) sẽ phóng lên một siêu sticker khổng lồ!
    setInterval(createMurakamiElement, 250);
}
