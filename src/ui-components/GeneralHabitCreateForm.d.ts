/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import {
  GridProps,
  SelectFieldProps,
  SwitchFieldProps,
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
export declare type GeneralHabitCreateFormInputValues = {
  name?: string;
  type?: string;
  completed?: boolean;
};
export declare type GeneralHabitCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
  completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type GeneralHabitCreateFormOverridesProps = {
  GeneralHabitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<SelectFieldProps>;
  completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GeneralHabitCreateFormProps = React.PropsWithChildren<
  {
    overrides?: GeneralHabitCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: GeneralHabitCreateFormInputValues,
    ) => GeneralHabitCreateFormInputValues;
    onSuccess?: (fields: GeneralHabitCreateFormInputValues) => void;
    onError?: (
      fields: GeneralHabitCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: GeneralHabitCreateFormInputValues,
    ) => GeneralHabitCreateFormInputValues;
    onValidate?: GeneralHabitCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function GeneralHabitCreateForm(
  props: GeneralHabitCreateFormProps,
): React.ReactElement;
