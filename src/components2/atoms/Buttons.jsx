import { Button, ConfigProvider, Space } from "antd";
import { PlusOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

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

export default function Buttons() {
	return (
		<div>
			<h3>Component and Variants</h3>
			<ConfigProvider theme={ButtonCustom_1}>
				{/* ------------------------------------------------ */}
				<Space direction="horizontal">
					<div className="BoxPosition">
						<Space direction="vertical">
							<ConfigProvider theme={ButtonCustom_2}>
								<Space>
									<Button size="small">Caption</Button>
									<Button>Caption</Button>
									<Button size="large">Caption</Button>
								</Space>
							</ConfigProvider>
							<Space>
								<Button size="small">Caption</Button>
								<Button>Caption</Button>
								<Button size="large">Caption</Button>
							</Space>
							<Space>
								<Button size="small">Caption</Button>
								<Button>Caption</Button>
								<Button size="large">Caption</Button>
							</Space>
						</Space>
					</div>
				</Space>

				{/* ------------------------------------------------ */}
				<Space direction="horizontal">
					<div className="BoxPosition">
						<Space direction="vertical">
							<ConfigProvider theme={ButtonCustom_2}>
								<Space>
									<Button size="small" icon={<PlusOutlined />}>
										Caption
									</Button>
									<Button icon={<PlusOutlined />}>Caption</Button>
									<Button size="large" icon={<PlusOutlined />}>
										Caption
									</Button>
								</Space>
							</ConfigProvider>
							<Space>
								<Button size="small" icon={<PlusOutlined />}>
									Caption
								</Button>
								<Button icon={<PlusOutlined />}>Caption</Button>
								<Button size="large" icon={<PlusOutlined />}>
									Caption
								</Button>
							</Space>
							<Space>
								<Button size="small" icon={<PlusOutlined />}>
									Caption
								</Button>
								<Button icon={<PlusOutlined />}>Caption</Button>
								<Button size="large" icon={<PlusOutlined />}>
									Caption
								</Button>
							</Space>
						</Space>
					</div>
				</Space>

				{/* ------------------------------------------------ */}
				<Space direction="horizontal">
					<div className="BoxPosition">
						<Space direction="vertical">
							<ConfigProvider theme={ButtonCustom_2}>
								<Space>
									<Button size="small" icon={<ArrowRightOutlined />}></Button>
									<Button size="middle" icon={<ArrowRightOutlined />}></Button>
									<Button size="large" icon={<ArrowRightOutlined />}></Button>
								</Space>
							</ConfigProvider>
							<Space>
								<Button size="small" icon={<ArrowRightOutlined />}></Button>
								<Button size="middle" icon={<ArrowRightOutlined />}></Button>
								<Button size="large" icon={<ArrowRightOutlined />}></Button>
							</Space>
							<Space>
								<Button size="small" icon={<ArrowRightOutlined />}></Button>
								<Button size="middle" icon={<ArrowRightOutlined />}></Button>
								<Button size="large" icon={<ArrowRightOutlined />}></Button>
							</Space>
						</Space>
					</div>
				</Space>
			</ConfigProvider>
		</div>
	);
}
