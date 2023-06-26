import { Layout, Menu, Image, Space, Typography, ConfigProvider } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import {
	WeiboCircleOutlined,
	DribbbleOutlined,
	DropboxOutlined,
	GitlabOutlined,
	CodepenCircleOutlined,
	YuqueOutlined,
} from "@ant-design/icons";
import { Button } from "antd/es/radio";
import React, { useState } from "react";

const { Title, Text } = Typography;

const headerStyle = {
	textAlign: "center",
	height: 64,
	paddingInline: 0,
	lineHeight: "64px",
	backgroundColor: "#fff",
};

const ButtonCustom_1 = {
	token: {
		borderRadius: 1,
		fontSize: 10,
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

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

export default function ContohSaja() {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click", e);
		setCurrent(e.key);
	};

	return (
		<div>
			<Layout>
				<Header style={headerStyle}>
					<div style={{ display: "flex" }}>
						<Space>
							<Image src={require("../../../images/logo.png")} />
							<h1 style={{ marginBlock: 0 }}>JobHuntly</h1>
							<Menu
								items={items}
								onClick={onClick}
								selectedKeys={[current]}
								mode="horizontal"
							/>
						</Space>
						<Space style={{ marginInlineStart: "auto" }}>
							<Button type="text">Text Button</Button>
							<ConfigProvider theme={ButtonCustom_1}>
								<Button>Sign Up</Button>
							</ConfigProvider>
							<Button>tes</Button>
						</Space>
					</div>
					<Button s></Button>
				</Header>
			</Layout>
		</div>
	);
}
