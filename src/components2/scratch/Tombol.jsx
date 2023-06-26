import { Button, Space } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const Tombol = () => {
	const [load, setLoad] = useState([1]);

	const enterLoading = (index) => {
		setLoad((prevLoad) => {
			const newLoad = [...prevLoad];
			newLoad[index] = true;
			console.log(newLoad);
			return newLoad;
		});
		setTimeout(() => {
			setLoad((prevLoad) => {
				const newLoad = [...prevLoad];
				newLoad[index] = false;
				console.log(newLoad);
				return newLoad;
			});
		}, 6000);
	};
	return (
		<Space wrap>
			<Button onClick={() => enterLoading(1)} loading={load[1]}>
				btn loading
			</Button>
			<Button shape="round">Btn shape round</Button>
			<Button size="small">btn size</Button>
			<Button target="tidak tau">btn target</Button>
			<Button danger>ini button danger</Button>
			<Button disabled>ini button danger</Button>
			<Button block>ini button block</Button>
			<Button ghost>ini button ghost</Button>
			<Button htmlType="button">ini button HtmlType</Button>
			<Button type="dashed">ini button dashed</Button>
			<Button type="primary" icon={<SearchOutlined />}>
				Search
			</Button>
			<Button type="text" icon={<SearchOutlined />}>
				Search
			</Button>
		</Space>
	);
};

export default Tombol;
