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
export declare type ActivityHabitCreateFormInputValues = {
  name?: string;
  type?: string;
  sessionsPerWeek?: number;
  completedSessions?: number;
};
export declare type ActivityHabitCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
  sessionsPerWeek?: ValidationFunction<number>;
  completedSessions?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ActivityHabitCreateFormOverridesProps = {
  ActivityHabitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<SelectFieldProps>;
  sessionsPerWeek?: PrimitiveOverrideProps<TextFieldProps>;
  completedSessions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityHabitCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ActivityHabitCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ActivityHabitCreateFormInputValues,
    ) => ActivityHabitCreateFormInputValues;
    onSuccess?: (fields: ActivityHabitCreateFormInputValues) => void;
    onError?: (
      fields: ActivityHabitCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ActivityHabitCreateFormInputValues,
    ) => ActivityHabitCreateFormInputValues;
    onValidate?: ActivityHabitCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ActivityHabitCreateForm(
  props: ActivityHabitCreateFormProps,
): React.ReactElement;
