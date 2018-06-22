import { BehaviorBootstrap } from '@appaya/behavior';
import { FormAjaxBehavior } from '@appaya/behavior/list';
import { MyFormValidateBehavior } from './behaviors/my-form-validate.behavior';


BehaviorBootstrap([
	FormAjaxBehavior, MyFormValidateBehavior
]);