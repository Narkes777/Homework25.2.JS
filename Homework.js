// // TASK 1
// class Marker {
//     constructor(color, inkLevel) {
//         this.color = color;
//         this.inkLevel = inkLevel;
//     }

//     print(text) {
//         let printedText = "";
//         for (let i = 0; i < text.length; i++) {
//             const character = text[i];
//             if (character !== ' ' && this.inkLevel > 0.5) {
//                 printedText += character;
//                 this.inkLevel -= 0.5;
//             } else {
//                 printedText += ' ';
//             }
//         }
//         console.log('%c' + printedText, `color: ${this.color};`);
//     }
// }

// class RefillableMarker extends Marker {
//     refill(inkAmount) {
//         this.inkLevel = Math.min(100, this.inkLevel + inkAmount);
//     }
// }

// const marker1 = new Marker("blue", 50);
// marker1.print("This is a blue marker.");
// console.log(`Ink level: ${marker1.inkLevel}%`);

// const marker2 = new RefillableMarker("red", 30);
// marker2.print("This is a red marker.");
// console.log(`Ink level: ${marker2.inkLevel}%`);

// marker2.refill(50);
// console.log(`Ink level after refill: ${marker2.inkLevel}%`);
// marker2.print("Now I'm refilled!");

// // TASK 2
// class Employee {
//     constructor(id, name, position, department) {
//         this.id = id;
//         this.name = name;
//         this.position = position;
//         this.department = department;
//     }
// }

// class EmpTable {
//     constructor(employees) {
//         this.employees = employees;
//     }

//     getHtml() {
//         let tableHtml = '<table>';
//         tableHtml += '<tr><th>ID</th><th>Name</th><th>Position</th><th>Department</th></tr>';

//         this.employees.forEach((employee) => {
//             tableHtml += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td><td>${employee.department}</td></tr>`;
//         });

//         tableHtml += '</table>';
//         return tableHtml;
//     }
// }

// const employees = [
//     new Employee(1, 'John Doe', 'Manager', 'Finance'),
//     new Employee(2, 'Alice Smith', 'Teller', 'Finance'),
//     new Employee(3, 'Bob Johnson', 'Manager', 'Marketing'),
//     new Employee(4, 'Eva Williams', 'Clerk', 'Marketing'),
// ];

// // Создаем объект EmpTable и выводим HTML таблицы на экран
// const empTable = new EmpTable(employees);
// const tableHtml = empTable.getHtml();
// document.body.innerHTML = tableHtml;