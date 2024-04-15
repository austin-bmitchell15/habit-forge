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
export declare type HabitCreateFormInputValues = {
  name?: string;
  type?: string;
};
export declare type HabitCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type HabitCreateFormOverridesProps = {
  HabitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type HabitCreateFormProps = React.PropsWithChildren<
  {
    overrides?: HabitCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: HabitCreateFormInputValues,
    ) => HabitCreateFormInputValues;
    onSuccess?: (fields: HabitCreateFormInputValues) => void;
    onError?: (
      fields: HabitCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: HabitCreateFormInputValues,
    ) => HabitCreateFormInputValues;
    onValidate?: HabitCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function HabitCreateForm(
  props: HabitCreateFormProps,
): React.ReactElement;
