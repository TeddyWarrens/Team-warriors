
    // setup 
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Sales',
        data: [25,45,80,120],
        backgroundColor: [
            'blue',
            'green',
            'yellow',
            'red',
          
        ],
        // borderColor: [
        //   'rgba(255, 26, 104, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        //   'rgba(0, 0, 0, 1)'
        // ],
        needleValue:30, 
        borderColor:'white',
        borderWidth: 1,
        cutout:'95%',
        circumference:180,
        rotation:270,
        
      }]
    };
    //gaugeNeedle block
    const gaugeNeedle={
        id:'gaugeNeedle',
        afterDataSetDraw(chart,args,options){
            const {ctx, config, chartArea:{top,bottom, left, right, width, height} }=chart;
            ctx.save();
            console.log(data); 
            const needleValue=data.datasets[0].needleValue;
            const dataTotal=data.datasets[0].data.reduce((a,b)=> a+b,0);
            //Calculate needle angle
            const angle= Math.PI +(1/dataTotal*needleValue*Math.PI);
            const cx=width/2;
            const cy =height;
            ctx.beginPath();
            ctx.arc(10,10,5,5,10);
            ctx.fill();
            ctx.restore();
        }
        
    }

    // config 
    const config = {
      type: 'doughnut',
      data,
      options: {
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }
      },
      plugins:[gaugeNeedle]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );