import React, { useState, useRef, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rose');
    // 就是相当于全局作用域，一处被修改，其他地方全更新
    const inputRef = useRef(null);
    const countRef = useRef(0);

    // 相当于 componentDidMount 和 componentDidUpdate，第二个参数不加
    // 和useState一样，可以多次使用
    useEffect(() => {
        document.title = `${name} You cliced ${count} times`;
    })

    // useEffect只在第一次使用componentDidMount，方法：在第二个参数加上[]
    useEffect(() => {
        const users = 'martin';
        console.log(users);
    }, []);

    // useEffect 在willUnMount生命周期里做的事情，可以在effect的return里面实现
    useEffect(() => {
        const users = 'martin';
        return () => {
            console.log('我是在willUnMount时执行的', users);
        }
    }, []);

    // 指定某个变量更新了，useEffect才执行，方法：在第二个参数加上[变量名]
    useEffect(() => {
        const users = 'martin';
        console.log(users);
    }, [name]);

    // 指定某个变量只要有一个更新了，useEffect就执行，方法：在第二个参数加上[变量名,变量名]
    useEffect(() => {
        const users = 'martin and times';
        console.log(users);
    }, [name, count]);

    // 使用useRef全局变量
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer...count:', countRef.current);
            // setCount(++countRef.current);
        });
        return () => {
            console.log('clearInterval');
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="home">
            <Header></Header>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Your Name is {name}</p>
            <input type="text" ref={inputRef}/>
            <button onClick={() => setName(inputRef.current.value)}>Modify me</button>
            <p><a href="/#list">goto list page</a></p>
            <p><a href="/#detail/1">goto detail page</a></p>
            <p><a href="/#404">goto 404 page</a></p>
            <Footer></Footer>
        </div>
    );
};

export default App;