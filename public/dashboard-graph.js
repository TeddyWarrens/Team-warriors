let ctx=document.querySelector('.graph-board');
ctx.height =28;
// function drawChart(post){

// revChart =new Chart(ctx,{
//     type:"line",
//     data:{
//         labels:[0,5,10,15,20,25,30,35,40],
//         datasets:[
//             {
//                 label:"Power",
//                 borderColor:"red",
//                 borderWidth:"3",
//                 backgroundColor:"#006bff",
//                 // data:[220,226,221,237,233,238,222]
//                 data:[70,72,71.8,72.3,71.5,72,73,71.4,75]
                
//             },
            
//         ]
//     },
//     options:{
//         responsive:true,
//         tooltips:{
//             intersect:false,
//             node:"index",
//         }
//     }
// })
// }
// drawChart();
// const API_URL = 'http://localhost:5000/'

// fetch(API_URL)
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(err => console.error(err))


// function fetchBlogItems() {
//     return fetch(`${API_URL}home/`)
//                  .then(response => response.json())
//                  .then(data => {
//                    if(data.posts.length) {
//                        data.posts.forEach(
//                            post => drawChart(post))
//                            if(data){
//                                return power=(`Math.(${resistance}*${voltage})`)
//                            }
//                    }
//                  })
//                  .catch(err => console.error(err))
// }
// fetchBlogItems()

window.onload = function () {

    var dps = [{x: 1, y: 80}, {x: 2, y: 80.9}, {x: 3, y: 80.6}, {x: 4, y: 81}, {x: 5, y: 80.6},{x: 6, y: 81.3}, {x: 7, y: 80}, {x: 8, y: 81.6}, {x: 9, y: 80.3}, {x: 10, y: 81}];   //dataPoints. 

    var chart = new CanvasJS.Chart(ctx,{
        
        title :{
            text: "Power Stability"
        },
        axisX: {						
            title: "Time"
        },
        axisY: {						
            title: "Power"
        },
        data: [{
            type: "line",
            dataPoints : dps
        }]
    });

    chart.render();
    var xVal = dps.length + 1;
    var yVal = 30;	
    var updateInterval = 1000;

    var updateChart = function () {
        
        
        yVal = yVal +  Math.round(10+ Math.random() *(-5-5));
        dps.push({x: xVal,y: yVal});
        
        xVal++;
        if (dps.length >  10 )
        {
            dps.shift();				
        }

        chart.render();		

  // update chart after specified time. 

};

setInterval(function(){updateChart()}, updateInterval); 
}