import { Layout, Menu, Image, Space, Typography, Row, Col } from "antd";
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

export default function LayoutPage() {
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
							<WeiboCircleOutlined
								style={{ fontSize: "32px", display: "block" }}
							/>
							<h1 style={{ marginTop: 0, marginBottom: 0 }}>JobHuntly</h1>
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
				</Header>
				<Content>
					{/* Heading */}
					<div>
						<Row style={{ backgroundColor: "lightgreen" }}>
							<Col span={14} style={{ height: 500 }}>
								<Title>Discover more than 5000+ Jobs</Title>
								<Text>
									Great platform for the job seeker that searching for new
									career heights and passionate about startups
								</Text>
							</Col>
							<Col span={10} style={{ height: 500 }}>
								tes ini col 2
							</Col>
						</Row>
					</div>
					<div>
						<Col xs={24} xl={8}>
							<Space direction="vertical">
								<Text>Companies we helped grow</Text>

								{/* Space gap disini gimana agar auto nempel kanan kiri */}
								<Space>
									<Space>
										<DribbbleOutlined style={{ fontSize: "32px" }} />
										<h1>Jobox</h1>
									</Space>
									<Space>
										<YuqueOutlined style={{ fontSize: "32px" }} />
										<h1>Dsign</h1>
									</Space>
									<Space>
										<CodepenCircleOutlined style={{ fontSize: "32px" }} />
										<h1>Wave</h1>
									</Space>
									<Space>
										<GitlabOutlined style={{ fontSize: "32px" }} />
										<h1>Twins</h1>
									</Space>
									<Space>
										<DropboxOutlined style={{ fontSize: "32px" }} />
										<h1>Bubles</h1>
									</Space>
								</Space>
							</Space>
						</Col>
					</div>
				</Content>
				<Footer>ini Footer</Footer>
			</Layout>
		</div>
	);
}
