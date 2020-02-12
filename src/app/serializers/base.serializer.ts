import { Model } from '../models/model.model';

export interface Serializer {
    fromJson(json: any): Model;
    toJson(resource: Model): any;
  }