import React from "react";
import {
	List,
	Avatar,
	Button,
	ConfigProvider,
	Space,
	Progress,
	Typography,
	Tag,
	Card,
} from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const { Paragraph, Title } = Typography;

const ButtonCustom_1 = {
	token: {
		borderRadius: 1,
		colorText: "#4640DE",
		fontSize: 10,
		colorPrimaryHover: "#4640DE",
	},
};

const ButtonCustom_2 = {
	token: {
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

const ListData = [
	{
		title: "Social Media Assistant 1",
		description: "Company • Paris, France • Full-Time",
	},
	{
		title: "Social Media Assistant 2",
		description: "Company • Jakarta, Indonesia • Part-Time",
	},
];

export default function JobList() {
	return (
		<div>
			<h3>JobList</h3>
			<div className="BoxPosition">
				<Space direction="vertical">
					<List
						itemLayout="horizontal"
						dataSource={ListData}
						renderItem={(ListData, index) => (
							<List.Item
								style={{ width: 1187 }}
								actions={[
									<ShareAltOutlined style={{ fontSize: "110%" }} />,
									<ConfigProvider theme={ButtonCustom_1}>
										<ConfigProvider theme={ButtonCustom_2}>
											<Button>Apply</Button>
										</ConfigProvider>
									</ConfigProvider>,
								]}>
								<List.Item.Meta
									avatar={
										<Avatar
											src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
										/>
									}
									description={ListData.description}
									title={ListData.title}
								/>
							</List.Item>
						)}
					/>

					<List
						itemLayout="horizontal"
						dataSource={ListData}
						renderItem={(ListData, index) => (
							<List.Item
								style={{ width: 919 }}
								actions={[
									<div>
										<ConfigProvider theme={ButtonCustom_1}>
											<ConfigProvider theme={ButtonCustom_2}>
												<Button>Apply</Button>
											</ConfigProvider>
										</ConfigProvider>
										<Progress
											showInfo={false}
											success={{ percent: 40, strokeColor: "#56CDAD" }}
											size="small"
										/>
										<div style={{ margin: 0, padding: 0, fontSize: 10 }}>
											5 applied of 10 capacity
										</div>
									</div>,
								]}>
								<List.Item.Meta
									avatar={
										<Avatar
											src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
										/>
									}
									description={ListData.description}
									title={ListData.title}
								/>
								<Tag color="success">Marketing</Tag>
								<Tag color="processing">Design</Tag>
							</List.Item>
						)}
					/>

					<Card
						style={{ width: 343, height: 330 }}
						cover={
							<img
								alt="logo"
								src={require("./logo.png")}
								style={{
									width: 48,
									height: 48,
									paddingLeft: 16,
									paddingTop: 16,
								}}
							/>
						}>
						<div style={{ marginBottom: 20 }}>
							<Title level={4} style={{ margin: 0, padding: 0 }}>
								Social Media Assistant
							</Title>
							<Paragraph>Company • Paris, France • Full-Time</Paragraph>
							<Tag color="success">Marketing</Tag>
							<Tag color="processing">Design</Tag>
						</div>

						<Space
							direction="vertical"
							style={{
								width: "100%",
							}}>
							<ConfigProvider theme={ButtonCustom_1}>
								<ConfigProvider theme={ButtonCustom_2}>
									<Button block>Apply</Button>
								</ConfigProvider>
							</ConfigProvider>

							<Progress
								showInfo={false}
								success={{ percent: 40, strokeColor: "#56CDAD" }}
								size="small"
							/>
							<div style={{ margin: 0, padding: 0, fontSize: 10 }}>
								5 applied of 10 capacity
							</div>
						</Space>
					</Card>
				</Space>
			</div>
		</div>
	);
}
