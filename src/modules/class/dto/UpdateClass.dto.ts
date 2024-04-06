import { PartialType } from "@nestjs/mapped-types";
import { CreateClassDTO } from "./CreateClass.dto";

export class UpdateClassDTO extends PartialType(CreateClassDTO) {}