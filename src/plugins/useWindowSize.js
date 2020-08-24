/**
 * @file 自定义hook组件
 * 使用方法：const [width, height] = useWindowSize();
 */
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const {clientWidth, clientHeight} = document.documentElement;
        setWidth(clientWidth);
        setHeight(clientHeight);
    }, []);

    useEffect(() => {
        const handleWindowSize = () => {
            const {clientWidth, clientHeight} = document.documentElement;
            setWidth(clientWidth);
            setHeight(clientHeight);
        };
        window.addEventListener('resize', handleWindowSize, false);

        return () => {
            window.removeEventListener('resize', handleWindowSize, false);
        }
    });

    return [width, height];
}