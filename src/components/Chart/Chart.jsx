import React,{useState} from 'react'
import styles from './Chart.module.css'
import {Line,Bar,Pie} from 'react-chartjs-2'


const Chart =({displayTitle,legendPosition})=>{
    const [getDataProgram,setGetdataProgram]=useState()
    const [chartData,setChartData]=useState({
        labels:['Program A','Program B','Program C','Program D','Program E','Program F'],
        datasets:[{
            label:'Transaction Success',
            data:[
                1,
                2,
                3,
                4,
                5,
                6
            ],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        
        }]
    })

//     defaultProps={
//        displayTitle:true,
//        displayLegend:true,
//        legendPosition:legendPosition
//    }

    return(
        <div>
            <Bar
            data={chartData}
            width={100}
            height={50}
            options={{
                title:{
                    text:'Program Success',
                    display:true,
                    fontSize:20
                },
             legend:{
                 display:true,
                 position:'bottom'
             }
            }}
            />
        </div>
    )
}

export default Chart