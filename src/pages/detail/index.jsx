import React, { useState, memo, useMemo, useCallback } from 'react';



const Child = memo(({ data, onChange }) => {
    console.log('child render...', data);
    return (
        <div>
            <div>child</div>
            <div>{data.name}</div>
            <input type="text" onChange={onChange} />
        </div>
    );
});

const Hook = (props) => {
    console.log('Hook render...', props.match.params);
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rose');
    const [text, setText] = useState('')
    // useMemo暂存能力，暂存了上一次name结果，可以减少子控件的无效render，提高渲染性能
    // useMemo 是缓存值的
    const data = useMemo(() => {
        return {
            name
        };
    }, [name]);

    // useCallback暂存能力，暂存的是函数，也可以减少子控件的render，提高渲染性能
    // useCallback 是缓存函数的, 没有依赖，添加空的依赖，就是空数组！
    const onChange = useCallback((e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }, []);

    // const onChange = (e) => {
    //     console.log(e.target.value);
    //     setText(e.target.value);
    // };

    return (
        <div className="detail">
            <div>text : {text}</div>
            <div>You clicks {count}</div>
            <button onClick={() => setCount(count + 1)}>update count</button>
            <Child data={data} onChange={onChange} />
            <button onClick={() => setName(count + 1)}>update name</button>

        </div>
    );
};

export default Hook;