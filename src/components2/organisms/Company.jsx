import React from "react";
import { Card, Typography, Tag } from "antd";

const { Paragraph, Title } = Typography;

export default function Company() {
	return (
		<div>
			<h3>JobList Company</h3>
			<div className="BoxPosition">
				<Card
					style={{ width: 453, height: 334 }}
					title={
						<>
							<img
								alt="logo"
								src={require("./logo2.png")}
								style={{
									width: 48,
									height: 48,
									paddingLeft: 16,
									paddingTop: 16,
								}}
							/>
						</>
					}
					extra={"More"}>
					<div style={{ marginBottom: 20 }}>
						<Title level={5} style={{ margin: 0, padding: 0 }}>
							Company
						</Title>
						<Paragraph>
							Komodo is an open, multi-chain blockchain platform and a global
							top-60 project by market cap value.
						</Paragraph>
						<Tag color="success">Marketing</Tag>
						<Tag color="processing">Design</Tag>
					</div>
				</Card>
			</div>
		</div>
	);
}
