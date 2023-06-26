import { Space, Typography, ConfigProvider } from "antd";
import React from "react";
const { Title, Text } = Typography;

const Typhography = () => {
	return (
		<div>
			<h3>Typhography</h3>
			<Space direction="vertical">
				<div className="BoxPosition">
					<ConfigProvider
						theme={{
							token: {
								colorText: "#4640de",
								fontFamily: "Epilogue",
							},
						}}>
						<div>
							<h4>Headings</h4>
							<Title>The quick brown fox jumps over the ...</Title>
							<Title level={2}>The quick brown fox jumps over the ...</Title>
							<Title level={3}>The quick brown fox jumps over the ...</Title>
							<Title level={4}>The quick brown fox jumps over the ...</Title>
							<Title level={5}>The quick brown fox jumps over the ...</Title>
						</div>
					</ConfigProvider>
				</div>
				<div className="BoxPosition">
					<h4>Body</h4>
					<ConfigProvider
						theme={{
							token: {
								colorText: "#4640de",
								fontFamily: "Epilogue",
								fontSize: 20,
							},
						}}>
						<div>
							<Text>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form which
								don't look even slightly believable.
							</Text>
						</div>
					</ConfigProvider>
				</div>
			</Space>
		</div>
	);
};

export default Typhography;
