import { Menu } from "antd";
import React from "react";

export default function LeftMenu({ mode }) {
	return (
		<>
			<Menu mode={mode}>
				<Menu.Item key="explore">Explore</Menu.Item>
				<Menu.Item key="features">Features</Menu.Item>
				<Menu.Item key="about">About Us</Menu.Item>
				<Menu.Item key="contact">Contact Us</Menu.Item>
			</Menu>
		</>
	);
}
