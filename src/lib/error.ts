import {FieldMetaState} from 'react-final-form';

export const getError = <FieldValue>(meta: FieldMetaState<FieldValue>): string | null => {
  if (!meta.touched || (!meta.error && !meta.submitError)) {
    return null;
  }

  return meta.error || meta.submitError;
};
