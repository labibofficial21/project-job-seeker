import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import { Button, Space } from 'antd';

export default class App extends Component {
    render() {
        const pencet = () => {
            console.log("link Home telah dipencet")
        }
        return (
            <div>
                <h3>Selamat datang di website Labib!</h3>
                <nav>
                    <ul>
                        <li><Link to={"/"} onClick={pencet}>Home</Link></li>
                        <li><Link to={"/contact"}>About</Link></li>
                        <li><Link to={"/about"}>Contact</Link></li>
                    </ul>
                </nav>

                <hr />

                <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </Space>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        );
    }
}
