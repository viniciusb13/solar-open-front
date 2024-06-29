"use client"
import React, { useState, useEffect } from 'react'

interface ProgressBarProps {
    progressPercentage: number;
}

const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(progressPercentage);
    }, [progressPercentage]);

    return (
        <div className='h-3 rounded-2xl bg-[#F1EBF599] mx-6'>
            <div
                style={{ width: `${progress}%`}}
                className={`h-full transition-width duration-700 ease-in-out rounded-2xl rounded-tl-2xl rounded-bl-2xl ${
                    progress < 80 ? 'bg-[#FFD159]' : 'bg-red-600'}`}>
            </div>
            <span>{progressPercentage}%</span>
        </div>
    );
};

export default ProgressBar;
