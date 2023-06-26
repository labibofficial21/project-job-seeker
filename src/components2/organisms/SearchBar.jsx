import { Input, Select, Space, Button, ConfigProvider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Option } = Select;

const ButtonCustom_1 = {
	token: {
		borderRadius: 1,
		colorText: "#4640DE",
		fontSize: 12,
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

export default function SearchBar() {
	return (
		<div>
			<h3>SearchBar</h3>
			<div className="BoxPosition">
				<Space>
					<SearchOutlined />
					<Input
						style={{
							borderBottom: "1px solid black",
							borderRadius: 1,
						}}
						placeholder="Job title or keyword"
						bordered={false}
					/>

					<Space>
						<EnvironmentOutlined />
						<Select
							defaultValue={"florence"}
							bordered={false}
							style={{ borderBottom: "1px solid black", borderRadius: 1 }}>
							<Option value="florence">Florence, Italy</Option>
							<Option value="bandung">Bandung, Indonesia</Option>
						</Select>
					</Space>
					<ConfigProvider theme={ButtonCustom_1}>
						<ConfigProvider theme={ButtonCustom_2}>
							<Button style={{ fontWeight: "bold" }}>Search my job</Button>
						</ConfigProvider>
					</ConfigProvider>
				</Space>
			</div>
		</div>
	);
}
