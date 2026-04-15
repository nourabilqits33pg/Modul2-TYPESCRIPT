// CONTOH SOAL
let nama: string = "Budi";
let umur: number = 17;
let aktif: boolean = true;
console.log(nama, umur, aktif);

//TUGAS 1 : INTERFACE SISWA

interface Student
{
    id : number;
    studentName : string;
    studentClass : string;
    birthYear : number;
}
const student1 : Student =
{
    id : 7,
    studentName : "Noura",
    studentClass : "11",
    birthYear : 2009

}
console.log(student1);

//TUGAS 2 : FUNCTION HITUNG UMUR

function AgeCount(birthYear : number) : number
{
    return 2026 - birthYear;
}

console.log(student1.studentName, AgeCount(student1.birthYear), student1.studentClass);


//QnA
// 1. Perbedaan utama JavaScript dan TypeScript menurut Anda adalah : perbedaan variable dan struktur ngoding nya
// 2. Bagian yang paling membantu Anda memahami TypeScript adalah : modul,bantuan pak ilham, bantuan teman, dan bantuan AI
// 3. Bagian yang masih membingungkan dan perlu penguatan adalah : masih belum menguasai secara betul pengguanaan typescript