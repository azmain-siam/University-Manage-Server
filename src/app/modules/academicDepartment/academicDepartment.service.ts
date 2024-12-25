import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);

  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFacultyId');

  return result;
};

const getSingleAcademicDepartmentFromDB = async (
  academicDepartmentId: string,
) => {
  const result =
    await AcademicDepartment.findById(academicDepartmentId).populate(
      'academicFacultyId',
    );

  return result;
};

const updateAcademicDepartmentInDB = async (
  academicDepartmentId: string,
  payload: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(
    academicDepartmentId,
    payload,
    { new: true },
  );

  return result;
};

export const academicDepartmentService = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentInDB,
};
