import React, { memo } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import styles from './Analysis.less';
import { TimelineChart, Pie } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';

const CustomTab = ({ data, currentTabKey: currentKey }) => (
	<Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
		<Col span={12}>
			<NumberInfo
				title={data.name}
				subTitle={'转化率'}
				gap={2}
				total={`${data.cvr * 100}%`}
				theme={currentKey !== data.name && 'light'}
			/>
		</Col>
		<Col span={12} style={{ paddingTop: 36 }}>
			<Pie
				animate={false}
				color={currentKey !== data.name && '#BDE4FF'}
				inner={0.55}
				tooltip={false}
				margin={[ 0, 0, 0, 0 ]}
				percent={data.cvr * 100}
				height={64}
			/>
		</Col>
	</Row>
);

const { TabPane } = Tabs;

const OfflineData = memo(({ activeKey, loading, offlineData, offlineChartData, handleTabChange }) => (
	<Card loading={loading} className={styles.offlineCard} bordered={false} style={{ marginTop: 32 }}>
		<Tabs activeKey={activeKey} onChange={handleTabChange}>
			{offlineData.map((shop) => (
				<TabPane tab={<CustomTab data={shop} currentTabKey={activeKey} />} key={shop.name}>
					<div style={{ padding: '0 24px' }}>
						<TimelineChart
							height={400}
							data={offlineChartData}
							titleMap={{
								y1: '客流量',
								y2: '支付笔数'
							}}
						/>
					</div>
				</TabPane>
			))}
		</Tabs>
	</Card>
));

export default OfflineData;
