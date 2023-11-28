    const blockBox = document.querySelector('.block')

    function getRandomColor() {
        blockBox.style.backgroundColor = '#' + (Math.random().toString(16)).substring(2,8).toUpperCase();
    }

    function moveSquare() {
        let left = blockBox.clientWidth;
        let top = blockBox.clientHeight;
        let leftWidth = window.innerWidth;
        let topHeight = window.innerHeight

        blockBox.style.left = `${Math.floor(Math.random() * (leftWidth - left))}px`;
        blockBox.style.top = `${Math.floor(Math.random() * (topHeight - top))}px`;
    }

    setInterval(getRandomColor, 500);
    setInterval(moveSquare, 1000);