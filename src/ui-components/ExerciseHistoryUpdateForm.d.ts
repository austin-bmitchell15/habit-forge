/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
import { ExerciseHistory } from '../API.ts';
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
export declare type ExerciseHistoryUpdateFormInputValues = {
  sets?: string;
  reps?: string;
  weight?: string;
};
export declare type ExerciseHistoryUpdateFormValidationValues = {
  sets?: ValidationFunction<string>;
  reps?: ValidationFunction<string>;
  weight?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseHistoryUpdateFormOverridesProps = {
  ExerciseHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  sets?: PrimitiveOverrideProps<TextFieldProps>;
  reps?: PrimitiveOverrideProps<TextFieldProps>;
  weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseHistoryUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ExerciseHistoryUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    exerciseHistory?: ExerciseHistory;
    onSubmit?: (
      fields: ExerciseHistoryUpdateFormInputValues,
    ) => ExerciseHistoryUpdateFormInputValues;
    onSuccess?: (fields: ExerciseHistoryUpdateFormInputValues) => void;
    onError?: (
      fields: ExerciseHistoryUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ExerciseHistoryUpdateFormInputValues,
    ) => ExerciseHistoryUpdateFormInputValues;
    onValidate?: ExerciseHistoryUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExerciseHistoryUpdateForm(
  props: ExerciseHistoryUpdateFormProps,
): React.ReactElement;
