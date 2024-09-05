import { useEffect, useState } from "react";

export function IsScreenLessThan({ size } : any) { 
    const [isScreenSize, isSetScreenSize] = useState<boolean>();

    const handleResize = () => {
		isSetScreenSize(window.innerWidth <= size);
	};

    useEffect(() => {
		isSetScreenSize(window.innerWidth <= size)
		window.addEventListener('resize', handleResize);
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	},[]);

    return isScreenSize
}

export function IsScreenMoreThan({ size } : any) {
	const [isScreenSize, isSetScreenSize] = useState<boolean>();

    const handleResize = () => {
		isSetScreenSize(window.innerWidth >= size);
	};

    useEffect(() => {
		isSetScreenSize(window.innerWidth >= size)
		window.addEventListener('resize', handleResize);
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	},[]);

    return isScreenSize
}