/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ActivityHabit } from "../API.ts";
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
export declare type ActivityHabitUpdateFormInputValues = {
    name?: string;
    type?: string;
    sessionsPerWeek?: number;
    completedSessions?: number;
    lastCompleted?: string;
    streak?: number;
};
export declare type ActivityHabitUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    sessionsPerWeek?: ValidationFunction<number>;
    completedSessions?: ValidationFunction<number>;
    lastCompleted?: ValidationFunction<string>;
    streak?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityHabitUpdateFormOverridesProps = {
    ActivityHabitUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    sessionsPerWeek?: PrimitiveOverrideProps<TextFieldProps>;
    completedSessions?: PrimitiveOverrideProps<TextFieldProps>;
    lastCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    streak?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityHabitUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivityHabitUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityHabit?: ActivityHabit;
    onSubmit?: (fields: ActivityHabitUpdateFormInputValues) => ActivityHabitUpdateFormInputValues;
    onSuccess?: (fields: ActivityHabitUpdateFormInputValues) => void;
    onError?: (fields: ActivityHabitUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityHabitUpdateFormInputValues) => ActivityHabitUpdateFormInputValues;
    onValidate?: ActivityHabitUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityHabitUpdateForm(props: ActivityHabitUpdateFormProps): React.ReactElement;
