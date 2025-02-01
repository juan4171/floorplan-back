import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './schemas/organization.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(@InjectModel(Organization.name) private organizationModel: Model<Organization>) { }

  async create(createOrganizationDto: CreateOrganizationDto) {
    const newOrganization = new this.organizationModel(createOrganizationDto);
    return newOrganization.save();
  }

  findAll() {
    return this.organizationModel.find();
  }

  findOne(id: string) {
    return this.organizationModel.findById(id);
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationModel.findByIdAndUpdate(id, updateOrganizationDto, { new: true });
}

  remove(id: string) {
    return this.organizationModel.findByIdAndDelete(id);
  }

  async findByUserEmail(email: string) {
    return this.organizationModel.find({ 'users.email': email });
  }
}
