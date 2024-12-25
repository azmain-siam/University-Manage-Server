import { Request, Response } from 'express';
import { academicDepartmentService } from './academicDepartment.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const academicDepartment =
      await academicDepartmentService.createAcademicDepartmentIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic Department created successfully',
      data: academicDepartment,
    });
  },
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const academicDepartments =
      await academicDepartmentService.getAllAcademicDepartmentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Departments fetched successfully',
      data: academicDepartments,
    });
  },
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const academicDepartment =
      await academicDepartmentService.getSingleAcademicDepartmentFromDB(
        departmentId,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department fetched successfully',
      data: academicDepartment,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const academicDepartment =
      await academicDepartmentService.updateAcademicDepartmentInDB(
        departmentId,
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully',
      data: academicDepartment,
    });
  },
);

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
