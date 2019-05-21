import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards, Get, Query, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Api } from '../../common/aspects/decorator';
import { ContentService } from '../../common/services/content.service';

@Api('content')
@ApiUseTags('content')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class ContentController {
	constructor(private readonly contentService: ContentService) {}

	@Get('list')
	async list(@Query() payload) {
		return await this.contentService.query(payload);
	}

	@Delete()
	async remove(@Query() payload) {
		return await this.contentService.remove(payload.selectedRows.split(','));
	}
}