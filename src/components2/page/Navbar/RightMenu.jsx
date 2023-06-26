import { Avatar, Menu } from "antd";
import React from "react";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

export default function RightMenu({ mode }) {
	return (
		<>
			<Menu mode={mode}>
				<Menu.SubMenu
					title={
						<>
							<Avatar icon={<UserOutlined />} />
							<span className="username">John Doe</span>
						</>
					}>
					<Menu.Item key={"project"}>
						<CodeOutlined /> Projects
					</Menu.Item>
					<Menu.Item key={"about-us"}>
						<UserOutlined /> Profile
					</Menu.Item>
					<Menu.Item key={"log-out"}>
						<LogoutOutlined /> Logout
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</>
	);
}
