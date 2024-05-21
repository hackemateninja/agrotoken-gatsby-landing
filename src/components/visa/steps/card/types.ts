import { ReactElement } from 'react';
import {IStep} from "@comp/visa/steps/types";


export interface ICardStepProps extends IStep {
	element?: ReactElement;
}
