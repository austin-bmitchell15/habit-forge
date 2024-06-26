/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
import { WorkoutTemplate } from '../API.ts';
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
export declare type WorkoutTemplateUpdateFormInputValues = {
  name?: string;
};
export declare type WorkoutTemplateUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutTemplateUpdateFormOverridesProps = {
  WorkoutTemplateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutTemplateUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: WorkoutTemplateUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    workoutTemplate?: WorkoutTemplate;
    onSubmit?: (
      fields: WorkoutTemplateUpdateFormInputValues,
    ) => WorkoutTemplateUpdateFormInputValues;
    onSuccess?: (fields: WorkoutTemplateUpdateFormInputValues) => void;
    onError?: (
      fields: WorkoutTemplateUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: WorkoutTemplateUpdateFormInputValues,
    ) => WorkoutTemplateUpdateFormInputValues;
    onValidate?: WorkoutTemplateUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function WorkoutTemplateUpdateForm(
  props: WorkoutTemplateUpdateFormProps,
): React.ReactElement;
