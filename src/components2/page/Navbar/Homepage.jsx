import { Image, Menu, Space, Typography } from "antd";
import React, { useState } from "react";
import { WeiboCircleOutlined } from "@ant-design/icons";
import { Button } from "antd/es/radio";

const { Title, Text } = Typography;

const items = [
	{
		label: "Find Jobs",
		key: "jobs",
	},
	{
		label: "Browse Companies",
		key: "companies",
	},
];

export default function Homepage() {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click", e);
		setCurrent(e.key);
	};
	return (
		<>
			<div style={{ display: "flex" }}>
				<Space align="center">
					<WeiboCircleOutlined
						style={{
							fontSize: "24px",
						}}
					/>
					<Text strong>JobHuntly</Text>
					<Menu
						items={items}
						onClick={onClick}
						selectedKeys={[current]}
						mode="horizontal"
					/>
				</Space>
				<Space style={{ marginLeft: "auto" }}>
					<Button>Login</Button>
					<Button>Sign Up</Button>
				</Space>
			</div>
		</>
	);
}
