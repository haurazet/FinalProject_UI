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