import { AbstactRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from './models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends AbstactRepository<UserDocument> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(@InjectModel(UserDocument.name) usersModel: Model<UserDocument>) {
    super(usersModel);
  }
}
