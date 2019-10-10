import { ExportProps } from '../types';
import { propsAssign } from '../helpers/propsAssign';

export const exportMixin = propsAssign<ExportProps>(['exportSettings', 'exportAsync']);
