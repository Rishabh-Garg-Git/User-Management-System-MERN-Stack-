import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            style={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                padding: "10px", 
                borderBottom: "1px solid #ccc",
                background: task.completed ? "#d4edda" : "#f8d7da"
            }}
        >
            <span 
                style={{ 
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer"
                }} 
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </span>
            <button 
                style={{
                    background: "red", 
                    color: "white", 
                    border: "none", 
                    padding: "5px 10px", 
                    cursor: "pointer"
                }} 
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
