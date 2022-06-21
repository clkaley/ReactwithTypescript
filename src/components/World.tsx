import {useState,useEffect} from 'react'
interface IWorldProps{
    name:string,
    description?:string,
    label?:string,
    onSmthHappen:(name:string)=>void
}

interface changeNode{
    age:number | string
}

const World:React.FC<IWorldProps> = ({name,description,label="none label",onSmthHappen}) => {
    //Type Inference->typescrit sayesinde
    const [count,setCount]=useState<number | string | null >(1453)
    setCount("hello")

    const [change,setChange]=useState< changeNode>({age:45})
    setChange({age:46})
    return (
        <>
            <h6>World Component</h6>
            {name}-{description}-{label}
            {onSmthHappen(name)}
            
         
        </>
    );
};

export default World;