import {FieldValidator} from 'final-form';

type FieldValue = string;

export const required: FieldValidator<FieldValue> = value => {
  if (!value) {
    return 'required field';
  }

  return void 0;
};

export const number: FieldValidator<FieldValue> = value =>
  isNaN(+value) ? 'field must be a numeric value' : undefined;

export const composeValidators =
  (...validators: FieldValidator<FieldValue>[]): FieldValidator<FieldValue> =>
  (value, allValues, meta) =>
    validators.reduce(
      (error: string | undefined, validator: FieldValidator<FieldValue>) =>
        error || validator(value, allValues, meta),
      void 0
    );
