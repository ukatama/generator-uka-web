import { connectLogger, getLogger, levels } from 'log4js';

export const accessLogger = getLogger('access');
export const errorLogger = getLogger('error');
export const systemLogger = getLogger('system');

export const expressLogger = connectLogger(accessLogger, { level: levels.INFO });
