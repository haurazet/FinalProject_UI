import React,{useState} from 'react'
import styles from './ChartLine.module.css'
import {Line,Bar,Pie} from 'react-chartjs-2'


const ChartLine =({displayTitle,legendPosition})=>{
    const [getDataReward,setGetDataReward]=useState()
    const [chartData,setChartData]=useState({
        labels:['Reward A','Reward B','Reward C','Reward D','Reward E','Reward F'],
        datasets:[{
            label:'Reward Sold',
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
            <Line
            data={chartData}
            width={100}
            height={50}
            options={{
             title:{
                 text:'Reward Sold',
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

export default ChartLine