import { Provider } from 'react-redux';
import therapistStore, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default function TherapistReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={therapistStore}>
    <PersistGate loading={null} persistor={persistor}>
          {children}
    </PersistGate>  
    </Provider>;
}