import React, {useCallback} from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };
import "./customNode.css"

export default function CustomNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, [])
    return (
        <div className="custom-node" style={{backgroundColor: "#fff", minWidth: "8rem", textAlign: "center", color: "#000", padding: "1rem", borderRadius: "5px"}}>
            <Handle type="source" position={Position.Top} />
            <Handle type="source" position={Position.Right} />
            <div>{data.label}</div>
            <Handle type="target" position={Position.Bottom}/>
            <Handle type="target" position={Position.Left}/>
        </div>
    )
}