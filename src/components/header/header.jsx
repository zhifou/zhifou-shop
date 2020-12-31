import React from 'react';
import './header.scss';

const header = () => {
    return (
        <header>
            <div className="title">我是页头</div>
            <ul><li><img alt="背景图" src="http://www.abcstatic.com/images/jpg/bg-333.jpg" /></li></ul>
        </header>
    );
};

export default header;