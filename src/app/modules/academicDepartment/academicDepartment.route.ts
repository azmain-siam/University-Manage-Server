import { Router } from 'express';
import { academicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = Router();

router.post(
  '/',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartment,
);
router.get('/', academicDepartmentController.getAllAcademicDepartments);
router.get(
  '/:departmentId',
  academicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoute = router;
