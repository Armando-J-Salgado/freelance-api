import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './service.entity';

@ApiTags('Services')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('services')
export class ServicesController {
    constructor (private servicesService: ServicesService) {}

    @Post()
    @ApiOperation({summary: 'Generate a new service'})
    @ApiResponse({status: 200, description: 'Created the service succesfully'})
    @ApiResponse({status: 401, description: 'Not authenthicated'})
    create(@Body() dto: CreateServiceDto, @Request() req: { user: { id: number } }): Promise<Service> {
        return this.servicesService.createService(dto.title, dto.category, dto.description, dto.price, req.user.id)
    }
}
