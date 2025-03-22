document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        marks: {
            math: document.getElementById('math').value,
            science: document.getElementById('science').value,
            english: document.getElementById('english').value,
        },
        preferences: {
            branch1: document.getElementById('branch1').value,
            branch2: document.getElementById('branch2').value,
            branch3: document.getElementById('branch3').value,
        }
    };

    localStorage.setItem('studentData', JSON.stringify(studentData));
    alert("Form Submitted Successfully!");
    window.location.href = "offer-letter.html";
});
