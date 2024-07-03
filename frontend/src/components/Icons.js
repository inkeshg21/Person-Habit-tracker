import { ReactComponent as Icon1 } from '../images/icons/1.svg'
import { ReactComponent as Icon2 } from '../images/icons/2.svg'
import { ReactComponent as Icon3 } from '../images/icons/3.svg'
import { ReactComponent as Icon4 } from '../images/icons/4.svg'
import { ReactComponent as Icon5 } from '../images/icons/5.svg'
import { ReactComponent as Icon6 } from '../images/icons/6.svg'
import { ReactComponent as Icon7 } from '../images/icons/7.svg'
import { ReactComponent as Icon8 } from '../images/icons/8.svg'
import { ReactComponent as Icon9 } from '../images/icons/9.svg'
import { ReactComponent as Icon10 } from '../images/icons/10.svg'
import { ReactComponent as Icon0 } from '../images/icons/0.svg'

const iconArr =[
    <Icon0 fill="white"  style={{width:"100%", height:"100%"}}/>,
    <Icon1 fill="white" style={{width:"100%"}}/>,
    <Icon2 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon3 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon4 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon5 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon6 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon7 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon8 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon9 fill="white" style={{width:"100%", height:"100%"}}/>,
    <Icon10 fill="white" style={{width:"100%", height:"100%"}}/>
]


function Icons (props) {

    const iArr =[
        <Icon0 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon1 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon2 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon3 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon4 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon5 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon6 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon7 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon8 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon9 fill={props.color} style={{width:"50%", height:"100%"}}/>,
        <Icon10 fill={props.color} style={{width:"50%", height:"100%"}}/>
    ]
    

    return (
        <>
        
        {iArr[props.icon]}
       
        </>
    )
}


export  {iconArr, Icons}

