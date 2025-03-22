const studentData = JSON.parse(localStorage.getItem('studentData'));

if (studentData) {
    const studentTable = document.querySelector('#studentTable tbody');
    const row = `
        <tr>
            <td>${studentData.name}</td>
            <td>${parseInt(studentData.marks.math) + parseInt(studentData.marks.science) + parseInt(studentData.marks.english)}</td>
            <td>${studentData.preferences.branch1}</td>
            <td>
                <button class="btn" onclick="assignBranch('${studentData.email}', 'CSE')">Assign CSE</button>
            </td>
        </tr>
    `;
    studentTable.innerHTML = row;
}

function assignBranch(email, branch) {
    alert(`Branch ${branch} assigned to student with email: ${email}`);
}
