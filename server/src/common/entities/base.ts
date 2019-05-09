import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { RowStatus } from '../aspects/enum';

export abstract class Base {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ type: 'simple-json', default: {}, comment: '扩展信息' })
	ex_info: any;

	@Column({
		type: 'enum',
		default: RowStatus.NORMAL,
		enum: RowStatus,
		comment: '行状态'
	})
	row_status: RowStatus;

	@CreateDateColumn({
		comment: '创建时间'
	})
	create_at: number;

	@UpdateDateColumn({
		comment: '更新时间'
	})
	update_at: number;
}
