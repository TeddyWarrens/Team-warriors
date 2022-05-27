//Current
const gaugeElement=document.querySelector('.gauge');
function setGaugeValue (gauge, value){
    if(value<40|| value>70){

    }
    gauge.querySelector('.gauge-fill').style.transform = `rotate(${value/3}turn)`;
    gauge.querySelector('.gauge-cover').textContent =`${(value)}ohms`
}
setGaugeValue(gaugeElement,47);

//Voltage

const gaugeElements=document.querySelector('.gauges');
function setGaugeValues (gauges, value){
    if(value<220 || value>240){

    }
    gauges.querySelector('.gauges-fill').style.transform = `rotate(${value/1.5}turn)`;
    gauges.querySelector('.gauges-cover').textContent =`${(value)}V`
}
setGaugeValues(gaugeElements,230);


//Power
const gaugeElementss=document.querySelector('.gaugesh');
function setGaugeValuesh(gaugesh, value){
    if(value<-40 || value>125){

    }
    gaugesh.querySelector('.gaugesh-fill').style.transform = `rotate(${value/3}turn)`;
    gaugesh.querySelector('.gaugesh-cover').textContent =`${(value)}%`
}
setGaugeValuesh(gaugeElementss,70);

