import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Record } from '../../documents/record.document';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecordDataService {
    private readonly model: Model<Record>
    
    constructor(
        @InjectModel(Record.name) private readonly destinationModel: Model<Record>,
    ){
        this.model = this.destinationModel
    }

    public async list(listParams: {
        startDate?: Date,
        endDate?: Date,
        minCount?: number,
        maxCount?: number
      }): Promise<Record[]> {
        
        const propertiesQuery: any = {}
        
        // createdAt block
        if (listParams.startDate || listParams.endDate)
            propertiesQuery.createdAt = {}

        if (listParams.startDate)
            propertiesQuery.createdAt.$gte = listParams.startDate

        if (listParams.endDate)
            propertiesQuery.createdAt.$lt = listParams.endDate

        // totalCount block
        if (listParams.minCount || listParams.maxCount)
            propertiesQuery.totalCount = {}

        if (listParams.minCount)
            propertiesQuery.totalCount.$gte = listParams.minCount
       
        if (listParams.maxCount)
            propertiesQuery.totalCount.$lt = listParams.maxCount

        return await this.model.aggregate([
            {
                $project: {
                    key: 1,
                    createdAt: 1,
                    counts: 1,
                    totalCount: {
                        $sum: '$counts'
                    }
                }
            },
            { $match: propertiesQuery }
        ]).limit(100)
    }

}
