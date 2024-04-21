/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExerciseHistoryCreateFormInputValues = {
  sets?: string;
  reps?: string;
  weight?: string;
};
export declare type ExerciseHistoryCreateFormValidationValues = {
  sets?: ValidationFunction<string>;
  reps?: ValidationFunction<string>;
  weight?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseHistoryCreateFormOverridesProps = {
  ExerciseHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  sets?: PrimitiveOverrideProps<TextFieldProps>;
  reps?: PrimitiveOverrideProps<TextFieldProps>;
  weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseHistoryCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ExerciseHistoryCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ExerciseHistoryCreateFormInputValues,
    ) => ExerciseHistoryCreateFormInputValues;
    onSuccess?: (fields: ExerciseHistoryCreateFormInputValues) => void;
    onError?: (
      fields: ExerciseHistoryCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ExerciseHistoryCreateFormInputValues,
    ) => ExerciseHistoryCreateFormInputValues;
    onValidate?: ExerciseHistoryCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExerciseHistoryCreateForm(
  props: ExerciseHistoryCreateFormProps,
): React.ReactElement;
