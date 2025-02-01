import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project } from 'src/projects/schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<Project>) { }

    async create(createProjectDto: CreateProjectDto) {
        const newProject = new this.projectModel({
            ...createProjectDto,
            organization: new Types.ObjectId(createProjectDto.organization),
        });
        return newProject.save();
    }

    findAll() {
        return this.projectModel.find();
    }

    async findOne(id: string) {
        return this.projectModel.findById(id);
    }

    async update(id: string, updateProjectDto: UpdateProjectDto) {
        return this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true });
    }

    async delete(id: string) {
        return this.projectModel.findByIdAndDelete(id);
    }

    async getOrganizationProjects(id: string) {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException('Invalid organization ID');
        }
        return this.projectModel.find({ organization: new Types.ObjectId(id) });
    }

    async findByOrganizationId(organizationId: string): Promise<Project[]> {
        const objectId = new Types.ObjectId(organizationId);
        return this.projectModel.find({ organization: objectId }).exec();
    }
}
