/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  GridProps,
  SelectFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react';
import { ProgressiveHabit } from '../API.ts';
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
export declare type ProgressiveHabitUpdateFormInputValues = {
  name?: string;
  type?: string;
  goal?: number;
  unit?: string;
  currentProgress?: number;
  lastCompleted?: string;
  streak?: number;
};
export declare type ProgressiveHabitUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
  goal?: ValidationFunction<number>;
  unit?: ValidationFunction<string>;
  currentProgress?: ValidationFunction<number>;
  lastCompleted?: ValidationFunction<string>;
  streak?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ProgressiveHabitUpdateFormOverridesProps = {
  ProgressiveHabitUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<SelectFieldProps>;
  goal?: PrimitiveOverrideProps<TextFieldProps>;
  unit?: PrimitiveOverrideProps<TextFieldProps>;
  currentProgress?: PrimitiveOverrideProps<TextFieldProps>;
  lastCompleted?: PrimitiveOverrideProps<TextFieldProps>;
  streak?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressiveHabitUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ProgressiveHabitUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    progressiveHabit?: ProgressiveHabit;
    onSubmit?: (
      fields: ProgressiveHabitUpdateFormInputValues,
    ) => ProgressiveHabitUpdateFormInputValues;
    onSuccess?: (fields: ProgressiveHabitUpdateFormInputValues) => void;
    onError?: (
      fields: ProgressiveHabitUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ProgressiveHabitUpdateFormInputValues,
    ) => ProgressiveHabitUpdateFormInputValues;
    onValidate?: ProgressiveHabitUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ProgressiveHabitUpdateForm(
  props: ProgressiveHabitUpdateFormProps,
): React.ReactElement;
