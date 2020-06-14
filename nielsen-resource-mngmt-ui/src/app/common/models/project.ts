import { ProjectType} from './project-type';
import { ProjectStatus}  from './project-status';

/** This is the project model that would be passed potentially between FE and BE */
/**
 * @author alanjoy
 */


export class Project {

projectName? :string;

projectid?: string; 

projectCodename? : string;

startDate? :Date;

endDate? :Date;

noOfResources? :number;

projectType? : ProjectType;

projectLead? : string;

projectManager? : string;

nextDeploymentDate? : Date;

isProjectRunning? :Boolean;

projectStatus? : ProjectStatus;

isCriticalProject? : Boolean;

availableVacancies? : number;

 }