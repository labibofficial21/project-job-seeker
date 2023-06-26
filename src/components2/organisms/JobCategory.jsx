import { Card, Space, Typography, ConfigProvider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const { Text } = Typography;

const JobCard_1 = {
	token: {
		borderRadius: 1,
		colorBgContainer: "#FFFFFF",
		colorBorderSecondary: "#FFFFFF",
	},
};

const JobCard_2 = {
	token: {
		colorBgContainer: "#4640DE",
		colorBorderSecondary: "#4640DE",
		colorText: "#FFFFFF",
	},
};

export default function JobCategory() {
	return (
		<div>
			<h3>Job Category</h3>
			<div className="BoxPosition">
				<ConfigProvider theme={JobCard_1}>
					<Card style={{ width: 200 }}>
						<img
							src={require("./jobCategory_design.png")}
							alt="logo"
							width={48}
							height={48}
							style={{ paddingBottom: 24 }}
						/>
						<Space>
							<Space direction="vertical">
								<Text strong>Design</Text>
								<Text>235 Jobs available</Text>
							</Space>
							<ArrowRightOutlined style={{ paddingLeft: 17 }} />
						</Space>
					</Card>

					<ConfigProvider theme={JobCard_2}>
						<Card style={{ width: 200 }}>
							<img
								src={require("./jobCategory_marketing.png")}
								alt="logo"
								width={48}
								height={48}
								style={{ paddingBottom: 24 }}
							/>
							<Space>
								<Space direction="vertical">
									<Text strong>Marketing</Text>
									<Text>140 Jobs available</Text>
								</Space>
								<ArrowRightOutlined style={{ paddingLeft: 17 }} />
							</Space>
						</Card>
					</ConfigProvider>
				</ConfigProvider>
			</div>
		</div>
	);
}
