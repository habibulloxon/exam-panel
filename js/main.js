const maximumResult = 150;
const passPercentage = 40;

const createSingleElement = (elementName, className, textContent) =>{
    const createdSingleElement = document.createElement(elementName);
    createdSingleElement.className = className;

    if (textContent) {
        createdSingleElement.textContent = textContent;
    } 
    return createdSingleElement;
}

const addZero = (number) => {
    return number < 10 ? "0" + number : number
}

const appendElements = (parentElement, children) =>{
    for (let i = 0; i < children.length; i++) {
        parentElement.appendChild(children[i])
    }
    return parentElement;
} 

const showDate = (dateString) => {
    const date = new Date(dateString);
    return `${addZero(date.getDate())}/ ${addZero(date.getMonth() + 1)}/ 
    ${addZero(date.getFullYear())}/ ${addZero(date.getHours())}`
}

const renderStudents = (student) => {
    const {
        id,
        name: stName,
        lastName,
        mark,
        markedDate
    } = student;

    const studentRow = document.createSingleElement("tr");
    const studentId = document.createSingleElement("td", "text-center", id);
    const studentName = document.createSingleElement("td", "", `${stName} ${lastName}`);
    const studentMarkedDate = document.createSingleElement("td", "", markedDate);

    const markPercentage = Math.round(mark * 100 / maximumResult);
    const studentMark = document.createSingleElement("td", "text-center", markPercentage + "%");
    const studentStatus = document.createSingleElement("td", "text-center");
    const studentParagraph = document.createSingleElement("p", "h5");
    const studentSpan = document.createSingleElement("span", "badge rounded-pill");

    if (markPercentage >= passPercentage) {
        studentParagraph.textContent = "Pass"
        studentSpan.classList.add("bg-success")
    } else{
        studentParagraph.textContent = "Fail"
        studentSpan.classList.add("bg-danger")
    }

    const studentEdit = document.createSingleElement("td", "py-3 text-center");
    const studentEditBtn = document.createSingleElement("button", "btn btn-outline-secondary");
    const studentEditBtnIcon = document.createSingleElement("i", "fa-solid fa-pen");

    studentEdit.appendChild(studentEditBtn);
    studentEditBtn.appendChild(studentEditBtnIcon)

    const studentDelete = document.createSingleElement("td", "py-3 text-center");
    const studentDeleteBtn = document.createSingleElement("button", "btn btn-outline-danger");
    const studentDeleteBtnIcon = document.createSingleElement("i", "fa-solid fa-pen");

    studentDelete.appendChild(studentDeleteBtn);
    studentDeleteBtn.appendChild(studentDeleteBtnIcon)

    appendElements(studentRow, [studentId, studentName, studentMarkedDate, studentMark, studentStatus, studentEdit, studentDelete])

    return studentRow;
}

const studentsTable = document.getElementById("students-table")
const studentsTableBody = document.getElementById("students-table-body")

const renderUiStudents = () => {
    studentsTable.innerHTML = ""

    students.forEach(student => {
        const studentRow = renderStudents(student)
        studentsTable.append(studentRow)
    });
}

renderUiStudents()