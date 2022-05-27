let ctx=document.querySelector('#revenueChart');
ctx.height =26;


let revChart =new Chart(ctx,{
    type:"line",
    data:{
        labels:[0,5,10,15,20,25,30],
        datasets:[
            {
                label:"Power",
                borderColor:"red",
                borderWidth:"3",
                backgroundColor:"rg ba(235,247,245,0.5",
                data:[220,226,221,237,233,238,222]
                
            },
            {
                label:"Temperature",
                borderColor:"blue",
                borderWidth:"3",
               
                backgroundColor:"rgba(233,238,253,0.5",
                data:[70,77,73,90,86,94,75]
                
            }
        ]
    },
    options:{
        responsive:true,
        tooltips:{
            intersect:false,
            node:"index",
        }
    }
})