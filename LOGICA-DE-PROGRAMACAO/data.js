const dataUm = new Date();

console.log(dataUm.toString());

const tresHoras = 60 * 60 * 3 * 1000;

const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + tresHoras - umDia);

console.log(data.toString());

const dataDois = new Date(2019, 3, 20, 15, 14, 27);

console.log(dataDois.toString());

console.log('Dia', dataUm.getDate());

console.log('Mês', dataUm.getMonth());

console.log('Ano', dataUm.getFullYear());

console.log('Hora', dataUm.getHours());

console.log('Min', dataUm.getMinutes());

console.log('Seg', dataUm.getSeconds());

console.log('Dia semana', dataUm.getMilliseconds());

console.log(Date.now());