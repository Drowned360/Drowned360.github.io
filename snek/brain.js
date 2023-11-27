document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const gridSize = 15; // Change grid size if needed
    const snakeSize = 20;

    let snake = [{ x: 0, y: 0 }];
    let food = getRandomPosition();

    let direction = 'right';

    function getRandomPosition() {
        const x = Math.floor(Math.random() * gridSize) * snakeSize;
        const y = Math.floor(Math.random() * gridSize) * snakeSize;
        return { x, y };
    }

    function draw() {
        // Clear the board
        board.innerHTML = '';

        // Draw the snake
        snake.forEach(segment => {
            const snakeSegment = document.createElement('div');
            snakeSegment.className = 'snake';
            snakeSegment.style.left = `${segment.x}px`;
            snakeSegment.style.top = `${segment.y}px`;
            board.appendChild(snakeSegment);
        });

        // Draw the food
        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        board.appendChild(foodElement);
    }

    function move() {
        let head = Object.assign({}, snake[0]);

        // Update the head position based on the direction
        switch (direction) {
            case 'up':
                head.y -= snakeSize;
                break;
            case 'down':
                head.y += snakeSize;
                break;
            case 'left':
                head.x -= snakeSize;
                break;
            case 'right':
                head.x += snakeSize;
                break;
        }

        // Check for collision with walls
        if (head.x < 0 || head.x >= gridSize * snakeSize || head.y < 0 || head.y >= gridSize * snakeSize) {
            alert('Game Over!');
            resetGame();
            return;
        }

        // Check for collision with itself
        if (isCollisionWithItself(head)) {
            alert('Game Over!');
            resetGame();
            return;
        }

        // Check for collision with food
        if (head.x === food.x && head.y === food.y) {
            snake.unshift(food);
            food = getRandomPosition();
        } else {
            snake.pop();
            snake.unshift(head);
        }

        draw();
    }

    function isCollisionWithItself(head) {
        return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }

    function resetGame() {
        snake = [{ x: 0, y: 0 }];
        food = getRandomPosition();
        direction = 'right';
        draw();
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    });

    setInterval(move, 150);
    draw();
});
