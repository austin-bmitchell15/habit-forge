/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
import { Exercise } from '../API.ts';
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
export declare type ExerciseUpdateFormInputValues = {
  name?: string;
  primaryTarget?: string;
  equipment?: string;
  gifUrl?: string;
  instructions?: string[];
};
export declare type ExerciseUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  primaryTarget?: ValidationFunction<string>;
  equipment?: ValidationFunction<string>;
  gifUrl?: ValidationFunction<string>;
  instructions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseUpdateFormOverridesProps = {
  ExerciseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  primaryTarget?: PrimitiveOverrideProps<TextFieldProps>;
  equipment?: PrimitiveOverrideProps<TextFieldProps>;
  gifUrl?: PrimitiveOverrideProps<TextFieldProps>;
  instructions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ExerciseUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    exercise?: Exercise;
    onSubmit?: (
      fields: ExerciseUpdateFormInputValues,
    ) => ExerciseUpdateFormInputValues;
    onSuccess?: (fields: ExerciseUpdateFormInputValues) => void;
    onError?: (
      fields: ExerciseUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ExerciseUpdateFormInputValues,
    ) => ExerciseUpdateFormInputValues;
    onValidate?: ExerciseUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExerciseUpdateForm(
  props: ExerciseUpdateFormProps,
): React.ReactElement;
