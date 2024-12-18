import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterNames,
  months,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: academicSemesterNames, required: true },
    year: { type: Date, required: true },
    code: { type: String, enum: academicSemesterCodes, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  {
    timestamps: true,
  },
);

const AcademicSemesterModel = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);

export default AcademicSemesterModel;
