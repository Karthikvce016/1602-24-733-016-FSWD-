document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var selectedCourses = document.querySelectorAll('input[name="courses"]:checked').length;
    
    if (fullName && email && selectedCourses > 0) {
        var message = 'Registration successful! ' + fullName + ', confirmation sent to ' + email;
        document.getElementById('successMessage').textContent = message;
        this.reset();
    } else {
        alert('Please fill all required fields and select at least one course.');
    }
});