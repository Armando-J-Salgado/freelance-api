/// <reference types="jest" />
import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

describe('ServicesController', () => {
  let controller: ServicesController;
  let servicesService: { createService: ReturnType<typeof jest.fn> };

  beforeEach(async () => {
    servicesService = {
      createService: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesController],
      providers: [
        {
          provide: ServicesService,
          useValue: servicesService,
        },
      ],
    }).compile();

    controller = module.get<ServicesController>(ServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('passes the authenticated user id to createService', async () => {
    const dto = {
      title: 'Logo design',
      category: 'Design',
      description: 'Brand logo',
      price: 100,
    };
    const req = { user: { id: 42 } };

    await controller.create(dto as never, req as never);

    expect(servicesService.createService).toHaveBeenCalledWith(
      dto.title,
      dto.category,
      dto.description,
      dto.price,
      req.user.id,
    );
  });
});
