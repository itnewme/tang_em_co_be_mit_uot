document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.add('show');

    const crushName = document.getElementById('crush-name').innerText;

    // Danh sách "bức tranh" nhỏ bay lên: máy xúc gỗ, cà chua mọng, trứng lòng đào, đậu hũ mềm
    const items = [
        '🚜', // Máy xúc
        '🍅', // Cà chua ấm áp
        '🍳', // Quả trứng ốp la mềm mịn
        '⬜', // Đậu hũ mềm mại
        '🌸', // Những cánh hoa anh đào bay lướt
        '✨', // Những đốm sáng lấp lánh như cổ tích
        crushName // Nguyễn Thế Phú
    ];

    const container = document.getElementById('animation-container');

    function createArtItem() {
        const item = document.createElement('div');
        item.classList.add('art-floating-item');

        const randomContent = items[Math.floor(Math.random() * items.length)];
        item.innerText = randomContent;

        // Nếu là tên, định dạng theo phong cách chữ viết tay mềm mại
        if (randomContent === crushName) {
            item.style.fontFamily = "'Playfair Display', serif";
            item.style.fontSize = '1.1rem';
            item.style.fontWeight = '500';
            item.style.color = '#e5989b';
            item.style.background = 'rgba(255, 255, 255, 0.7)';
            item.style.padding = '6px 12px';
            item.style.borderRadius = '20px';
            item.style.border = '1px solid rgba(229, 152, 155, 0.3)';
        }

        const randomX = Math.random() * 90; // Vị trí ngẫu nhiên chiều ngang
        item.style.left = `${randomX}%`;

        // Tạo sự tự nhiên, bồng bềnh bằng các thông số ngẫu nhiên
        const duration = Math.random() * 4 + 5; // Bay chậm hơn (từ 5s đến 9s) để tạo cảm giác bình yên
        const drift = (Math.random() - 0.5) * 120; // Độ lắc lư nhẹ nhàng
        const rotation = (Math.random() - 0.5) * 90; // Chỉ xoay nhẹ thay vì xoay vòng vèo

        item.style.setProperty('--duration', `${duration}s`);
        item.style.setProperty('--drift', `${drift}px`);
        item.style.setProperty('--rotation', `${rotation}deg`);

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }

    // Tạo các hạt cảm xúc lơ lửng đều đặn mỗi 400ms
    setInterval(createArtItem, 400);
});
