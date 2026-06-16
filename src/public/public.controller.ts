import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicesService } from 'src/services/services.service';

@ApiTags('Public')
@Controller('public')
export class PublicController {
    constructor (
        private servicesService: ServicesService,
    ) {}

    @Get('/services')
    @ApiOperation({summary: 'Retrieve all services available'})
    @ApiResponse({status: 200, description: 'Services found correctly'})
    findAll() {
        return this.servicesService.findAll();
    }
}
