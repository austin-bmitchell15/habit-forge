/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgressiveHabitCreateFormInputValues = {
    name?: string;
    type?: string;
    goal?: number;
    unit?: string;
    currentProgress?: number;
    lastCompleted?: string;
    streak?: number;
};
export declare type ProgressiveHabitCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    goal?: ValidationFunction<number>;
    unit?: ValidationFunction<string>;
    currentProgress?: ValidationFunction<number>;
    lastCompleted?: ValidationFunction<string>;
    streak?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressiveHabitCreateFormOverridesProps = {
    ProgressiveHabitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    goal?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    currentProgress?: PrimitiveOverrideProps<TextFieldProps>;
    lastCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    streak?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgressiveHabitCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgressiveHabitCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgressiveHabitCreateFormInputValues) => ProgressiveHabitCreateFormInputValues;
    onSuccess?: (fields: ProgressiveHabitCreateFormInputValues) => void;
    onError?: (fields: ProgressiveHabitCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgressiveHabitCreateFormInputValues) => ProgressiveHabitCreateFormInputValues;
    onValidate?: ProgressiveHabitCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgressiveHabitCreateForm(props: ProgressiveHabitCreateFormProps): React.ReactElement;
