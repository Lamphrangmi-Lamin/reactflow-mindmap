import React, { useState, useCallback } from "react";
import ReactFlow, {
    MiniMap,
    useNodesState,
    useEdgesState,
    Panel,
    Controls,
    addEdge,
    Background
} from "reactflow";

import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";

const initialNodes = [
    {
        id: "1",
        type: "customNode",
        data: { label: "Research" },
        position: { x: 300, y: 150 },
    },
    {
        id: "external",
        type: "customNode",
        data: { label: "External" },
        position: { x: 600, y: 100 },
    },
    {
        id: "external-1",
        type: "customNode",
        data: { label: "B2C" },
        position: { x: 900, y: 50 },
    },
    {
        id: "b2c-online",
        type: "customNode",
        data: { label: "Online" },
        position: { x: 1300, y: 100 },
    },
    {
        id: "b2c-interview",
        type: "customNode",
        data: { label: "Interview" },
        position: { x: 1300, y: 200 },
    },
    {
        id: "b2c-public-data",
        type: "customNode",
        data: { label: "Public Data" },
        position: { x: 1300, y: 300 },
    },
    {
        id: "b2c-health",
        type: "customNode",
        data: { label: "Health" },
        position: { x: 1300, y: 400 },
    },
    {
        id: "external-2",
        type: "customNode",
        data: { label: "B2C" },
        position: { x: 900, y: 150 },
    },
    {
        id: "internal",
        type: "customNode",
        data: { label: "Internal" },
        position: { x: 600, y: 200 },
    },
    {
        id: "prd",
        type: "customNode",
        data: { label: "PRD" },
        position: { x: 600, y: 325 },
    },
    {
        id: "2",
        type: "customNode",
        data: { label: "Planning" },
        position: { x: 300, y: 370 },
    },
    {
        id: "specs",
        type: "customNode",
        data: { label: "Specs" },
        position: { x: 600, y: 425 },
    },
    {
        id: "3",
        type: "customNode",
        data: { label: "Designing" },
        position: { x: 300, y: 590 },
    },
    {
        id: "hardware",
        type: "customNode",
        data: { label: "Hardware" },
        position: { x: 600, y: 550 },
    },
    {
        id: "software",
        type: "customNode",
        data: { label: "Software" },
        position: { x: 600, y: 650 },
    },
    {
        id: "4",
        type: "customNode",
        data: { label: "Manufacturing" },
        position: { x: 300, y: 810 },
    },
    {
        id: "material",
        type: "customNode",
        data: { label: "Material" },
        position: { x: 600, y: 775 },
    },
    {
        id: "production",
        type: "customNode",
        data: { label: "Production" },
        position: { x: 600, y: 875 },
    },
    {
        id: "5",
        type: "customNode",
        data: { label: "Sales/Marketing" },
        position: { x: 300, y: 1030 },
    },
    {
        id: "online",
        type: "customNode",
        data: { label: "Online" },
        position: { x: 600, y: 1000 },
    },
    {
        id: "dealership",
        type: "customNode",
        data: { label: "Dealership" },
        position: { x: 600, y: 1100 },
    },
];

const initialEdges = [
    { id: 'el-1', source: "1", target: "2" },
    { id: 'el-1.1', source: "1", target: "external" },
    { id: 'el-1.1.1', source: "external", target: "external-1" },
    { id: 'el-1.5', source: "external-1", target: "b2c-online" },
    { id: 'el-1.6', source: "external-1", target: "b2c-interview" },
    { id: 'el-1.7', source: "external-1", target: "b2c-public-data" },
    { id: 'el-1.8', source: "external-1", target: "b2c-health" },
    { id: 'el-1.1.2', source: "external", target: "external-2" },
    { id: 'el-1.2', source: "1", target: "internal" },

    { id: 'el-2', source: "2", target: "3" },
    { id: 'el-2.1', source: "2", target: "prd" },
    { id: 'el-2.2', source: "2", target: "specs" },

    { id: 'el-3', source: "3", target: "4" },
    { id: 'el-3.1', source: "3", target: "hardware" },
    { id: 'el-3.2', source: "3", target: "software" },

    { id: 'el-4', source: "4", target: "5" },
    { id: 'el-4.1', source: "4", target: "material" },
    { id: 'el-4.2', source: "4", target: "production" },

    { id: 'el-5', source: "5", target: "online" },
    { id: 'el-5', source: "5", target: "dealership" },
];

const nodeTypes = {customNode: CustomNode}

export default function MindNode() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [name, setName] = useState("");

    const addNode = () => {
        setNodes((e) => (
            e.concat({
                id: (e.length + 1).toString(),
                type: "customNode",
                data: { label: `${name}` },
                position: {
                    x: Math.random() * 500,
                    y: Math.random() * 300,
                }
            })
        ))
    };

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );


    return (
        <div id="container" style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                edges={edges}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                <Controls />
                <Background variant="dots" size={1.5} />
                <MiniMap
                    nodeColor={(n) => {
                        if (n.type === "input") return "blue";
                        return "#FFCC00"
                    }}
                />
                <Panel>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            name="title"
                        />
                        <button type="button" onClick={addNode}>
                            Add Node
                        </button>
                    </div>
                </Panel>
            </ReactFlow>

        </div>
    )
}