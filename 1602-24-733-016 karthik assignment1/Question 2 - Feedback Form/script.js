document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var comment = document.getElementById('comment').value;
    
    if (name && email && subject && rating && comment) {
        var message = 'Thank you for your feedback, ' + name + '! We appreciate your input.';
        document.getElementById('statusMessage').textContent = message;
        this.reset();
    } else {
        alert('Please fill all required fields.');
    }
});