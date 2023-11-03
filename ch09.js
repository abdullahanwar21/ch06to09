let subjectOne = prompt("Enter Your First Subject ");
let subjectSecond = prompt("Enter Your Second Subject ");
let subjectThird = prompt("Enter Your Third Subject ");

let marks = 100;
let totalMarks = marks + marks + marks;

let obtSubjectOne = +prompt(`Enter Your Obtained Marks of ${subjectOne}`);
let obtSubjectSecond = +prompt(`Enter Your Obtained Marks of ${subjectSecond}`);
let obtSubjectThird = +prompt(`Enter Your Obtained Marks of ${subjectThird}`);
let totalObtMarks = obtSubjectOne + obtSubjectSecond + obtSubjectThird;
let percentage1 = (obtSubjectOne / marks) * 100;
let percentage2 = (obtSubjectSecond / marks) * 100;
let percentage3 = (obtSubjectThird / marks) * 100;
let obtPercentage = percentage1 + percentage2 + percentage3;
let totalPercentage = (obtPercentage / totalMarks) * 100;
Math.floor(Math.round(totalPercentage));
let userTable = `
<table>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obt Marks</th>
            <th>Percentage</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>${subjectOne}</td>
                <td>${marks}</td>
                <td>${obtSubjectOne}</td>
                <td>${percentage1}%</td>
            </tr>
            <tr>
                <td>${subjectSecond}</td>
                <td>${marks}</td>
                <td>${obtSubjectSecond}</td>
                <td>${percentage2}%</td>
            </tr>
            <tr>
                <td>${subjectThird}</td>
                <td>${marks}</td>
                <td>${obtSubjectThird}</td>
                <td>${percentage3}%</td>
            </tr>
            <tr>
                <th colspan="2">${totalMarks}</th>
                <th>${totalObtMarks}</th>
                <th>${totalPercentage}%</th>                        
            </tr>
            </tbody>
    </table>
    
`;
document.write(userTable);
