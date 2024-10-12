
    const canvas = document.getElementById('mapCanvas');
    const context = canvas.getContext('2d');

    const mapImage = new Image();
    mapImage.src = 'map_test.jpg'; // 큰 맵 이미지 경로

 mapImage.onload = () => {
        // 이미지 그리기
        context.drawImage(mapImage, 100, 100);
    };

function drawMonster(x,y) {
            context.fillStyle = 'red'; // 몬스터 색상
            context.fillRect(x, y, 20, 20); // 몬스터 크기
}

    drawMonster(200, 150);
