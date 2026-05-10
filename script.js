document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            welcomeScreen.classList.add('hidden');
            mainScreen.classList.add('show');
            startGiantParade();
        });
    }
});

function startGiantParade() {
    const container = document.getElementById('animation-container');

    // Cấu hình cho các "hành tinh" khổng lồ
    const planetsData = [
        { emoji: '🍅', size: '15rem', color: 'rgba(255, 99, 71, 0.2)', driftX: '50px', driftY: '30px' }, // Cà chua to đùng
        { emoji: '🚜', size: '18rem', color: 'rgba(255, 215, 0, 0.15)', driftX: '-40px', driftY: '-50px' }, // Máy xúc to đùng
        { emoji: '🐷', size: '16rem', color: 'rgba(255, 182, 193, 0.25)', driftX: '30px', driftY: '-40px' }  // Peppa Pig to đùng (dùng emoji lợn)
    ];

    // Hàm tạo một hành tinh
    function createPlanet(data, index) {
        const planet = document.createElement('div');
        planet.classList.add('giant-planet');

        // Thiết lập kích thước và màu sắc
        planet.style.width = data.size;
        planet.style.height = data.size;
        planet.style.background = `radial-gradient(circle at 30% 30%, #fff 0%, ${data.color} 40%, rgba(0,0,0,0.1) 100%)`;

        // Vị trí ngẫu nhiên
        const posX = Math.random() * 80 + 10; // 10% đến 90% chiều rộng
        const posY = Math.random() * 80 + 10; // 10% đến 90% chiều cao
        planet.style.left = posX + '%';
        planet.style.top = posY + '%';

        // Thiết lập các biến CSS cho hiệu ứng trôi nổi
        planet.style.setProperty('--duration', (Math.random() * 5 + 10) + 's');
        planet.style.setProperty('--driftX', data.driftX);
        planet.style.setProperty('--driftY', data.driftY);
        planet.style.setProperty('--rotX', (Math.random() - 0.5) * 20 + 'deg');
        planet.style.setProperty('--rotY', (Math.random() - 0.5) * 20 + 'deg');

        // Tạo nội dung emoji
        const content = document.createElement('div');
        content.classList.add('planet-content');
        content.innerText = data.emoji;
        content.style.setProperty('--size', `calc(${data.size} * 0.7)`); // Emoji chiếm 70% kích thước hành tinh

        planet.appendChild(content);
        container.appendChild(planet);
    }

    // Tạo các hành tinh với độ trễ để xuất hiện lần lượt
    planetsData.forEach((data, index) => {
        setTimeout(() => createPlanet(data, index), index * 1500);
    });

    // Thêm hiệu ứng lấp lánh xung quanh
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const size = Math.random() * 5 + 2; // 2px đến 7px
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        sparkle.style.setProperty('--duration', (Math.random() * 2 + 1) + 's');

        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    }

    // Tạo hiệu ứng lấp lánh liên tục
    setInterval(createSparkle, 100);
}
