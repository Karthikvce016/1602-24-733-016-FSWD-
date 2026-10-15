function calculateFactorial() {
    var num = document.getElementById('number').value;
    var resultDiv = document.getElementById('result');
    
    if (num === '' || num < 0 || num > 20) {
        alert('Please enter a number between 0 and 20');
        return;
    }
    
    num = parseInt(num);
    var factorial = 1;
    var calculation = '';
    
    if (num === 0 || num === 1) {
        factorial = 1;
        calculation = num + '! = 1';
    } else {
        calculation = num + '! = ';
        for (var i = num; i >= 1; i--) {
            factorial *= i;
            if (i > 1) {
                calculation += i + ' × ';
            } else {
                calculation += i;
            }
        }
        calculation += ' = ' + factorial;
    }
    
    resultDiv.innerHTML = '<h2>Result:</h2><p>' + calculation + '</p><p>Factorial of ' + num + ' = <strong>' + factorial + '</strong></p>';
    resultDiv.classList.add('show');
}