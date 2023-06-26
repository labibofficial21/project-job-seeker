import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Dropdown, ConfigProvider, Space } from "antd";

const DropdownBarCustom_1 = {
	token: {
		colorPrimaryHover: "#000000",
		colorText: "#808080",
		borderRadius: 1,
		fontSize: 12,
	},
};

const DropdownBarCustom_2 = {
	token: {
		colorText: "#000000",
	},
};

const DropdownBarCustom_3 = {
	token: {
		colorBorder: "#4640DE",
	},
};

const items = [
	{
		key: 1,
		label: (
			<a href="/" target="_blank">
				1st menu item
			</a>
		),
	},
	{
		key: 2,
		label: (
			<a href="/" target="_blank">
				2nd menu item
			</a>
		),
	},
	{
		key: 3,
		label: (
			<a href="/" target="_blank">
				3rd menu item
			</a>
		),
	},
];

const DropdownBar = () => {
	return (
		<div>
			<h3>Dropdown</h3>

			<div className="BoxPosition">
				<Space>
					{/* ------------------------------------------------------- */}
					<ConfigProvider theme={DropdownBarCustom_1}>
						<Space direction="vertical">
							<Space>
								<Dropdown menu={{ items }}>
									<Button>
										This is placeholder
										<DownOutlined />
									</Button>
								</Dropdown>
							</Space>

							<ConfigProvider theme={DropdownBarCustom_3}>
								<Space>
									<Dropdown menu={{ items }}>
										<Button>
											This is placeholder
											<DownOutlined />
										</Button>
									</Dropdown>
								</Space>
							</ConfigProvider>

							<ConfigProvider theme={DropdownBarCustom_2}>
								<Space>
									<Dropdown menu={{ items }}>
										<Button>
											This is placeholder
											<DownOutlined />
										</Button>
									</Dropdown>
								</Space>
							</ConfigProvider>

							<ConfigProvider theme={DropdownBarCustom_1}>
								<Space>
									<Dropdown menu={{ items }}>
										<Button>
											This is placeholder
											<UpOutlined />
										</Button>
									</Dropdown>
								</Space>
							</ConfigProvider>
						</Space>
					</ConfigProvider>
				</Space>
			</div>
		</div>
	);
};

export default DropdownBar;
