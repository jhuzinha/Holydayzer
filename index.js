import express from 'express';

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get("/holidays", (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
    const today = new Date().toLocaleDateString();
    const todaySplit = today.split("/")
    let isHoliday = "Não, hoje não é feriado";
    for (let i = 0; holidays.length > i; i++) {
        let date = holidays[i].date.split("/")
        if ((Number(date[1]) === Number(todaySplit[0]) && Number(date[0]) === Number(todaySplit[1])) && Number(date[2]) === Number(todaySplit[2])) {
            isHoliday = `Sim, hoje é ${holidays[i].name}`
        }
    }
    res.send(isHoliday);
});

app.get('/holidays/:month', (req, res) => {
    const id = req.params.month;
    const holidayMonth = []
    for(let i = 0; holidays.length > i ; i++){
        let date = holidays[i].date.split("/");
        if (Number(date[0]) === parseInt(id)){
            holidayMonth.push(holidays[i])
        }
    }
    res.send(holidayMonth)
  });

app.listen(3000);