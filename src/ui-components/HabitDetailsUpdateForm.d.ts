/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from '@aws-amplify/ui-react';
import { HabitDetails } from '../API.ts';
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
export declare type HabitDetailsUpdateFormInputValues = {
  goal?: number;
  unit?: string;
  currentProgress?: number;
  sessionsPerWeek?: number;
  completedSessions?: number;
  completed?: boolean;
};
export declare type HabitDetailsUpdateFormValidationValues = {
  goal?: ValidationFunction<number>;
  unit?: ValidationFunction<string>;
  currentProgress?: ValidationFunction<number>;
  sessionsPerWeek?: ValidationFunction<number>;
  completedSessions?: ValidationFunction<number>;
  completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type HabitDetailsUpdateFormOverridesProps = {
  HabitDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  goal?: PrimitiveOverrideProps<TextFieldProps>;
  unit?: PrimitiveOverrideProps<TextFieldProps>;
  currentProgress?: PrimitiveOverrideProps<TextFieldProps>;
  sessionsPerWeek?: PrimitiveOverrideProps<TextFieldProps>;
  completedSessions?: PrimitiveOverrideProps<TextFieldProps>;
  completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type HabitDetailsUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: HabitDetailsUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    habitDetails?: HabitDetails;
    onSubmit?: (
      fields: HabitDetailsUpdateFormInputValues,
    ) => HabitDetailsUpdateFormInputValues;
    onSuccess?: (fields: HabitDetailsUpdateFormInputValues) => void;
    onError?: (
      fields: HabitDetailsUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: HabitDetailsUpdateFormInputValues,
    ) => HabitDetailsUpdateFormInputValues;
    onValidate?: HabitDetailsUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function HabitDetailsUpdateForm(
  props: HabitDetailsUpdateFormProps,
): React.ReactElement;
