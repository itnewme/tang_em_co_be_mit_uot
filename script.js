document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');

    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Thêm class hidden để ẩn màn hình chào
            welcomeScreen.classList.add('hidden');
            // Thêm class show để hiện màn hình chính
            mainScreen.classList.add('show');

            // Bắt đầu tạo hiệu ứng bay
            startFloatingEffects();
        });
    }
});

function startFloatingEffects() {
    const crushName = document.getElementById('crush-name').innerText;

    // Danh sách "bức tranh" nhỏ bay lên
    const items = [
        '🚜', // Máy xúc
        '🍅', // Cà chua
        '🍳', // Quả trứng ốp la
        '⬜', // Đậu hũ
        '🌸', // Cánh hoa
        '✨', // Đốm sáng
        crushName // Tên người ấy
    ];

    const container = document.getElementById('animation-container');

    function createArtItem() {
        const item = document.createElement('div');
        item.classList.add('art-floating-item');

        const randomContent = items[Math.floor(Math.random() * items.length)];
        item.innerText = randomContent;

        // Định dạng riêng nếu là tên người ấy
        if (randomContent === crushName) {
            item.style.fontFamily = "'Playfair Display', serif";
            item.style.fontSize = '1.1rem';
            item.style.fontWeight = '500';
            item.style.color = '#e5989b';
            item.style.background = 'rgba(255, 255, 255, 0.8)';
            item.style.padding = '6px 12px';
            item.style.borderRadius = '20px';
            item.style.border = '1px solid rgba(229, 152, 155, 0.3)';
        }

        const randomX = Math.random() * 90;
        item.style.left = randomX + '%';

        const duration = Math.random() * 4 + 5; 
        const drift = (Math.random() - 0.5) * 120; 
        const rotation = (Math.random() - 0.5) * 90; 

        // Sử dụng chuỗi nối chuẩn để tránh lỗi dấu huyền/dấu nháy trên một số trình duyệt
        item.style.setProperty('--duration', duration + 's');
        item.style.setProperty('--drift', drift + 'px');
        item.style.setProperty('--rotation', rotation + 'deg');

        container.appendChild(item);

        setTimeout(function() {
            item.remove();
        }, duration * 1000);
    }

    // Tạo các hạt lơ lửng đều đặn mỗi 400ms
    setInterval(createArtItem, 400);
}
