import React, { useEffect, useRef } from 'react'

export const useMouseRotation = () => {
    const wrapperRef = useRef(null);
    const ticketRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const ticket = ticketRef.current;

        if (!wrapper || !ticket) return;

        const handleMouseMove = (event) => {

            const { left, top, width, height } = wrapper.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;

            const rotationY = ((x / width) - 0.5) * 100;
            const rotationX = ((y / height) - 0.5) * -100;

            ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        };

        const handleMouseLeave = () => {
            ticket.style.transform = "rotateX(0deg) rotateY(0deg)";
        };

        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            wrapper.removeEventListener("mousemove", handleMouseMove);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [])

    return { wrapperRef, ticketRef }
}
