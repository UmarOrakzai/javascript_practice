const form = document.querySelector('form');
        const resultDiv = document.querySelector('.result');
        const attemptsDiv = document.querySelector('.attempts');
        const attemptNumber = [];
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const input = form.querySelector('input').value;
            
            if(checkGuess(input)) {
                attemptNumber.push(input);
                attemptsDiv.textContent = `Attempts: ${attemptNumber.length} / 3`;
                overattempt(attemptNumber.length, input);
            }
            form.querySelector('input').value = ''; // input clear
        });

        function gameOver(msg){
            form.style.display = 'none';
            resultDiv.innerHTML = msg + `<br><button onclick="location.reload()">Play Again</button>`
            document.getElementById('heading').style.display = 'none'
        }

        function overattempt(attempNumbers, input){
            if(attempNumbers >= 3 && input != randomNumber ){
                gameOver(`Game Over! The number was ${randomNumber}`);
            }
        }

        function checkGuess(guess) {
            guess = Number(guess);
            if (guess < 1 || guess > 10 || isNaN(guess)) {
                resultDiv.textContent = "Please enter number between 1-10";
                return false;
            }
            
            if (guess == randomNumber) {
                gameOver("🎉 Congratulations! You guessed the correct number.");
            } else if (guess < randomNumber) {
                resultDiv.textContent = "📉 Too low! Try again.";
            } else {
                resultDiv.textContent = "📈 Too high! Try again.";
            }
            return true;
        }