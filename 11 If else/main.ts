// Task: Check eligibility for a driving license based on age, driving test score, and medical fitness.

let age: number = 20
let drivingTestScore: number = 80
let medically: string = 'fit'

if (age > 18 && drivingTestScore > 50 && medically === 'fit') {
    console.log('Congratulations! You are eligible for a driving license.');
} else {
    console.log('Sorry, you are not eligible for a driving license.');
}