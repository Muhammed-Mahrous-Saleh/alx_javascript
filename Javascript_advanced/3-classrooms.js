#!/usr/bin/node

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return () => seat
    }
    let students = []
    for (let i = 0; i <= numbersOfStudents; i++) {
        students.push(studentSeat(i + 1))
    }
    return students
}

classRoom = createClassRoom(10)