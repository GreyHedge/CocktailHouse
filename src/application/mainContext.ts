import {createContext} from 'react';
import {IDependencies} from './initDependencies';

export type IMainContext = Omit<IDependencies, 'queryClient'>;

export const MainContext = createContext<IMainContext>({} as IMainContext);
