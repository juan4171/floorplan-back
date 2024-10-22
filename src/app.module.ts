import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationsModule } from './organizations/organizations.module';
import { PlanosModule } from './planos/planos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://juan82montalivet:juandb@cluster0.aufex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    ProjectsModule,
    OrganizationsModule,
    PlanosModule],
})
export class AppModule {}
